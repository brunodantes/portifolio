import React from 'react';

export function Switch({checked=false,onChange,label,style,...rest}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer',...style}},
    React.createElement('span',{role:'switch','aria-checked':checked,tabIndex:0,
      onClick:()=>onChange&&onChange(!checked),
      onKeyDown:e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();onChange&&onChange(!checked)}},
      style:{width:44,height:24,borderRadius:'var(--r-pill)',padding:2,display:'inline-flex',
        alignItems:'center',background:checked?'var(--accent)':'var(--surface-inset)',
        border:'var(--border-w) solid '+(checked?'transparent':'var(--border-default)'),
        boxShadow:checked?'var(--glow-accent)':'none',
        transition:'background var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast) var(--ease-snap)'},
      ...rest},
      React.createElement('span',{style:{width:18,height:18,borderRadius:'50%',
        background:checked?'var(--text-on-accent)':'var(--text-muted)',
        transform:'translateX('+(checked?20:0)+'px)',
        transition:'transform var(--dur-fast) var(--ease-pop)'}})),
    label?React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
      letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:'var(--text-body)'}},label):null);
}
