import React from 'react';

export function Input({label,hint,error,as='input',rows=4,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const border=error?'var(--state-danger)':focus?'color-mix(in oklab,var(--green-500) 60%,transparent)':'var(--border-default)';
  const field=React.createElement(as,{rows:as==='textarea'?rows:undefined,
    onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
    style:{width:'100%',fontFamily:'var(--font-ui)',fontSize:'var(--fs-body-sm)',color:'var(--text-title)',
      background:'var(--surface-inset)',border:'var(--border-w) solid '+border,borderRadius:'var(--r-sm)',
      padding:'12px 14px',outline:'none',resize:as==='textarea'?'vertical':undefined,
      boxShadow:focus?'0 0 0 3px var(--green-soft)':'none',
      transition:'border-color var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast) var(--ease-snap)',...style},
    ...rest});
  return React.createElement('label',{style:{display:'block'}},
    label?React.createElement('span',{style:{display:'block',marginBottom:'var(--s-2)',fontFamily:'var(--font-mono)',
      fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',textTransform:'uppercase',
      color:focus?'var(--accent)':'var(--text-muted)'}},label):null,
    field,
    (error||hint)?React.createElement('span',{style:{display:'block',marginTop:'6px',fontFamily:'var(--font-mono)',
      fontSize:'var(--fs-mono-sm)',color:error?'var(--state-danger)':'var(--text-faint)'}},error||hint):null);
}
