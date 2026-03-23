import React from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-grid">
        {/* LADO ESQUERDO: Texto e Botões */}
        <div className="hero-content reveal">
          <div className="hero-label">
            <span className="dot"></span> Sistema de Gestão Clínica — API REST
          </div>

          <h1 className="hero-title">
            <span className="stroke-text">Neuro</span>
            <br />
            <span className="filled-text">Vita</span>
            <br />
            <span className="small-text">Robustez e Genialidade em Diagnóstico</span>
          </h1>

          <p className="hero-subtitle">
            Combinamos inteligência artificial com expertise humana. Agilidade,
            segurança e experiência do utilizador numa plataforma construída com
            <strong> Java 21</strong> e <strong>Spring Boot 3</strong>.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">Explorar Recursos</button>
            <button className="btn btn-outline">Conhecer Equipa</button>
          </div>
        </div>

        {/* LADO DIREITO: Cérebro */}
        <div className="hero-visual">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/3QZfOsLCKyFbCJ9p/scene.splinecode" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
      </div>
    </section>
  );
}