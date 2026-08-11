import React from 'react';

export function Card({children,interactive=false,bevel=false,tone='panel',style,...rest}){
  const [hot,setHot]=React.useState(false);
  const bg=tone==='inset'?'var(--surface-inset)':tone==='raised'?'var(--surface-raised)':'var(--surface-card)';
  return React.createElement('div',{
    onMouseEnter:interactive?()=>setHot(true):undefined,
    onMouseLeave:interactive?()=>setHot(false):undefined,
    style:{background:bg,border:'var(--border-w) solid '+(hot?'var(--border-strong)':'var(--border-subtle)'),
      borderRadius:bevel?0:'var(--r-md)',clipPath:bevel?'var(--clip-bevel)':'none',
      padding:'var(--pad-card)',boxShadow:hot?'var(--shadow-panel)':'var(--shadow-card)',
      transform:hot?'translateY(var(--lift-hover))':'none',
      transition:'transform var(--dur-fast) var(--ease-snap),border-color var(--dur-fast) var(--ease-snap),box-shadow var(--dur-base) var(--ease-snap)',
      ...style},...rest},children);
}
