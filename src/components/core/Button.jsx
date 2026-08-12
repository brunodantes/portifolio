import './Button.css';

export function Button({variant='primary',size='md',disabled=false,full=false,children,className,...rest}){
  const classes=['btn',`btn--${variant}`,`btn--${size}`,full?'btn--full':'',className].filter(Boolean).join(' ');
  return (
    <button disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}
