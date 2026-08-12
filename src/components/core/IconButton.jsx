import {Icon} from './Icon.jsx';
import './IconButton.css';

export function IconButton({name,set='ui',size=40,label,base='assets/icons',variant='ghost',className,...rest}){
  const classes=['icon-btn',`icon-btn--${variant}`,className].filter(Boolean).join(' ');
  return (
    <button aria-label={label||name} title={label||name} className={classes} style={{'--icon-btn-size':`${size}px`}} {...rest}>
      <Icon name={name} set={set} base={base} size={Math.round(size*0.45)}/>
    </button>
  );
}
