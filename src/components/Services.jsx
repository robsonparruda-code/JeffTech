import React, { useState } from 'react';
import Icon from './Icon';
import { SERVICES, WA_LINK } from '../data';

function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  return (
    <section className="services" id="servicos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">04 · Serviços e soluções</div>
            <h2 style={{ marginTop: 20 }}>O que entregamos para<br/>cada equipamento que chega.</h2>
          </div>
          <p>
            Da limpeza preventiva ao upgrade que dobra a velocidade, passando por
            reparos em hardware e suporte empresarial. Cinco frentes, um mesmo
            critério: fazer bem-feito e explicar o que foi feito.
          </p>
        </div>

        <div className="tabs" role="tablist">
          {SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              className={`tab ${idx === active ? "active" : ""}`}
              onClick={() => setActive(idx)}
              role="tab"
              aria-selected={idx === active}
            >
              <span className="tab-num">{String(idx + 1).padStart(2, "0")}</span>
              {srv.tab}
            </button>
          ))}
        </div>

        <div className="tab-panel" key={s.id}>
          <div>
            <h3>{s.title}</h3>
            <p className="lead">{s.lead}</p>
            <ul className="tab-features">
              {s.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a className="btn btn-light" href={WA_LINK(`Olá Jeff, gostaria de agendar uma consulta para: ${s.tab}.`)} target="_blank" rel="noopener">
              Quero agendar uma consulta <Icon name="arrow" className="arr" />
            </a>
          </div>

          <aside className="tab-side">
            <h4>O que está incluso</h4>
            <ul>
              {s.extras.map(([k, v]) => (
                <li key={k}>{k}<span>{v}</span></li>
              ))}
            </ul>
            <h4>Aplicável a</h4>
            <ul>
              <li>Notebooks<span>todas as marcas</span></li>
              <li>Desktops<span>montados / OEM</span></li>
              <li>Residencial<span>+ empresarial</span></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Services;
