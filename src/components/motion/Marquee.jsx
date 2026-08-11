import React from 'react';

export function Marquee({items=[],speed=28,separator='◆',style,...rest}){
  const row=items.concat(items);
  return React.createElement('div',{style:{overflow:'hidden',borderTop:'var(--border-w) solid var(--border-subtle)',
    borderBottom:'var(--border-w) solid var(--border-subtle)',background:'var(--surface-inset)',...style},...rest},
    React.createElement('div',{style:{display:'flex',gap:'var(--s-6)',padding:'10px 0',width:'max-content',
      animation:'ds-marquee '+speed+'s linear infinite'}},
      row.map((it,i)=>React.createElement('span',{key:i,style:{display:'inline-flex',alignItems:'center',
        gap:'var(--s-6)',fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
        letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:'var(--text-muted)',whiteSpace:'nowrap'}},
        it,React.createElement('span',{style:{color:'var(--accent)'}},separator)))),
    React.createElement('style',null,'@keyframes ds-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'));
}
