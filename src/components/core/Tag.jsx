import React from 'react';
import {Icon} from './Icon.jsx';

export function Tag({children,icon,iconSet='tech',base='assets/icons',tone='neutral',style,...rest}){
  const tones={
    neutral:{color:'var(--text-body)',borderColor:'var(--border-default)',background:'rgba(236,241,240,.03)'},
    accent:{color:'var(--accent-ink)',borderColor:'color-mix(in oklab,var(--green-500) 40%,transparent)',background:'var(--green-soft)'},
    signal:{color:'var(--cyan-200)',borderColor:'color-mix(in oklab,var(--cyan-500) 40%,transparent)',background:'var(--cyan-soft)'}
  };
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'6px',
    fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'0.08em',textTransform:'uppercase',
    padding:'5px 10px',borderRadius:'var(--r-pill)',border:'var(--border-w) solid',
    whiteSpace:'nowrap',...tones[tone],...style},...rest},
    icon?React.createElement(Icon,{name:icon,set:iconSet,base,size:13}):null,children);
}
