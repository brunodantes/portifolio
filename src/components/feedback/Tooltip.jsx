import './Tooltip.css';

export function Tooltip({label,side='top',children,className,...rest}){
  return (
    <span className={['tooltip-wrap',className].filter(Boolean).join(' ')} {...rest}>
      {children}
      <span role="tooltip" className={`tooltip-bubble tooltip-bubble--${side}`}>{label}</span>
    </span>
  );
}
