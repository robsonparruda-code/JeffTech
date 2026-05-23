import React from 'react';
import Icon from './Icon';
import { WA_LINK, WA_NUMBER } from '../data';

function CtaFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="wrap">
        <div className="cta-final-inner">
          <div className="eyebrow" style={{ color: "rgba(250,247,242,.55)", justifyContent: "center", display: "flex" }}>
            <span style={{ background: "rgba(250,247,242,.4)", width: 24, height: 1, display: "inline-block" }}></span>
            Próximo passo
          </div>
          <h2 style={{ marginTop: 20 }}>
            Vamos resolver o seu equipamento<br/>com a tranquilidade que ele merece?
          </h2>
          <p>
            Chame no WhatsApp, descreva o problema (ou envie uma foto) e receba uma
            primeira orientação sem compromisso. Sem custos para diagnosticar, sem
            obrigação de fechar.
          </p>
          <div className="cta-final-ctas">
            <a className="btn btn-light" href={WA_LINK("Olá Jeff, quero falar com um especialista.")} target="_blank" rel="noopener">
              Quero falar com especialista <Icon name="arrow" className="arr" />
            </a>
            <a className="btn btn-outline-light" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">
              WhatsApp (81) 99542-1078
            </a>
          </div>
          <div className="cta-final-meta">
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Seis+126+Maranguape+II+Paulista+PE+53421-031" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="map" /> Rua Seis, 126 — Maranguape II, Paulista/PE</a>
            <div><Icon name="clock" /> Seg. a sex., 8h às 18h</div>
            <div><Icon name="mail" /> jlealdf@hotmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaFinal;
