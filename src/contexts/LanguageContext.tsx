import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'es' | 'ca' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const translations = getTranslations()
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const getTranslations = () => ({
  en: {
    // Hero
    heroTitle: 'Brush & Bloom',
    heroDescription:
      'Paint, laugh, connect, and leave with something you actually made. Intimate art sessions on a private Barcelona rooftop — wine included, talent optional.',
    joinWaitlist: 'Join the Waitlist',
    bookSession: 'Book a Session',
    learnMore: 'Learn More',

    // Upcoming Sessions
    upcomingLabel: 'UPCOMING DATES',
    upcomingTitle: 'Grab Your Easel',
    upcomingDescription:
      'Only 6 spots per session — pick a date and grab yours before it fills up.',
    spotsLeft: 'spots left',
    full: 'Full',
    bookSpot: 'Book a Spot',
    calendarNote:
      "Can't make these dates? New sessions are added regularly — follow us on Instagram so you'll be the first to know.",

    // About
    aboutTitle: 'The Experience',
    aboutP1:
      'Six people. One rooftop. A few hours to make something with your hands and connect with someone new.',
    aboutP2:
      'No experience needed, no pressure to be good. Just curiosity, good wine, and a private Barcelona terrace.',

    // Session Types
    sessionTypesTitle: 'Session Types',
    sessionTypesDescription:
      'Each gathering offers a unique way to explore creativity, connection, and presence.',
    drawMe: 'Draw Me',
    drawMeDescription:
      "You sketch someone. They sketch you. It's awkward, it's fun, and somehow it always ends up being one of the most connecting things you can do with a stranger.",
    openStudio: 'Open Studio',
    openStudioDescription:
      'The most relaxed session we run. No instruction, no prompt — just you, a canvas, and whatever comes out. Bring your own materials or use ours. Great for people who already paint and want good company while they do it.',
    creativeFirsts: 'Creative Firsts',
    creativeFirstsDescription:
      "Never painted before? This one's for you. We guide you through the whole thing — step by step, no judgment, no pressure. You'll leave with something you actually want to keep.",
    stillLifeSlowdown: 'Still Life Slowdown',
    stillLifeSlowdownDescription:
      'Flowers, fruit, an interesting object or two. You observe, you paint, you slow down. This is the most meditative session we run — perfect if you want to switch your brain off for a couple of hours.',
    lifeLines: 'Life Lines',
    lifeLinesDescription:
      'Life drawing. A live model, a pencil, and two hours to really look. The most challenging session we run, and the one people always want to come back to.',
    comingSoon: 'Coming Soon',

    // FAQ
    faqTitle: 'What to Expect',
    faqDescription:
      'Everything you need to know about joining our creative community.',
    faqQ1: 'How many people attend each session?',
    faqA1:
      'Just 6 people per session — intimate enough to feel like a dinner party, relaxed enough to actually make something.',
    faqQ2: 'What happens if it rains?',
    faqA2:
      "Barcelona sunshine is reliable, but not perfect. If it rains, we reschedule — no stress, no lost money. We'll give you plenty of notice and find a new date that works.",
    faqQ3: 'Where do sessions take place?',
    faqA3:
      "A private terrace in Barcelona. Plants, string lights, and a lemon tree. The exact address is yours once you've booked your spot.",
    faqQ4: 'What should I expect time-wise?',
    faqA4:
      'We start with 30 minutes to settle in, meet everyone, and pour a glass. Then 2 hours of painting. The kind of evening that feels both productive and completely relaxed.',
    faqQ5: 'Is wine included?',
    faqA5:
      "Yes! There's always wine, tea, and something to snack on. It's all included in the price.",
    faqQ6: 'Do I need experience or materials?',
    faqA6:
      "Everything is provided — canvas, paint, brushes, easels. And no, you don't need to know what you're doing. That's kind of the point.",

    // Booking Form
    waitlistTitle: 'Grab a Spot',
    waitlistDescription:
      "Only 6 spots per session. Fill out the form and we'll confirm your booking shortly.",
    yourName: 'Your name',
    yourEmail: 'Your email',
    messagePlaceholder: 'Anything you want us to know? (optional)',
    privacyText:
      'We respect your privacy and will only contact you about Brush & Bloom sessions.',

    // Footer
    footerDescription:
      'Brush & Bloom — painting sessions on a private Barcelona rooftop. Six spots. Wine included. Talent optional.',

    // Toast
    toastTitle: 'See you there! 🍋',
    toastDescription:
      "Your spot is booked. We'll send over the details soon — can't wait to paint with you.",
  },

  es: {
    // Hero
    heroTitle: 'Brush & Bloom',
    heroDescription:
      'Pinta, ríe, conéctate y vete con algo que tú mismo has hecho. Sesiones de arte íntimas en una azotea privada de Barcelona — vino incluido, talento opcional.',
    joinWaitlist: 'Únete a la Lista de Espera',
    bookSession: 'Reservar Sesión',
    learnMore: 'Saber Más',

    // Upcoming Sessions
    upcomingLabel: 'PRÓXIMAS FECHAS',
    upcomingTitle: 'Coge Tu Caballete',
    upcomingDescription:
      'Solo 6 plazas por sesión — elige una fecha y reserva la tuya antes de que se llene.',
    spotsLeft: 'plazas libres',
    full: 'Completo',
    bookSpot: 'Reservar Plaza',
    calendarNote:
      '¿No puedes en estas fechas? Se añaden nuevas sesiones regularmente — síguenos en Instagram para ser el primero en enterarte.',

    // About
    aboutTitle: 'La Experiencia',
    aboutP1:
      'Seis personas. Una azotea. Unas horas para hacer algo con tus manos y conectar con alguien nuevo.',
    aboutP2:
      'Sin experiencia necesaria, sin presión por hacerlo bien. Solo curiosidad, buen vino y una terraza privada en Barcelona.',

    // Session Types
    sessionTypesTitle: 'Tipos de Sesiones',
    sessionTypesDescription:
      'Cada encuentro ofrece una forma única de explorar la creatividad, la conexión y la presencia.',
    drawMe: 'Dibújame',
    drawMeDescription:
      'Tú dibujas a alguien. Ellos te dibujan a ti. Es incómodo, es divertido, y de alguna manera siempre acaba siendo una de las cosas más conectivas que puedes hacer con un desconocido.',
    openStudio: 'Estudio Abierto',
    openStudioDescription:
      'La sesión más relajada que hacemos. Sin instrucciones, sin tema — solo tú, un lienzo y lo que salga. Trae tus propios materiales o usa los nuestros. Ideal para los que ya pintan y quieren buena compañía.',
    creativeFirsts: 'Primeras Creaciones',
    creativeFirstsDescription:
      '¿Nunca has pintado? Esta es para ti. Te guiamos en todo — paso a paso, sin juicios, sin presión. Te irás con algo que de verdad querrás quedarte.',
    stillLifeSlowdown: 'Naturaleza Muerta Pausada',
    stillLifeSlowdownDescription:
      'Flores, frutas, algún objeto interesante. Observas, pintas, desaceleraas. Esta es la sesión más meditativa que hacemos — perfecta si quieres desconectar el cerebro un par de horas.',
    lifeLines: 'Líneas de Vida',
    lifeLinesDescription:
      'Dibujo del natural. Un modelo en vivo, un lápiz y dos horas para realmente mirar. La sesión más exigente que hacemos, y a la que la gente siempre quiere volver.',
    comingSoon: 'Próximamente',

    // FAQ
    faqTitle: 'Qué Esperar',
    faqDescription:
      'Todo lo que necesitas saber para unirte a nuestra comunidad creativa.',
    faqQ1: '¿Cuántas personas asisten a cada sesión?',
    faqA1:
      'Solo 6 personas por sesión — lo suficientemente íntimo para sentirse como una cena entre amigos, lo suficientemente relajado para hacer algo de verdad.',
    faqQ2: '¿Qué pasa si llueve?',
    faqA2:
      'El sol de Barcelona es fiable, pero no perfecto. Si llueve, cambiamos de fecha — sin estrés, sin perder dinero. Te avisamos con tiempo y encontramos una nueva fecha que te venga bien.',
    faqQ3: '¿Dónde tienen lugar las sesiones?',
    faqA3:
      'Una terraza privada en Barcelona. Plantas, luces de hada y un limonero. La dirección exacta es tuya cuando hayas reservado tu plaza.',
    faqQ4: '¿Qué debo esperar en cuanto a tiempo?',
    faqA4:
      'Empezamos con 30 minutos para acomodarnos, conocernos y servir una copa. Luego 2 horas de pintura. El tipo de tarde que se siente productiva y completamente relajada a la vez.',
    faqQ5: '¿Está incluido el vino?',
    faqA5:
      '¡Sí! Siempre hay vino, té y algo para picar. Todo está incluido en el precio.',
    faqQ6: '¿Necesito experiencia o materiales?',
    faqA6:
      'Todo está proporcionado — lienzo, pintura, pinceles, caballetes. Y no, no necesitas saber lo que estás haciendo. Ese es un poco el punto.',

    // Booking Form
    waitlistTitle: 'Reserva tu Plaza',
    waitlistDescription:
      'Solo 6 plazas por sesión. Rellena el formulario y confirmaremos tu reserva en breve.',
    yourName: 'Tu nombre',
    yourEmail: 'Tu email',
    messagePlaceholder: '¿Algo que quieras que sepamos? (opcional)',
    privacyText:
      'Respetamos tu privacidad y solo te contactaremos sobre las sesiones de Brush & Bloom.',

    // Footer
    footerDescription:
      'Brush & Bloom — sesiones de pintura en una azotea privada de Barcelona. Seis plazas. Vino incluido. Talento opcional.',

    // Toast
    toastTitle: '¡Nos vemos! 🍋',
    toastDescription:
      'Tu plaza está reservada. Te enviaremos los detalles pronto — ¡tenemos muchas ganas de pintar contigo!',
  },

  ca: {
    // Hero
    heroTitle: 'Brush & Bloom',
    heroDescription:
      "Pinta, riu, connecta i marxa amb alguna cosa que tu mateix has fet. Sessions d'art íntimes en una terrassa privada de Barcelona — vi inclòs, talent opcional.",
    joinWaitlist: "Apunta't a la Llista d'Espera",
    bookSession: 'Reservar Sessió',
    learnMore: 'Saber-ne Més',

    // Upcoming Sessions
    upcomingLabel: 'PROPERES DATES',
    upcomingTitle: 'Agafa el Teu Cavallete',
    upcomingDescription:
      "Només 6 places per sessió — tria una data i reserva la teva abans que s'ompli.",
    spotsLeft: 'places lliures',
    full: 'Complet',
    bookSpot: 'Reservar Plaça',
    calendarNote:
      "No pots en aquestes dates? S'afegeixen noves sessions regularment — segueix-nos a Instagram per ser el primer a saber-ho.",

    // About
    aboutTitle: "L'Experiència",
    aboutP1:
      'Sis persones. Una terrassa. Unes hores per fer alguna cosa amb les mans i connectar amb algú nou.',
    aboutP2:
      'Sense experiència necessària, sense pressió per fer-ho bé. Només curiositat, bon vi i una terrassa privada a Barcelona.',

    // Session Types
    sessionTypesTitle: 'Tipus de Sessions',
    sessionTypesDescription:
      "Cada trobada ofereix una manera única d'explorar la creativitat, la connexió i la presència.",
    drawMe: "Dibuixa'm",
    drawMeDescription:
      "Tu dibuixes algú. Ells et dibuixen a tu. És incòmode, és divertit, i d'alguna manera sempre acaba sent una de les coses més connectores que pots fer amb un desconegut.",
    openStudio: 'Estudi Obert',
    openStudioDescription:
      'La sessió més relaxada que fem. Sense instruccions, sense tema — només tu, un llenç i el que surti. Porta els teus propis materials o fes servir els nostres. Ideal per als que ja pinten i volen bona companyia.',
    creativeFirsts: 'Primeres Creacions',
    creativeFirstsDescription:
      "Mai has pintat? Aquesta és per a tu. Et guiem en tot — pas a pas, sense judicis, sense pressió. Te n'aniràs amb alguna cosa que de veritat voldràs quedar-te.",
    stillLifeSlowdown: 'Natura Morta Pausada',
    stillLifeSlowdownDescription:
      "Flors, fruites, algun objecte interessant. Observes, pintes, alenteixis. Aquesta és la sessió més meditativa que fem — perfecta si vols desconnectar el cervell un parell d'hores.",
    lifeLines: 'Línies de Vida',
    lifeLinesDescription:
      'Dibuix del natural. Un model en viu, un llapis i dues hores per realment mirar. La sessió més exigent que fem, i a la qual la gent sempre vol tornar.',
    comingSoon: 'Properament',

    // FAQ
    faqTitle: 'Què Esperar',
    faqDescription:
      'Tot el que necessites saber per unir-te a la nostra comunitat creativa.',
    faqQ1: 'Quantes persones assisteixen a cada sessió?',
    faqA1:
      'Només 6 persones per sessió — prou íntim per semblar un sopar entre amics, prou relaxat per fer alguna cosa de veritat.',
    faqQ2: 'Què passa si plou?',
    faqA2:
      "El sol de Barcelona és fiable, però no perfecte. Si plou, canviem de data — sense estrès, sense perdre diners. T'avisem amb temps i trobem una nova data que et vagi bé.",
    faqQ3: 'On tenen lloc les sessions?',
    faqA3:
      "Una terrassa privada a Barcelona. Plantes, llums de fada i una llimoner. L'adreça exacta és teva quan hagis reservat la teva plaça.",
    faqQ4: "Què he d'esperar quant a temps?",
    faqA4:
      'Comencem amb 30 minuts per instal·lar-nos, conèixer-nos i servir una copa. Després 2 hores de pintura. El tipus de tarda que se sent productiva i completament relaxada alhora.',
    faqQ5: 'Hi ha vi inclòs?',
    faqA5:
      'Sí! Sempre hi ha vi, te i alguna cosa per picar. Tot està inclòs en el preu.',
    faqQ6: 'Necessito experiència o materials?',
    faqA6:
      'Tot està proporcionat — llenç, pintura, pinzells, cavalletes. I no, no necessites saber el que estàs fent. Aquest és una mica el punt.',

    // Booking Form
    waitlistTitle: 'Reserva la teva Plaça',
    waitlistDescription:
      'Només 6 places per sessió. Omple el formulari i confirmarem la teva reserva aviat.',
    yourName: 'El teu nom',
    yourEmail: 'El teu email',
    messagePlaceholder: 'Alguna cosa que vulguis que sapiguem? (opcional)',
    privacyText:
      'Respectem la teva privacitat i només et contactarem sobre les sessions de Brush & Bloom.',

    // Footer
    footerDescription:
      'Brush & Bloom — sessions de pintura en una terrassa privada de Barcelona. Sis places. Vi inclòs. Talent opcional.',

    // Toast
    toastTitle: 'Ens veiem! 🍋',
    toastDescription:
      "La teva plaça està reservada. T'enviarem els detalls aviat — tenim moltes ganes de pintar amb tu!",
  },

  pt: {
    // Hero
    heroTitle: 'Brush & Bloom',
    heroDescription:
      'Pinte, ria, conecte-se e vá embora com algo que você mesmo fez. Sessões de arte íntimas em um terraço privado em Barcelona — vinho incluído, talento opcional.',
    joinWaitlist: 'Entre na Lista de Espera',
    bookSession: 'Reservar Sessão',
    learnMore: 'Saiba Mais',

    // Upcoming Sessions
    upcomingLabel: 'PRÓXIMAS DATAS',
    upcomingTitle: 'Pegue Seu Cavalete',
    upcomingDescription:
      'Apenas 6 vagas por sessão — escolha uma data e garanta a sua antes que esgote.',
    spotsLeft: 'vagas restantes',
    full: 'Lotado',
    bookSpot: 'Reservar Vaga',
    calendarNote:
      'Não pode nessas datas? Novas sessões são adicionadas regularmente — siga-nos no Instagram para ser o primeiro a saber.',

    // About
    aboutTitle: 'A Experiência',
    aboutP1:
      'Seis pessoas. Um terraço. Algumas horas para fazer algo com as mãos e conectar com alguém novo.',
    aboutP2:
      'Sem experiência necessária, sem pressão para ser bom. Só curiosidade, bom vinho e um terraço privado em Barcelona.',

    // Session Types
    sessionTypesTitle: 'Tipos de Sessões',
    sessionTypesDescription:
      'Cada encontro oferece uma maneira única de explorar criatividade, conexão e presença.',
    drawMe: 'Me Desenhe',
    drawMeDescription:
      'Você desenha alguém. Eles te desenham. É desconfortável, é divertido, e de alguma forma sempre acaba sendo uma das coisas mais conectivas que você pode fazer com um estranho.',
    openStudio: 'Estúdio Aberto',
    openStudioDescription:
      'A sessão mais relaxada que fazemos. Sem instrução, sem tema — só você, uma tela e o que sair. Traga seus próprios materiais ou use os nossos. Ótimo para quem já pinta e quer boa companhia.',
    creativeFirsts: 'Primeiras Criações',
    creativeFirstsDescription:
      'Nunca pintou antes? Esta é para você. A gente guia tudo — passo a passo, sem julgamento, sem pressão. Você vai embora com algo que vai querer guardar de verdade.',
    stillLifeSlowdown: 'Natureza Morta Pausada',
    stillLifeSlowdownDescription:
      'Flores, frutas, um objeto interessante ou dois. Você observa, pinta, desacelera. Esta é a sessão mais meditativa que fazemos — perfeita se você quer desligar o cérebro por algumas horas.',
    lifeLines: 'Linhas da Vida',
    lifeLinesDescription:
      'Desenho de modelo vivo. Um modelo ao vivo, um lápis e duas horas para realmente olhar. A sessão mais desafiadora que fazemos, e a que as pessoas sempre querem repetir.',
    comingSoon: 'Em Breve',

    // FAQ
    faqTitle: 'O Que Esperar',
    faqDescription:
      'Tudo que você precisa saber para se juntar à nossa comunidade criativa.',
    faqQ1: 'Quantas pessoas participam de cada sessão?',
    faqA1:
      'Apenas 6 pessoas por sessão — íntimo o suficiente para parecer um jantar entre amigos, relaxado o suficiente para fazer algo de verdade.',
    faqQ2: 'O que acontece se chover?',
    faqA2:
      'O sol de Barcelona é confiável, mas não perfeito. Se chover, reagendamos — sem estresse, sem perder dinheiro. Avisamos com antecedência e encontramos uma nova data que funcione.',
    faqQ3: 'Onde acontecem as sessões?',
    faqA3:
      'Um terraço privado em Barcelona. Plantas, luzes de fada e um limoeiro. O endereço exato é seu assim que você reservar sua vaga.',
    faqQ4: 'O que devo esperar em termos de tempo?',
    faqA4:
      'Começamos com 30 minutos para nos acomodar, nos conhecer e servir uma taça. Depois 2 horas de pintura. O tipo de noite que se sente produtiva e completamente relaxada ao mesmo tempo.',
    faqQ5: 'O vinho está incluído?',
    faqA5:
      'Sim! Sempre tem vinho, chá e algo para petiscar. Tudo incluído no preço.',
    faqQ6: 'Preciso de experiência ou materiais?',
    faqA6:
      'Tudo é fornecido — tela, tinta, pincéis, cavaletes. E não, você não precisa saber o que está fazendo. Esse é um pouco o ponto.',

    // Booking Form
    waitlistTitle: 'Garanta sua Vaga',
    waitlistDescription:
      'Apenas 6 vagas por sessão. Preencha o formulário e confirmaremos sua reserva em breve.',
    yourName: 'Seu nome',
    yourEmail: 'Seu email',
    messagePlaceholder: 'Algo que queira que a gente saiba? (opcional)',
    privacyText:
      'Respeitamos sua privacidade e só entraremos em contato sobre as sessões do Brush & Bloom.',

    // Footer
    footerDescription:
      'Brush & Bloom — sessões de pintura em um terraço privado em Barcelona. Seis vagas. Vinho incluído. Talento opcional.',

    // Toast
    toastTitle: 'Até lá! 🍋',
    toastDescription:
      'Sua vaga está reservada. Enviaremos os detalhes em breve — mal podemos esperar para pintar com você!',
  },
})
