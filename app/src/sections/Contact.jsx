import {Card} from '../components/core/Card.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {Switch} from '../components/forms/Switch.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';
import './Contact.css';

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
    <section className="contact-section">
      <div className="contact-inner">
        <SectionHeading index="03" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div className="contact-grid">
          {channels.map(c=>(
            <a key={c.label} href={c.href} target={c.external?'_blank':undefined} rel={c.external?'noopener noreferrer':undefined} className="contact-channel-link">
              <Card interactive className="contact-channel-card">
                <div className="contact-channel-header">
                  <Icon name={c.icon} base={C_ICONS} size={18} color="var(--accent)"/>
                  <span className="ds-hud contact-channel-label">{c.label}</span>
                </div>
                <span className="contact-channel-value">{c.value}</span>
                <span className="contact-channel-hint">{c.hint}</span>
              </Card>
            </a>
          ))}
        </div>
        <div className="contact-motion-row">
          <Switch checked={motion} onChange={onMotion} label={t.motion}/>
        </div>
      </div>
    </section>
  );
}

export function Footer({data}){
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">{data.player.name}</span>
        <span className="ds-hud">{data.player.city} · {data.player.linkedin}</span>
      </div>
    </footer>
  );
}
