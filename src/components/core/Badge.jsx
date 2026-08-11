import React from 'react';

const TONES={
  ok:'var(--state-ok)',warn:'var(--state-warn)',danger:'var(--state-danger)',
  rare:'var(--state-rare)',signal:'var(--signal)'
};

export function Badge({children,tone='ok',dot=true,style,...rest}){
  const c=TONES[tone]||TONES.ok;
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'7px',
    fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',
    textTransform:'uppercase',color:c,padding:'4px 10px',borderRadius:'var(--r-xs)',
    border:'var(--border-w) solid color-mix(in oklab,'+c+' 35%,transparent)',
    background:'color-mix(in oklab,'+c+' 10%,transparent)',...style},...rest},
    dot?React.createElement('span',{style:{width:6,height:6,borderRadius:'50%',background:c,
      boxShadow:'0 0 0 3px color-mix(in oklab,'+c+' 18%,transparent)'}}):null,
    children);
}
