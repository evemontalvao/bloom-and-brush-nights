import { CalendarDays, Clock, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import events from "@/data/events";

const UpcomingSessions = () => {
  const { t, language } = useLanguage();

  const formatDate = (iso: string) => {
    const date = new Date(iso + "T00:00:00");
    const localeMap: Record<string, string> = {
      en: "en-GB", es: "es-ES", ca: "ca-ES", pt: "pt-BR",
    };
    return date.toLocaleDateString(localeMap[language] || "en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <section id="sessions-calendar" className="relative py-24 px-6 bg-golden overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-40px] left-[15%] w-[250px] h-[250px] bg-primary/20 blob-3" />
      <div className="absolute bottom-[-60px] right-[10%] w-[300px] h-[300px] bg-accent/15 blob-1" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="font-accent text-sm tracking-[0.25em] uppercase text-deep-brown/60 mb-4 block">
            {t('upcomingLabel')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-deep-brown leading-[1.1] mb-6">
            {t('upcomingTitle')}
          </h2>
          <p className="font-body text-lg text-deep-brown/70 max-w-xl mx-auto">
            {t('upcomingDescription')}
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => {
            const spotsLeft = event.spotsTotal - event.spotsTaken;
            const isFull = spotsLeft <= 0;

            return (
              <div
                key={event.id}
                className="bg-background rounded-[2rem] p-6 md:p-8 shadow-bold hover:shadow-pop transition-all duration-300 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
              >
                {/* Date block */}
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <CalendarDays className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg text-foreground capitalize">
                      {formatDate(event.date)}
                    </p>
                    <p className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Session name */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground italic">
                    {t(event.titleKey)}
                  </h3>
                </div>

                {/* Spots + CTA */}
                <div className="flex items-center gap-5 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className={`font-accent font-semibold text-sm ${isFull ? 'text-hot-pink' : spotsLeft <= 2 ? 'text-coral' : 'text-forest'}`}>
                      {isFull
                        ? t('full')
                        : `${spotsLeft}/${event.spotsTotal} ${t('spotsLeft')}`}
                    </span>
                  </div>

                  <a
                    href={isFull ? undefined : event.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-accent font-bold text-sm transition-all duration-300 ${
                      isFull
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-bold hover:shadow-pop hover:scale-105'
                    }`}
                    onClick={isFull ? (e) => e.preventDefault() : undefined}
                  >
                    {isFull ? t('full') : t('bookSpot')}
                    {!isFull && <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-10 font-body text-deep-brown/50 text-sm">
          {t('calendarNote')}
        </p>
      </div>
    </section>
  );
};

export default UpcomingSessions;
