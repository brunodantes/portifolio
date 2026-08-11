import React from 'react';

export function StatReadout({value,label,unit,tone='accent',size='md',style,...rest}){
  const c=tone==='signal'?'var(--signal)':tone==='plain'?'var(--text-title)':'var(--accent)';
  const fs=size==='lg'?'var(--fs-display-lg)':size==='sm'?'var(--fs-h3)':'var(--fs-display-md)';
  return React.createElement('div',{style:{display:'grid',gap:'6px',...style},...rest},
    React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:fs,lineHeight:1,color:c,
      textShadow:tone==='plain'?'none':'var(--glow-text-accent)'}},
      value,unit?React.createElement('span',{style:{fontSize:'0.45em',marginLeft:'0.25em',color:'var(--text-muted)'}},unit):null),
    React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
      letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:'var(--text-muted)'}},label));
}
