import React, { useEffect } from 'react';
import { Loader } from '../../../components/common/Loader';
import { Navbar } from '../../../components/common/Layout/Navbar';
import { Hero } from '../../../components/landing/Hero';
import { Marquee } from '../../../components/landing/Marquee';
import { Stats } from '../../../components/landing/Stats';
import { About } from '../../../components/landing/About';
import { Features } from '../../../components/landing/Features';
import { Resources } from '../../../components/landing/Resources';
import { Team } from '../../../components/landing/Team';
import { TechStack } from '../../../components/landing/TechStack';
import { CTA } from '../../../components/landing/CTA';
import { Footer } from '../../../components/common/Layout/Footer';

export function LandingPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <main>
      <Hero />
      <Marquee/>
      <Stats />
      <About />
      <Features />
      <Resources />
      <Team />
      <TechStack />
      <CTA />
      </main>
      <Footer />

    </>
  );
}