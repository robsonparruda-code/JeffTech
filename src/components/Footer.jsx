import React from 'react';
import { WA_LINK, WA_NUMBER } from '../data';

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <a href="#top" className="brand" aria-label="JeffTech — início">
              <img src="/assets/jefftech-logo.png" alt="JeffTech Informática" className="brand-logo brand-logo-lg" />
            </a>
            <p className="foot-tag">Assistência técnica especializada em notebooks e desktops. Mais de 25 anos de bancada, atendimento humano e diagnóstico transparente.</p>
          </div>
          <div className="foot-col">
            <h5>Navegar</h5>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">Dúvidas</a></li>
              <li><a href="#localizacao">Onde estamos</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contato</h5>
            <ul>
              <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">(81) 99542-1078</a></li>
              <li><a href="mailto:jlealdf@hotmail.com">jlealdf@hotmail.com</a></li>
              <li><a href="https://instagram.com/jlealdfreitas" target="_blank" rel="noopener">@jlealdfreitas</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Rua+Seis+126+Maranguape+II+Paulista+PE+53421-031" target="_blank" rel="noopener">Rua Seis, 126 — Maranguape II<br/>Paulista/PE · CEP 53421-031</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Atendimento</h5>
            <ul>
              <li>Segunda a sexta</li>
              <li>8h às 18h</li>
              <li><a href={WA_LINK("Olá Jeff, tenho uma dúvida.")} target="_blank" rel="noopener">Quero tirar dúvidas →</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} JeffTech · Assistência técnica de computadores</span>
          <span>Paulista — PE · Brasil</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
