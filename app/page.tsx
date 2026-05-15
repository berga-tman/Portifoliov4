'use client';

import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";
import App from '@/components/band/App';
import CardSection from "@/components/card/CardSection";
import ColorBends from "@/components/ColorBends";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      {/* Background Animado Global em posição fixa e camada inferior */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <ColorBends
          rotation={70}
          speed={0.2}
          colors={["#5227FF","#FF9FFC","#7cff67","#ffffff"]}
          transparent
          autoRotate={0.5}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1.6}
          parallax={0.5}
          noise={0.15}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
        />
      </div>
  
      <div style={{ minHeight: "100vh", width: "100vw", position: "relative", zIndex: 10 }}>
        {/* Componente Hero / 3D Band no primeiro plano */}
        <App />
      </div>  

      <div className="w-full max-w-7xl relative z-10">
        <Grid/> 
        <CardSection />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
