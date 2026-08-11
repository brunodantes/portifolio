import React from 'react';
import {Icon} from './Icon.jsx';

export function IconButton({name,set='ui',size=40,label,base='assets/icons',variant='ghost',style,...rest}){
  const [hot,setHot]=React.useState(false);
  const skin=variant==='solid'
    ?{background:hot?'var(--accent-hover)':'var(--accent)',color:'var(--text-on-accent)',borderColor:'transparent'}
    :{background:hot?'rgba(236,241,240,.05)':'transparent',color:hot?'var(--accent)':'var(--text-body)',
      borderColor:hot?'var(--border-default)':'var(--border-subtle)'};
  return React.createElement('button',{
    'aria-label':label||name,title:label||name,
    onMouseEnter:()=>setHot(true),onMouseLeave:()=>setHot(false),
    style:{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',
      border:'var(--border-w) solid',borderRadius:'var(--r-sm)',cursor:'pointer',
      transition:'all var(--dur-fast) var(--ease-snap)',
      transform:hot?'translateY(var(--lift-hover))':'none',...skin,...style},...rest},
    React.createElement(Icon,{name,set,base,size:Math.round(size*0.45)}));
}
