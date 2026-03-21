import React from 'react';
import './About.css';

export function About() {
  return (
    <section className="section section-light" id="about">
      <div className="container">
        
        <div className="about-split-layout">
          
          {/* LADO ESQUERDO: Imagem de Brasília com Interatividade */}
          <div className="about-image-wrapper reveal from-left">
            <img 
              src="/assets/images/illustrations/Brasilia.png" 
              alt="Plano Piloto de Brasília" 
              className="brasilia-map"
            />
            
            {/* 1. Palácio do Itamaraty (Meio-Esquerda) */}
            <div className="hotspot" style={{ top: '45%', left: '15%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Palácio do Itamaraty</h4>
                <p>Sede das Relações Exteriores, famoso por seus arcos e belos espelhos d'água.</p>
              </div>
            </div>

            {/* 2. Palácio do Planalto (Topo-Esquerda) */}
            <div className="hotspot" style={{ top: '25%', left: '28%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Palácio do Planalto</h4>
                <p>Local de trabalho da Presidência da República, obra-prima de Oscar Niemeyer.</p>
              </div>
            </div>

            {/* 3. TCU - Tribunal de Contas (Inferior-Esquerda) */}
            <div className="hotspot" style={{ top: '65%', left: '28%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>TCU</h4>
                <p>Tribunal de Contas da União, guardião e fiscal do patrimônio e recursos públicos.</p>
              </div>
            </div>

            {/* 4. Congresso Nacional (Centro exato) */}
            <div className="hotspot" style={{ top: '40%', left: '50%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Congresso Nacional</h4>
                <p>Sede do poder legislativo brasileiro, abrigando a Câmara dos Deputados e o Senado.</p>
              </div>
            </div>

            {/* 5. Ponte JK (Topo, ao fundo) */}
            <div className="hotspot" style={{ top: '10%', left: '45%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Ponte JK</h4>
                <p>Com seus icônicos arcos assimétricos, cruza o Lago Paranoá com elegância premiada.</p>
              </div>
            </div>

            {/* 6. Parque da Cidade (Inferior-Centro) */}
            <div className="hotspot" style={{ top: '80%', left: '50%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Parque da Cidade</h4>
                <p>Um dos maiores parques urbanos do mundo, o verdadeiro coração verde de Brasília.</p>
              </div>
            </div>

            {/* 7. Catedral Metropolitana (Inferior-Direita) */}
            <div className="hotspot" style={{ top: '70%', left: '65%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Catedral Metropolitana</h4>
                <p>Com seus 16 pilares curvos de concreto, lembra mãos voltadas aos céus em prece.</p>
              </div>
            </div>

            {/* 8. Memorial JK (Topo-Direita) */}
            <div className="hotspot" style={{ top: '28%', left: '72%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>Memorial JK</h4>
                <p>Museu projetado em homenagem a Juscelino Kubitschek, o visionário fundador da cidade.</p>
              </div>
            </div>

            {/* 9. STF - Supremo Tribunal (Meio-Direita) */}
            <div className="hotspot" style={{ top: '45%', left: '85%' }}>
              <div className="hotspot-pin"></div>
              <div className="glass-card">
                <h4>STF</h4>
                <p>Supremo Tribunal Federal, a mais alta corte e instância do poder judiciário brasileiro.</p>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: O Novo Texto */}
          <div className="about-text-content reveal from-right">
            <div className="about-text-header">
              <span className="about-date">✦ Desde 2012 · Brasília - DF</span>
              <h2 className="about-title-main">VitaClinic</h2>
              <h3 className="about-title-sub">
                Unir o que a tecnologia tem de melhor à sensibilidade do cuidado humano.
              </h3>
            </div>
            
            <div className="about-body">
              <p>
                Fundada em Brasília - DF, em 2012, a VitaClinic nasceu com um propósito 
                claro: unir o que a tecnologia tem de melhor à sensibilidade do cuidado humano.
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
                A tecnologia só é poderosa se for acessível. 
                Desenvolvemos interfaces limpas e fluxos de trabalho otimizados para que médicos, 
                recepcionistas e pacientes gastem menos tempo com burocracia e mais tempo com o que realmente importa.
              </p>
            </div>
          </div>

        </div>

        {/* ===================*/}
        {/* CARTÃO DA DIRETORA */}
        {/* ===================*/}
        <div className="director-card reveal" style={{ marginTop: 'var(--space-16)' }}>
          <img
            src="/assets/images/avatars/Dra. Lisa Cuddy.jpg" 
            alt="Dra. Lisa Cuddy" 
            className="director-avatar" 
          />
          <div className="director-info">
            <h3 className="director-name">Dra. Lisa Cuddy</h3>
            <div className="director-role">Diretora da Clínica</div>
            <p className="director-desc">
              Responsável pela direção geral e supervisão de auditoria completa
              de ações, garantindo que o sistema cumpra rigorosamente as normas
              de conformidade e excelência operacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}