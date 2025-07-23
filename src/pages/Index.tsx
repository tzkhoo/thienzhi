import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Community from '@/components/Community';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Community />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
