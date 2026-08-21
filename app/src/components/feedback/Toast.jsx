import {Icon} from '../core/Icon.jsx';
import './Toast.css';

export function Toast({title,detail,tone='ok',icon='zap',base='assets/icons',onClose,className,...rest}){
  return (
    <div role="status" className={['toast',`toast--${tone}`,className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={icon} base={base} size={16} color="var(--toast-color)" className="toast-icon"/>
      <div className="toast-body">
        <div className="toast-title">{title}</div>
        {detail?<div className="toast-detail">{detail}</div>:null}
      </div>
      {onClose?<button onClick={onClose} aria-label="Fechar" className="toast-close">✕</button>:null}
    </div>
  );
}
