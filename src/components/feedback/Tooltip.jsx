import React from 'react';

export function Tooltip({label,side='top',children,style,...rest}){
  const [on,setOn]=React.useState(false);
  const pos={top:{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'},
    bottom:{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'},
    left:{right:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'},
    right:{left:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}}[side];
  return React.createElement('span',{onMouseEnter:()=>setOn(true),onMouseLeave:()=>setOn(false),
    onFocus:()=>setOn(true),onBlur:()=>setOn(false),
    style:{position:'relative',display:'inline-flex',...style},...rest},
    children,
    React.createElement('span',{role:'tooltip',style:{position:'absolute',zIndex:70,pointerEvents:'none',
      opacity:on?1:0,transition:'opacity var(--dur-fast) var(--ease-snap)',
      fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'0.06em',
      textTransform:'uppercase',color:'var(--text-title)',background:'var(--carbon-900)',
      border:'var(--border-w) solid var(--border-default)',borderRadius:'var(--r-xs)',
      padding:'6px 9px',whiteSpace:'nowrap',boxShadow:'var(--shadow-pop)',...pos}},label));
}
