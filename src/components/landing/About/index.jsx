import React from 'react';
import './About.css';

export function About() {
  return (
    <section className="section section-light" id="about">
      <div className="container">
        
        {/* CABEÇALHO: Fora do grid para ocupar o topo todo */}
        <div className="section-header centered reveal">
          <span className="section-label">Desde 2012 · Brasília - DF</span>
          <h2 className="section-title">Neuro Vita</h2>
          <h3 className="section-subtitle">
            Unir o que a tecnologia tem de melhor à sensibilidade do cuidado humano.
          </h3>
          <hr className="divider-gold centered" />
        </div>

        <div className="about-split-layout">
          
          {/* LADO ESQUERDO: Imagem com os 9 Pins */}
          <div className="about-image-wrapper reveal from-left">
            <img 
              src="/assets/images/illustrations/Brasilia.png" 
              alt="Plano Piloto de Brasília" 
              className="brasilia-map"
            />
            
            {/* 1. Palácio do Itamaraty */}
            <div className="hotspot" style={{ top: '45%', left: '15%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Palácio do Itamaraty</h4>
                <p>Sede das Relações Exteriores, famoso por seus arcos e espelhos d'água.</p>
              </div>
            </div>

            {/* 2. Palácio do Planalto */}
            <div className="hotspot" style={{ top: '25%', left: '28%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Palácio do Planalto</h4>
                <p>Local de trabalho da Presidência, obra-prima de Oscar Niemeyer.</p>
              </div>
            </div>

            {/* 3. TCU */}
            <div className="hotspot" style={{ top: '65%', left: '28%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>TCU</h4>
                <p>Fiscal do patrimônio e dos recursos públicos federais.</p>
              </div>
            </div>

            {/* 4. Congresso Nacional */}
            <div className="hotspot" style={{ top: '50%', left: '50%' }}>
              <div className="hotspot-pin main-location"></div>
              <div className="glass-card">
                <h4>Congresso</h4>
                <p>Sede do poder legislativo, o ícone máximo da capital.</p>
              </div>
            </div>

            {/* 5. Ponte JK */}
            <div className="hotspot" style={{ top: '10%', left: '45%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Ponte JK</h4>
                <p>Icônicos arcos assimétricos sobre o Lago Paranoá.</p>
              </div>
            </div>

            {/* 6. Parque da Cidade */}
            <div className="hotspot" style={{ top: '80%', left: '50%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Parque da Cidade</h4>
                <p>O maior parque urbano do mundo e coração verde da cidade.</p>
              </div>
            </div>

            {/* 7. Catedral Metropolitana */}
            <div className="hotspot" style={{ top: '70%', left: '65%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Catedral Metropolitana</h4>
                <p>16 pilares curvos que lembram mãos em prece aos céus.</p>
              </div>
            </div>

            {/* 8. Memorial JK */}
            <div className="hotspot" style={{ top: '28%', left: '72%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Memorial JK</h4>
                <p>Homenagem a Juscelino Kubitschek, o fundador visionário.</p>
              </div>
            </div>

            {/* 9. STF */}
            <div className="hotspot" style={{ top: '45%', left: '85%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>STF</h4>
                <p>Supremo Tribunal Federal, a instância máxima do judiciário.</p>
              </div>
            </div>

            {/* 10. Céu de Brasília */}
            <div className="hotspot" style={{ top: '10%', left: '20%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Céu de Brasília</h4>
                <p>Céu de Brasília: imenso, limpo e impossível de ignorar.</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Texto Institucional */}
          <div className="about-text-content reveal from-right">
            <div className="about-body">
              <p>
                Fundada em Brasília - DF, em 2012, a <strong>Neuro Vita</strong> nasceu com um propósito 
                claro: unir o que a tecnologia tem de melhor à sensibilidade do cuidado humano...
              </p>
              <p>
                Mais do que uma plataforma de gestão em saúde, somos uma ponte entre a 
                eficiência digital e o acolhimento essencial para pacientes e profissionais. 
              </p>
              <p>
                Localizada no coração do Plano Piloto, nossa missão é transformar a jornada 
                clínica por meio de soluções ágeis, seguras e centradas na experiência de 
                quem mais importa: as pessoas.
              </p>
              <p>
                A tecnologia só é poderosa se for acessível. Desenvolvemos interfaces limpas 
                para que médicos e pacientes gastem menos tempo com burocracia.
              </p>
            </div>
          </div>
        </div>

        {/* CARTÃO DA DIRETORA */}
        <div className="director-card reveal">
          <img 
            src="/assets/images/avatars/Dra. Lisa Cuddy.jpg" 
            alt="Dra. Lisa Cuddy" 
            className="director-avatar" 
          />
          <div className="director-info">
            <h3 className="director-name">Dra. Lisa Cuddy</h3>
            <div className="director-role">Diretora da Clínica</div>
            <p className="director-desc">
              Responsável pela direção geral e supervisão de auditoria completa, 
              garantindo conformidade e excelência operacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}