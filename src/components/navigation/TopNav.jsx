import React from 'react';

export function TopNav({brand='Bruno Almeida',items=[],active,onSelect,right,style,...rest}){
  return React.createElement('nav',{style:{position:'sticky',top:0,zIndex:40,display:'flex',
    alignItems:'center',justifyContent:'space-between',gap:'var(--s-6)',
    padding:'14px var(--s-6)',background:'var(--glass)',backdropFilter:'blur(var(--blur-glass))',
    WebkitBackdropFilter:'blur(var(--blur-glass))',
    borderBottom:'var(--border-w) solid var(--border-subtle)',...style},...rest},
    React.createElement('span',{style:{fontFamily:'var(--font-display)',fontSize:13,textTransform:'uppercase',
      letterSpacing:'0.02em',color:'var(--text-title)'}},brand),
    React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'var(--s-1)'}},
      items.map(it=>{const on=it===active;
        return React.createElement('button',{key:it,onClick:()=>onSelect&&onSelect(it),
          style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',
            textTransform:'uppercase',padding:'8px 12px',cursor:'pointer',background:'transparent',
            border:'var(--border-w) solid '+(on?'var(--border-default)':'transparent'),
            borderRadius:'var(--r-xs)',color:on?'var(--accent)':'var(--text-muted)',
            transition:'color var(--dur-fast) var(--ease-snap),border-color var(--dur-fast) var(--ease-snap)'}},it)})),
    React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'var(--s-2)'}},right));
}
