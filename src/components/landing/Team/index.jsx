import React, { useEffect, useRef } from 'react';
import './Team.css';

export function Team() {
  const imageRef = useRef(null);

  useEffect(() => {
    const updateParallax = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const offset = (center - viewH / 2) / viewH;
      const translateY = offset * -30; 
      const rotate = offset * 1.5; 
      imageRef.current.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Equipe</span>
          <h2 className="section-title">
            Especialistas em<br /><span className="gold">Diagnóstico</span>
          </h2>
          <hr className="divider-gold" />
        </div>

        <div className="team-layout">
          <div className="team-image-wrapper parallax-float reveal from-left" ref={imageRef}>
            {/* Aqui está a imagem principal da equipe. Se quiser testar as outras, 
                basta trocar "Equipe.jpg" por "equipe-baixo.jpg" ou "House e Wilson.jpg" */}
            <img
              src="/assets/images/equipe/Equipe.jpg"
              alt="Equipe VitaClinic"
              loading="lazy"
            />
            <div className="team-image-frame"></div>
            <div className="team-image-glow"></div>
          </div>

          <div className="team-info">
            <div className="team-members">
              
              <div className="member-card reveal stagger-1">
                <img src="/assets/images/avatars/Dr. Gregory House.jpg" alt="Dr. Gregory House" className="member-avatar" />
                <div>
                  <h4 className="member-name">Dr. Gregory House</h4>
                  <div className="member-role">Chefe de Diagnóstico</div>
                  <p className="member-desc">
                    Nefrologia e Infectologia. Mestre em diagnósticos diferenciais, utiliza lógica pura para decifrar sintomas que outros ignoram.
                  </p>
                </div>
              </div>

              <div className="member-card reveal stagger-2">
                <img src="/assets/images/avatars/Dr. James Wilson.jpg" alt="Dr. James Wilson" className="member-avatar" />
                <div>
                  <h4 className="member-name">Dr. James Wilson</h4>
                  <div className="member-role">Chefe de Oncologia</div>
                  <p className="member-desc">
                    Oncologia Clínica. Focado no tratamento de tumores e suporte paliativo, sendo o pilar ético da equipe.
                  </p>
                </div>
              </div>

              <div className="member-card reveal stagger-3">
                <img src="/assets/images/avatars/Dr. Eric Foreman.jpg" alt="Dr. Eric Foreman" className="member-avatar" />
                <div>
                  <h4 className="member-name">Dr. Eric Foreman</h4>
                  <div className="member-role">Neurologista</div>
                  <p className="member-desc">
                    Especialista em desordens do sistema nervoso e funções cerebrais críticas.
                  </p>
                </div>
              </div>

              <div className="member-card reveal stagger-4">
                <img src="/assets/images/avatars/Dr. Robert Chase.jpg" alt="Dr. Robert Chase" className="member-avatar" />
                <div>
                  <h4 className="member-name">Dr. Robert Chase</h4>
                  <div className="member-role">Intensivista / Cirurgião</div>
                  <p className="member-desc">
                    Medicina Intensiva. Especialista em suporte à vida e procedimentos cirúrgicos de alta complexidade.
                  </p>
                </div>
              </div>

              <div className="member-card reveal stagger-5">
                <img src="/assets/images/avatars/Dra. Allison Cameron.jpg" alt="Dra. Allison Cameron" className="member-avatar" />
                <div>
                  <h4 className="member-name">Dra. Allison Cameron</h4>
                  <div className="member-role">Imunologista</div>
                  <p className="member-desc">
                    Focada em doenças autoimunes, alergias raras e o sistema de defesa do corpo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}