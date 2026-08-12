import './Icon.css';

const SETS={ui:'ui',tech:'tech'};

export function Icon({name,set='ui',size=20,color='currentColor',base='assets/icons',className,...rest}){
  const dir=SETS[set]||'ui';
  const url=`${base}/${dir}/${name}.svg`;
  const vars={'--icon-size':`${size}px`,'--icon-color':color,'--icon-url':`url("${url}")`};
  return (
    <span role="img" aria-label={rest['aria-label']||name} className={['icon',className].filter(Boolean).join(' ')} style={vars} {...rest}/>
  );
}
