import React, { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se descer mais de 50px, ativa o estado 'scrolled'
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        <div className="navbar-logo">
          {/* Usei o filtro para garantir que a logo apareça bem no fundo escuro */}
          <img 
            src="/assets/images/logo/logo.png" 
            alt="Neuro Vita" 
            className="logo-img" 
            style={{ filter: 'brightness(1.2)' }} 
          />
          <div className="logo-text">
            <span className="blue-text">Neuro</span> Vita
          </div>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="#home">Página Inicial</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#resources">Recursos</a></li>
            <li><a href="#location">Localização</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="navbar-btn btn-primary">Entrar</button>
        </div>

      </div>
    </nav>
  );
}