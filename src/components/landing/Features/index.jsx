import React from 'react';
import './Features.css';

export function Features() {
  return (
    <section className="section section-elevated" id="features">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="section-label">Recursos</span>
          <h2 className="section-title">
            Tecnologia que<br /><span className="gold">Transforma Vidas</span>
          </h2>
          <hr className="divider-gold centered" />
          <p className="section-subtitle">
            Cada módulo foi projetado para oferecer a melhor experiência em
            gestão clínica, com segurança e performance de nível enterprise.
          </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card reveal stagger-1">
            <div className="feature-card-badge">Core</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="feature-card-title">Agendamento Inteligente</h3>
            <p className="feature-card-desc">
              Calendário interativo com sugestão automática de médico,
              visualização de disponibilidade em tempo real e confirmação instantânea.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card reveal stagger-2">
            <div className="feature-card-badge">Diagnóstico</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Prontuário Eletrônico</h3>
            <p className="feature-card-desc">
              Prontuários com versionamento completo, campos de anamnese,
              diagnóstico CID-10, prescrições e exportação em PDF.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card reveal stagger-3">
            <div className="feature-card-badge">Segurança</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="feature-card-title">LGPD Compliance</h3>
            <p className="feature-card-desc">
              Dados sensíveis criptografados em repouso, autenticação 2FA, rate
              limiting e auditoria completa de ações.
            </p>
          </div>

          {/* Card 4 */}
          <div className="feature-card reveal stagger-4">
            <div className="feature-card-badge">Comunicação</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Telemedicina</h3>
            <p className="feature-card-desc">
              Consultas remotas integradas com notificações em tempo real via
              WebSocket e suporte a casos complexos.
            </p>
          </div>

          {/* Card 5 */}
          <div className="feature-card reveal stagger-5">
            <div className="feature-card-badge">Analytics</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Dashboard & KPIs</h3>
            <p className="feature-card-desc">
              Painéis personalizados por perfil com métricas em tempo real:
              consultas, taxa de ocupação, faturamento e cancelamentos.
            </p>
          </div>

          {/* Card 6 */}
          <div className="feature-card reveal stagger-6">
            <div className="feature-card-badge">Multi-perfil</div>
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Controle de Acesso</h3>
            <p className="feature-card-desc">
              Quatro perfis distintos — Admin, Médico, Recepcionista e Paciente
              — com permissões granulares e navegação dedicada.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}