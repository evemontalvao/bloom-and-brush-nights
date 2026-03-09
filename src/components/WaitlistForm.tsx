import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WaitlistForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('toastTitle'),
      description: t('toastDescription'),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="relative py-24 px-6 bg-golden overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-40px] left-[15%] w-[250px] h-[250px] bg-primary/20 blob-3" />
      <div className="absolute bottom-[-60px] right-[10%] w-[300px] h-[300px] bg-accent/15 blob-1" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-accent text-sm tracking-[0.25em] uppercase text-deep-brown/60 mb-4 block">
            RSVP
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-deep-brown leading-[1.1] mb-6">
            {t('waitlistTitle')}
          </h2>
          <p className="font-body text-lg text-deep-brown/70">
            {t('waitlistDescription')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background rounded-[2rem] p-8 md:p-10 shadow-pop"
        >
          <div className="space-y-5">
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                placeholder={t('yourName')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-14 pr-5 py-5 border-2 border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body text-lg"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                placeholder={t('yourEmail')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-14 pr-5 py-5 border-2 border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body text-lg"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-muted-foreground" />
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-14 pr-5 py-5 border-2 border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body text-lg resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 rounded-2xl font-accent font-bold text-lg transition-all duration-300 shadow-bold hover:shadow-pop hover:scale-[1.01]"
            >
              {t('joinWaitlist')}
            </button>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6 font-body">
            {t('privacyText')}
          </p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
