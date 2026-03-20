import React, { useEffect, useRef } from 'react';
import './Stats.css';

export function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    // A lógica de intersecção (quando a secção entra na tela)
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            
            // Se não tiver target ou já tiver animado, ignoramos
            if (!target || el.dataset.animated === 'true') return;
            el.dataset.animated = 'true';

            // Recolhemos o sufixo (%, +, etc)
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const increment = target / 60; // 60 frames
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              // Atualizamos o texto do elemento com o número e o sufixo
              el.textContent = Math.floor(current) + suffix;
            }, 25);
          }
        });
      },
      { threshold: 0.5 } // Só anima quando 50% do elemento estiver visível
    );

    // Observa cada número dentro do container
    const elements = statsRef.current?.querySelectorAll('.stat-number');
    elements?.forEach((el) => counterObserver.observe(el));

    // Limpeza do observer quando o componente for desmontado
    return () => {
      elements?.forEach((el) => counterObserver.unobserve(el));
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="stats-row" ref={statsRef}>
      <div className="stat-item reveal stagger-1">
        <div className="stat-number" data-count="98" data-suffix="%">0%</div>
        <div className="stat-label">Satisfação</div>
      </div>
      
      <div className="stat-item reveal stagger-2">
        <div className="stat-number" data-count="2400" data-suffix="">0</div>
        <div className="stat-label">Consultas / Mês</div>
      </div>
      
      <div className="stat-item reveal stagger-3">
        <div className="stat-number" data-count="150" data-suffix="+">0+</div>
        <div className="stat-label">Médicos Ativos</div>
      </div>
      
      <div className="stat-item reveal stagger-4">
        <div className="stat-number" data-count="99" data-suffix="%">0%</div>
        <div className="stat-label">Uptime SLA</div>
      </div>
    </div>
  );
}