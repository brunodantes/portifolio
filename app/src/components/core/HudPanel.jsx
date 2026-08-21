import './HudPanel.css';

export function HudPanel({label,right,children,glow=false,className,...rest}){
  const classes=['hud-panel',glow?'hud-panel--glow':'',className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      <div className="hud-panel-header">
        <span className="hud-panel-label">{label}</span>
        <span className="hud-panel-right">{right}</span>
      </div>
      <div className="hud-panel-body">{children}</div>
    </div>
  );
}
