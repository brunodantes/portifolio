import React from 'react';

export function HudPanel({label,right,children,glow=false,style,...rest}){
  return React.createElement('div',{style:{background:'var(--surface-panel)',
    border:'var(--border-w) solid var(--border-default)',clipPath:'var(--clip-bevel)',
    boxShadow:glow?'var(--glow-accent),var(--shadow-panel)':'var(--shadow-panel)',...style},...rest},
    React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',
      gap:'var(--s-4)',padding:'10px var(--s-5)',borderBottom:'var(--border-w) solid var(--border-subtle)',
      background:'rgba(0,0,0,.25)'}},
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
        letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:'var(--accent)'}},label),
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
        letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:'var(--text-faint)'}},right)),
    React.createElement('div',{style:{padding:'var(--pad-card)'}},children));
}
