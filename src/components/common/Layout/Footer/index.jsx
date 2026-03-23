import React from 'react';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* COLUNA DA MARCA */}
          <div className="footer-brand reveal">
            <div className="footer-logo">
              <img src="/assets/images/logo/logo.png" alt="Neuro Vita" />
              <span><span className="blue-text">Neuro</span> Vita</span>
            </div>
            <p className="footer-description">
              Sistema SaaS de gestão clínica com IA, telemedicina e diagnóstico 
              avançado. Construído com <strong>Java 21</strong> + <strong>Spring Boot 3</strong>.
            </p>
          </div>

          {/* COLUNAS DE LINKS - Nome da classe sincronizado com CSS */}
          <div className="footer-links-container reveal">
            <div className="footer-column">
              <h4>PLATAFORMA</h4>
              <ul>
                <li><a href="#resources">Recursos</a></li>
                <li><a href="#tech">Tecnologia</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><a href="#docs">Documentação</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>EMPRESA</h4>
              <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><a href="#careers">Carreiras</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>JURÍDICO</h4>
              <ul>
                <li><a href="#terms">Termos de Uso</a></li>
                <li><a href="#privacy">LGPD</a></li>
                <li><a href="#cookies">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* RODAPÉ FINAL */}
        <div className="footer-bottom reveal">
          <div className="footer-copy">
            © {currentYear} <strong>Neuro Vita</strong> — API v1.0.0
          </div>
          <div className="footer-security">
            <span>Conformidade LGPD</span>
            <span className="dot">•</span>
            <span>Dados criptografados em segurança</span>
          </div>
        </div>
      </div>
    </footer>
  );
}