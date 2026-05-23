import React, { useState } from 'react';
import Icon from './Icon';
import { TESTI } from '../data';

function Depoimentos() {
  const [i, setI] = useState(0);
  const n = TESTI.length;
  const t = TESTI[i];
  return (
    <section className="testi" id="depoimentos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">06 · Quem confiou na gente</div>
            <h2 style={{ marginTop: 20 }}>Histórias reais de quem<br/>voltou a confiar no equipamento.</h2>
          </div>
          <p>
            Mais de 3 mil atendimentos depois, o que continua nos movendo é o mesmo
            de sempre: ver um cliente sair com o equipamento funcionando como deve.
          </p>
        </div>

        <div className="testi-card" key={i}>
          <div>
            <p className="testi-quote">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          </div>
          <div className="testi-side">
            <div className="testi-stars">
              {[0,1,2,3,4].map(k => <Icon key={k} name="star" />)}
            </div>
            <div className="testi-tag">{t.tag}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-3)", lineHeight: 1.5 }}>
              Depoimento verificado<br/>após entrega do serviço.
            </div>
          </div>
        </div>

        <div className="testi-controls">
          <div className="slider-dots">
            {TESTI.map((_, idx) => (
              <button key={idx} className={idx === i ? "active" : ""} onClick={() => setI(idx)} aria-label={`Depoimento ${idx + 1}`} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span className="slide-counter">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <div className="slider-arrows">
              <button onClick={() => setI((i - 1 + n) % n)} aria-label="Anterior" style={{ transform: "rotate(180deg)" }}>
                <Icon name="arrow" />
              </button>
              <button onClick={() => setI((i + 1) % n)} aria-label="Próximo">
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
