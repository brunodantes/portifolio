import React from 'react';
import './TiltCard.css';

export function TiltCard({max=8,glare=true,children,className,...rest}){
  const ref=React.useRef(null);
  const [t,setT]=React.useState({rx:0,ry:0,mx:50,my:50,on:false});
  const move=e=>{
    const el=ref.current;if(!el)return;
    const b=el.getBoundingClientRect();
    const px=(e.clientX-b.left)/b.width,py=(e.clientY-b.top)/b.height;
    setT({rx:(0.5-py)*2*max,ry:(px-0.5)*2*max,mx:px*100,my:py*100,on:true});
  };
  const vars={'--tilt-rx':`${t.rx}deg`,'--tilt-ry':`${t.ry}deg`,'--tilt-mx':`${t.mx}%`,'--tilt-my':`${t.my}%`};
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={()=>setT({rx:0,ry:0,mx:50,my:50,on:false})}
      className={['tilt-card',t.on?'tilt-card--active':'',className].filter(Boolean).join(' ')}
      style={vars}
      {...rest}
    >
      {children}
      {glare?<div aria-hidden="true" className={`tilt-glare${t.on?' tilt-glare--active':''}`}/>:null}
    </div>
  );
}
