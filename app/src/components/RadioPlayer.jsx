import React from 'react';
import {HudPanel} from './core/HudPanel.jsx';
import {IconButton} from './core/IconButton.jsx';
import {Icon} from './core/Icon.jsx';
import './RadioPlayer.css';

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

export function RadioPlayer({tracks}){
  const [playing,setPlaying]=React.useState(false);
  const [index,setIndex]=React.useState(0);
  const [title,setTitle]=React.useState('');
  const [time,setTime]=React.useState(0);
  const [duration,setDuration]=React.useState(0);
  const [minimized,setMinimized]=React.useState(true);
  const [muted,setMuted]=React.useState(false);
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
    <div className="radio-player">
      <div id="yt-radio-frame" className="radio-player-frame"/>
      {minimized?(
        <IconButton name="music" label="Rádio" base={ICONS} size={44} onClick={()=>setMinimized(false)}/>
      ):(
        <HudPanel label="Rádio" right={`${index+1}/${tracks.length}`} className="radio-panel">
          <div className="radio-body">
            <div className="radio-title-row">
              <span className="radio-title">{title||'—'}</span>
              <div className="radio-title-actions">
                <button onClick={close} aria-label="Fechar" className="radio-chrome-btn radio-chrome-btn--close">✕</button>
              </div>
            </div>
            <div ref={barRef} onClick={seek} className="radio-progress">
              <div className="radio-progress-fill" style={{'--radio-pct':`${pct}%`}}/>
            </div>
            <div className="radio-transport-row">
              <span className="ds-hud">{formatTime(time)} / {formatTime(duration)}</span>
              <div className="radio-transport-buttons">
                <button onClick={()=>go(-1)} disabled={!multi} aria-label="Anterior" className="radio-transport-btn">⏮</button>
                <button onClick={toggle} aria-label={playing?'Pausar':'Tocar'} className="radio-transport-btn radio-transport-btn--play">{playing?'⏸':'▶'}</button>
                <button onClick={()=>go(1)} disabled={!multi} aria-label="Próxima" className="radio-transport-btn">⏭</button>
                <button onClick={toggleMute} aria-label={muted?'Ativar som':'Mudo'} className="radio-transport-btn">
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
