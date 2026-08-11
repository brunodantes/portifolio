import React from 'react';
import {Card} from '../components/core/Card.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {Switch} from '../components/forms/Switch.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';

const C_ICONS='/assets/icons';

export function Contact({data,motion,onMotion}){
  const t=data.ui.contact;
  const cleanPhone=data.player.phone.replace(/[^\d+]/g,'');
  const channels=[
    {icon:'external-link',label:t.linkedinLabel,hint:t.linkedinHint,value:data.player.linkedin,href:`https://${data.player.linkedin}`,external:true},
    {icon:'git-branch',label:t.githubLabel,hint:t.githubHint,value:data.player.github,href:`https://${data.player.github}`,external:true},
    {icon:'phone',label:t.phoneLabel,hint:t.phoneHint,value:data.player.phone,href:`tel:${cleanPhone}`,external:false},
    {icon:'box',label:t.resumeLabel,hint:t.resumeHint,value:'PDF',href:data.player.resumeUrl,external:true}
  ];
  return (
    <section style={{padding:'var(--section-y) var(--page-gutter)',background:'var(--bg-deep)',borderTop:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:'var(--page-max)',margin:'0 auto',display:'grid',gap:'var(--s-12)'}}>
        <SectionHeading index="03" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'var(--gap-grid)'}}>
          {channels.map(c=>(
            <a key={c.label} href={c.href} target={c.external?'_blank':undefined} rel={c.external?'noopener noreferrer':undefined}
              style={{textDecoration:'none',color:'inherit',display:'block'}}>
              <Card interactive style={{display:'grid',gap:'var(--s-3)',height:'100%'}}>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <Icon name={c.icon} base={C_ICONS} size={18} color="var(--accent)"/>
                  <span className="ds-hud" style={{color:'var(--text-title)'}}>{c.label}</span>
                </div>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono)',color:'var(--text-body)',wordBreak:'break-word'}}>{c.value}</span>
                <span style={{fontSize:'var(--fs-body-sm)',color:'var(--text-muted)'}}>{c.hint}</span>
              </Card>
            </a>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <Switch checked={motion} onChange={onMotion} label={t.motion}/>
        </div>
      </div>
    </section>
  );
}

export function Footer({data}){
  return (
    <footer style={{padding:'var(--s-8) var(--page-gutter)',borderTop:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:'var(--page-max)',margin:'0 auto',display:'flex',justifyContent:'space-between',gap:'var(--s-6)',flexWrap:'wrap',alignItems:'center'}}>
        <span style={{fontFamily:'var(--font-display)',textTransform:'uppercase',fontSize:12,color:'var(--text-title)'}}>{data.player.name}</span>
        <span className="ds-hud">{data.player.city} · {data.player.linkedin}</span>
      </div>
    </footer>
  );
}
