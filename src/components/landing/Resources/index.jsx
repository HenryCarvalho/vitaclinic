import React from 'react';
import './Resources.css';
// Pode usar ícones reais aqui (ex: React Icons) ou placeholders
const resourcesList = [
  { icon: "📅", title: "Agendamento", desc: "Controle eficiente de horários e especialidades." },
  { icon: "👤", title: "Pacientes", desc: "Gestão completa de cadastros e históricos." },
  { icon: "📄", title: "Consultas", desc: "Registro detalhado de atendimentos e diagnósticos." },
  { icon: "🛡️", title: "Segurança", desc: "Auditoria e conformidade com as normas." },
];

export function Resources() {
  return (
    <section className="section section-dark" id="resources">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Recursos</span>
          <h2 className="section-title gold">Ferramentas de Genialidade</h2>
          <p className="section-subtitle">
            Toda a agilidade, segurança e experiência que o utilizador precisa numa plataforma construída com Java 21 e Spring Boot 3.
          </p>
        </div>

        <div className="resources-grid reveal">
          {resourcesList.map((res, index) => (
            <div className="resource-card" key={index}>
              <div className="resource-icon">{res.icon}</div>
              <h4 className="resource-title">{res.title}</h4>
              <p className="resource-desc">{res.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}