import React, { useState } from 'react';
import Icon from './Icon';
import { WA_LINK } from '../data';

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="JeffTech — início" onClick={() => setOpen(false)}>
          <img src="/assets/jefftech-logo.png" alt="" className="brand-logo" />
          <span className="brand-name">JeffTech</span>
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a>
          <a href="#processo" onClick={() => setOpen(false)}>Processo</a>
          <a href="#depoimentos" onClick={() => setOpen(false)}>Depoimentos</a>
          <a href="#faq" onClick={() => setOpen(false)}>Dúvidas</a>
          <a href="#localizacao" onClick={() => setOpen(false)}>Onde estamos</a>
          <div className="mobile-cta-wrapper">
            <a className="btn btn-primary mobile-cta" href={WA_LINK("Olá Jeff, quero falar com um especialista.")} target="_blank" rel="noopener">
              Falar com especialista <Icon name="arrow" className="arr" />
            </a>
          </div>
        </div>
        <div className="nav-cta">
          <a className="btn btn-primary btn-sm desktop-cta" href={WA_LINK("Olá Jeff, quero falar com um especialista.")} target="_blank" rel="noopener">
            Falar com especialista <Icon name="arrow" className="arr" />
          </a>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
