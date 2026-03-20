import React from 'react';
import './Marquee.css';

export function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <span className="marquee-item filled">Diagnóstico</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Telemedicina</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item filled">Prontuário</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Agendamento</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item filled">IA Clínica</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Segurança</span>
        <span className="marquee-separator"></span>
        
        {/* O bloco repete para criar a ilusão de loop infinito no scroll */}
        <span className="marquee-item filled">Diagnóstico</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Telemedicina</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item filled">Prontuário</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Agendamento</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item filled">IA Clínica</span>
        <span className="marquee-separator"></span>
        <span className="marquee-item">Segurança</span>
        <span className="marquee-separator"></span>
      </div>
    </div>
  );
}