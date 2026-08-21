import './Card.css';

export function Card({children,interactive=false,bevel=false,tone='panel',className,...rest}){
  const toneClass=tone!=='panel'?`card--tone-${tone}`:'';
  const classes=['card',toneClass,bevel?'card--bevel':'',interactive?'card--interactive':'',className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
