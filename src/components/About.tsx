import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-[-50px] w-[200px] h-[200px] bg-peach blob-2 opacity-40" />
      <div className="absolute bottom-10 left-[-60px] w-[180px] h-[180px] bg-secondary/20 blob-3 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Mixed typography header */}
        <div className="text-center mb-16">
          <span className="font-accent text-sm tracking-[0.25em] uppercase text-accent mb-4 block">
            {t('aboutTitle')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
            Where <span className="italic text-primary">creativity</span>
            <br />
            meets <span className="font-accent font-light text-secondary">connection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - big quote style */}
          <div className="relative">
            <div className="text-[8rem] leading-none font-display text-primary/15 absolute -top-12 -left-4">"</div>
            <p className="font-display text-2xl md:text-3xl italic text-foreground/80 leading-relaxed pt-8 pl-4">
              {t('aboutP1')}
            </p>
          </div>

          {/* Right - body text blocks */}
          <div className="space-y-8 pt-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t('aboutP2')}
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t('aboutP3')}
            </p>
            {/* Colorful accent bar */}
            <div className="flex gap-2 pt-4">
              <div className="h-3 w-16 rounded-full bg-primary" />
              <div className="h-3 w-12 rounded-full bg-golden" />
              <div className="h-3 w-8 rounded-full bg-secondary" />
              <div className="h-3 w-6 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
