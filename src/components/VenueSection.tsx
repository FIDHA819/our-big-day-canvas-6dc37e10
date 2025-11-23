import React from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const VenueSection: React.FC = () => {
  // Coordinates used for embeds & directions:
  const nikahCoords = "11.9448786,75.3872281";
  const mensReceptionCoords = "11.9098186,75.4680862";
  const womensReceptionCoords = "11.92,75.4";

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
    <article className="wedding-card p-6 md:p-8 animate-fade-in-up mx-auto max-w-md w-full">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Users className="w-6 h-6 text-primary-foreground" />
        </div>
        <h4 className="font-serif text-xl font-semibold text-foreground">{title}</h4>
      </div>

      <div className="space-y-4 mb-6 text-center">
        {/* Date */}
        <div className="flex items-start gap-3 justify-center">
          <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-serif text-sm text-muted-foreground">Date</p>
            <p className="font-serif text-foreground">{date}</p>
          </div>
        </div>

        {/* Optional Asr */}
        {asrLabel && asrTime && (
          <div className="flex items-start gap-3 justify-center">
            <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-serif text-sm text-muted-foreground">{asrLabel}</p>
              <p className="font-serif text-foreground">{asrTime}</p>
              <p className="font-serif text-xs text-muted-foreground">Nikah will commence shortly after Asr</p>
            </div>
          </div>
        )}

       

        {/* Venue */}
        <div className="flex items-start gap-3 justify-center">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-serif text-sm text-muted-foreground">Venue</p>
            <p className="font-serif text-foreground">{venueName}</p>
            <p className="font-serif text-sm text-muted-foreground">{venueAddr}</p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-border/50 h-[180px] mt-4 mx-auto max-w-sm">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(coords)}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={iframeTitle}
          />
        </div>

        {/* Directions */}
        <div className="mt-4 text-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coords)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-islamic-cream/30 to-background">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-6xl islamic-heading mb-3">When & Where</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl gold-accent">🕌</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </header>

        {/* THREE-COLUMN GRID: Nikah | Men's Reception | Women's Reception */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start">
          <Card
            title="Nikah Ceremony"
            date="December 20, 2025 • Saturday"
            asrLabel="Asr Prayer Time"
            asrTime="3:45 PM"
            timeLabel="Nikah Time"
            time="4:00 PM"
            venueName="Darul Hasanath Jumah Masjid"
            venueAddr="Kattampally, Kannadiparamba – Munderi Road, Kerala"
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
