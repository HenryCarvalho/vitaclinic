import React, { useEffect, useState } from 'react';
import './Loader.css';

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Esconde o loader após 2 segundos (igual ao seu HTML original)
    const timer = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} id="loader">
      <img src="/assets/images/logo/logo.png" alt="Neuro Vita" className="loader-logo" />
      <div className="loader-bar"><div className="loader-bar-fill"></div></div>
    </div>
  );
}