
import React from 'react';
import { cn } from '@/lib/utils';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 gradient-background">
      {/* Animated shapes */}
      <div 
        className="coming-soon-shape w-64 h-64 bg-purple-light/40 animate-float"
        style={{ top: '15%', left: '15%', animationDelay: '0s' }}
      />
      <div 
        className="coming-soon-shape w-48 h-48 bg-blue-light/40 animate-float"
        style={{ top: '60%', right: '10%', animationDelay: '1s' }}
      />
      <div 
        className="coming-soon-shape w-72 h-72 bg-purple/30 animate-float"
        style={{ bottom: '10%', left: '5%', animationDelay: '2s' }}
      />
      <div 
        className="coming-soon-shape w-40 h-40 bg-blue/30 animate-float"
        style={{ top: '25%', right: '25%', animationDelay: '3s' }}
      />
      <div 
        className="coming-soon-shape w-56 h-56 bg-purple-dark/20 animate-spin-slow"
        style={{ top: '40%', left: '30%' }}
      />
    </div>
  );
};

export default AnimatedBackground;
