import React from 'react';
import {HudPanel} from './core/HudPanel.jsx';
import {IconButton} from './core/IconButton.jsx';
import {Icon} from './core/Icon.jsx';

const ICONS='/assets/icons';

function loadYouTubeApi(){
  if(window.YT&&window.YT.Player)return Promise.resolve();
  if(!window.__ytApiPromise){
    window.__ytApiPromise=new Promise(resolve=>{
      const prev=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{prev&&prev();resolve();};
      const s=document.createElement('script');
      s.src='https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    });
  }
  return window.__ytApiPromise;
}

function formatTime(s){
  if(!s||!isFinite(s))return '00:00';
  const m=Math.floor(s/60),sec=Math.floor(s%60);
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function transportBtnStyle(disabled){
  return {width:30,height:30,display:'inline-flex',alignItems:'center',justifyContent:'center',
    background:'transparent',border:'var(--border-w) solid var(--border-subtle)',borderRadius:'var(--r-sm)',
    color:'var(--text-body)',fontSize:14,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,
    transition:'all var(--dur-fast) var(--ease-snap)'};
}

const chromeBtnStyle={width:22,height:22,display:'inline-flex',alignItems:'center',justifyContent:'center',
  background:'transparent',border:'var(--border-w) solid var(--border-subtle)',borderRadius:'var(--r-xs)',
  color:'var(--text-body)',cursor:'pointer',fontSize:13,lineHeight:1,padding:0,
  transition:'all var(--dur-fast) var(--ease-snap)'};

export function RadioPlayer({tracks}){
  const [playing,setPlaying]=React.useState(false);
  const [index,setIndex]=React.useState(0);
  const [title,setTitle]=React.useState('');
  const [time,setTime]=React.useState(0);
  const [duration,setDuration]=React.useState(0);
  const [minimized,setMinimized]=React.useState(true);
  const [muted,setMuted]=React.useState(true);
  const playerRef=React.useRef(null);
  const barRef=React.useRef(null);
  const indexRef=React.useRef(0);

  const go=React.useCallback(delta=>{
    const n=(indexRef.current+delta+tracks.length)%tracks.length;
    indexRef.current=n;
    setIndex(n);setTime(0);setTitle('');
    playerRef.current?.loadVideoById(tracks[n].id);
  },[tracks]);

  React.useEffect(()=>{
    let cancelled=false;
    loadYouTubeApi().then(()=>{
      if(cancelled)return;
      playerRef.current=new window.YT.Player('yt-radio-frame',{
        videoId:tracks[0].id,
        playerVars:{controls:0,disablekb:1,modestbranding:1,rel:0},
        events:{
          onReady:()=>{
            setDuration(playerRef.current.getDuration());
            setTitle(playerRef.current.getVideoData()?.title||'');
            playerRef.current.mute();
            playerRef.current.playVideo();
          },
          onStateChange:e=>{
            if(e.data===window.YT.PlayerState.PLAYING){
              setPlaying(true);
              setDuration(playerRef.current.getDuration());
              setTitle(playerRef.current.getVideoData()?.title||'');
            }else if(e.data===window.YT.PlayerState.PAUSED){
              setPlaying(false);
            }else if(e.data===window.YT.PlayerState.ENDED){
              go(1);
            }
          }
        }
      });
    });
    return ()=>{cancelled=true;};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  React.useEffect(()=>{
    if(!playing)return;
    const t=setInterval(()=>{
      if(playerRef.current?.getCurrentTime)setTime(playerRef.current.getCurrentTime());
    },500);
    return ()=>clearInterval(t);
  },[playing]);

  React.useEffect(()=>{
    const events=['pointerdown','keydown','touchstart','wheel'];
    const onInteract=()=>{
      if(!playerRef.current)return;
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setMuted(false);
      events.forEach(ev=>window.removeEventListener(ev,onInteract));
    };
    events.forEach(ev=>window.addEventListener(ev,onInteract,{passive:true}));
    return ()=>events.forEach(ev=>window.removeEventListener(ev,onInteract));
  },[]);

  const toggle=()=>{
    if(!playerRef.current)return;
    playing?playerRef.current.pauseVideo():playerRef.current.playVideo();
  };
  const close=()=>{
    setMinimized(true);
  };
  const toggleMute=()=>{
    if(!playerRef.current)return;
    if(muted){playerRef.current.unMute();setMuted(false);}
    else{playerRef.current.mute();setMuted(true);}
  };
  const seek=e=>{
    if(!barRef.current||!duration)return;
    const r=barRef.current.getBoundingClientRect();
    const pct=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));
    playerRef.current?.seekTo(pct*duration,true);
    setTime(pct*duration);
  };

  const pct=duration?Math.min(100,(time/duration)*100):0;
  const multi=tracks.length>1;

  return (
    <div style={{position:'fixed',left:24,bottom:24,zIndex:70}}>
      <div id="yt-radio-frame" style={{position:'absolute',width:1,height:1,overflow:'hidden',opacity:0,pointerEvents:'none'}}/>
      {minimized?(
        <IconButton name="music" label="Rádio" base={ICONS} size={44} onClick={()=>setMinimized(false)}/>
      ):(
        <HudPanel label="Rádio" right={`${index+1}/${tracks.length}`} style={{width:280}}>
          <div style={{display:'grid',gap:'var(--s-3)',minWidth:0}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8,minWidth:0}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',color:'var(--text-body)',
                overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',flex:'1 1 auto',minWidth:0}}>{title||'—'}</span>
              <div style={{display:'flex',alignItems:'center',gap:6,flex:'0 0 auto'}}>
                <button onClick={close} aria-label="Fechar" style={{...chromeBtnStyle,color:'var(--text-title)'}}>✕</button>
              </div>
            </div>
            <div ref={barRef} onClick={seek} style={{height:6,background:'var(--surface-inset)',
              border:'var(--border-w) solid var(--border-subtle)',borderRadius:'var(--r-xs)',cursor:'pointer',overflow:'hidden'}}>
              <div style={{width:pct+'%',height:'100%',background:'var(--accent)',transition:'width .2s linear'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span className="ds-hud">{formatTime(time)} / {formatTime(duration)}</span>
              <div style={{display:'flex',gap:6}}>
                <button onClick={()=>go(-1)} disabled={!multi} aria-label="Anterior" style={transportBtnStyle(!multi)}>⏮</button>
                <button onClick={toggle} aria-label={playing?'Pausar':'Tocar'}
                  style={{...transportBtnStyle(false),borderColor:'var(--border-default)',color:'var(--accent)'}}>{playing?'⏸':'▶'}</button>
                <button onClick={()=>go(1)} disabled={!multi} aria-label="Próxima" style={transportBtnStyle(!multi)}>⏭</button>
                <button onClick={toggleMute} aria-label={muted?'Ativar som':'Mudo'} style={transportBtnStyle(false)}>
                  <Icon name={muted?'volume-x':'volume-2'} base={ICONS} size={14}/>
                </button>
              </div>
            </div>
          </div>
        </HudPanel>
      )}
    </div>
  );
}
