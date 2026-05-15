"use client"; // Wajib untuk menggunakan useEffect
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Image from 'next/image'; // Gunakan <Image /> untuk optimasi gambar
import styles from './CardSection.module.css'; // Impor CSS Module
import './global.css'; // Impor CSS global
import { useLanguage } from "@/context/LanguageContext";

// Data untuk marquee items
const marqueeItems = [
  { text: { pt: " Engenharia de Software ", en: " Software Engineering " }, img: "/images/image1.png" },
  { text: { pt: " Análise de Dados ", en: " Data Analysis " }, img: "/images/image1.png" },
  { text: { pt: " Desenvolvimento Backend ", en: " Backend Development " }, img: "/images/image1.png" }
];

const CardSection: React.FC = () => {
  const { language } = useLanguage();
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Inisialisasi GSAP dan ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Smooth scroll dengan Lenis
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const cards = cardsRef.current;
      const totalScrollHeight = window.innerHeight * 2;
      const positions = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      // Pin cards section
      ScrollTrigger.create({
        trigger: `.${styles.cards}`,
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      // Spread cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.cards}`,
            start: 'top top',
            end: () => `+=${window.innerHeight * 0.5}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      // Rotate and flip cards with staggered effect
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(`.${styles.flipCardFront}`) as HTMLElement;
        const backEl = card.querySelector(`.${styles.flipCardBack}`) as HTMLElement;

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: `.${styles.cards}`,
          start: 'top top',
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              if (frontEl && backEl) {
                frontEl.style.transform = `rotateY(${frontRotation}deg)`;
                backEl.style.transform = `rotateY(${backRotation}deg)`;
                card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
              }
            }
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Fungsi untuk menghasilkan marquee items secara dinamis
  const generateMarqueeItems = () => {
    return [...Array(2)].map((_, i) => (
      <div className={styles.marqueeContent} key={i}>
        {marqueeItems.map((item, index) => (
          <React.Fragment key={`${i}-${index}`}>
            <span>{item.text[language]}</span>
            <span className="mx-4 text-cyan-400/50">•</span>
          </React.Fragment>
        ))}
      </div>
    ));
  };

  return (
    <div>
      {/* Cards Section */}
      <section className={styles.cards}>
        <h2 className="absolute top-[10%] left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-bold text-white/10 tracking-[0.3em] uppercase z-0 pointer-events-none whitespace-nowrap">
          {language === 'pt' ? 'Habilidades & Especialidades' : 'Skills & Specialties'}
        </h2>
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className={styles.card}
            id={`card-${id}`}
            ref={(el) => {
              if (el) cardsRef.current[id - 1] = el;
            }}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.flipCardInner}>
                {/* Front Side */}
                <div className={`${styles.flipCardFront} flex items-center justify-center bg-black border border-white/10 relative overflow-hidden`}>
                  <Image
                    src={id === 2 ? "/images/pokemon-back-clean.png" : id === 4 ? "/images/magic-back.jpg" : "/images/yugioh-back.jpg"}
                    alt={id === 2 ? "Pokemon Card Back" : id === 4 ? "Magic Card Back" : "Yu-Gi-Oh Card Back"}
                    layout="fill"
                    objectFit="cover"
                    className={`absolute inset-0 w-full h-full ${id === 2 ? 'scale-[1.65]' : id === 4 ? 'scale-[1.05]' : ''}`}
                  />
                </div>

                {/* Back Side */}
                <div className={`${styles.flipCardBack} flex items-center justify-center bg-[#080808] border border-white/20 px-2`}>
                  <Image
                    src={
                      id === 1 ? "/images/eng-software.jpg" : 
                      id === 2 ? "/images/data-analytics.jpg" : 
                      id === 3 ? "/images/back-end.png" :
                      "/images/automacao-sistemas.jpg"
                    }
                    alt={
                      id === 1 ? "Engenharia de Software" : 
                      id === 2 ? "Data Analytics" : 
                      id === 3 ? "Backend Development" :
                      "Automação de Sistemas"
                    }
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <section className={styles.footer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {generateMarqueeItems()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;