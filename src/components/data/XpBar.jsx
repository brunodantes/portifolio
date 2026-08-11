import React from 'react';

export function XpBar({label,value=0,max=100,caption,tone='accent',style,...rest}){
  const pct=Math.max(0,Math.min(100,(value/max)*100));
  const c=tone==='signal'?'var(--cyan-500)':'var(--green-500)';
  return React.createElement('div',{style:{display:'grid',gap:'6px',...style},...rest},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',
      fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',
      textTransform:'uppercase'}},
      React.createElement('span',{style:{color:'var(--text-body)'}},label),
      React.createElement('span',{style:{color:'var(--text-faint)'}},caption||Math.round(pct)+'%')),
    React.createElement('div',{style:{height:8,background:'var(--surface-inset)',
      border:'var(--border-w) solid var(--border-subtle)',borderRadius:'var(--r-xs)',overflow:'hidden'}},
      React.createElement('div',{style:{width:pct+'%',height:'100%',background:c,
        boxShadow:'0 0 12px -2px '+c,transition:'width var(--dur-slow) var(--ease-out)'}})));
}
