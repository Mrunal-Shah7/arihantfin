
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CountdownTimer from '@/components/CountdownTimer';
import SubscriptionForm from '@/components/SubscriptionForm';
import SocialLinks from '@/components/SocialLinks';
import { Toaster } from 'sonner';

const Index = () => {
  // Set the launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <AnimatedBackground />
      <Toaster position="top-center" toastOptions={{ style: { background: 'rgba(255, 255, 255, 0.9)', color: '#333' } }} />
      
      <div className="container max-w-4xl mx-auto flex flex-col items-center z-10 py-12">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Something Amazing is Coming Soon
          </h1>
          
          <p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            We're working on something exciting! Our website is under construction, 
            but we're close to launching. Stay tuned for updates.
          </p>
        </div>
        
        <div className="mt-12 w-full">
          <CountdownTimer targetDate={launchDate} />
        </div>
        
        <div className="mt-12 w-full">
          <SubscriptionForm />
        </div>
        
        <SocialLinks />
        
        <div 
          className="mt-16 text-white/60 text-sm opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          © {new Date().getFullYear()} ArihantFin. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
