import React from 'react';
import {Button} from './components/core/Button.jsx';
import {TopNav} from './components/navigation/TopNav.jsx';
import {CursorHalo} from './components/motion/CursorHalo.jsx';
import {CodeBackdrop} from './components/motion/CodeBackdrop.jsx';
import {Hero} from './sections/Hero.jsx';
import {Stack, StackMarquee} from './sections/Stack.jsx';
import {About} from './sections/About.jsx';
import {Contact, Footer} from './sections/Contact.jsx';
import {RadioPlayer} from './components/RadioPlayer.jsx';
import {PORTFOLIO_DATA, RADIO_TRACKS} from './data.js';

const NAV_KEYS=['inicio','trajetoria','equipamento','contato'];

export default function App(){
  const [lang,setLang]=React.useState('pt');
  const [tab,setTab]=React.useState('inicio');
  const [motion,setMotion]=React.useState(true);
  const data=PORTFOLIO_DATA[lang];
  const refs={
    inicio:React.useRef(null),
    trajetoria:React.useRef(null),
    equipamento:React.useRef(null),
    contato:React.useRef(null)
  };

  const goTo=key=>{
    setTab(key);
    refs[key].current?.scrollIntoView({behavior:'smooth',block:'start'});
  };
  const handleNavSelect=label=>{
    const idx=data.ui.nav.indexOf(label);
    if(idx>=0)goTo(NAV_KEYS[idx]);
  };

  return (
    <div>
      <CodeBackdrop columns={4} opacity={0.09} reveal={motion}/>
      {motion?<CursorHalo strength={0.13}/>:null}
      <RadioPlayer tracks={RADIO_TRACKS}/>
      <TopNav brand={data.player.name} items={data.ui.nav} active={data.ui.nav[NAV_KEYS.indexOf(tab)]} onSelect={handleNavSelect}
        right={<div style={{display:'flex',alignItems:'center',gap:'var(--s-4)'}}>
          <div style={{display:'flex',alignItems:'center',gap:2}}>
            {['pt','en'].map(l=>(
              <button key={l} onClick={()=>setLang(l)}
                style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-mono-sm)',letterSpacing:'var(--ls-hud)',
                  textTransform:'uppercase',padding:'6px 10px',cursor:'pointer',background:'transparent',
                  border:'var(--border-w) solid '+(lang===l?'var(--border-default)':'transparent'),
                  borderRadius:'var(--r-xs)',color:lang===l?'var(--accent)':'var(--text-muted)'}}>{l}</button>
            ))}
          </div>
          <Button size="sm" variant="secondary" onClick={()=>window.open(data.player.resumeUrl,'_blank','noopener,noreferrer')}>{data.ui.resumeBtn}</Button>
        </div>}/>
      <div style={{position:'relative',zIndex:2}}>
        <div ref={refs.inicio} style={{scrollMarginTop:72}}><Hero data={data} onNav={goTo}/></div>
        <div ref={refs.trajetoria} style={{scrollMarginTop:72}}><About data={data}/></div>
        <StackMarquee/>
        <div ref={refs.equipamento} style={{scrollMarginTop:72}}><Stack data={data}/></div>
        <div ref={refs.contato} style={{scrollMarginTop:72}}><Contact data={data} motion={motion} onMotion={setMotion}/></div>
        <Footer data={data}/>
      </div>
    </div>
  );
}
