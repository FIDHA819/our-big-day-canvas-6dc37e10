import { MapPin, Calendar, Clock } from "lucide-react";

const VenueSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-romantic-cream/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-7xl romantic-heading mb-4">
            When & Where
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl">💒</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="wedding-card p-6 text-center group hover:shadow-[var(--shadow-soft)] transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
              Date
            </h3>
            <p className="font-serif text-muted-foreground">
              June 15, 2025
            </p>
            <p className="font-serif text-sm text-muted-foreground mt-1">
              Saturday
            </p>
          </div>

          <div className="wedding-card p-6 text-center group hover:shadow-[var(--shadow-soft)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
              Time
            </h3>
            <p className="font-serif text-muted-foreground">
              4:00 PM
            </p>
            <p className="font-serif text-sm text-muted-foreground mt-1">
              Ceremony begins
            </p>
          </div>

          <div className="wedding-card p-6 text-center group hover:shadow-[var(--shadow-soft)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
              Venue
            </h3>
            <p className="font-serif text-muted-foreground">
              The Grand Garden
            </p>
            <p className="font-serif text-sm text-muted-foreground mt-1">
              Estate & Chapel
            </p>
          </div>
        </div>

        <div className="wedding-card p-6 md:p-8 animate-fade-in">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
              Ceremony & Reception
            </h3>
            <p className="font-serif text-muted-foreground mb-4">
              123 Garden Boulevard, Blossom Valley, CA 94000
            </p>
            <p className="font-serif text-foreground/80 leading-relaxed">
              Join us at the enchanting Grand Garden Estate, where lush gardens and elegant architecture 
              create the perfect backdrop for our special day. The ceremony will take place in the 
              beautiful chapel, followed by cocktails and reception in the garden pavilion.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-border/50 h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395858163244!2d-122.03027!3d37.38605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA5LjgiTiAxMjLCsDAxJzQ4LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location on Google Maps"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/37.38605,-122.03027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
