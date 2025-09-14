import { Heart, Palette, Sparkles, Flower, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SessionTypes = () => {
  const { t } = useLanguage();
  
  const sessions = [
    {
      icon: Heart,
      titleKey: "drawMe",
      descriptionKey: "drawMeDescription",
      color: "bg-terracotta-warm"
    },
    {
      icon: Palette,
      titleKey: "openStudio",
      descriptionKey: "openStudioDescription",
      color: "bg-sage-soft"
    },
    {
      icon: Sparkles,
      titleKey: "creativeFirsts",
      descriptionKey: "creativeFirstsDescription",
      color: "bg-blush-gentle"
    },
    {
      icon: Flower,
      titleKey: "stillLifeSlowdown",
      descriptionKey: "stillLifeSlowdownDescription",
      color: "bg-dusty-pink"
    },
    {
      icon: Users,
      titleKey: "lifeLines",
      statusKey: "comingSoon",
      descriptionKey: "lifeLinesDescription",
      color: "bg-evening-glow"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            {t('sessionTypesTitle')}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('sessionTypesDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session, index) => {
            const IconComponent = session.icon;
            return (
              <div key={index} className="group">
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-dreamy transition-all duration-500 border border-border/50 h-full flex flex-col">
                  <div className={`${session.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {t(session.titleKey)}
                    </h3>
                    {session.statusKey && (
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-body font-medium">
                        {t(session.statusKey)}
                      </span>
                    )}
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed flex-grow">
                    {t(session.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SessionTypes;