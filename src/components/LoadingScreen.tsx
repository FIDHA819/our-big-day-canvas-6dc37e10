import { useEffect } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import ourphoto from "@/assets/ourphoto.jpg";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ourphoto})` }}
      />
      
      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8 animate-float">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <img 
              src={ourphoto} 
              alt="Sarah & Michael" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="font-script text-6xl md:text-8xl islamic-heading mb-4 animate-fade-in-up">
        Fidha & Asif
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="font-serif text-xl text-muted-foreground">
            December 20 2025
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="flex justify-center gap-2 mt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
