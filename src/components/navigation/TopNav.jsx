import {useState} from 'react';
import './TopNav.css';

export function TopNav({brand='Bruno Almeida',items=[],active,onSelect,right,className,...rest}){
  const [open,setOpen]=useState(false);
  const handleSelect=it=>{
    onSelect&&onSelect(it);
    setOpen(false);
  };
  return (
    <nav className={['top-nav',className].filter(Boolean).join(' ')} {...rest}>
      <span className="top-nav-brand">{brand}</span>
      <button
        type="button"
        className={`top-nav-toggle${open?' top-nav-toggle--open':''}`}
        aria-label={open?'Fechar menu':'Abrir menu'}
        aria-expanded={open}
        onClick={()=>setOpen(o=>!o)}
      >
        <span/><span/><span/>
      </button>
      <div className={`top-nav-menu${open?' top-nav-menu--open':''}`}>
        <div className="top-nav-items">
          {items.map(it=>(
            <button
              key={it}
              onClick={()=>handleSelect(it)}
              className={`top-nav-item${it===active?' top-nav-item--active':''}`}
            >
              {it}
            </button>
          ))}
        </div>
        <div className="top-nav-right">{right}</div>
      </div>
    </nav>
  );
}
