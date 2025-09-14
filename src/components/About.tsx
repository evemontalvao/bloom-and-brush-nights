import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-sage">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
          {t('aboutTitle')}
        </h2>
        
        <div className="prose prose-lg max-w-3xl mx-auto font-body text-foreground/80 leading-relaxed space-y-6">
          <p className="text-xl">
            {t('aboutP1')}
          </p>
          
          <p>
            {t('aboutP2')}
          </p>
          
          <p>
            {t('aboutP3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;