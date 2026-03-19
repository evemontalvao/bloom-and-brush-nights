import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'ca' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = getTranslations();
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = () => ({
  en: {
    // Hero
    heroTitle: "Brush & Bloom",
    heroDescription: "Where twilight conversations meet quiet joy, and the smell of incense mingles with creativity. Intimate art gatherings on a private Barcelona terrace.",
    joinWaitlist: "Join the Waitlist",
    bookSession: "Book a Session",
    learnMore: "Learn More",

    // Upcoming Sessions
    upcomingLabel: "UPCOMING DATES",
    upcomingTitle: "Grab Your Easel",
    upcomingDescription: "Only 6 spots per session. Pick a date and fill out the form to reserve yours.",
    spotsLeft: "spots left",
    full: "Full",
    bookSpot: "Book a Spot",
    calendarNote: "New dates are added regularly. Follow us on Instagram for announcements.",
    
    // About
    aboutTitle: "The Experience",
    aboutP1: "Step into our candlelit sanctuary, where easels wait between potted plants and soft music carries through the evening air. This is not a classroom—it's a space for presence, vulnerability, and the kind of creative connection that happens when we slow down together.",
    aboutP2: "Our intimate gatherings welcome artists and beginners alike to a private Barcelona terrace transformed into an oasis of calm. Share wine, stories, and the gentle rhythm of brush on canvas as the city settles into dusk around us.",
    aboutP3: "Each evening is carefully curated with small groups, vetted guests, and an atmosphere that honors both solitude and connection—where you're free to lose yourself in your art or find yourself in conversation.",
    
    // Session Types
    sessionTypesTitle: "Session Types",
    sessionTypesDescription: "Each gathering offers a unique way to explore creativity, connection, and presence.",
    drawMe: "Draw Me",
    drawMeDescription: "A guided session where guests sketch each other in pairs. Designed for friends, partners, or new connections. Playful, vulnerable, and full of presence.",
    openStudio: "Open Studio",
    openStudioDescription: "A relaxed evening for creatives to paint together with no instruction. Just good music, shared materials, and space to create.",
    creativeFirsts: "Creative Firsts",
    creativeFirstsDescription: "A welcoming intro to painting for beginners. Guided prompts, no judgment, and a focus on curiosity and expression.",
    stillLifeSlowdown: "Still Life Slowdown",
    stillLifeSlowdownDescription: "A slower-paced session focused on observing and painting a beautiful still life setup with flowers, fruit, and textured objects.",
    lifeLines: "Life Lines",
    lifeLinesDescription: "A life drawing evening with a professional model for those who want to explore form, body, and flow.",
    comingSoon: "Coming Soon",
    
    // FAQ
    faqTitle: "What to Expect",
    faqDescription: "Everything you need to know about joining our creative community.",
    faqQ1: "How many people attend each session?",
    faqA1: "We keep our gatherings intimate with 6-12 carefully selected guests. This creates a cozy atmosphere where everyone feels comfortable to connect and create.",
    faqQ2: "How do you ensure a safe space?",
    faqA2: "All guests are personally vetted through our application process. We prioritize creating a respectful, inclusive environment where everyone feels welcome to express themselves authentically.",
    faqQ3: "Where do sessions take place?",
    faqA3: "Our sessions happen on a private terrace in Barcelona, thoughtfully decorated with plants, soft lighting, and all the materials you need. The exact location is shared upon RSVP confirmation.",
    faqQ4: "What should I expect time-wise?",
    faqA4: "Sessions typically last 2.5-3 hours, including time for introductions, creating, and gentle conversation. We move at a relaxed pace that honors the creative process.",
    faqQ5: "Is wine included?",
    faqA5: "Yes! We provide a selection of wine, along with light refreshments and tea. The evening is designed to nourish both your creative spirit and your senses.",
    faqQ6: "Do I need experience or materials?",
    faqA6: "No experience necessary—just curiosity and openness. All art materials, easels, and supplies are provided. Come as you are, ready to explore and connect.",
    
    // Waitlist Form
    waitlistTitle: "Join Our Creative Circle",
    waitlistDescription: "Be the first to know about upcoming sessions and secure your spot at the easel.",
    yourName: "Your name",
    yourEmail: "Your email",
    messagePlaceholder: "Tell us what draws you to creative connection (optional)",
    privacyText: "We respect your privacy and will only contact you about Brush & Bloom sessions.",
    
    // Footer
    footerDescription: "Intimate art gatherings where creativity meets connection on a private Barcelona terrace.",
    
    // Toast
    toastTitle: "Welcome to the waitlist! ✨",
    toastDescription: "We'll be in touch soon with details about upcoming sessions."
  },
  
  es: {
    // Hero
    heroTitle: "Brush & Bloom",
    heroDescription: "Donde las conversaciones del atardecer encuentran la alegría silenciosa, y el aroma del incienso se mezcla con la creatividad. Encuentros artísticos íntimos en una terraza privada de Barcelona.",
    joinWaitlist: "Únete a la Lista de Espera",
    learnMore: "Saber Más",
    
    // About
    aboutTitle: "La Experiencia",
    aboutP1: "Entra en nuestro santuario iluminado por velas, donde los caballetes esperan entre plantas y la música suave se lleva por el aire nocturno. Esto no es un aula—es un espacio para la presencia, la vulnerabilidad, y ese tipo de conexión creativa que surge cuando nos ralentizamos juntos.",
    aboutP2: "Nuestras reuniones íntimas dan la bienvenida tanto a artistas como a principiantes en una terraza privada de Barcelona transformada en un oasis de calma. Comparte vino, historias, y el ritmo gentil del pincel sobre lienzo mientras la ciudad se asienta en el anochecer a nuestro alrededor.",
    aboutP3: "Cada velada está cuidadosamente curada con grupos pequeños, invitados seleccionados, y una atmósfera que honra tanto la soledad como la conexión—donde eres libre de perderte en tu arte o encontrarte en la conversación.",
    
    // Session Types
    sessionTypesTitle: "Tipos de Sesiones",
    sessionTypesDescription: "Cada encuentro ofrece una forma única de explorar la creatividad, la conexión y la presencia.",
    drawMe: "Dibújame",
    drawMeDescription: "Una sesión guiada donde los invitados se dibujan entre sí en parejas. Diseñada para amigos, parejas, o nuevas conexiones. Divertida, vulnerable, y llena de presencia.",
    openStudio: "Estudio Abierto",
    openStudioDescription: "Una velada relajada para creativos que pintan juntos sin instrucción. Solo buena música, materiales compartidos, y espacio para crear.",
    creativeFirsts: "Primeros Creativos",
    creativeFirstsDescription: "Una introducción acogedora a la pintura para principiantes. Sugerencias guiadas, sin juicios, y enfoque en la curiosidad y expresión.",
    stillLifeSlowdown: "Naturaleza Muerta Pausada",
    stillLifeSlowdownDescription: "Una sesión de ritmo más lento enfocada en observar y pintar una hermosa composición de naturaleza muerta con flores, frutas y objetos texturizados.",
    lifeLines: "Líneas de Vida",
    lifeLinesDescription: "Una velada de dibujo del natural con un modelo profesional para quienes quieren explorar la forma, el cuerpo y el flujo.",
    comingSoon: "Próximamente",
    
    // FAQ
    faqTitle: "Qué Esperar",
    faqDescription: "Todo lo que necesitas saber para unirte a nuestra comunidad creativa.",
    faqQ1: "¿Cuántas personas asisten a cada sesión?",
    faqA1: "Mantenemos nuestros encuentros íntimos con 6-12 invitados cuidadosamente seleccionados. Esto crea una atmósfera acogedora donde todos se sienten cómodos para conectar y crear.",
    faqQ2: "¿Cómo aseguran un espacio seguro?",
    faqA2: "Todos los invitados son personalmente seleccionados a través de nuestro proceso de aplicación. Priorizamos crear un ambiente respetuoso e inclusivo donde todos se sientan bienvenidos a expresarse auténticamente.",
    faqQ3: "¿Dónde tienen lugar las sesiones?",
    faqA3: "Nuestras sesiones ocurren en una terraza privada en Barcelona, decorada cuidadosamente con plantas, iluminación suave, y todos los materiales que necesitas. La ubicación exacta se comparte al confirmar la reserva.",
    faqQ4: "¿Qué debo esperar en cuanto a tiempo?",
    faqA4: "Las sesiones típicamente duran 2.5-3 horas, incluyendo tiempo para presentaciones, crear, y conversación gentil. Nos movemos a un ritmo relajado que honra el proceso creativo.",
    faqQ5: "¿Está incluido el vino?",
    faqA5: "¡Sí! Proporcionamos una selección de vino, junto con refrigerios ligeros y té. La velada está diseñada para nutrir tanto tu espíritu creativo como tus sentidos.",
    faqQ6: "¿Necesito experiencia o materiales?",
    faqA6: "No es necesaria experiencia—solo curiosidad y apertura. Todos los materiales de arte, caballetes, y suministros están proporcionados. Ven como eres, listo para explorar y conectar.",
    
    // Waitlist Form
    waitlistTitle: "Únete a Nuestro Círculo Creativo",
    waitlistDescription: "Sé el primero en saber sobre las próximas sesiones y asegura tu lugar en el caballete.",
    yourName: "Tu nombre",
    yourEmail: "Tu email",
    messagePlaceholder: "Cuéntanos qué te atrae hacia la conexión creativa (opcional)",
    privacyText: "Respetamos tu privacidad y solo te contactaremos sobre las sesiones de Brush & Bloom.",
    
    // Footer
    footerDescription: "Encuentros artísticos íntimos donde la creatividad encuentra la conexión en una terraza privada de Barcelona.",
    
    // Toast
    toastTitle: "¡Bienvenido a la lista de espera! ✨",
    toastDescription: "Nos pondremos en contacto pronto con detalles sobre las próximas sesiones."
  },
  
  ca: {
    // Hero
    heroTitle: "Brush & Bloom",
    heroDescription: "On les converses del capvespre troben l'alegria silenciosa, i l'aroma de l'encens es barreja amb la creativitat. Trobades artístiques íntimes en una terrassa privada de Barcelona.",
    joinWaitlist: "Apunta't a la Llista d'Espera",
    learnMore: "Saber-ne Més",
    
    // About
    aboutTitle: "L'Experiència",
    aboutP1: "Entra al nostre santuari il·luminat per espelmes, on els cavalletes esperen entre plantes i la música suau es porta per l'aire nocturn. Això no és una aula—és un espai per a la presència, la vulnerabilitat, i aquest tipus de connexió creativa que sorgeix quan ens alentim junts.",
    aboutP2: "Les nostres reunions íntimes donen la benvinguda tant a artistes com a principiants en una terrassa privada de Barcelona transformada en un oasi de calma. Comparteix vi, històries, i el ritme gentil del pinzell sobre llenç mentre la ciutat s'assenta en el capvespre al nostre voltant.",
    aboutP3: "Cada vetllada està curosament curada amb grups petits, convidats seleccionats, i una atmosfera que honora tant la solitud com la connexió—on ets lliure de perdre't en el teu art o trobar-te en la conversa.",
    
    // Session Types
    sessionTypesTitle: "Tipus de Sessions",
    sessionTypesDescription: "Cada trobada ofereix una manera única d'explorar la creativitat, la connexió i la presència.",
    drawMe: "Dibuixa'm",
    drawMeDescription: "Una sessió guiada on els convidats es dibuixen entre ells en parelles. Dissenyada per amics, parelles, o noves connexions. Divertida, vulnerable, i plena de presència.",
    openStudio: "Estudi Obert",
    openStudioDescription: "Una vetllada relaxada per creatius que pinten junts sense instrucció. Només bona música, materials compartits, i espai per crear.",
    creativeFirsts: "Primers Creatius",
    creativeFirstsDescription: "Una introducció acollidora a la pintura per principiants. Suggeriments guiats, sense judicis, i enfocament en la curiositat i expressió.",
    stillLifeSlowdown: "Natura Morta Pausada",
    stillLifeSlowdownDescription: "Una sessió de ritme més lent enfocada en observar i pintar una bella composició de natura morta amb flors, fruites i objectes texturitzats.",
    lifeLines: "Línies de Vida",
    lifeLinesDescription: "Una vetllada de dibuix del natural amb un model professional per qui vulgui explorar la forma, el cos i el flux.",
    comingSoon: "Properament",
    
    // FAQ
    faqTitle: "Què Esperar",
    faqDescription: "Tot el que necessites saber per unir-te a la nostra comunitat creativa.",
    faqQ1: "Quantes persones assisteixen a cada sessió?",
    faqA1: "Mantenim les nostres trobades íntimes amb 6-12 convidats curosament seleccionats. Això crea una atmosfera acollidora on tothom se sent còmode per connectar i crear.",
    faqQ2: "Com assegureu un espai segur?",
    faqA2: "Tots els convidats són personalment seleccionats a través del nostre procés d'aplicació. Prioritzem crear un ambient respectuós i inclusiu on tothom se senti benvingut a expressar-se autènticament.",
    faqQ3: "On tenen lloc les sessions?",
    faqA3: "Les nostres sessions es fan en una terrassa privada a Barcelona, decorada curosament amb plantes, il·luminació suau, i tots els materials que necessites. La ubicació exacta es comparteix en confirmar la reserva.",
    faqQ4: "Què he d'esperar quant a temps?",
    faqA4: "Les sessions típicament duren 2.5-3 hores, incloent temps per presentacions, crear, i conversa gentil. Ens movem a un ritme relaxat que honora el procés creatiu.",
    faqQ5: "Hi ha vi inclòs?",
    faqA5: "Sí! Proporcionem una selecció de vi, juntament amb refrigeris lleugers i te. La vetllada està dissenyada per nodrir tant el teu esperit creatiu com els teus sentits.",
    faqQ6: "Necessito experiència o materials?",
    faqA6: "No cal experiència—només curiositat i obertura. Tots els materials d'art, cavalletes, i subministraments estan proporcionats. Vine com ets, llest per explorar i connectar.",
    
    // Waitlist Form
    waitlistTitle: "Uneix-te al Nostre Cercle Creatiu",
    waitlistDescription: "Sigues el primer a saber sobre les properes sessions i assegura el teu lloc al cavallete.",
    yourName: "El teu nom",
    yourEmail: "El teu email",
    messagePlaceholder: "Explica'ns què t'atrau cap a la connexió creativa (opcional)",
    privacyText: "Respectem la teva privacitat i només et contactarem sobre les sessions de Brush & Bloom.",
    
    // Footer
    footerDescription: "Trobades artístiques íntimes on la creativitat troba la connexió en una terrassa privada de Barcelona.",
    
    // Toast
    toastTitle: "Benvingut a la llista d'espera! ✨",
    toastDescription: "Ens posarem en contacte aviat amb detalls sobre les properes sessions."
  },
  
  pt: {
    // Hero
    heroTitle: "Brush & Bloom",
    heroDescription: "Onde conversas ao crepúsculo encontram alegria silenciosa, e o aroma de incenso se mistura com a criatividade. Encontros artísticos íntimos em um terraço privado em Barcelona.",
    joinWaitlist: "Entre na Lista de Espera",
    learnMore: "Saiba Mais",
    
    // About
    aboutTitle: "A Experiência",
    aboutP1: "Entre em nosso santuário iluminado por velas, onde cavaletes esperam entre plantas em vasos e música suave se carrega pelo ar noturno. Isto não é uma sala de aula—é um espaço para presença, vulnerabilidade, e o tipo de conexão criativa que acontece quando desaceleramos juntos.",
    aboutP2: "Nossos encontros íntimos recebem artistas e iniciantes igualmente em um terraço privado de Barcelona transformado em um oásis de calma. Compartilhe vinho, histórias, e o ritmo gentil do pincel na tela enquanto a cidade se acomoda no anoitecer ao nosso redor.",
    aboutP3: "Cada noite é cuidadosamente curada com grupos pequenos, convidados selecionados, e uma atmosfera que honra tanto a solidão quanto a conexão—onde você é livre para se perder em sua arte ou se encontrar na conversa.",
    
    // Session Types
    sessionTypesTitle: "Tipos de Sessões",
    sessionTypesDescription: "Cada encontro oferece uma maneira única de explorar criatividade, conexão e presença.",
    drawMe: "Me Desenhe",
    drawMeDescription: "Uma sessão guiada onde convidados se desenham em pares. Projetada para amigos, parceiros, ou novas conexões. Divertida, vulnerável, e cheia de presença.",
    openStudio: "Estúdio Aberto",
    openStudioDescription: "Uma noite relaxada para criativos pintarem juntos sem instrução. Apenas boa música, materiais compartilhados, e espaço para criar.",
    creativeFirsts: "Primeiras Criações",
    creativeFirstsDescription: "Uma introdução acolhedora à pintura para iniciantes. Sugestões guiadas, sem julgamento, e foco na curiosidade e expressão.",
    stillLifeSlowdown: "Natureza Morta Pausada",
    stillLifeSlowdownDescription: "Uma sessão de ritmo mais lento focada em observar e pintar uma bela composição de natureza morta com flores, frutas e objetos texturizados.",
    lifeLines: "Linhas da Vida",
    lifeLinesDescription: "Uma noite de desenho de modelo vivo com um modelo profissional para aqueles que querem explorar forma, corpo e fluxo.",
    comingSoon: "Em Breve",
    
    // FAQ
    faqTitle: "O Que Esperar",
    faqDescription: "Tudo que você precisa saber para se juntar à nossa comunidade criativa.",
    faqQ1: "Quantas pessoas participam de cada sessão?",
    faqA1: "Mantemos nossos encontros íntimos com 6-12 convidados cuidadosamente selecionados. Isso cria uma atmosfera aconchegante onde todos se sentem confortáveis para se conectar e criar.",
    faqQ2: "Como vocês garantem um espaço seguro?",
    faqA2: "Todos os convidados são pessoalmente selecionados através do nosso processo de aplicação. Priorizamos criar um ambiente respeitoso e inclusivo onde todos se sintam bem-vindos para se expressar autenticamente.",
    faqQ3: "Onde acontecem as sessões?",
    faqA3: "Nossas sessões acontecem em um terraço privado em Barcelona, cuidadosamente decorado com plantas, iluminação suave, e todos os materiais que você precisa. A localização exata é compartilhada na confirmação da reserva.",
    faqQ4: "O que devo esperar em termos de tempo?",
    faqA4: "As sessões tipicamente duram 2,5-3 horas, incluindo tempo para apresentações, criação, e conversa gentil. Nos movemos em um ritmo relaxado que honra o processo criativo.",
    faqQ5: "O vinho está incluído?",
    faqA5: "Sim! Fornecemos uma seleção de vinho, junto com lanches leves e chá. A noite é projetada para nutrir tanto seu espírito criativo quanto seus sentidos.",
    faqQ6: "Preciso de experiência ou materiais?",
    faqA6: "Nenhuma experiência necessária—apenas curiosidade e abertura. Todos os materiais de arte, cavaletes, e suprimentos são fornecidos. Venha como você é, pronto para explorar e se conectar.",
    
    // Waitlist Form
    waitlistTitle: "Junte-se ao Nosso Círculo Criativo",
    waitlistDescription: "Seja o primeiro a saber sobre as próximas sessões e garanta seu lugar no cavalete.",
    yourName: "Seu nome",
    yourEmail: "Seu email",
    messagePlaceholder: "Conte-nos o que te atrai para a conexão criativa (opcional)",
    privacyText: "Respeitamos sua privacidade e só entraremos em contato sobre as sessões do Brush & Bloom.",
    
    // Footer
    footerDescription: "Encontros artísticos íntimos onde criatividade encontra conexão em um terraço privado de Barcelona.",
    
    // Toast
    toastTitle: "Bem-vindo à lista de espera! ✨",
    toastDescription: "Entraremos em contato em breve com detalhes sobre as próximas sessões."
  }
});