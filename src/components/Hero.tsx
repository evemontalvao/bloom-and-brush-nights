import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-golden blob-1 opacity-60 animate-float" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-hot-pink blob-2 opacity-40 animate-float-slow" />
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-secondary blob-3 opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] bg-peach blob-1 opacity-70 animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] right-[30%] w-[150px] h-[150px] bg-coral blob-2 opacity-50 animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Language switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small accent text */}
        <p className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
          Barcelona · Art · Connection
        </p>
        
        {/* Main title with mixed typography */}
        <h1 className="mb-8 leading-[0.95]">
          <span className="block font-display text-7xl md:text-[10rem] font-bold text-primary-foreground italic">
            Brush
          </span>
          <span className="block font-accent text-4xl md:text-6xl font-light text-golden tracking-wide -mt-2 md:-mt-4">
            &amp; bloom
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/85 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {t('heroDescription')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-golden hover:bg-golden/90 text-deep-brown px-10 py-5 rounded-full font-accent font-semibold text-lg transition-all duration-300 shadow-bold hover:shadow-pop hover:scale-105"
          >
            {t('joinWaitlist')}
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/40 px-10 py-5 rounded-full font-accent font-medium text-lg transition-all duration-300 hover:border-primary-foreground/70"
          >
            {t('learnMore')}
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,80 C360,120 720,20 1080,60 C1260,80 1380,100 1440,80 L1440,120 L0,120 Z" fill="hsl(38 50% 95%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
