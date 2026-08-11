import React from 'react';
import {Button} from '../components/core/Button.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {StatReadout} from '../components/data/StatReadout.jsx';
import {TypedLines} from '../components/motion/TypedLines.jsx';

const ICONS='/assets/icons';

const PLAYER_STACK=[
  ['csharp','C#'],['dotnet','.NET'],['react','React'],['nextdotjs','Next.js'],
  ['typescript','TypeScript'],['angular','Angular'],['amazonaws','AWS'],
  ['docker','Docker'],['kubernetes','Kubernetes'],['postgresql','PostgreSQL'],
  ['microsoftsqlserver','SQL Server'],['oracle','Oracle'],['mongodb','MongoDB'],
  ['rabbitmq','RabbitMQ'],['datadog','Datadog'],['opensearch','OpenSearch']
];

function useParallax(){
  const [p,setP]=React.useState({x:0,y:0});
  React.useEffect(()=>{
    const m=e=>setP({x:(e.clientX/window.innerWidth-0.5)*2,y:(e.clientY/window.innerHeight-0.5)*2});
    window.addEventListener('pointermove',m,{passive:true});
    return ()=>window.removeEventListener('pointermove',m);
  },[]);
  return p;
}

export function Hero({data,onNav}){
  const p=useParallax();
  const near=v=>`translate3d(${p.x*v}px,${p.y*v}px,0)`;
  const t=data.ui.hero;
  return (
    <section style={{position:'relative',overflow:'hidden',padding:'92px var(--page-gutter) 72px',borderBottom:'1px solid var(--border-subtle)'}}>
      <div aria-hidden style={{position:'absolute',inset:'-60px',backgroundImage:'var(--grid-line)',backgroundSize:'var(--grid-size) var(--grid-size)',transform:near(-8),maskImage:'radial-gradient(120% 80% at 50% 10%,#000,transparent 72%)',WebkitMaskImage:'radial-gradient(120% 80% at 50% 10%,#000,transparent 72%)'}}/>
      <div aria-hidden style={{position:'absolute',inset:0,background:'var(--scanlines)',opacity:.5,pointerEvents:'none'}}/>
      <div style={{position:'relative',zIndex:2,maxWidth:'var(--page-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:'var(--s-16)',alignItems:'center'}}>
        <div style={{display:'grid',gap:'var(--s-6)',transform:near(10),padding:'var(--s-8)',
          background:'linear-gradient(180deg,color-mix(in oklab,var(--carbon-800) 88%,transparent),color-mix(in oklab,var(--carbon-800) 74%,transparent))',
          border:'1px solid var(--border-subtle)',borderRadius:'var(--r-md)',
          backdropFilter:'blur(6px)',WebkitBackdropFilter:'blur(6px)'}}>
          <div className="ds-hud">{data.player.level}</div>
          <div style={{display:'flex',alignItems:'baseline',gap:10,flexWrap:'wrap'}}>
            <span style={{fontSize:'var(--fs-body-lg)',color:'var(--text-title)',fontWeight:'var(--fw-semibold)'}}>{data.player.fullName}</span>
            <span className="ds-hud" style={{color:'var(--text-muted)'}}>{data.player.role}</span>
          </div>
          <h1 style={{fontFamily:'var(--font-display)',textTransform:'uppercase',fontSize:'var(--fs-display-md)',lineHeight:'var(--lh-display-md)',letterSpacing:'var(--ls-display-md)',color:'var(--accent)',textShadow:'var(--glow-text-accent)',margin:0}}>
            {t.headline}
          </h1>
          <div className="ds-hud" style={{display:'flex',alignItems:'center',gap:8}}>
            <span style={{color:'var(--text-faint)'}}>{t.focusKicker}</span>
            <span style={{color:'var(--accent)'}}><TypedLines lines={data.builds}/></span>
          </div>
          <p style={{fontSize:'var(--fs-body-lg)',color:'var(--text-muted)',maxWidth:'52ch'}}>{data.player.resumo}</p>
          <div style={{display:'flex',gap:'var(--s-3)',flexWrap:'wrap',alignItems:'center'}}>
            <Button variant="primary" size="lg" onClick={()=>onNav('trajetoria')}>{t.ctaPrimary}<Icon name="chevron-right" base={ICONS} size={16}/></Button>
            <Button variant="ghost" size="lg" onClick={()=>onNav('contato')}><Icon name="mail" base={ICONS} size={16}/>{t.ctaSecondary}</Button>
          </div>
          <div style={{display:'flex',gap:'var(--s-4)',flexWrap:'wrap',paddingTop:'var(--s-2)'}}>
            <span className="ds-hud" style={{display:'inline-flex',gap:8,alignItems:'center'}}><Icon name="map-pin" base={ICONS} size={14}/>{data.player.city}</span>
            <span className="ds-hud" style={{display:'inline-flex',gap:8,alignItems:'center'}}><Icon name="git-branch" base={ICONS} size={14}/>{data.player.github}</span>
          </div>
        </div>
        <div style={{transform:near(-16)}}>
          <HudPanel label="Player / Stats" right={data.player.level} glow>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--s-6)'}}>
              {data.stats.map(s=><StatReadout key={s.label} {...s}/>)}
            </div>
            <div style={{marginTop:'var(--s-6)',paddingTop:'var(--s-5)',borderTop:'1px solid var(--border-subtle)',display:'flex',gap:'var(--s-2)',flexWrap:'wrap'}}>
              {PLAYER_STACK.map(([ic,label])=><Tag key={label} icon={ic} base={ICONS}>{label}</Tag>)}
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
}
