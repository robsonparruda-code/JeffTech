import React from 'react';
import Icon from './Icon';

function Localizacao() {
  return (
    <section id="localizacao" style={{ paddingTop: 0, paddingBottom: 0, background: "var(--paper)" }}>
      <div className="wrap" style={{ padding: "100px 28px" }}>
        <div className="loc-grid">
          <div>
            <div className="eyebrow">08 · Onde estamos</div>
            <h2 style={{ marginTop: 20 }}>Bancada em Paulista,<br/>atendimento na região.</h2>
            <p style={{ marginTop: 20, color: "var(--ink-2)", fontSize: 16, maxWidth: 420 }}>
              Atendemos presencialmente em Maranguape II e oferecemos busca
              e entrega via moto Uber para toda a Região Metropolitana do Recife.
            </p>
            <div className="loc-address">
              <div className="loc-line">
                <span className="loc-lbl">Endereço</span>
                <span>Rua Seis, 126 — Maranguape II<br/>Paulista/PE · CEP 53421-031</span>
              </div>
              <div className="loc-line">
                <span className="loc-lbl">Horário</span>
                <span>Segunda a sexta, 8h às 18h</span>
              </div>
              <div className="loc-line">
                <span className="loc-lbl">Contato</span>
                <span>(81) 99542-1078 · jlealdf@hotmail.com</span>
              </div>
            </div>
            <a className="btn btn-ghost" style={{ marginTop: 28 }} href="https://www.google.com/maps/search/?api=1&query=Rua+Seis+126+Maranguape+II+Paulista+PE+53421-031" target="_blank" rel="noopener">
              Abrir no Google Maps <Icon name="arrow" className="arr" />
            </a>
          </div>
          <div className="loc-map">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Seis%20126%20Maranguape%20II%20Paulista%20PE&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Localização da JeffTech no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
