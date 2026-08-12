import './Marquee.css';

export function Marquee({items=[],speed=28,separator='◆',className,...rest}){
  const row=items.concat(items);
  return (
    <div className={['marquee',className].filter(Boolean).join(' ')} {...rest}>
      <div className="marquee-track" style={{'--marquee-speed':`${speed}s`}}>
        {row.map((it,i)=>(
          <span key={i} className="marquee-item">
            {it}
            <span className="marquee-separator">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
