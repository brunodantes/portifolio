import {Card} from '../components/core/Card.jsx';
import {Badge} from '../components/core/Badge.jsx';
import {Tag} from '../components/core/Tag.jsx';
import {HudPanel} from '../components/core/HudPanel.jsx';
import {Icon} from '../components/core/Icon.jsx';
import {SectionHeading} from '../components/navigation/SectionHeading.jsx';
import './About.css';

const A_ICONS='/assets/icons';

export function About({data}){
  const t=data.ui.about;
  return (
    <section className="about-section">
      <div className="about-inner">
        <SectionHeading index="01" kicker={t.kicker} title={t.title} lead={t.lead}/>
        <div className="about-jobs">
          {data.experience.map(job=>(
            <Card key={job.org} tone={job.current?'raised':'panel'} bevel={job.current} className="about-job-card">
              <div className="about-job-header">
                <span className="about-job-org">{job.org}</span>
                {job.current?<Badge tone="ok">{job.period}</Badge>:<span className="ds-hud">{job.period}</span>}
              </div>
              {job.role?<div className="ds-hud about-job-role">{job.role}</div>:null}
              <ul className="about-job-bullets">
                {job.bullets.map((b,i)=>(
                  <li key={i} className="about-job-bullet">
                    <span className="about-job-bullet-marker">▸</span>{b}
                  </li>
                ))}
              </ul>
              {job.stack?.length?(
                <div className="about-job-stack">
                  {job.stack.map(([ic,label])=><Tag key={label} icon={ic} base={A_ICONS}>{label}</Tag>)}
                </div>
              ):null}
            </Card>
          ))}
        </div>
        <div className="about-edu-wrap">
          <HudPanel label={t.education} right="FATEC">
            <div className="about-edu-list">
              {data.education.map(([course,where])=>(
                <div key={course} className="about-edu-item">
                  <span className="about-edu-course">{course}</span>
                  <span className="ds-hud">{where}</span>
                </div>
              ))}
              <div className="about-edu-lang">
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
