import { Heart, Palette, Sparkles, Flower, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SessionTypes = () => {
  const { t } = useLanguage();

  const sessions = [
    {
      icon: Heart,
      titleKey: "drawMe",
      descriptionKey: "drawMeDescription",
      bg: "bg-primary",
      accent: "bg-golden",
      textColor: "text-primary-foreground",
    },
    {
      icon: Palette,
      titleKey: "openStudio",
      descriptionKey: "openStudioDescription",
      bg: "bg-secondary",
      accent: "bg-peach",
      textColor: "text-secondary-foreground",
    },
    {
      icon: Sparkles,
      titleKey: "creativeFirsts",
      descriptionKey: "creativeFirstsDescription",
      bg: "bg-golden",
      accent: "bg-primary",
      textColor: "text-deep-brown",
    },
    {
      icon: Flower,
      titleKey: "stillLifeSlowdown",
      descriptionKey: "stillLifeSlowdownDescription",
      bg: "bg-accent",
      accent: "bg-golden",
      textColor: "text-accent-foreground",
    },
    {
      icon: Users,
      titleKey: "lifeLines",
      statusKey: "comingSoon",
      descriptionKey: "lifeLinesDescription",
      bg: "bg-coral",
      accent: "bg-secondary",
      textColor: "text-primary-foreground",
    },
  ];

  const blobClasses = ["blob-1", "blob-2", "blob-3", "blob-1", "blob-2"];

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[50%] left-[-100px] w-[300px] h-[300px] bg-golden/10 blob-1" />
      <div className="absolute top-[20%] right-[-80px] w-[250px] h-[250px] bg-accent/10 blob-3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="font-accent text-sm tracking-[0.25em] uppercase text-accent mb-4 block">
            {t('sessionTypesTitle')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
            Find your <span className="italic text-primary">flow</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            {t('sessionTypesDescription')}
          </p>
        </div>

        <div className="space-y-8">
          {sessions.map((session, index) => {
            const IconComponent = session.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-stretch`}
              >
                {/* Color block with icon */}
                <div className={`${session.bg} ${blobClasses[index]} flex-shrink-0 w-full md:w-72 h-48 md:h-auto flex items-center justify-center relative overflow-hidden group`}>
                  <div className={`${session.accent} w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`w-10 h-10 ${session.bg === 'bg-golden' ? 'text-primary-foreground' : 'text-deep-brown'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`${session.bg} flex-grow p-8 md:p-10 rounded-3xl flex flex-col justify-center`}>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className={`font-display text-3xl md:text-4xl font-bold ${session.textColor}`}>
                      {t(session.titleKey)}
                    </h3>
                    {session.statusKey && (
                      <span className="bg-foreground/10 text-sm px-4 py-1 rounded-full font-accent font-medium">
                        {t(session.statusKey)}
                      </span>
                    )}
                  </div>
                  <p className={`font-body text-lg ${session.textColor} opacity-85 leading-relaxed max-w-xl`}>
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
