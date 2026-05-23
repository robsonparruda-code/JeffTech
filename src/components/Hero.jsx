import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { HERO_SLIDES, WA_LINK } from '../data';

function Hero() {
  const [i, setI] = useState(0);
  const n = HERO_SLIDES.length;
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);
  const s = HERO_SLIDES[i];
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{s.eyebrow}</div>
            <h1 className="hero-title">{s.title[0]}<em>{s.title[1]}</em>{s.title[2]}<em>{s.title[3]}</em>{s.title[4]}<em>{s.title[5]}</em>{s.title[6]}</h1>
            <p className="hero-sub">{s.sub}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={WA_LINK("Olá Jeff, quero falar com um especialista.")} target="_blank" rel="noopener">
                Quero falar com especialista <Icon name="arrow" className="arr" />
              </a>
              <a className="btn btn-ghost" href="#servicos">Ver serviços</a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <div className="num">25+</div>
                <div className="lbl">anos de experiência</div>
              </div>
              <div className="hero-meta-item">
                <div className="num">98%</div>
                <div className="lbl">aprovação dos clientes</div>
              </div>
              <div className="hero-meta-item">
                <div className="num">48h</div>
                <div className="lbl">prazo médio de entrega</div>
              </div>
            </div>
          </div>

          <div className={`hero-img-frame ${s.variant === "logo" ? "is-logo" : ""}`}>
            <img key={s.src} src={s.src} alt={s.alt} loading="eager" />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 50, flexWrap: "wrap", gap: 20 }}>
          <div className="slider-dots" role="tablist" aria-label="Seleção do slide">
            {HERO_SLIDES.map((_, idx) => (
              <button key={idx} className={idx === i ? "active" : ""} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span className="slide-counter">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <div className="slider-arrows">
              <button onClick={() => setI((i - 1 + n) % n)} aria-label="Slide anterior" style={{ transform: "rotate(180deg)" }}>
                <Icon name="arrow" />
              </button>
              <button onClick={() => setI((i + 1) % n)} aria-label="Próximo slide">
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
