import { useEffect, useState } from 'react';
import { userInfo } from "@/data/user-data";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-title-glow animate-title-float">
            {userInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {userInfo.summary_1}
          </p>
          <p className="text-xl md:text-1xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {userInfo.summary_2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open(userInfo.contact.linkedin, '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              LinkedIn
            </button>
            <button 
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open(userInfo.contact.CV, '_blank')}
            >
              Thien Zhi's CV
            </button>
          </div>
        </div>
      </div>
      
      {/* Cosmic energy rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/15 rounded-full animate-spin-slow animation-delay-2000" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full animate-spin-slow animation-delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
