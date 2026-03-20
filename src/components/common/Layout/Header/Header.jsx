import React, { useEffect, useState } from 'react';
import './Header.css'; // Importa apenas o CSS do header

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // O trecho do seu <script> que controlava o scroll do nav vira este Hook:
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      {/* Cole aqui o HTML da sua logo e links */}
      <a href="#" className="nav-logo">...</a>
      
      <ul className="nav-links" style={{ display: menuOpen ? 'flex' : '' }}>
        <li><a href="#about">Sobre</a></li>
        {/* ... */}
      </ul>
      
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}