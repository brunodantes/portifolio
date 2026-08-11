import React from 'react';

export function CursorHalo({size,color='var(--green-500)',strength=0.16,ring=true}){
  const [p,setP]=React.useState({x:-9999,y:-9999});
  React.useEffect(()=>{
    const m=e=>setP({x:e.clientX,y:e.clientY});
    window.addEventListener('pointermove',m,{passive:true});
    return ()=>window.removeEventListener('pointermove',m);
  },[]);
  const r=size||'var(--cursor-halo)';
  return React.createElement(React.Fragment,null,
    React.createElement('div',{'aria-hidden':true,style:{position:'fixed',inset:0,zIndex:1,
      pointerEvents:'none',background:'radial-gradient(circle '+(typeof r==='number'?r+'px':r)+
        ' at '+p.x+'px '+p.y+'px, color-mix(in oklab,'+color+' '+Math.round(strength*100)+'%,transparent), transparent 70%)'}}),
    ring?React.createElement('div',{'aria-hidden':true,style:{position:'fixed',left:p.x,top:p.y,zIndex:60,
      width:26,height:26,marginLeft:-13,marginTop:-13,borderRadius:'50%',pointerEvents:'none',
      border:'1px solid color-mix(in oklab,'+color+' 55%,transparent)',
      transition:'transform var(--dur-fast) var(--ease-out)'}}):null);
}
