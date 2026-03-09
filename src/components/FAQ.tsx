import { Shield, Users, Home, Clock, Wine, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { icon: Users, questionKey: "faqQ1", answerKey: "faqA1", color: "bg-primary" },
    { icon: Shield, questionKey: "faqQ2", answerKey: "faqA2", color: "bg-secondary" },
    { icon: Home, questionKey: "faqQ3", answerKey: "faqA3", color: "bg-golden" },
    { icon: Clock, questionKey: "faqQ4", answerKey: "faqA4", color: "bg-accent" },
    { icon: Wine, questionKey: "faqQ5", answerKey: "faqA5", color: "bg-coral" },
    { icon: Palette, questionKey: "faqQ6", answerKey: "faqA6", color: "bg-olive" },
  ];

  return (
    <section className="relative py-24 px-6 bg-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[-50px] right-[10%] w-[200px] h-[200px] bg-golden/20 blob-1" />
      <div className="absolute bottom-[-40px] left-[5%] w-[180px] h-[180px] bg-primary/15 blob-2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-accent text-sm tracking-[0.25em] uppercase text-secondary-foreground/60 mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-secondary-foreground leading-[1.1]">
            {t('faqTitle')}
          </h2>
          <p className="font-body text-lg text-secondary-foreground/70 mt-4">
            {t('faqDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div
                key={index}
                className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-bold"
              >
                <div className="flex items-start gap-5">
                  <div className={`${faq.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {t(faq.questionKey)}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {t(faq.answerKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
