import React from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const VenueSection: React.FC = () => {
  // Coordinates used for embeds & directions:
  const nikahCoords = "11.9448786,75.3872281";
  const mensReceptionCoords = "11.9098186,75.4680862";
  const womensReceptionCoords = "11.9098186,75.4680862";

  const Card = ({
    title,
    date,
    timeLabel,
    time,
    asrLabel,
    asrTime,
    venueName,
    venueAddr,
    coords,
    iframeTitle,
  }: {
    title: string;
    date: string;
    timeLabel?: string;
    time?: string;
    asrLabel?: string;
    asrTime?: string;
    venueName: string;
    venueAddr: string;
    coords: string;
    iframeTitle: string;
  }) => (
    <article className="w-full max-w-sm md:max-w-md wedding-card p-6 md:p-8 animate-fade-in-up mx-auto">
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
          <Users className="w-6 h-6 text-primary-foreground" />
        </div>
        <h4 className="font-serif text-lg md:text-xl font-semibold text-foreground text-center">{title}</h4>
      </div>

      <div className="space-y-4 mb-6">
        {/* Date */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 text-center md:text-left">
          <Calendar className="w-5 h-5 text-primary mt-0 flex-shrink-0" />
          <div>
            <p className="font-serif text-sm text-muted-foreground">Date</p>
            <p className="font-serif text-foreground">{date}</p>
          </div>
        </div>

        {/* Optional Asr */}
        {asrLabel && asrTime && (
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 text-center md:text-left">
            <Clock className="w-5 h-5 text-primary mt-0 flex-shrink-0" />
            <div>
              <p className="font-serif text-sm text-muted-foreground">{asrLabel}</p>
              <p className="font-serif text-foreground">{asrTime}</p>
              <p className="font-serif text-xs text-muted-foreground">Nikah will commence shortly after Asr</p>
            </div>
          </div>
        )}

        {/* Venue */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 text-center md:text-left">
          <MapPin className="w-5 h-5 text-primary mt-0 flex-shrink-0" />
          <div>
            <p className="font-serif text-sm text-muted-foreground">Venue</p>
            <p className="font-serif text-foreground">{venueName}</p>
            <p className="font-serif text-sm text-muted-foreground">{venueAddr}</p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-4 mx-auto w-full max-w-sm md:max-w-md rounded-lg overflow-hidden border border-border/50">
          <div className="relative w-full aspect-[16/9]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(coords)}&z=16&output=embed`}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={iframeTitle}
            />
          </div>
        </div>

        {/* Directions */}
        <div className="mt-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coords)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300 w-full md:w-auto px-4 py-2 border border-transparent rounded-md bg-primary/5 hover:bg-accent/5"
            aria-label={`Get directions to ${venueName}`}
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-islamic-cream/30 to-background">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl wedding-heading mb-3">When & Where</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl gold-accent">🕌</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </header>

        {/* RESPONSIVE GRID: 1 column on xs, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <Card
            title="Nikah Ceremony"
            date="December 20, 2025 • Saturday"
            asrLabel="Asr Prayer Time"
            asrTime="3:45 PM"
            timeLabel="Nikah Time"
            time="4:00 PM"
            venueName="Darul Hasanath  Masjid"
            venueAddr="Niduvat, Kannadiparamba – Kannur, Kerala"
            coords={nikahCoords}
            iframeTitle="Nikah venue location"
          />

          <Card
            title="Men's Reception"
            date="December 20, 2025 • Saturday"
            timeLabel="Reception Time"
            time="7:30 PM"
            venueName="Farasha"
            venueAddr="Bride's House"
            coords={mensReceptionCoords}
            iframeTitle="Men's Reception venue location"
          />

          <Card
            title="Women's Reception"
            date="December 21, 2025 • Sunday"
            timeLabel="Reception Time"
            time="6:00 PM"
            venueName="Farasha"
            venueAddr="Bride's House"
            coords={womensReceptionCoords}
            iframeTitle="Women's Reception venue location"
          />
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
