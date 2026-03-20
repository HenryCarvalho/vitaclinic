import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal'; // Importa o Hook

import { Loader } from '../../../components/common/Loader';
import { Navbar } from '../../../components/common/Layout/Navbar';
import { Hero } from '../../../components/landing/Hero';
import { Marquee } from '../../../components/landing/Marquee';
import { Stats } from '../../../components/landing/Stats';
import { About } from '../../../components/landing/About';
import { Features } from '../../../components/landing/Features';
import { Team } from '../../../components/landing/Team';
import { TechStack } from '../../../components/landing/TechStack';
import { CTA } from '../../../components/landing/CTA';
import { Footer } from '../../../components/common/Layout/Footer';

export function LandingPage() {
  // Ativa as animações de scroll para esta página
  useScrollReveal();

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Features />
        <Team />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}