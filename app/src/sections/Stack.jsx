import React from 'react';
import {Card} from '../components/core/Card.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {XpBar} from '../components/data/XpBar.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';
import {Marquee} from '../components/motion/Marquee.jsx';
import './Stack.css';

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
    <section className="stack-section">
      <div className="stack-inner" ref={ref}>
        <SectionHeading index="02" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div className="stack-grid">
          <HudPanel label="Character sheet" right={seen?'sync':'idle'}>
            <div className="stack-skills">
              {data.skills.map(s=><XpBar key={s.label} {...s} value={seen?s.value:0}/>)}
            </div>
          </HudPanel>
          <div className="stack-groups">
            {data.stack.map(g=>(
              <Card key={g.group} tone="raised" className="stack-group-card">
                <div className="stack-group-header">
                  <Icon name={g.icon} base={S_ICONS} size={16} color="var(--accent)"/>
                  <span className="ds-hud stack-group-title">{g.group}</span>
                </div>
                <div className="stack-group-items">{g.items.map(i=><Tag key={i}>{i}</Tag>)}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StackMarquee(){
  return <Marquee items={['C# / .NET','React','Next.js','AWS','Kubernetes','Docker','RabbitMQ','PostgreSQL','MongoDB','Datadog','OpenSearch','Event-Driven']}/>;
}
