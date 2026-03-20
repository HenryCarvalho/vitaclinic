import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importa apenas os estilos do menu

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Substitui a lógica de scroll que estava na tag <script>
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src="/assets/images/logo/logo.png" alt="VitaClinic" />
        <span className="nav-logo-text">Vita<span>Clinic</span></span>
      </a>
      
      <ul className="nav-links" style={{ display: menuOpen ? 'flex' : '' }}>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#features">Recursos</a></li>
        <li><a href="#team">Equipe</a></li>
        <li><a href="#tech">Tecnologia</a></li>
        <li><a href="#contact" className="nav-cta">Agendar Demo</a></li>
      </ul>
      
      <button 
        className="nav-toggle" 
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}