import brideImage from "@/assets/bride.jpg";
import groomImage from "@/assets/groom.jpg";

const CoupleSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-7xl romantic-heading mb-4">
            The Happy Couple
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl">❤️</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Two hearts, one beautiful journey. Join us as we celebrate the love that brought us together 
            and the future we're building as one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="wedding-card p-8 group hover:shadow-[var(--shadow-soft)] transition-all duration-500 animate-fade-in-up">
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4]">
              <img 
                src={brideImage} 
                alt="Beautiful bride Fidha"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-script text-4xl romantic-heading mb-3">
           Fidha Fathima 
            </h3>
            <p className="font-serif text-muted-foreground italic mb-4">
              The Bride
            </p>
            <p className="font-serif text-foreground/80 leading-relaxed">
           D/o Mr.Hafeel & Mrs.Sabira. A compassionate and creative soul, Fidha's warmth and grace inspire everyone around her.
            </p>
          </div>

          <div className="wedding-card p-8 group hover:shadow-[var(--shadow-soft)] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4]">
              <img 
                src={groomImage} 
                alt="Handsome groom Asif"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-script text-4xl romantic-heading mb-3">
             Muhammed Asif            </h3>
            <p className="font-serif text-muted-foreground italic mb-4">
              The Groom
            </p>
            <p className="font-serif text-foreground/80 leading-relaxed">
             S/o Mr.Haris & Mrs.Naseema. A kind-hearted and driven individual, Asif's dedication and humor light up every room he enters.
            </p>
          </div>
        </div>

<div className="wedding-card p-8 md:p-12 mt-12 bg-gradient-to-br from-romantic-cream/50 to-card text-center animate-fade-in">

 {/* Arabic */}
  <p className="font-serif text-foreground/80 leading-relaxed max-w-3xl mx-auto" dir="rtl" lang="ar">
    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم<br/>
    ما شاءَ اللهُ، نتشرّف بدعوتكم لمشاركتنا هذا اليوم المبارك.<br/>
    وجودكم ودعواتكم تزيد فرحتنا وتبارك لنا.<br/>
    إن شاءَ الله نلتقي بكم ونحتفل معًا بهذه المناسبة السعيدة.
  </p>
  {/* English */}
  <p className="font-serif text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-6">
    In the name of Allah, the Most Merciful, the Most Kind (Bismillah).
    With hearts filled with gratitude, Masha Allah, we invite you to join us and bless our special day.
    Your prayers, your presence, and your love mean the world to us.
    Insha Allah, we will celebrate this joyful moment together.
  </p>

 
</div>

      </div>
    </section>
  );
};

export default CoupleSection;
