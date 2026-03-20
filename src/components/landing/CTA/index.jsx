import React from 'react';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta-section section-dark" id="contact">
      <div className="container">
        
        <div className="reveal">
          <span 
            className="section-label" 
            style={{ justifyContent: 'center' }}
          >
            Contato
          </span>
          
          <h2 className="cta-title">
            <span className="stroke">Transforme sua</span><br />
            <span className="gold-fill">Clínica Hoje</span>
          </h2>
          
          <p
            className="section-subtitle"
            style={{
              maxWidth: '550px',
              margin: '0 auto var(--space-10)',
              textAlign: 'center',
            }}
          >
            Agende uma demonstração e descubra como o VitaClinic pode
            revolucionar a gestão da sua clínica com tecnologia de ponta.
          </p>
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-5)',
              flexWrap: 'wrap',
            }}
          >
            <a href="#" className="btn btn-gold">
              Agendar Demonstração
            </a>
            <a href="#" className="btn btn-outline-gold">
              Falar com Vendas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}