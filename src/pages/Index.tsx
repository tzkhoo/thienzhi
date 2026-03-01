import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Community from '@/components/Community';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import ChatbotWidget from '@/components/ChatbotWidget';
import SplashCursor from '@/components/SplashCursor';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative">
      <AnimatedBackground />
      {isMobile ? (
        <SplashCursor SPLAT_RADIUS={0.03} SPLAT_FORCE={800} DENSITY_DISSIPATION={6} VELOCITY_DISSIPATION={4} />
      ) : (
        <SplashCursor SPLAT_RADIUS={0.06} SPLAT_FORCE={2400} />
      )}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Community />
        <Skills />
        <Contact />
        <ChatbotWidget />
      </div>
    </div>
  );
};

export default Index;
