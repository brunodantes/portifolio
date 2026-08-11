import React from 'react';
import {Card} from '../components/core/Card.jsx';
import {Badge} from '../components/core/Badge.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';

const A_ICONS='/assets/icons';

export function About({data}){
  const t=data.ui.about;
  return (
    <section style={{padding:'var(--section-y) var(--page-gutter)'}}>
      <div style={{maxWidth:'var(--page-max)',margin:'0 auto',display:'grid',gap:'var(--s-12)'}}>
        <SectionHeading index="01" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div style={{display:'grid',gap:'var(--s-5)'}}>
          {data.experience.map(job=>(
            <Card key={job.org} tone={job.current?'raised':'panel'} bevel={job.current} style={{display:'grid',gap:'var(--s-3)'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--s-4)',flexWrap:'wrap'}}>
                <span style={{fontFamily:'var(--font-display)',textTransform:'uppercase',fontSize:15,color:'var(--text-title)'}}>{job.org}</span>
                {job.current?<Badge tone="ok">{t.current}</Badge>:<span className="ds-hud">{job.period}</span>}
              </div>
              {job.role?<div className="ds-hud" style={{color:'var(--accent)'}}>{job.role}{job.current?' · '+job.period:''}</div>:null}
              <ul style={{margin:0,paddingLeft:0,listStyle:'none',display:'grid',gap:'var(--s-2)'}}>
                {job.bullets.map((b,i)=>(
                  <li key={i} style={{display:'flex',gap:10,fontSize:'var(--fs-body-sm)',color:'var(--text-body)'}}>
                    <span style={{color:'var(--accent)',fontFamily:'var(--font-mono)'}}>▸</span>{b}
                  </li>))}
              </ul>
              {job.stack?.length?(
                <div style={{display:'flex',gap:'var(--s-2)',flexWrap:'wrap',paddingTop:'var(--s-2)',borderTop:'1px solid var(--border-subtle)'}}>
                  {job.stack.map(([ic,label])=><Tag key={label} icon={ic} base={A_ICONS}>{label}</Tag>)}
                </div>
              ):null}
            </Card>))}
        </div>
        <div style={{maxWidth:480}}>
          <HudPanel label={t.education} right="FATEC">
            <div style={{display:'grid',gap:'var(--s-4)'}}>
              {data.education.map(([course,where])=>(
                <div key={course} style={{display:'grid',gap:4}}>
                  <span style={{fontSize:'var(--fs-body-sm)',color:'var(--text-title)'}}>{course}</span>
                  <span className="ds-hud">{where}</span>
                </div>))}
              <div style={{display:'flex',gap:8,alignItems:'center',paddingTop:'var(--s-2)',borderTop:'1px solid var(--border-subtle)'}}>
                <Icon name="shield" base={A_ICONS} size={14} color="var(--signal)"/>
                <span className="ds-hud">{t.english}</span>
              </div>
            </div>
          </HudPanel>
        </div>
      </div>
    </section>
  );
}
