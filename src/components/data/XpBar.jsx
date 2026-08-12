import './XpBar.css';

export function XpBar({label,value=0,max=100,caption,tone='accent',className,...rest}){
  const pct=Math.max(0,Math.min(100,(value/max)*100));
  return (
    <div className={['xp-bar',className].filter(Boolean).join(' ')} {...rest}>
      <div className="xp-bar-header">
        <span className="xp-bar-label">{label}</span>
        <span className="xp-bar-caption">{caption||`${Math.round(pct)}%`}</span>
      </div>
      <div className="xp-bar-track">
        <div className={`xp-bar-fill xp-bar-fill--${tone}`} style={{'--xp-pct':`${pct}%`}}/>
      </div>
    </div>
  );
}
