import { Shield, Users, Home, Clock, Wine, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      icon: Users,
      questionKey: "faqQ1",
      answerKey: "faqA1"
    },
    {
      icon: Shield,
      questionKey: "faqQ2",
      answerKey: "faqA2"
    },
    {
      icon: Home,
      questionKey: "faqQ3",
      answerKey: "faqA3"
    },
    {
      icon: Clock,
      questionKey: "faqQ4",
      answerKey: "faqA4"
    },
    {
      icon: Wine,
      questionKey: "faqQ5",
      answerKey: "faqA5"
    },
    {
      icon: Palette,
      questionKey: "faqQ6",
      answerKey: "faqA6"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            {t('faqTitle')}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t('faqDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-dreamy transition-all duration-300 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
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