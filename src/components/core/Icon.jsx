import React from 'react';

const SETS={ui:'ui',tech:'tech'};

export function Icon({name,set='ui',size=20,color='currentColor',base='assets/icons',style,...rest}){
  const dir=SETS[set]||'ui';
  const url=`${base}/${dir}/${name}.svg`;
  return React.createElement('span',{
    role:'img','aria-label':rest['aria-label']||name,
    style:{display:'inline-block',width:size,height:size,flex:'0 0 auto',background:color,
      WebkitMaskImage:`url("${url}")`,maskImage:`url("${url}")`,
      WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',
      WebkitMaskPosition:'center',maskPosition:'center',
      WebkitMaskSize:'contain',maskSize:'contain',...style},
    ...rest});
}
