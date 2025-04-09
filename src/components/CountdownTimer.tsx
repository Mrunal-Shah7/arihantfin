
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-4 sm:space-x-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex flex-col items-center">
        <div className="glassmorphism w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <span className="text-xs sm:text-sm mt-2 text-white/80">Days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glassmorphism w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</span>
        </div>
        <span className="text-xs sm:text-sm mt-2 text-white/80">Hours</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glassmorphism w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs sm:text-sm mt-2 text-white/80">Minutes</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glassmorphism w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs sm:text-sm mt-2 text-white/80">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
