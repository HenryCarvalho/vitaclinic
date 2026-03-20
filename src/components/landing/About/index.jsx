import React from 'react';
import './About.css';

export function About() {
  return (
    <section className="section section-dark" id="about">
      <div className="container">
        
        <div className="section-header centered reveal">
          <span className="section-label">Sobre</span>
          <h2 className="section-title">
            A Melhor Clínica de<br />
            <span className="gold">Diagnóstico do Mundo</span>
          </h2>
          <hr className="divider-gold centered" />
          <p className="section-subtitle">
            <div>
              <div>
            <span>✦ Desde 2012 · Brasília - DF</span>
            <h1>VitaClinic</h1>
            <p>
            Unir o que a tecnologia tem de melhor
            à sensibilidade do cuidado humano.
            </p>
            <p>
            Fundada em Brasília - DF, em 2012, a VitaClinic nasceu com um propósito claro: unir o que a tecnologia tem de melhor à sensibilidade do cuidado humano.
            </p>
            <p>
            Mais do que uma plataforma de gestão em saúde, somos uma ponte entre a eficiência digital e o acolhimento essencial para pacientes e profissionais. 
            Localizada no coração do Plano Piloto, nossa missão é transformar a jornada clínica por meio de soluções ágeis, seguras e centradas na experiência de quem mais importa: as pessoas.         
            </p>
              </div>
              <hr></hr>












            </div>
          </p>
        </div>

        {/* --- NOVA SECÇÃO DA ILUSTRAÇÃO --- */}
        <div className="about-illustration reveal">
          <img 
            src="/assets/images/illustrations/Brasilia.png" 
            alt="Ilustração de Brasília" 
            className="floating-city"
          />
        </div>
        {/* --------------------------------- */}

        <div className="director-card reveal">
          <img 
            src="/assets/images/avatars/Dra. Lisa Cuddy.jpg" 
            alt="Dra. Lisa Cuddy" 
            className="director-avatar" 
          />
          <div className="director-info">
            <h3 className="director-name">Dra. Lisa Cuddy</h3>
            <div className="director-role">Diretora da Clínica</div>
            <p className="director-desc">
              Responsável pela direção geral e supervisão de auditoria completa
              de ações, garantindo que o sistema cumpra rigorosamente as normas
              de conformidade e excelência operacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}