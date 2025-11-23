import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgm from "@/assets/Remo-bgm.mp3"; // rename file to remo-bgm.mp3 to be safe

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleInteraction = async () => {
      if (hasInteracted) return;
      setHasInteracted(true);

      const audio = audioRef.current;
      if (!audio) return;

      try {
        // try to play after user interaction
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio play failed after interaction:", err);
        setIsPlaying(false);
      }
    };

    // listen for first user interaction (click/touch/keydown)
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Play failed on toggle:", err);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
    <audio ref={audioRef} loop preload="auto" playsInline src={bgm} />
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
