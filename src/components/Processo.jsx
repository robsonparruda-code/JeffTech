import React from 'react';
import { PROCESS_STEPS } from '../data';

function Processo() {
  return (
    <section id="processo">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">05 · Como trabalhamos</div>
            <h2 style={{ marginTop: 20 }}>Um processo claro,<br/>do primeiro contato à entrega.</h2>
          </div>
          <p>
            Sem surpresas, sem retrabalho e sem ansiedade. Você acompanha cada
            etapa e só aprova depois de entender exatamente o que será feito.
          </p>
        </div>

        <div className="process-grid">
          {PROCESS_STEPS.map((p, idx) => (
            <div className="process-step" key={p.title}>
              <div className="num">PASSO {String(idx + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Processo;
