import React from 'react';
import Icon from './Icon';
import { WA_LINK } from '../data';

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="JeffTech — início">
          <img src="/assets/jefftech-logo.png" alt="" className="brand-logo" />
          <span className="brand-name">JEFFTECH</span>
        </a>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#processo">Processo</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
          <a href="#localizacao">Onde estamos</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn-primary btn-sm" href={WA_LINK("Olá Jeff, quero falar com um especialista.")} target="_blank" rel="noopener">
            Falar com especialista <Icon name="arrow" className="arr" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
