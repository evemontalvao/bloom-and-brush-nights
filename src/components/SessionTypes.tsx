import { Heart, Palette, Sparkles, Flower, Users } from "lucide-react";

const SessionTypes = () => {
  const sessions = [
    {
      icon: Heart,
      title: "Draw Me",
      description: "A guided session where guests sketch each other in pairs. Designed for friends, partners, or new connections. Playful, vulnerable, and full of presence.",
      color: "bg-terracotta-warm"
    },
    {
      icon: Palette,
      title: "Open Studio",
      description: "A relaxed evening for creatives to paint together with no instruction. Just good music, shared materials, and space to create.",
      color: "bg-sage-soft"
    },
    {
      icon: Sparkles,
      title: "Creative Firsts",
      description: "A welcoming intro to painting for beginners. Guided prompts, no judgment, and a focus on curiosity and expression.",
      color: "bg-blush-gentle"
    },
    {
      icon: Flower,
      title: "Still Life Slowdown",
      description: "A slower-paced session focused on observing and painting a beautiful still life setup with flowers, fruit, and textured objects.",
      color: "bg-dusty-pink"
    },
    {
      icon: Users,
      title: "Life Lines",
      status: "Coming Soon",
      description: "A life drawing evening with a professional model for those who want to explore form, body, and flow.",
      color: "bg-evening-glow"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Session Types
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each gathering offers a unique way to explore creativity, connection, and presence.
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
                      {session.title}
                    </h3>
                    {session.status && (
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-body font-medium">
                        {session.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed flex-grow">
                    {session.description}
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