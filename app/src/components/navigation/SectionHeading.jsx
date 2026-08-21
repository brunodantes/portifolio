import './SectionHeading.css';

export function SectionHeading({index,kicker,title,lead,align='left',className,...rest}){
  const classes=['section-heading',align==='center'?'section-heading--center':'',className].filter(Boolean).join(' ');
  return (
    <header className={classes} {...rest}>
      <div className="section-heading-kicker">
        {index?<span className="section-heading-index">{index}</span>:null}
        <span>{kicker}</span>
        <span className="section-heading-rule"/>
      </div>
      <h2 className="section-heading-title">{title}</h2>
      {lead?<p className="section-heading-lead">{lead}</p>:null}
    </header>
  );
}
