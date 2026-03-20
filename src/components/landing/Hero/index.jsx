import React, { useEffect, useRef } from 'react';
import './Hero.css';

export function Hero() {
  // Criamos "referências" para os elementos que vamos animar com o scroll
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const indicatorRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = heroRef.current;
    if (!video || !section) return;

    let videoDuration = 0;

    const handleLoadedMetadata = () => {
      videoDuration = video.duration;
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    // Força o carregamento para garantir que a metadata é lida
    video.load();

    const updateVideoOnScroll = () => {
      if (!videoDuration) return;

      const rect = section.getBoundingClientRect();
      const heroHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calcula o progresso do scroll através da secção hero (0 a 1)
      const scrolled = -rect.top;
      const totalScrollable = heroHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Mapeia o progresso para o tempo do vídeo com suavização linear
      const targetTime = progress * videoDuration;
      const currentTime = video.currentTime;
      const diff = targetTime - currentTime;
      const smoothTime = currentTime + diff * 0.15; 

      video.currentTime = Math.max(0, Math.min(videoDuration, smoothTime));

      // Atualiza a barra de progresso do vídeo
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      // Faz fade-out no indicador de scroll
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = Math.max(0, 1 - progress * 4);
      }

      // Efeito Parallax no conteúdo principal
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${progress * -60}px)`;
        contentRef.current.style.opacity = Math.max(0, 1 - progress * 1.5);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateVideoOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <>
      {/* Barra de Progresso do Vídeo que ficava solta no body */}
      <div className="video-progress" ref={progressRef}></div>

      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero-sticky">
          <div className="hero-video-container">
            <video
              className="hero-video"
              ref={videoRef}
              src="/assets/videos/Video_De_Explosao_Cosmica.mp4"
              muted
              playsInline
              preload="auto"
            ></video>
          </div>
          <div className="hero-overlay"></div>

          <div className="hero-content" ref={contentRef}>
            <div className="hero-badge reveal">
              <span className="hero-badge-dot"></span>
              Sistema de Gestão Clínica — API REST
            </div>

            <h1 className="hero-title">
              <span className="line stroke-text">Vita</span>
              <span className="line filled-text">Clinic</span>
              <span className="line small-text">
                Robustez e Genialidade em Diagnóstico
              </span>
            </h1>

            <p className="hero-subtitle reveal">
              Combinamos inteligência artificial com expertise humana. Agilidade,
              segurança e experiência do utilizador numa plataforma construída com
              <strong> Java 21</strong> e <strong>Spring Boot 3</strong>.
            </p>

            <div className="hero-actions reveal">
              <a href="#features" className="btn btn-gold">Explorar Recursos</a>
              <a href="#team" className="btn btn-ghost">Conhecer Equipa</a>
            </div>
          </div>

          <div className="scroll-indicator" ref={indicatorRef}>
            <span>Scroll</span>
            <div className="scroll-indicator-line"></div>
          </div>
        </div>
      </section>
    </>
  );
}