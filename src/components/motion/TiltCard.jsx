import React from 'react';

export function TiltCard({max=8,glare=true,children,style,...rest}){
  const ref=React.useRef(null);
  const [t,setT]=React.useState({rx:0,ry:0,mx:50,my:50,on:false});
  const move=e=>{const el=ref.current;if(!el)return;const b=el.getBoundingClientRect();
    const px=(e.clientX-b.left)/b.width,py=(e.clientY-b.top)/b.height;
    setT({rx:(0.5-py)*2*max,ry:(px-0.5)*2*max,mx:px*100,my:py*100,on:true})};
  return React.createElement('div',{ref,onPointerMove:move,
    onPointerLeave:()=>setT({rx:0,ry:0,mx:50,my:50,on:false}),
    style:{position:'relative',transformStyle:'preserve-3d',
      transform:'perspective(900px) rotateX('+t.rx+'deg) rotateY('+t.ry+'deg)',
      transition:t.on?'transform var(--dur-instant) linear':'transform var(--dur-base) var(--ease-out)',
      ...style},...rest},
    children,
    glare?React.createElement('div',{'aria-hidden':true,style:{position:'absolute',inset:0,
      borderRadius:'inherit',pointerEvents:'none',opacity:t.on?1:0,
      transition:'opacity var(--dur-fast) var(--ease-snap)',
      background:'radial-gradient(420px circle at '+t.mx+'% '+t.my+'%, color-mix(in oklab,var(--green-500) 12%,transparent), transparent 60%)'}}):null);
}
