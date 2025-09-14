import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WaitlistForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    toast({
      title: t('toastTitle'),
      description: t('toastDescription'),
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-evening">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            {t('waitlistTitle')}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t('waitlistDescription')}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-dreamy border border-border/50">
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                placeholder={t('yourName')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                placeholder={t('yourEmail')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body"
              />
            </div>
            
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 font-body resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-body font-medium transition-all duration-300 shadow-soft hover:shadow-dreamy transform hover:scale-[1.02]"
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