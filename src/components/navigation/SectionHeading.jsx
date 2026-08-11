import React from 'react';

export function SectionHeading({index,kicker,title,lead,align='left',style,...rest}){
  return React.createElement('header',{style:{display:'grid',gap:'var(--s-3)',
    textAlign:align,justifyItems:align==='center'?'center':'start',
    maxWidth:align==='center'?'var(--measure)':'none',margin:align==='center'?'0 auto':0,...style},...rest},
    React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'10px',
      fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',
      textTransform:'uppercase',color:'var(--accent)'}},
      index?React.createElement('span',{style:{color:'var(--text-faint)'}},index):null,
      React.createElement('span',null,kicker),
      React.createElement('span',{style:{width:36,height:1,background:'var(--border-strong)'}})),
    React.createElement('h2',{style:{fontFamily:'var(--font-display)',textTransform:'uppercase',
      fontSize:'var(--fs-display-md)',lineHeight:'var(--lh-display-md)',color:'var(--text-title)'}},title),
    lead?React.createElement('p',{style:{fontSize:'var(--fs-body)',color:'var(--text-muted)',
      maxWidth:'var(--measure)'}},lead):null);
}
