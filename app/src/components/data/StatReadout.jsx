import './StatReadout.css';

export function StatReadout({value,label,unit,tone='accent',size='md',className,...rest}){
  return (
    <div className={['stat-readout',className].filter(Boolean).join(' ')} {...rest}>
      <div className={`stat-readout-value stat-readout-value--${tone} stat-readout-value--${size}`}>
        {value}
        {unit?<span className="stat-readout-unit">{unit}</span>:null}
      </div>
      <div className="stat-readout-label">{label}</div>
    </div>
  );
}
