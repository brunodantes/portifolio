import React from 'react';
import './CursorHalo.css';

export function CursorHalo({size,color='var(--green-500)',strength=0.16,ring=true}){
  const [p,setP]=React.useState({x:-9999,y:-9999});
  React.useEffect(()=>{
    const m=e=>setP({x:e.clientX,y:e.clientY});
    window.addEventListener('pointermove',m,{passive:true});
    return ()=>window.removeEventListener('pointermove',m);
  },[]);
  const r=size||'var(--cursor-halo)';
  const vars={
    '--halo-x':`${p.x}px`,'--halo-y':`${p.y}px`,
    '--halo-radius':typeof r==='number'?`${r}px`:r,
    '--halo-color':color,'--halo-strength':`${Math.round(strength*100)}%`
  };
  return (
    <>
      <div aria-hidden="true" className="cursor-halo" style={vars}/>
      {ring?<div aria-hidden="true" className="cursor-halo-ring" style={vars}/>:null}
    </>
  );
}
