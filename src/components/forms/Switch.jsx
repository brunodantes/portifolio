import './Switch.css';

export function Switch({checked=false,onChange,label,className,...rest}){
  return (
    <label className={['switch',className].filter(Boolean).join(' ')}>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={()=>onChange&&onChange(!checked)}
        onKeyDown={e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();onChange&&onChange(!checked)}}}
        className={`switch-track${checked?' switch-track--checked':''}`}
        {...rest}
      >
        <span className="switch-knob"/>
      </span>
      {label?<span className="switch-label">{label}</span>:null}
    </label>
  );
}
