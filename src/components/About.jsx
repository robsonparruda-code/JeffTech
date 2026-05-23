import React from 'react';

function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-body">
            <div className="eyebrow" style={{ marginBottom: 24 }}>02 · Sobre a JeffTech</div>
            <h2>Mais de duas décadas<br/>cuidando dos equipamentos<br/>que cuidam do seu dia.</h2>

            <p style={{ marginTop: 28 }}>
              A JeffTech nasceu da combinação entre paixão pela tecnologia e atenção ao
              detalhe. Mais de 25 anos atendendo pessoas e empresas que dependem dos seus
              computadores para trabalhar, estudar ou viver — equipamentos que precisam
              funcionar bem todos os dias.
            </p>
            <p>
              Construímos a marca sobre quatro princípios simples: honestidade no
              diagnóstico, transparência no orçamento, cuidado técnico em cada peça e
              um atendimento próximo, sem jargão. Cada equipamento que entra na bancada
              é tratado como se fosse o nosso.
            </p>

            <div className="about-stats">
              <div>
                <div className="num">25+</div>
                <div className="lbl">anos de experiência</div>
              </div>
              <div>
                <div className="num">3.5k+</div>
                <div className="lbl">atendimentos realizados</div>
              </div>
              <div>
                <div className="num">100%</div>
                <div className="lbl">orçamento antes do reparo</div>
              </div>
            </div>

            <blockquote className="about-quote">
              “Mais do que consertar computadores, entregamos a tranquilidade de
              contar com quem entende de informática há mais de duas décadas.”
              <span>— Jeff, fundador</span>
            </blockquote>
          </div>

          <div className="about-photo">
            <img src="/assets/jeff-bancada.png" alt="Jeff em sua bancada de trabalho, fazendo manutenção em um notebook aberto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
