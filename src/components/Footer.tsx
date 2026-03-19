import { Instagram, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="relative py-20 px-6 bg-deep-brown overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-30px] right-[20%] w-[150px] h-[150px] bg-primary/10 blob-2" />
      <div className="absolute bottom-[-20px] left-[10%] w-[120px] h-[120px] bg-golden/10 blob-1" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-cream italic mb-4">
            Brush{' '}
            <span className="font-accent font-light not-italic text-golden">
              &amp; bloom
            </span>
          </h3>
          <p className="font-body text-cream/60 max-w-md mx-auto text-lg">
            {t('footerDescription')}
          </p>
        </div>

        {/* Colorful divider */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <div className="h-1 w-8 rounded-full bg-golden" />
          <div className="h-1 w-6 rounded-full bg-accent" />
          <div className="h-1 w-10 rounded-full bg-secondary" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          {/* <a
            href="mailto:hello@brushandbloom.barcelona"
            className="flex items-center gap-3 text-cream/60 hover:text-golden transition-colors duration-300 font-body"
          >
            <Mail className="w-5 h-5" />
            hello@brushandbloom.barcelona
          </a> */}
          <a
            href="#"
            className="flex items-center gap-3 text-cream/60 hover:text-golden transition-colors duration-300 font-body"
          >
            <Instagram className="w-5 h-5" />
            @brushandbloom.bcn
          </a>
          <div className="flex items-center gap-3 text-cream/60 font-body">
            <MapPin className="w-5 h-5" />
            Barcelona, Spain
          </div>
        </div>

        <div className="text-center text-sm text-cream/40 font-body">
          <p>&copy; 2026 Brush & Bloom. Created with love and intention.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
