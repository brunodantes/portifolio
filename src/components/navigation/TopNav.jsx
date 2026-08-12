import './TopNav.css';

export function TopNav({brand='Bruno Almeida',items=[],active,onSelect,right,className,...rest}){
  return (
    <nav className={['top-nav',className].filter(Boolean).join(' ')} {...rest}>
      <span className="top-nav-brand">{brand}</span>
      <div className="top-nav-items">
        {items.map(it=>(
          <button
            key={it}
            onClick={()=>onSelect&&onSelect(it)}
            className={`top-nav-item${it===active?' top-nav-item--active':''}`}
          >
            {it}
          </button>
        ))}
      </div>
      <div className="top-nav-right">{right}</div>
    </nav>
  );
}
