import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            {/* Lembre-se de ajustar o caminho da imagem conforme a nova estrutura */}
            <a href="#" className="nav-logo" style={{ marginBottom: 'var(--space-2)' }}>
              <img
                src="/assets/images/logo/logo.png"
                alt="VitaClinic"
                style={{ height: '36px' }}
              />
              <span className="nav-logo-text">Vita<span>Clinic</span></span>
            </a>
            <p>
              Sistema SaaS de gestão clínica com IA, telemedicina e diagnóstico
              avançado. Construído com Java 21 + Spring Boot 3.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Plataforma</div>
            <ul className="footer-links">
              <li><a href="#features">Recursos</a></li>
              <li><a href="#tech">Tecnologia</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Documentação</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Empresa</div>
            <ul className="footer-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#team">Equipe</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">LGPD</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; Março 2026 VitaClinic — API v1.0.0</span>
          <div className="footer-legal">
            <span>Em conformidade com a LGPD</span>
            <span>Dados criptografados em repouso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}