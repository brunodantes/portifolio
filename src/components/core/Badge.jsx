import './Badge.css';

export function Badge({children,tone='ok',dot=true,className,...rest}){
  const classes=['badge',`badge--${tone}`,className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...rest}>
      {dot?<span className="badge-dot"/>:null}
      {children}
    </span>
  );
}
