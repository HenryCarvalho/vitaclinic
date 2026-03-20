import React from 'react';
import './TechStack.css';

export function TechStack() {
  return (
    <section className="section section-elevated" id="tech">
      <div className="container">
        
        <div className="section-header centered reveal">
          <span className="section-label">Tecnologia</span>
          <h2 className="section-title">
            Stack de<br /><span className="gold">Nível Enterprise</span>
          </h2>
          <hr className="divider-gold centered" />
          <p className="section-subtitle">
            Arquitetura robusta construída com as tecnologias mais confiáveis do
            mercado.
          </p>
        </div>

        <div className="tech-grid">
          {/* Card 1 */}
          <div className="tech-card reveal stagger-1">
            <span className="tech-card-icon">&#9749;</span>
            <div className="tech-card-name">Java 21 LTS</div>
            <div className="tech-card-desc">Runtime principal</div>
          </div>
          
          {/* Card 2 */}
          <div className="tech-card reveal stagger-2">
            <span className="tech-card-icon">&#127811;</span>
            <div className="tech-card-name">Spring Boot 3</div>
            <div className="tech-card-desc">Framework backend</div>
          </div>
          
          {/* Card 3 */}
          <div className="tech-card reveal stagger-3">
            <span className="tech-card-icon">&#128451;</span>
            <div className="tech-card-name">MySQL 8.0</div>
            <div className="tech-card-desc">Banco de dados</div>
          </div>
          
          {/* Card 4 */}
          <div className="tech-card reveal stagger-4">
            <span className="tech-card-icon">&#9729;</span>
            <div className="tech-card-name">Oracle Cloud</div>
            <div className="tech-card-desc">Infraestrutura OCI</div>
          </div>
          
          {/* Card 5 */}
          <div className="tech-card reveal stagger-5">
            <span className="tech-card-icon">&#128274;</span>
            <div className="tech-card-name">JWT + 2FA</div>
            <div className="tech-card-desc">Autenticação segura</div>
          </div>
          
          {/* Card 6 */}
          <div className="tech-card reveal stagger-6">
            <span className="tech-card-icon">&#128225;</span>
            <div className="tech-card-name">WebSocket</div>
            <div className="tech-card-desc">Tempo real</div>
          </div>
          
          {/* Card 7 */}
          <div className="tech-card reveal stagger-1">
            <span className="tech-card-icon">&#128196;</span>
            <div className="tech-card-name">REST API</div>
            <div className="tech-card-desc">Documentada</div>
          </div>
          
          {/* Card 8 */}
          <div className="tech-card reveal stagger-2">
            <span className="tech-card-icon">&#128737;</span>
            <div className="tech-card-name">LGPD</div>
            <div className="tech-card-desc">Conformidade total</div>
          </div>
        </div>

      </div>
    </section>
  );
}