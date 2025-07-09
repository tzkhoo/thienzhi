import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse blur-xl"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/15 rounded-full animate-pulse blur-lg animation-delay-1000"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/2 left-1/6 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rotate-45 animate-spin-slow blur-sm animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rotate-45 animate-spin-slow blur-sm"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rotate-12 animate-spin-slow blur-sm animation-delay-3000"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-cyan-500/20 rounded"></div>
          ))}
        </div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-drift-1"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full blur-3xl animate-drift-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-600/15 to-cyan-600/15 rounded-full blur-2xl animate-drift-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
