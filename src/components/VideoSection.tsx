import React from "react";
import { Play } from "lucide-react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-7xl romantic-heading mb-4">
            Our Journey
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl">🎥</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <p className="font-serif text-lg text-muted-foreground">
            Relive the magical moment when our forever began
          </p>
        </div>

        {/* Video card */}
        <div className="wedding-card p-4 md:p-6 animate-fade-in-up">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-muted group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EyKnMbNJOm4"
              title="Our Engagement Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Subtitle / description */}
        <div className="mt-6 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
            Our Engagement - June 14 2025
          </h3>
          <p className="font-serif text-muted-foreground">
           The day we said "Yes" to forever! Watch as we celebrate our love and commitment surrounded by family and friends.
          </p>
        </div>

   

      </div>
    </section>
  );
};

export default VideoSection;
