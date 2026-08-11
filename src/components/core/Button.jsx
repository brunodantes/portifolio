import React from 'react';

const SIZES={
  sm:{padding:'8px 14px',fontSize:'var(--fs-body-sm)',gap:'6px'},
  md:{padding:'12px 20px',fontSize:'var(--fs-body-sm)',gap:'var(--gap-inline)'},
  lg:{padding:'16px 28px',fontSize:'var(--fs-body)',gap:'10px'}
};

export function Button({variant='primary',size='md',disabled=false,full=false,children,style,...rest}){
  const [hot,setHot]=React.useState(false);
  const [down,setDown]=React.useState(false);
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',
    fontFamily:'var(--font-mono)',fontWeight:'var(--fw-medium)',letterSpacing:'0.06em',
    textTransform:'uppercase',cursor:disabled?'not-allowed':'pointer',
    border:'var(--border-w) solid transparent',borderRadius:'var(--r-sm)',
    width:full?'100%':'auto',opacity:disabled?.4:1,
    transition:'transform var(--dur-instant) var(--ease-snap),background var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast) var(--ease-snap),color var(--dur-fast) var(--ease-snap),border-color var(--dur-fast) var(--ease-snap)',
    transform:disabled?'none':down?'translateY(1px)':hot?'translateY(var(--lift-hover))':'none',
    ...SIZES[size]};
  const skin={
    primary:{background:hot&&!disabled?'var(--accent-hover)':'var(--accent)',color:'var(--text-on-accent)',
      boxShadow:down?'var(--shadow-hard)':hot?'var(--shadow-hard-lift),var(--glow-accent)':'var(--shadow-hard)'},
    secondary:{background:'var(--surface-raised)',color:'var(--text-title)',
      borderColor:hot?'var(--border-strong)':'var(--border-default)',
      boxShadow:hot?'var(--shadow-hard-lift)':'var(--shadow-hard)'},
    ghost:{background:hot?'rgba(236,241,240,.05)':'transparent',color:hot?'var(--text-title)':'var(--text-body)',
      borderColor:hot?'var(--border-default)':'var(--border-subtle)'},
    signal:{background:'transparent',color:'var(--signal)',borderColor:'color-mix(in oklab,var(--cyan-500) 55%,transparent)',
      boxShadow:hot?'var(--glow-signal)':'none'},
    danger:{background:'var(--state-danger)',color:'var(--text-on-accent)',boxShadow:'var(--shadow-hard)'}
  }[variant]||{};
  return React.createElement('button',{
    disabled,onMouseEnter:()=>setHot(true),onMouseLeave:()=>{setHot(false);setDown(false)},
    onMouseDown:()=>setDown(true),onMouseUp:()=>setDown(false),
    style:{...base,...skin,...style},...rest},children);
}
