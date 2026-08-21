import React from 'react';
import './Reveal.css';

function useInView({threshold=0.15,rootMargin='0px 0px -10% 0px',once=true}={}){
  const ref=React.useRef(null);
  const [inView,setInView]=React.useState(false);
  React.useEffect(()=>{
    const el=ref.current;if(!el)return;
    if(typeof IntersectionObserver==='undefined'){setInView(true);return}
    const obs=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setInView(true);
        if(once)obs.unobserve(entry.target);
      }else if(!once){
        setInView(false);
      }
    },{threshold,rootMargin});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[threshold,rootMargin,once]);
  return [ref,inView];
}

export function Reveal({children,as:Tag='div',className='',delay=0,disabled=false,...rest}){
  const [ref,inView]=useInView();
  const visible=disabled||inView;
  const style=delay?{'--reveal-delay':`${delay}ms`}:undefined;
  return (
    <Tag ref={ref} style={style} className={`reveal${visible?' reveal--in':''}${className?` ${className}`:''}`} {...rest}>
      {children}
    </Tag>
  );
}
