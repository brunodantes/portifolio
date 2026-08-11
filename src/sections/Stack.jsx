import React from 'react';
import {Card} from '../components/core/Card.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {XpBar} from '../components/data/XpBar.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';
import {Marquee} from '../components/motion/Marquee.jsx';

const S_ICONS='/assets/icons';

export function Stack({data}){
  const t=data.ui.stack;
  const [seen,setSeen]=React.useState(false);
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const el=ref.current;if(!el)return;
    const check=()=>{const b=el.getBoundingClientRect();
      if(b.top<window.innerHeight*0.9&&b.bottom>0){setSeen(true);window.removeEventListener('scroll',check);return true}
      return false};
    if(check())return;
    window.addEventListener('scroll',check,{passive:true});
    const t=setTimeout(check,400);
    return ()=>{window.removeEventListener('scroll',check);clearTimeout(t)};
  },[]);
  return (
    <section style={{padding:'var(--section-y) var(--page-gutter)',background:'var(--bg-deep)',borderTop:'1px solid var(--border-subtle)',borderBottom:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:'var(--page-max)',margin:'0 auto',display:'grid',gap:'var(--s-12)'}} ref={ref}>
        <SectionHeading index="02" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--s-16)',alignItems:'start'}}>
          <HudPanel label="Character sheet" right={seen?'sync':'idle'}>
            <div style={{display:'grid',gap:'var(--s-5)'}}>
              {data.skills.map(s=><XpBar key={s.label} {...s} value={seen?s.value:0}/>)}
            </div>
          </HudPanel>
          <div style={{display:'grid',gap:'var(--gap-grid)',gridTemplateColumns:'1fr 1fr',alignContent:'start'}}>
            {data.stack.map(g=>(
              <Card key={g.group} tone="raised" style={{display:'grid',gap:'var(--s-3)',alignContent:'start'}}>
                <div style={{display:'flex',alignItems:'center',gap:9}}>
                  <Icon name={g.icon} base={S_ICONS} size={16} color="var(--accent)"/>
                  <span className="ds-hud" style={{color:'var(--text-title)'}}>{g.group}</span>
                </div>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{g.items.map(i=><Tag key={i}>{i}</Tag>)}</div>
              </Card>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StackMarquee(){
  return <Marquee items={['C# / .NET','React','Next.js','AWS','Kubernetes','Docker','RabbitMQ','PostgreSQL','MongoDB','Datadog','OpenSearch','Event-Driven']}/>;
}
