import { MapPin, Calendar, Clock, Users } from "lucide-react";

const VenueSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-islamic-cream/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-7xl islamic-heading mb-4">
            When & Where
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl gold-accent">🕌</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        {/* Nikah Ceremony Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-elegant text-3xl md:text-4xl text-foreground mb-2">
              Nikah Ceremony
            </h3>
            <p className="font-serif text-muted-foreground">
              Islamic Wedding Ceremony
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Men's Nikah */}
            <div className="wedding-card p-6 md:p-8 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  Men's Ceremony
                </h4>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Date</p>
                    <p className="font-serif text-foreground">June 15, 2025 • Saturday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Time</p>
                    <p className="font-serif text-foreground">2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Venue</p>
                    <p className="font-serif text-foreground">Grand Mosque Hall</p>
                    <p className="font-serif text-sm text-muted-foreground">123 Mosque Street, City</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border/50 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395858163244!2d-122.03027!3d37.38605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA5LjgiTiAxMjLCsDAxJzQ4LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Men's Nikah venue location"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/37.38605,-122.03027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Women's Nikah */}
            <div className="wedding-card p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  Women's Ceremony
                </h4>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Date</p>
                    <p className="font-serif text-foreground">June 15, 2025 • Saturday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Time</p>
                    <p className="font-serif text-foreground">2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Venue</p>
                    <p className="font-serif text-foreground">Grand Banquet Hall</p>
                    <p className="font-serif text-sm text-muted-foreground">456 Wedding Avenue, City</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border/50 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395858163244!2d-122.03027!3d37.38605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA5LjgiTiAxMjLCsDAxJzQ4LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Women's Nikah venue location"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/37.38605,-122.03027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reception Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-elegant text-3xl md:text-4xl text-foreground mb-2">
              Wedding Reception
            </h3>
            <p className="font-serif text-muted-foreground">
              Celebration & Dinner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Men's Reception */}
            <div className="wedding-card p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  Men's Reception
                </h4>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Date</p>
                    <p className="font-serif text-foreground">June 16, 2025 • Sunday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Venue</p>
                    <p className="font-serif text-foreground">Royal Gardens</p>
                    <p className="font-serif text-sm text-muted-foreground">789 Reception Road, City</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border/50 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395858163244!2d-122.03027!3d37.38605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA5LjgiTiAxMjLCsDAxJzQ4LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Men's Reception venue location"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/37.38605,-122.03027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Women's Reception */}
            <div className="wedding-card p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  Women's Reception
                </h4>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Date</p>
                    <p className="font-serif text-foreground">June 16, 2025 • Sunday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-muted-foreground">Venue</p>
                    <p className="font-serif text-foreground">Crystal Palace</p>
                    <p className="font-serif text-sm text-muted-foreground">321 Celebration Street, City</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border/50 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395858163244!2d-122.03027!3d37.38605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzA5LjgiTiAxMjLCsDAxJzQ4LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Women's Reception venue location"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/37.38605,-122.03027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-primary hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
