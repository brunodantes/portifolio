import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function Toast({title,detail,tone='ok',icon='zap',base='assets/icons',onClose,style,...rest}){
  const c={ok:'var(--state-ok)',warn:'var(--state-warn)',danger:'var(--state-danger)',signal:'var(--signal)'}[tone]||'var(--state-ok)';
  return React.createElement('div',{role:'status',style:{display:'flex',alignItems:'flex-start',gap:'12px',
    minWidth:260,padding:'12px 14px',background:'var(--surface-raised)',
    border:'var(--border-w) solid color-mix(in oklab,'+c+' 35%,transparent)',
    borderLeft:'var(--border-w-thick) solid '+c,borderRadius:'var(--r-sm)',
    boxShadow:'var(--shadow-pop)',...style},...rest},
    React.createElement(Icon,{name:icon,base,size:16,color:c,style:{marginTop:2}}),
    React.createElement('div',{style:{display:'grid',gap:'3px'}},
      React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',
        letterSpacing:'var(--ls-hud)',textTransform:'uppercase',color:c}},title),
      detail?React.createElement('div',{style:{fontSize:'var(--fs-body-sm)',color:'var(--text-muted)'}},detail):null),
    onClose?React.createElement('button',{onClick:onClose,'aria-label':'Fechar',
      style:{marginLeft:'auto',background:'transparent',border:0,cursor:'pointer',
        color:'var(--text-faint)',fontFamily:'var(--font-mono)',fontSize:12}},'✕'):null);
}
