import React, { useState } from 'react';
import Icon from './Icon';
import { FAQS, WA_LINK } from '../data';

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">07 · Dúvidas frequentes</div>
            <h2 style={{ marginTop: 20 }}>Tirando as<br/>principais dúvidas.</h2>
            <p style={{ marginTop: 22, color: "var(--ink-2)", fontSize: 16 }}>
              Se a sua não estiver aqui, mande no WhatsApp. Respondemos pessoalmente,
              sem robô, em horário comercial.
            </p>
            <a className="btn btn-ghost" style={{ marginTop: 22 }} href={WA_LINK("Olá Jeff, tenho uma dúvida.")} target="_blank" rel="noopener">
              Quero tirar dúvidas <Icon name="arrow" className="arr" />
            </a>
          </div>
          <div>
            {FAQS.map((f, idx) => (
              <div key={f.q} className={`faq-item ${open === idx ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpen(open === idx ? -1 : idx)} aria-expanded={open === idx}>
                  <span>{f.q}</span>
                  <span className="plus">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
