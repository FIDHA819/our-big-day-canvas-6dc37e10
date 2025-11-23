import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const weddingDate = new Date("2025-06-15T16:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = weddingDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="space-y-6 mb-12">
          <h1 className="font-script text-7xl md:text-9xl islamic-heading animate-float">
            Sarah & Michael
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="font-serif text-xl md:text-2xl text-muted-foreground">
              Are Getting Married
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="font-serif text-lg md:text-xl text-foreground/80">
            June 15, 2025
          </p>
        </div>

        <div className="wedding-card max-w-3xl mx-auto p-8 md:p-12 bg-card/90">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Counting Down to Forever
          </h2>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="wedding-card p-4 md:p-6 bg-gradient-to-br from-islamic-cream to-background">
                  <span className="font-serif text-3xl md:text-5xl font-bold islamic-heading">
                    {item.value}
                  </span>
                </div>
                <p className="font-serif text-sm md:text-base text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
