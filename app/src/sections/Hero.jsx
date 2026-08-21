import React from 'react';
import {Button} from '../components/core/Button.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {StatReadout} from '../components/data/StatReadout.jsx';
import {TypedLines} from '../components/motion/TypedLines.jsx';
import './Hero.css';

const ICONS='/assets/icons';

const PLAYER_STACK=[
  ['csharp','C#'],['dotnet','.NET'],['react','React'],['nextdotjs','Next.js'],
  ['typescript','TypeScript'],['angular','Angular'],['amazonaws','AWS'],
  ['docker','Docker'],['kubernetes','Kubernetes'],['postgresql','PostgreSQL'],
  ['microsoftsqlserver','SQL Server'],['oracle','Oracle'],['mongodb','MongoDB'],
  ['rabbitmq','RabbitMQ'],['datadog','Datadog'],['opensearch','OpenSearch'],
  ['claude','Claude'],['devin','Devin']
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
    <section className="hero">
      <div aria-hidden className="hero-grid-bg" style={{'--hero-parallax':near(-8)}}/>
      <div aria-hidden className="hero-scanlines"/>
      <div className="hero-inner">
        <div className="hero-card" style={{'--hero-parallax':near(10)}}>
          <div className="ds-hud">{data.player.level}</div>
          <div className="hero-name-row">
            <span className="hero-fullname">{data.player.fullName}</span>
            <span className="ds-hud hero-role">{data.player.role}</span>
          </div>
          <h1 className="hero-headline">{t.headline}</h1>
          <div className="ds-hud hero-focus">
            <span className="hero-focus-kicker">{t.focusKicker}</span>
            <span className="hero-focus-value"><TypedLines lines={data.builds}/></span>
          </div>
          <p className="hero-resumo">{data.player.resumo}</p>
          <div className="hero-ctas">
            <Button variant="primary" size="lg" onClick={()=>onNav('trajetoria')}>{t.ctaPrimary}<Icon name="chevron-right" base={ICONS} size={16}/></Button>
            <Button variant="ghost" size="lg" onClick={()=>onNav('contato')}><Icon name="mail" base={ICONS} size={16}/>{t.ctaSecondary}</Button>
          </div>
          <div className="hero-meta">
            <span className="ds-hud hero-meta-item"><Icon name="map-pin" base={ICONS} size={14}/>{data.player.city}</span>
            <span className="ds-hud hero-meta-item"><Icon name="git-branch" base={ICONS} size={14}/>{data.player.github}</span>
          </div>
        </div>
        <div className="hero-panel-wrap" style={{'--hero-parallax':near(-16)}}>
          <HudPanel label="Player / Stats" right={data.player.level} glow>
            <div className="hero-stats-grid">
              {data.stats.map(s=><StatReadout key={s.label} {...s}/>)}
            </div>
            <div className="hero-stack-row">
              {PLAYER_STACK.map(([ic,label])=><Tag key={label} icon={ic} base={ICONS}>{label}</Tag>)}
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
}
