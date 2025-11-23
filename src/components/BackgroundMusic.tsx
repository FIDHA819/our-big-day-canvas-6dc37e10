import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play().catch(() => {
            setIsPlaying(false);
          });
          setIsPlaying(true);
        }
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    return () => document.removeEventListener('click', handleInteraction);
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/path-to-your-music.mp3"
      />
      <Button
        onClick={togglePlay}
        size="icon"
        variant="outline"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card shadow-[var(--shadow-card)]"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-primary" />
        ) : (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
    </>
  );
};

export default BackgroundMusic;
