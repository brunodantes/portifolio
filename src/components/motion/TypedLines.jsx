import React from 'react';
import './TypedLines.css';

export function TypedLines({lines=[],speed=58,hold=1900,loop=true,className,...rest}){
  const [i,setI]=React.useState(0);
  const [n,setN]=React.useState(0);
  const [del,setDel]=React.useState(false);
  const word=lines[i%(lines.length||1)]||'';
  React.useEffect(()=>{
    if(!lines.length)return;
    if(!del&&n<word.length){const t=setTimeout(()=>setN(n+1),speed);return ()=>clearTimeout(t)}
    if(!del&&n===word.length){
      if(!loop&&i===lines.length-1)return;
      const t=setTimeout(()=>setDel(true),hold);return ()=>clearTimeout(t)}
    if(del&&n>0){const t=setTimeout(()=>setN(n-1),speed/2);return ()=>clearTimeout(t)}
    if(del&&n===0){setDel(false);setI(i+1)}
  },[n,del,i,word,lines.length,speed,hold,loop]);
  const shown=word.slice(0,n);
  const cut=shown.lastIndexOf(' ');
  const head=cut>-1?shown.slice(0,cut+1):'';
  const tail=cut>-1?shown.slice(cut+1):shown;
  return (
    <span className={className} {...rest}>
      {head}
      <span className="typed-tail">
        {tail}
        <span className="typed-caret"/>
      </span>
    </span>
  );
}
