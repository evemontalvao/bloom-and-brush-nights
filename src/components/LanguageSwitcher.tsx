import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'ca' as Language, name: 'Català', flag: '🏴' },
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 backdrop-blur-sm">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-card rounded-xl shadow-dreamy border border-border/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[140px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-body transition-all duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-primary/10 ${
              language === lang.code 
                ? 'bg-primary/20 text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;