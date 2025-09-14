import { Instagram, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-6 bg-primary/5 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
            {t('heroTitle')}
          </h3>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            {t('footerDescription')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <a 
            href="mailto:hello@brushandbloom.barcelona"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
          >
            <Mail className="w-5 h-5" />
            hello@brushandbloom.barcelona
          </a>
          
          <a 
            href="#"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
          >
            <Instagram className="w-5 h-5" />
            @brushandbloom.bcn
          </a>
          
          <div className="flex items-center gap-3 text-muted-foreground font-body">
            <MapPin className="w-5 h-5" />
            Barcelona, Spain
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground font-body">
          <p>&copy; 2024 Brush & Bloom. Created with love and intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;