import React from 'react';
import Icon from './Icon';
import { DIFFS } from '../data';

function Diferenciais() {
  return (
    <section id="diferenciais">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">03 · Por que escolher a JeffTech</div>
            <h2 style={{ marginTop: 20 }}>Seis razões para confiar<br/>o seu equipamento à gente.</h2>
          </div>
          <p>
            Tudo o que aprendemos ao longo de mais de duas décadas atendendo
            empresas e usuários residenciais — traduzido em práticas claras de
            atendimento, diagnóstico e reparo.
          </p>
        </div>

        <div className="diff-grid">
          {DIFFS.map((d, idx) => (
            <div className="diff-card" key={d.title}>
              <div className="diff-num">{String(idx + 1).padStart(2, "0")} / 06</div>
              <div className="diff-icon"><Icon name={d.icon} /></div>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
