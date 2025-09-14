import { Shield, Users, Home, Clock, Wine, Palette } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      icon: Users,
      question: "How many people attend each session?",
      answer: "We keep our gatherings intimate with 6-12 carefully selected guests. This creates a cozy atmosphere where everyone feels comfortable to connect and create."
    },
    {
      icon: Shield,
      question: "How do you ensure a safe space?",
      answer: "All guests are personally vetted through our application process. We prioritize creating a respectful, inclusive environment where everyone feels welcome to express themselves authentically."
    },
    {
      icon: Home,
      question: "Where do sessions take place?",
      answer: "Our sessions happen on a private terrace in Barcelona, thoughtfully decorated with plants, soft lighting, and all the materials you need. The exact location is shared upon RSVP confirmation."
    },
    {
      icon: Clock,
      question: "What should I expect time-wise?",
      answer: "Sessions typically last 2.5-3 hours, including time for introductions, creating, and gentle conversation. We move at a relaxed pace that honors the creative process."
    },
    {
      icon: Wine,
      question: "Is wine included?",
      answer: "Yes! We provide a selection of wine, along with light refreshments and tea. The evening is designed to nourish both your creative spirit and your senses."
    },
    {
      icon: Palette,
      question: "Do I need experience or materials?",
      answer: "No experience necessary—just curiosity and openness. All art materials, easels, and supplies are provided. Come as you are, ready to explore and connect."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            What to Expect
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Everything you need to know about joining our creative community.
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
                      {faq.question}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {faq.answer}
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