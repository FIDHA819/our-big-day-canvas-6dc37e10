import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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

        <div className="wedding-card p-4 md:p-6 animate-fade-in-up">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-muted group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Our Engagement Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
              The Proposal
            </h3>
            <p className="font-serif text-muted-foreground">
              A sunset proposal at our favorite beach, surrounded by love and happy tears
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="wedding-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Play className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">
              Save the Date Video
            </h4>
            <p className="font-serif text-sm text-muted-foreground">
              Watch our announcement
            </p>
          </div>

          <div className="wedding-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Play className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">
              Our Story
            </h4>
            <p className="font-serif text-sm text-muted-foreground">
              How we met and fell in love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
