import {Icon} from './Icon.jsx';
import './Tag.css';

export function Tag({children,icon,iconSet='tech',base='assets/icons',tone='neutral',className,...rest}){
  const classes=['tag',`tag--${tone}`,className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...rest}>
      {icon?<Icon name={icon} set={iconSet} base={base} size={13}/>:null}
      {children}
    </span>
  );
}
