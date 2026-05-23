import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Diferenciais from './components/Diferenciais';
import Services from './components/Services';
import Processo from './components/Processo';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Localizacao from './components/Localizacao';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  // simple scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("shown"); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Diferenciais />
        <Services />
        <Processo />
        <Depoimentos />
        <FAQ />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
