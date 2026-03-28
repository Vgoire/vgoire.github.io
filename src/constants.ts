import { LucideIcon, Languages, Plane, Hotel, Car, Ship, GraduationCap, FileCheck, Subtitles, Globe, Handshake, HelpCircle, Star, Play } from 'lucide-react';

export type Language = 'en' | 'es' | 'pt' | 'zh' | 'he' | 'ar' | 'ru' | 'ro' | 'nl' | 'no' | 'hi' | 'ja' | 'fr' | 'it' | 'de' | 'ko' | 'fi' | 'el';

export interface Service {
  id: string;
  icon: LucideIcon;
  image: string;
  externalPlatformLink?: string;
  slides?: string[];
  videos?: string[];
  partners?: { name: string; image: string }[];
  faqItems?: { question: string; answer: string }[];
  translations: Record<Language, {
    title: string;
    description: string;
    faqItems?: { question: string; answer: string }[];
  }>;
}

export const WHATSAPP_NUMBER = "5569981232697";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const TRAVEL_PLATFORM_URL = "https://www.comprarviagem.com.br/vgoirestrips";
export const INSTAGRAM_URL = "https://www.instagram.com/vladimirgoire/";
export const YOTUBE_URL_TRIPS = "https://www.youtube.com/watch?v=xYgKO7EMWIc";

export const LANGUAGES: { code: Language; name: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'pt', name: 'Português (BR)', dir: 'ltr' },
  { code: 'zh', name: '中文', dir: 'ltr' },
  { code: 'he', name: 'עברית', dir: 'rtl' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'ru', name: 'Русский', dir: 'ltr' },
  { code: 'ro', name: 'Română', dir: 'ltr' },
  { code: 'nl', name: 'Nederlands', dir: 'ltr' },
  { code: 'no', name: 'Norsk', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr' },
  { code: 'ja', name: '日本語', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'ko', name: '한국어', dir: 'ltr' },
  { code: 'fi', name: 'Suomi', dir: 'ltr' },
  { code: 'el', name: 'Ελληνικά', dir: 'ltr' },
];

export const UI_STRINGS: Record<Language, any> = {
  en: {
    tagline: "Premium Global Solutions",
    visitWebsite: "My Instagram",
    requestQuote: "Request a Quote via WhatsApp",
    accessPlatform: "Access Travel Platform",
    accessPartnersPlatform: "ACCESS  OUR  PARTNERS  PLATFORM  FOR  REFERENCE",
    secureService: "Secure and Confidential Service",
    back: "Back",
    excellence: "Excellence in Every Service",
    rateUs: "Rate us on Google",
    readReviews: "READ MY CLIENTS RATINGS ON GOOGLE",
    reviews: "CLIENT REVIEWS",
    partners: "OUR PARTNERS",
    questionsResponses: "QUESTIONS and RESPONSES",
    privacyPolicy: "Privacy Policy",
    privacyContent: "VGOIRE is committed to protecting your privacy. This application does not collect personal data directly. Any information shared via WhatsApp or external links is handled by those respective platforms according to their own privacy policies. We do not share your information with third parties."
  },
  es: {
    tagline: "Soluciones Globales Premium",
    visitWebsite: "Mi Instagram",
    requestQuote: "Solicitar Presupuesto por WhatsApp",
    accessPlatform: "Acceder a la Plataforma de Viajes",
    accessPartnersPlatform: "ACCEDER A LA PLATAFORMA DE NUESTROS SOCIOS PARA REFERENCIA",
    secureService: "Servicio Seguro y Confidencial",
    back: "Volver",
    excellence: "Excelencia en cada servicio",
    rateUs: "Califícanos en Google",
    readReviews: "LEER LAS CALIFICACIONES DE MIS CLIENTES EN GOOGLE",
    reviews: "OPINIONES DE CLIENTES",
    partners: "NUESTROS SOCIOS",
    questionsResponses: "PREGUNTAS y RESPUESTAS",
    privacyPolicy: "Política de Privacidad",
    privacyContent: "VGOIRE se compromete a proteger su privacidad. Esta aplicación no recopila datos personales directamente. Cualquier información compartida a través de WhatsApp o enlaces externos es manejada por esas plataformas respectivas de acuerdo con sus propias políticas de privacidad. No compartimos su información con terceros."
  },
  pt: {
    tagline: "Soluções Globais Premium",
    visitWebsite: "Meu Instagram",
    requestQuote: "Solicitar Orçamento via WhatsApp",
    accessPlatform: "Acessar Plataforma de Viagens",
    accessPartnersPlatform: "ACESSAR A PLATAFORMA DE NOSSOS PARCEIROS PARA REFERÊNCIA",
    secureService: "Serviço Seguro e Confidencial",
    back: "Voltar",
    excellence: "Excelência em cada serviço",
    rateUs: "Avalie-nos no Google",
    readReviews: "LER AS AVALIAÇÕES DOS MEUS CLIENTES NO GOOGLE",
    reviews: "AVALIAÇÕES DE CLIENTES",
    partners: "NOSSOS PARCEIROS",
    questionsResponses: "PERGUNTAS e RESPOSTAS",
    privacyPolicy: "Política de Privacidade",
    privacyContent: "A VGOIRE está comprometida em proteger sua privacidade. Este aplicativo não coleta dados pessoais diretamente. Qualquer informação compartilhada via WhatsApp ou links externos é tratada por essas respectivas plataformas de acordo com suas próprias políticas de privacidade. Não compartilhamos suas informações com terceiros."
  },
  zh: {
    tagline: "优质全球解决方案",
    visitWebsite: "我的 Instagram",
    requestQuote: "通过 WhatsApp 请求报价",
    accessPlatform: "访问旅游平台",
    accessPartnersPlatform: "访问我们的合作伙伴平台以供参考",
    secureService: "安全保密的服务",
    back: "返回",
    excellence: "卓越的服务",
    rateUs: "在 Google 上评价我们",
    readReviews: "在 GOOGLE 上阅读我的客户评分",
    reviews: "客户评价",
    partners: "我们的合作伙伴",
    questionsResponses: "问题与解答",
    privacyPolicy: "隐私政策",
    privacyContent: "VGOIRE 致力于保护您的隐私。本应用不直接收集个人数据。通过 WhatsApp 或外部链接共享的任何信息均由这些相应平台根据其自身的隐私政策处理。我们不会与第三方共享您的信息。"
  },
  he: {
    tagline: "פתרונות גלובליים פרימיום",
    visitWebsite: "האינסטגרם שלי",
    requestQuote: "בקש הצעת מחיר בוואטסאפ",
    accessPlatform: "גישה לפלטפורמת נסיעות",
    accessPartnersPlatform: "גישה לפלטפורמת השותפים שלנו לעיון",
    secureService: "שירות מאובטח וחסוי",
    back: "חזור",
    excellence: "מצוינות בכל שירות",
    rateUs: "דרגו אותנו בגוגל",
    readReviews: "קרא את דירוגי הלקוחות שלי בגוגל",
    reviews: "ביקורות לקוחות",
    partners: "השותפים שלנו",
    questionsResponses: "שאלות ותשובות",
    privacyPolicy: "מדיניות פרטיות",
    privacyContent: "VGOIRE מחויבת להגן על הפרטיות שלך. אפליקציה זו אינה אוספת נתונים אישיים באופן ישיר. כל מידע המשותף באמצעות WhatsApp או קישורים חיצוניים מטופל על ידי הפלטפורמות המתאימות בהתאם למדיניות הפרטיות שלהן. איננו משתפים את המידע שלך עם צדדים שלישיים."
  },
  ar: {
    tagline: "حلول عالمية متميزة",
    visitWebsite: "الإنستغرام الخاص بي",
    requestQuote: "طلب عرض سعر عبر واتساب",
    accessPlatform: "الوصول إلى منصة السفر",
    accessPartnersPlatform: "الوصول إلى منصة شركائنا للمرجع",
    secureService: "خدمة آمنة וسرية",
    back: "رجوع",
    excellence: "التميز في كل خدمة",
    rateUs: "قيمنا على Google",
    readReviews: "اقرأ تقييمات عملائي على GOOGLE",
    reviews: "آراء العملاء",
    partners: "شركاؤنا",
    questionsResponses: "الأسئلة والأجوبة",
    privacyPolicy: "سياسة الخصوصية",
    privacyContent: "تلتزم VGOIRE بحماية خصوصيتك. لا يجمع هذا التطبيق البيانات الشخصية مباشرة. يتم التعامل مع أي معلومات يتم مشاركتها عبر WhatsApp أو الروابط الخارجية من قبل تلك المنصات المعنية وفقًا لسياسات الخصوصية الخاصة بها. نحن لا نشارك معلوماتك مع أطراف ثالثة."
  },
  ru: {
    tagline: "Премиальные глобальные решения",
    visitWebsite: "Мой Instagram",
    requestQuote: "Запросить расчет в WhatsApp",
    accessPlatform: "Доступ к платформе",
    accessPartnersPlatform: "ДОСТУП К ПЛАТФОРМЕ НАШИХ ПАРТНЕРОВ ДЛЯ СПРАВКИ",
    secureService: "Безопасный и конфиденциальный сервис",
    back: "Назад",
    excellence: "Превосходство в каждой услуге",
    rateUs: "Оцените нас в Google",
    readReviews: "ПРОЧИТАТЬ РЕЙТИНГИ МОИХ КЛИЕНТОВ В GOOGLE",
    reviews: "ОТЗЫВЫ КЛИЕНТОВ",
    partners: "НАШИ ПАРТНЕРЫ",
    questionsResponses: "ВОПРОСЫ и ОТВЕТЫ",
    privacyPolicy: "Политика конфиденциальности",
    privacyContent: "VGOIRE стремится защищать вашу конфиденциальность."
  },
  ro: {
    tagline: "Soluții globale premium",
    visitWebsite: "Instagramul meu",
    requestQuote: "Solicită o ofertă prin WhatsApp",
    accessPlatform: "Accesează platforma",
    accessPartnersPlatform: "ACCESEAZĂ PLATFORMA PARTENERILOR NOȘTRI PENTRU REFERINȚĂ",
    secureService: "Serviciu sigur și confidențial",
    back: "Înapoi",
    excellence: "Excelență în fiecare serviciu",
    rateUs: "Evaluează-ne pe Google",
    readReviews: "CITIȚI EVALUĂRILE CLIENȚILOR MEI PE GOOGLE",
    reviews: "RECENZII CLIENȚI",
    partners: "PARTENERII NOȘTRI",
    questionsResponses: "ÎNTREBĂRI și RĂSPUNSURI",
    privacyPolicy: "Politica de confidențialitate",
    privacyContent: "VGOIRE se angajează să vă protejeze confidențialitatea."
  },
  nl: {
    tagline: "Premium wereldwijde oplossingen",
    visitWebsite: "Mijn Instagram",
    requestQuote: "Offerte aanvragen via WhatsApp",
    accessPlatform: "Toegang tot platform",
    accessPartnersPlatform: "TOEGANG TOT HET PLATFORM VAN ONZE PARTNERS TER REFERENTIE",
    secureService: "Veilige en vertrouwelijke service",
    back: "Terug",
    excellence: "Uitmuntendheid in elke service",
    rateUs: "Beoordeel ons op Google",
    readReviews: "LEES MIJN KLANTBEOORDELINGEN OP GOOGLE",
    reviews: "KLANTBEOORDELINGEN",
    partners: "ONZE PARTNERS",
    questionsResponses: "VRAGEN en ANTWOORDEN",
    privacyPolicy: "Privacybeleid",
    privacyContent: "VGOIRE zet zich in voor het beschermen van uw privacy."
  },
  no: {
    tagline: "Premium globale løsninger",
    visitWebsite: "Min Instagram",
    requestQuote: "Be om tilbud via WhatsApp",
    accessPlatform: "Tilgang til plattform",
    accessPartnersPlatform: "TILGANG TIL VÅRE PARTNERES PLATTFORM FOR REFERANSE",
    secureService: "Sikker og konfidensiell tjeneste",
    back: "Tilbake",
    excellence: "Excellence i hver tjeneste",
    rateUs: "Vurder oss på Google",
    readReviews: "LES MINE KUNDEVURDERINGER PÅ GOOGLE",
    reviews: "KUNDEANMELDELSER",
    partners: "VÅRE PARTNERE",
    questionsResponses: "SPØRSMÅL og SVAR",
    privacyPolicy: "Personvernregler",
    privacyContent: "VGOIRE er forpliktet til å beskytte ditt personvern."
  },
  hi: {
    tagline: "प्रीमियम वैश्विक समाधान",
    visitWebsite: "मेरा इंस्टाग्राम",
    requestQuote: "WhatsApp के माध्यम से कोट का अनुरोध करें",
    accessPlatform: "प्लेटफॉर्म तक पहुंचें",
    accessPartnersPlatform: "संदर्भ के लिए हमारे भागीदारों के प्लेटफॉर्म तक पहुंचें",
    secureService: "सुरक्षित और गोपनीय सेवा",
    back: "पीछे",
    excellence: "हर सेवा में उत्कृष्टता",
    rateUs: "हमें Google पर रेट करें",
    readReviews: "GOOGLE पर मेरे ग्राहकों की रेटिंग पढ़ें",
    reviews: "ग्राहक समीक्षा",
    partners: "हमारे भागीदार",
    questionsResponses: "प्रश्न और उत्तर",
    privacyPolicy: "गोपनीयता नीति",
    privacyContent: "VGOIRE आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है।"
  },
  ja: {
    tagline: "プレミアムなグローバルソリューション",
    visitWebsite: "私のInstagram",
    requestQuote: "WhatsAppで見積もりを依頼する",
    accessPlatform: "プラットフォームにアクセス",
    accessPartnersPlatform: "参照用にパートナーのプラットフォームにアクセス",
    secureService: "安全で機密性の高いサービス",
    back: "戻る",
    excellence: "すべてのサービスにおける卓越性",
    rateUs: "Googleで評価する",
    readReviews: "GOOGLEで私の顧客の評価を読む",
    reviews: "お客様の声",
    partners: "パートナー",
    questionsResponses: "質問と回答",
    privacyPolicy: "プライバシーポリシー",
    privacyContent: "VGOIREはお客様のプライバシー保護に努めています。"
  },
  fr: {
    tagline: "Solutions globales premium",
    visitWebsite: "Mon Instagram",
    requestQuote: "Demander un devis via WhatsApp",
    accessPlatform: "Accéder à la plateforme",
    accessPartnersPlatform: "ACCÉDER À LA PLATEFORME DE NOS PARTENAIRES POUR RÉFÉRENCE",
    secureService: "Service sécurisé et confidentiel",
    back: "Retour",
    excellence: "Excellence dans chaque service",
    rateUs: "Évaluez-nous sur Google",
    readReviews: "LIRE LES ÉVALUATIONS DE MES CLIENTS SUR GOOGLE",
    reviews: "AVIS CLIENTS",
    partners: "NOS PARTENAIRES",
    questionsResponses: "QUESTIONS et RÉPONSES",
    privacyPolicy: "Politique de confidentialité",
    privacyContent: "VGOIRE s'engage à protéger votre vie privée."
  },
  it: {
    tagline: "Soluzioni globali premium",
    visitWebsite: "Il mio Instagram",
    requestQuote: "Richiedi un preventivo via WhatsApp",
    accessPlatform: "Accedi alla piattaforma",
    accessPartnersPlatform: "ACCEDI ALLA PIATTAFORMA DEI NOSTRI PARTNER PER RIFERIMENTO",
    secureService: "Servizio sicuro e riservato",
    back: "Indietro",
    excellence: "Eccellenza in ogni servizio",
    rateUs: "Valutaci su Google",
    readReviews: "LEGGI LE VALUTAZIONI DEI MIEI CLIENTI SU GOOGLE",
    reviews: "RECENSIONI CLIENTI",
    partners: "I NOSTRI PARTNER",
    questionsResponses: "DOMANDE e RISPOSTE",
    privacyPolicy: "Informativa sulla privacy",
    privacyContent: "VGOIRE si impegna a proteggere la tua privacy."
  },
  de: {
    tagline: "Premium-Lösungen weltweit",
    visitWebsite: "Mein Instagram",
    requestQuote: "Angebot per WhatsApp anfordern",
    accessPlatform: "Plattform aufrufen",
    accessPartnersPlatform: "ZUGRIFF AUF DIE PLATTFORM UNSERER PARTNER ZUR REFERENZ",
    secureService: "Sicherer und vertraulicher Service",
    back: "Zurück",
    excellence: "Exzellenz in jedem Service",
    rateUs: "Bewerten Sie uns auf Google",
    readReviews: "LESEN SIE MEINE KUNDENBEWERTUNGEN AUF GOOGLE",
    reviews: "KUNDENBEWERTUNGEN",
    partners: "UNSERE PARTNER",
    questionsResponses: "FRAGEN und ANTWORTEN",
    privacyPolicy: "Datenschutzerklärung",
    privacyContent: "VGOIRE setzt sich für den Schutz Ihrer Privatsphäre ein."
  },
  ko: {
    tagline: "프리미엄 글로벌 솔루션",
    visitWebsite: "내 Instagram",
    requestQuote: "WhatsApp으로 견적 요청",
    accessPlatform: "플랫폼 접속",
    accessPartnersPlatform: "참고용 파트너 플랫폼 접속",
    secureService: "안전하고 기밀이 유지되는 서비스",
    back: "뒤로",
    excellence: "모든 서비스에서의 탁월함",
    rateUs: "Google에서 평가하기",
    readReviews: "GOOGLE에서 내 고객 평점 읽기",
    reviews: "고객 리뷰",
    partners: "파트너",
    questionsResponses: "질문 및 답변",
    privacyPolicy: "개인정보 처리방침",
    privacyContent: "VGOIRE는 귀하의 개인정보를 보호하기 위해 최선을 다하고 있습니다."
  },
  fi: {
    tagline: "Premium-tason globaalit ratkaisut",
    visitWebsite: "Instagramini",
    requestQuote: "Pyydä tarjous WhatsAppilla",
    accessPlatform: "Pääsy alustalle",
    accessPartnersPlatform: "PÄÄSY KUMPPANEIDEMME ALUSTALLE VIITTEEKSI",
    secureService: "Turvallinen ja luottamuksellinen palvelu",
    back: "Takaisin",
    excellence: "Erinomaisuus jokaisessa palvelussa",
    rateUs: "Arvioi meidät Googlessa",
    readReviews: "LUE ASIAKKAIDENI ARVIOT GOOGLESTA",
    reviews: "ASIAKASARVOSTELUT",
    partners: "KUMPPANIMME",
    questionsResponses: "KYSYMYKSET ja VASTAUKSET",
    privacyPolicy: "Tietosuojakäytäntö",
    privacyContent: "VGOIRE on sitoutunut suojaamaan yksityisyyttäsi."
  },
  el: {
    tagline: "Premium παγκόσμιες λύσεις",
    visitWebsite: "Το Instagram μου",
    requestQuote: "Ζητήστε προσφορά μέσω WhatsApp",
    accessPlatform: "Πρόσβαση στην πλατφόρμα",
    accessPartnersPlatform: "ΠΡΟΣΒΑΣΗ ΣΤΗΝ ΠΛΑΤΦΟΡΜΑ ΤΩΝ ΣΥΝΕΡΓΑΤΩΝ ΜΑΣ ΓΙΑ ΑΝΑΦΟΡΑ",
    secureService: "Ασφαλής και εμπιστευτική υπηρεσία",
    back: "Πίσω",
    excellence: "Αριστεία σε κάθε υπηρεσία",
    rateUs: "Αξιολογήστε μας στο Google",
    readReviews: "ΔΙΑΒΑΣΤΕ ΤΙΣ ΑΞΙΟΛΟΓΗΣΕΙΣ ΤΩΝ ΠΕΛΑΤΩΝ ΜΟΥ ΣΤΟ GOOGLE",
    reviews: "ΚΡΙΤΙΚΕΣ ΠΕΛΑΤΩΝ",
    partners: "ΟΙ ΣΥΝΕΡΓΑΤΕΣ ΜΑΣ",
    questionsResponses: "ΕΡΩΤΗΣΕΙΣ και ΑΠΑΝΤΗΣΕΙΣ",
    privacyPolicy: "Πολιτική απορρήτου",
    privacyContent: "Η VGOIRE δεσμεύεται να προστατεύει το απόρρητό σας."
  }
};

export const SERVICES: Service[] = [
  {
    id: 'translations',
    icon: Languages,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { title: 'TRANSLATIONS', description: 'Certified translation services in 15+ languages including English, Spanish, Portuguese, French, and more. Highly qualified translators recognized in Brazil.' },
      es: { title: 'TRADUCCIONES', description: 'Servicios de traducción certificada en más de 15 idiomas. Traductores altamente calificados y reconocidos en Brasil.' },
      pt: { title: 'TRADUÇÕES', description: 'Serviços de tradução juramentada em mais de 15 idiomas. Tradutores altamente qualificados e reconhecidos no Brasil.' },
      zh: { title: '翻译', description: '提供15种以上语言的认证翻译服务。巴西认可的高素质翻译人员。' },
      he: { title: 'תרגומים', description: 'שירותי תרגום מאושרים ב-15+ שפות. מתרגמים מוסמכים ומוכרים בברזיל.' },
      ar: { title: 'الترجمة', description: 'خدمات ترجمة معتمدة بأكثر من 15 لغة. مترجمون مؤهلون تأهيلاً عالياً ومعترف بهم في البرازيل.' },
      ru: { title: 'ПЕРЕВОДЫ', description: 'Сертифицированные услуги перевода на 15+ языков. Высококвалифицированные переводчики, признанные в Бразилии.' },
      ro: { title: 'TRADUCERI', description: 'Servicii de traduceri autorizate în peste 15 limbi. Traducători înalt calificați și recunoscuți în Brazilia.' },
      nl: { title: 'VERTALINGEN', description: 'Beëdigde vertaaldiensten in 15+ talen. Hooggekwalificeerde vertalers erkend in Brazilië.' },
      no: { title: 'OVERSETTELSER', description: 'Sertifiserte oversettelsestjenester på 15+ språk. Høyt kvalifiserte oversettere anerkjent i Brasil.' },
      hi: { title: 'अनुवाद', description: '15+ भाषाओं में प्रमाणित अनुवाद सेवाएं। ब्राजील में मान्यता प्राप्त उच्च योग्य अनुवादक।' },
      ja: { title: '翻訳', description: '15言語以上の公認翻訳サービス。ブラジルで認められた高度な資格を持つ翻訳者。' },
      fr: { title: 'TRADUCTIONS', description: 'Services de traduction certifiée dans plus de 15 langues. Traducteurs hautement qualifiés reconnus au Brésil.' },
      it: { title: 'TRADUZIONI', description: 'Servizi di traduzione certificata in oltre 15 lingue. Traduttori altamente qualificati riconosciuti in Brasile.' },
      de: { title: 'ÜBERSETZUNGEN', description: 'Beglaubigte Übersetzungsdienste in über 15 Sprachen. Hochqualifizierte Übersetzer, die in Brasilien anerkannt sind.' },
      ko: { title: '번역', description: '15개 이상의 언어로 제공되는 공인 번역 서비스. 브라질에서 인정받는 고도로 숙련된 번역가.' },
      fi: { title: 'KÄÄNNÖKSET', description: 'Auktorisoidut käännöspalvelut yli 15 kielellä. Brasiliassa tunnustetut pätevät kääntäjät.' },
      el: { title: 'ΜΕΤΑΦΡΑΣΕΙΣ', description: 'Πιστοποιημένες μεταφραστικές υπηρεσίες σε 15+ γλώσσες. Υψηλά καταρτισμένοι μεταφραστές αναγνωρισμένοι στη Βραζιλία.' }
    }
  },
  {
    id: 'travel',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
    externalPlatformLink: TRAVEL_PLATFORM_URL,
    translations: {
      en: { title: 'TRAVEL', description: 'Domestic and international flights worldwide. Explore the world with comfort and safety.' },
      es: { title: 'VIAJES', description: 'Vuelos nacionales e internacionales en todo el mundo. Explore el mundo con comodidad y seguridad.' },
      pt: { title: 'VIAGENS', description: 'Passagens aéreas domésticas e internacionais em todo o mundo. Explore o mundo com conforto e segurança.' },
      zh: { title: '旅游', description: '全球国内和国际航班。舒适安全地探索世界。' },
      he: { title: 'נסיעות', description: 'טיסות פנים ובינלאומיות ברחבי העולם. חקור את העולם בנוחות ובבטיחות.' },
      ar: { title: 'السفر', description: 'رحلات طيران محلية ودولية في جميع أنحاء العالم. استكشف العالم براحة وأمان.' },
      ru: { title: 'ПУТЕШЕСТВИЯ', description: 'Внутренние и международные рейсы по всему миру. Исследуйте мир с комфортом и безопасностью.' },
      ro: { title: 'CĂLĂTORII', description: 'Zboruri interne și internaționale în întreaga lume. Explorează lumea cu confort și siguranță.' },
      nl: { title: 'REIZEN', description: 'Binnenlandse en internationale vluchten wereldwijd. Verken de wereld met comfort en veiligheid.' },
      no: { title: 'REISER', description: 'Innlands- og utenlandsflyvninger over hele verden. Utforsk verden med komfort og sikkerhet.' },
      hi: { title: 'यात्रा', description: 'दुनिया भर में घरेलू और अंतर्राष्ट्रीय उड़ानें। आराम और सुरक्षा के साथ दुनिया का अन्वेषण करें।' },
      ja: { title: '旅行', description: '世界中の国内線および国際線。快適さと安全性を備えた世界を探索してください。' },
      fr: { title: 'VOYAGES', description: 'Vols nationaux et internationaux dans le monde entier. Explorez le monde avec confort et sécurité.' },
      it: { title: 'VIAGGI', description: 'Voli nazionali e internazionali in tutto il mondo. Esplora il mondo con comfort e sicurezza.' },
      de: { title: 'REISEN', description: 'Inlands- und internationale Flüge weltweit. Erkunden Sie die Welt mit Komfort und Sicherheit.' },
      ko: { title: '여행', description: '전 세계 국내 및 국제선 항공편. 편안하고 안전하게 세계를 탐험하세요.' },
      fi: { title: 'MATKUSTUS', description: 'Koti- ja ulkomaanlennot maailmanlaajuisesti. Tutki maailmaa mukavasti ja turvallisesti.' },
      el: { title: 'ΤΑΞΙΔΙΑ', description: 'Εσωτερικές και διεθνείς πτήσεις παγκοσμίως. Εξερευνήστε τον κόσμο με άνεση και ασφάλεια.' }
    }
  },
  {
    id: 'hotel-bookings',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    externalPlatformLink: TRAVEL_PLATFORM_URL,
    translations: {
      en: { title: 'HOTEL BOOKINGS', description: 'Find the best hotels for your stay with exclusive rates worldwide.' },
      es: { title: 'RESERVAS DE HOTEL', description: 'Encuentre los mejores hoteles para su estancia con tarifas exclusivas en todo el mundo.' },
      pt: { title: 'RESERVAS DE HOTEL', description: 'Encontre os melhores hotéis para sua estadia com tarifas exclusivas no mundo todo.' },
      zh: { title: '酒店预订', description: '在全球范围内以专属价格为您寻找最佳酒店。' },
      he: { title: 'הזמנת מלונות', description: 'מצא את המלונות הטובים ביותר לשהותך בתעריפים בלעדיים ברחבי העולם.' },
      ar: { title: 'حجز الفنادق', description: 'ابحث عن أفضل الفنادق لإقامتك بأسعار حصرية في جميع أنحاء العالم.' },
      ru: { title: 'БРОНИРОВАНИЕ ОТЕЛЕЙ', description: 'Найдите лучшие отели для вашего пребывания по эксклюзивным тарифам по всему миру.' },
      ro: { title: 'REZERVĂRI HOTELIERE', description: 'Găsiți cele mai bune hoteluri pentru sejurul dumneavoastră cu tarife exclusive în întreaga lume.' },
      nl: { title: 'HOTELBOEKINGEN', description: 'Vind de beste hotels voor uw verblijf met exclusieve tarieven wereldwijd.' },
      no: { title: 'HOTELLBOOKING', description: 'Finn de beste hotellene for ditt opphold med eksklusive priser over hele verden.' },
      hi: { title: 'होटल बुकिंग', description: 'दुनिया भर में विशेष दरों के साथ अपने प्रवास के लिए सर्वोत्तम होटल खोजें।' },
      ja: { title: 'ホテル予約', description: '世界中の限定料金で、滞在に最適なホテルを見つけてください।' },
      fr: { title: 'RÉSERVATIONS D\'HÔTEL', description: 'Trouvez les meilleurs hôtels pour votre séjour avec des tarifs exclusifs dans le monde entier.' },
      it: { title: 'PRENOTAZIONI HOTEL', description: 'Trova i migliori hotel per il tuo soggiorno con tariffe esclusive in tutto il mondo.' },
      de: { title: 'HOTELBUCHUNGEN', description: 'Finden Sie die besten Hotels für Ihren Aufenthalt mit exklusiven Preisen weltweit.' },
      ko: { title: '호텔 예약', description: '전 세계 독점 요금으로 숙박에 가장 적합한 호텔을 찾으세요.' },
      fi: { title: 'HOTELLIVARAUKSET', description: 'Löydä parhaat hotellit majoitukseesi eksklusiivisilla hinnoilla maailmanlaajuisesti.' },
      el: { title: 'ΚΡΑΤΗΣΕΙΣ ΞΕΝΟΔΟΧΕΙΩΝ', description: 'Βρείτε τα καλύτερα ξενοδοχεία για τη διαμονή σας με αποκλειστικές τιμές παγκοσμίως.' }
    }
  },
  {
    id: 'car-rental',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    externalPlatformLink: TRAVEL_PLATFORM_URL,
    translations: {
      en: { title: 'CAR RENTAL', description: 'Rent simple, practical and confortable cars in Brazil.' },
      es: { title: 'ALQUILER DE AUTOS', description: 'Alquile autos sencillos, prácticos y cómodos en Brasil.' },
      pt: { title: 'ALUGUEL DE CARROS', description: 'Alugue carros simples, funcionais e bem confortáveis no Brasil.' },
      zh: { title: '租车服务', description: '为您的全球旅行租赁豪华、安全且舒适的汽车。' },
      he: { title: 'השכרת רכב', description: 'שכור רכבי יוקרה, בטוחים ונוחים לנסיעותיך ברחבי העולם.' },
      ar: { title: 'تأجير السيارات', description: 'استأجر سيارات فاخرة وآمنة ومريحة لرحلاتك حول العالم.' },
      ru: { title: 'ПРОКАТ АВТОМОБИЛЕЙ', description: 'Арендуйте роскошные, безопасные и комфортабельные автомобили для поездок по всему миру.' },
      ro: { title: 'ÎNCHIRIERI AUTO', description: 'Închiriați mașini de lux, sigure și confortabile pentru călătoriile dumneavoastră în întreaga lume.' },
      nl: { title: 'AUTOVERHUUR', description: 'Huur luxe, veilige en comfortabele auto\'s voor uw reizen wereldwijd.' },
      no: { title: 'BILUTLEIE', description: 'Lei luksuriøse, trygge og komfortable biler for dine reiser over hele verden.' },
      hi: { title: 'कार किराए पर लेना', description: 'दुनिया भर में अपनी यात्राओं के लिए लक्जरी, सुरक्षित और आरामदायक कारें किराए पर लें।' },
      ja: { title: 'レンタカー', description: '世界中の旅行のために、豪華で安全、かつ快適な車をレンタルしてください。' },
      fr: { title: 'LOCATION DE VOITURE', description: 'Louez des voitures de luxe, sûres et confortables pour vos voyages dans le monde entier.' },
      it: { title: 'NOLEGGIO AUTO', description: 'Noleggia auto di lusso, sicure e confortevoli per i tuoi viaggi in tutto il mondo.' },
      de: { title: 'AUTOVERMIETUNG', description: 'Mieten Sie luxuriöse, sichere und komfortable Autos für Ihre Reisen weltweit.' },
      ko: { title: '렌터카', description: '전 세계 여행을 위해 럭셔리하고 안전하며 편안한 자동차를 렌트하세요.' },
      fi: { title: 'AUTONVUOKRAUS', description: 'Vuokraa ylellisiä, turvallisia ja mukavia autoja matkoillesi maailmanlaajuisesti.' },
      el: { title: 'ΕΝΟΙΚΙΑΣΗ ΑΥΤΟΚΙΝΗΤΟΥ', description: 'Ενοικιάστε πολυτελή, ασφαλή και άνετα αυτοκίνητα για τα ταξίδια σας σε όλο τον κόσμο.' }
    }
  },
  {
    id: 'cruises',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
    slides: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?auto=format&fit=crop&q=80&w=1200'
    ],
    translations: {
      en: { title: 'CRUISES', description: 'Luxury cruises with a variety of activities for families to explore beautiful destinations (Partner: Qualitours).' },
      es: { title: 'CRUCEROS', description: 'Cruceros de lujo con una variedad de actividades para familias para explorar destinos hermosos (Socio: Qualitours).' },
      pt: { title: 'CRUZEIROS', description: 'Cruzeiros luxuosos com uma variedade de atividades para as famílias explorarem destinos bonitos (Parceiro: Qualitours).' },
      zh: { title: '游轮', description: '豪华游轮，为家庭提供各种活动，探索美丽的目的地（合作伙伴：Qualitours）。' },
      he: { title: 'הפלגות', description: 'הפלגות יוקרה עם מגוון פעילויות למשפחות לחקור יעדים יפים (שותף: Qualitours).' },
      ar: { title: 'الرحلات البحرية', description: 'رحلات بحرية فاخرة مع مجموعة متنوعة من الأنشطة للعائلات لاستكشاف وجهات جميلة (الشريك: Qualitours).' },
      ru: { title: 'КРУИЗЫ', description: 'Роскошные круизы с разнообразными мероприятиями для семейного отдыха (Партнер: Qualitours).' },
      ro: { title: 'CROAZIERE', description: 'Croaziere de lux cu o varietate de activități pentru familii pentru a explora destinații frumoase (Partener: Qualitours).' },
      nl: { title: 'CRUISES', description: 'Luxe cruises met een verscheidenheid aan activiteiten voor gezinnen om prachtige bestemmingen te verkennen (Partner: Qualitours).' },
      no: { title: 'CRUISES', description: 'Luksuriøse cruise med en rekke aktiviteter for familier for å utforske vakre destinasjoner (Partner: Qualitours).' },
      hi: { title: 'क्रूज', description: 'सुंदर गंतव्यों का पता लगाने के लिए परिवारों के लिए विभिन्न गतिविधियों के साथ लक्जरी क्रूज (साझेदार: Qualitours)।' },
      ja: { title: 'クルーズ', description: '美しい目的地を探索するための家族向けのさまざまなアクティビティを備えた豪華クルーズ（パートナー：Qualitours）。' },
      fr: { title: 'CROISIÈRES', description: 'Croisières de luxe avec une variété d\'activités pour les familles pour explorer de belles destinations (Partenaire : Qualitours).' },
      it: { title: 'CROCIERE', description: 'Crociere di lusso con una varietà di attività per le famiglie per esplorare bellissime destinazioni (Partner: Qualitours).' },
      de: { title: 'KREUZFAHRTEN', description: 'Luxuskreuzfahrten mit einer Vielzahl von Aktivitäten für Familien, um wunderschöne Reiseziele zu erkunden (Partner: Qualitours).' },
      ko: { title: '크루즈', description: '가족이 아름다운 목적지를 탐험할 수 있는 다양한 활동을 갖춘 럭셔리 크루즈(파트너: Qualitours).' },
      fi: { title: 'RISTEILYT', description: 'Ylelliset risteilyt monipuolisilla aktiviteeteilla perheille kauniisiin kohteisiin tutustumiseen (Kumppani: Qualitours).' },
      el: { title: 'ΚΡΟΥΑΖΙΕΡΕΣ', description: 'Πολυτελείς κρουαζιέρες με ποικιλία δραστηριοτήτων για οικογένειες για να εξερευνήσουν όμορφους προορισμούς (Συνεργάτης: Qualitours).' }
    }
  },
  {
    id: 'language-classes',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { title: 'LANGUAGE CLASSES', description: 'Online English and Spanish classes for all levels. Learn at your own pace.' },
      es: { title: 'CLASES DE IDIOMAS', description: 'Clases de inglés y español en línea para todos los niveles. Aprenda a su propio ritmo.' },
      pt: { title: 'AULAS DE IDIOMAS', description: 'Aulas de inglês e espanhol online para todos os níveis. Aprenda no seu próprio ritmo.' },
      zh: { title: '语言课程', description: '适合所有级别的在线英语和西班牙语课程。按您自己的节奏学习。' },
      he: { title: 'שיעורי שפה', description: 'שיעורי אנגלית וספרדית אונליין לכל הרמות. למד בקצב שלך.' },
      ar: { title: 'دروس اللغة', description: 'دروس اللغة الإنجليزية والإسبانية عبر الإنترنت لجميع المستويات. تعلم بالسرعة التي تناسبك.' },
      ru: { title: 'ЯЗЫКОВЫЕ КУРСЫ', description: 'Онлайн-уроки английского и испанского языков для всех уровней.' },
      ro: { title: 'CURSURI DE LIMBI STRĂINE', description: 'Cursuri online de engleză și spaniolă pentru toate nivelurile.' },
      nl: { title: 'TAALLESSEN', description: 'Online lessen Engels en Spaans voor alle niveaus.' },
      no: { title: 'SPRÅKKURS', description: 'Online engelsk- og spanskkurs for alle nivåer.' },
      hi: { title: 'भाषा कक्षाएं', description: 'सभी स्तरों के लिए ऑनलाइन अंग्रेजी और स्पेनिश कक्षाएं।' },
      ja: { title: '語学クラス', description: 'すべてのレベルを対象としたオンラインの英語とスペイン語のクラス。' },
      fr: { title: 'COURS DE LANGUES', description: 'Cours d\'anglais et d\'espagnol en ligne pour tous les niveaux.' },
      it: { title: 'CLASSI DI LINGUA', description: 'Lezioni di inglese e spagnolo online per tutti i livelli.' },
      de: { title: 'SPRACHKURSE', description: 'Online-Englisch- und Spanischkurse für alle Niveaus.' },
      ko: { title: '언어 수업', description: '모든 수준을 위한 온라인 영어 및 스페인어 수업.' },
      fi: { title: 'KIELIKURSSIT', description: 'Online-englannin ja espanjan tunnit kaikille tasoille.' },
      el: { title: 'ΜΑΘΗΜΑΤΑ ΓΛΩΣΣΩΝ', description: 'Διαδικτυακά μαθήματα Αγγλικών και Ισπανικών για όλα τα επίπεδα.' }
    }
  },
  {
    id: 'training',
    icon: FileCheck,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { title: 'EXAM TRAINING', description: 'Preparation for DELE, IELTS, TOEFL, and Duolingo exams. Achieve your goals.' },
      es: { title: 'ENTRENAMIENTO PARA EXÁMENES', description: 'Preparación para los exámenes DELE, IELTS, TOEFL y Duolingo. Alcance sus metas.' },
      pt: { title: 'TREINAMENTO PARA EXAMES', description: 'Preparação para os exames DELE, IELTS, TOEFL e Duolingo. Alcance seus objetivos.' },
      zh: { title: '考试培训', description: 'DELE、IELTS、TOEFL 和 Duolingo 考试准备。实现您的目标。' },
      he: { title: 'הכנה למבחנים', description: 'הכנה למבחני DELE, IELTS, TOEFL ו-Duolingo. השג את המטרות שלך.' },
      ar: { title: 'التدريب على الامتحانات', description: 'التحضير لامتحانات DELE و IELTS و TOEFL و Duolingo. حقق أهدافك.' },
      ru: { title: 'ПОДГОТОВКА К ЭКЗАМЕНАМ', description: 'Подготовка к экзаменам DELE, IELTS, TOEFL и Duolingo.' },
      ro: { title: 'PREGĂTIRE PENTRU EXAMENE', description: 'Pregătire pentru examenele DELE, IELTS, TOEFL și Duolingo.' },
      nl: { title: 'EXAMENTRAINING', description: 'Voorbereiding op DELE, IELTS, TOEFL en Duolingo examens.' },
      no: { title: 'EKSAMENSTRENING', description: 'Forberedelse til DELE, IELTS, TOEFL og Duolingo eksamener.' },
      hi: { title: 'परीक्षा प्रशिक्षण', description: 'DELE, IELTS, TOEFL और Duolingo परीक्षाओं की तैयारी।' },
      ja: { title: '試験対策', description: 'DELE、IELTS、TOEFL、Duolingo試験の準備。' },
      fr: { title: 'PRÉPARATION AUX EXAMENS', description: 'Préparation aux examens DELE, IELTS, TOEFL et Duolingo.' },
      it: { title: 'FORMAZIONE PER ESAMI', description: 'Preparazione per gli esami DELE, IELTS, TOEFL e Duolingo.' },
      de: { title: 'PRÜFUNGSVORBEREITUNG', description: 'Vorbereitung auf DELE-, IELTS-, TOEFL- und Duolingo-Prüfungen.' },
      ko: { title: '시험 교육', description: 'DELE, IELTS, TOEFL 및 Duolingo 시험 준비.' },
      fi: { title: 'VALMENTAUTUMINEN TENTTEIHIN', description: 'Valmistautuminen DELE-, IELTS-, TOEFL- ja Duolingo-kokeisiin.' },
      el: { title: 'ΠΡΟΕΤΟΙΜΑΣΙΑ ΕΞΕΤΑΣΕΩΝ', description: 'Προετοιμασία για εξετάσεις DELE, IELTS, TOEFL και Δουολινγο.' }
    }
  },
  {
    id: 'subtitling',
    icon: Subtitles,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { title: 'SUBTITLING', description: 'Professional subtitling services in English, Spanish, and Portuguese.' },
      es: { title: 'SUBTITULADO', description: 'Servicios de subtitulado profesional en inglés, español y portugués.' },
      pt: { title: 'LEGENDAGEM', description: 'Serviços de legendagem profesional en inglés, español y portugués.' },
      zh: { title: '字幕服务', description: '英语、西班牙语和葡萄牙语的专业字幕服务。' },
      he: { title: 'כתוביות', description: 'שירותי כתוביות מקצועיים באנגלית, ספרדית ופורטוגזית.' },
      ar: { title: 'الترجمة المرئية', description: 'خدمات الترجمة المرئية الاحترافية باللغات الإنجليزية والإسبانية والبرتغالية.' },
      ru: { title: 'СУБТИТРЫ', description: 'Профессиональные услуги субтитрования на английском, испанском и португальском языках.' },
      ro: { title: 'SUBTITRARE', description: 'Servicii profesionale de subtitrare în engleză, spaniolă și portugheză.' },
      nl: { title: 'ONDERTITELING', description: 'Professionele ondertiteling in het Engels, Spaans en Portugees.' },
      no: { title: 'SUBTITLING', description: 'Profesjonelle tekstingstjenester på engelsk, spansk og portugisisk.' },
      hi: { title: 'सबटाइटलिंग', description: 'अंग्रेजी, स्पेनिश और पुर्तगाली में पेशेवर सबटाइटलिंग सेवाएं।' },
      ja: { title: '字幕', description: '英語、スペイン語、ポルトガル語のプロフェッショナルな字幕サービス。' },
      fr: { title: 'SOUS-TITRAGE', description: 'Services de sous-titrage professionnels en anglais, espagnol et portugais.' },
      it: { title: 'SOTTOTITOLAZIONE', description: 'Servizi di sottotitolazione professionale in inglese, spagnolo e portoghese.' },
      de: { title: 'UNTERTITELUNG', description: 'Professionelle Untertitelungsdienste in Englisch, Spanisch und Portugiesisch.' },
      ko: { title: '자막', description: '영어, 스페인어 및 포르투갈어 전문 자막 서비스.' },
      fi: { title: 'TEKSTITYS', description: 'Ammattimaiset tekstityspalvelut englanniksi, espanjaksi ja portugaliksi.' },
      el: { title: 'ΥΠΟΤΙΤΛΙΣΜΟΣ', description: 'Επαγγελματικές υπηρεσίες υποτιτλισμού στα Αγγλικά, Ισπανικά και Πορτογαλικά.' }
    }
  },
  {
    id: 'reviews',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    externalPlatformLink: 'https://g.page/r/CS9Ud_S-46syEAE/review',
    translations: {
      en: { title: 'CLIENT REVIEWS', description: 'See what our clients say about us and rate our services on Google.' },
      es: { title: 'OPINIONES DE CLIENTES', description: 'Vea lo que nuestros clientes dicen de nosotros y califique nuestros servicios en Google.' },
      pt: { title: 'AVALIAÇÕES DE CLIENTES', description: 'Veja o que nossos clientes dizem sobre nós e avalie nossos serviços no Google.' },
      zh: { title: '客户评价', description: '查看客户对我们的评价，并在 Google 上为我们的服务评分。' },
      he: { title: 'ביקורות לקוחות', description: 'ראה מה הלקוחות שלנו אומרים עלינו ודרג את השירותים שלנו בגוגל.' },
      ar: { title: 'آراء العملاء', description: 'شاهد ما يقوله عملاؤنا عنا وقيم خدماتنا على Google.' },
      ru: { title: 'ОТЗЫВЫ КЛИЕНТОВ', description: 'Посмотрите, что наши клиенты говорят о нас, и оцените наши услуги в Google.' },
      ro: { title: 'RECENZII CLIENȚI', description: 'Vedeți ce spun clienții noștri despre noi și evaluați serviciile noastre pe Google.' },
      nl: { title: 'KLANTBEOORDELINGEN', description: 'Bekijk wat onze klanten over ons zeggen en beoordeel onze diensten op Google.' },
      no: { title: 'KUNDEANMELDELSER', description: 'Se hva kundene våre sier om oss og vurder tjenestene våre på Google.' },
      hi: { title: 'ग्राहक समीक्षा', description: 'देखें कि हमारे ग्राहक हमारे बारे में क्या कहते हैं और Google पर हमारी सेवाओं को रेट करें।' },
      ja: { title: 'お客様の声', description: 'お客様の声をチェックして、Googleで当社の服务を評価してください。' },
      fr: { title: 'AVIS CLIENTS', description: 'Découvrez ce que nos clients disent de nous et évaluez nos services sur Google.' },
      it: { title: 'RECENSIONI CLIENTI', description: 'Scopri cosa dicono di noi i nostri clienti e valuta i nostri servizi su Google.' },
      de: { title: 'KUNDENBEWERTUNGEN', description: 'Sehen Sie, was unsere Kunden über uns sagen, und bewerten Sie unsere Dienstleistungen auf Google.' },
      ko: { title: '고객 리뷰', description: '고객의 의견을 확인하고 Google에서 당사 서비스를 평가해 주세요.' },
      fi: { title: 'ASIAKASARVOSTELUT', description: 'Katso, mitä asiaksiimme sanovat meistä ja arvioi palvelumme Googlessa.' },
      el: { title: 'ΚΡΙΤΙΚΕΣ ΠΕΛΑΤΩΝ', description: 'Δείτε τι λένε οι πελάτες μας για εμάς και αξιολογήστε τις υπηρεσίες μας στο Google.' }
    }
  },
  {
    id: 'updates',
    icon: FileCheck,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { title: 'APP UPDATES', description: 'Stay updated with the latest news, features, and improvements of our app.' },
      es: { title: 'ACTUALIZACIONES DE LA APP', description: 'Manténgase al día con las últimas noticias, funciones y mejoras de nuestra aplicación.' },
      pt: { title: 'ATUALIZAÇÕES DO APP', description: 'Fique atualizado com as últimas notícias, recursos e melhorias do nosso aplicativo.' },
      zh: { title: '应用更新', description: '随时了解我们应用的最新新闻、功能和改进。' },
      he: { title: 'עדכוני אפליקציה', description: 'הישאר מעודכן בחדשות, בתכונות ובשיפורים האחרונים של האפליקציה שלנו.' },
      ar: { title: 'تحديثات التطبيق', description: 'ابق على اطلاع بآخر الأخبار والميزات والتحسينات في تطبيقنا.' },
      ru: { title: 'ОБНОВЛЕНИЯ ПРИЛОЖЕНИЯ', description: 'Будьте в курсе последних новостей, функций и улучшений нашего приложения.' },
      ro: { title: 'ACTUALIZĂRI APLICAȚIE', description: 'Rămâneți la curent cu cele mai recente știri, funcții și îmbunătățiri ale aplicației noastre.' },
      nl: { title: 'APP-UPDATES', description: 'Blijf op de hoogte van het laatste nieuws, functies en verbeteringen van onze app.' },
      no: { title: 'APP-OPPDATERINGER', description: 'Hold deg oppdatert med de siste nyhene, funksjonene og forbedringene av appen vår.' },
      hi: { title: 'ऐप अपडेट', description: 'हमारे ऐप के नवीनतम समाचारों, सुविधाओं और सुधारों के साथ अपडेट रहें।' },
      ja: { title: 'アプリの更新', description: 'アプリの最新ニュース、機能、改善点について常に最新情報を入手してください。' },
      fr: { title: 'MISES À JOUR DE L\'APP', description: 'Restez informé des dernières nouvelles, fonctionnalités et améliorations de notre application.' },
      it: { title: 'AGGIORNAMENTI APP', description: 'Rimani aggiornato con le ultime notizie, funzionalità e miglioramenti della nostra app.' },
      de: { title: 'APP-UPDATES', description: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Funktionen und Verbesserungen unserer App.' },
      ko: { title: '앱 업데이트', description: '앱의 최신 뉴스, 기능 및 개선 사항을 최신 상태로 유지하세요.' },
      fi: { title: 'SOVELLUSPÄIVITYKSET', description: 'Pysy ajan tasalla sovelluksemme uusimmista uutisista, ominaisuuksista ja parannuksista.' },
      el: { title: 'ΕΝΗΜΕΡΩΣΕΙΣ ΕΦΑΡΜΟΓΗΣ', description: 'Μείνετε ενημερωμένοι με τα τελευταία νέα, λειτουργίες και βελτιώσεις της εφαρμογής μας.' }
    }
  },
  {
    id: 'partners',
    icon: Handshake,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    externalPlatformLink: 'https://flytour.com.br/',
    partners: [
      { name: 'FLYTOUR', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400' },
      { name: 'ONER TRAVEL', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=400' },
      { name: 'RESERVIA', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
      { name: 'QUALITOURS', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=400' },
      { name: 'ETRADUÇÕES', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400' },
      { name: 'YELLOWLING', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400' },
      { name: 'CHANTECLAIR', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400' },
      { name: 'CADASTUR', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400' }
    ],
    translations: {
      en: { title: 'PARTNERS', description: 'VGOIRE works with the most trusted companies in the travel and translation industry to ensure the best quality for our clients.' },
      es: { title: 'SOCIOS', description: 'VGOIRE trabaja con las empresas más confiables en la industria de viajes y traducción para garantizar la mejor calidad para nuestros clientes.' },
      pt: { title: 'PARCEIROS', description: 'A VGOIRE trabalha com as empresas mais confiáveis do setor de viagens e tradução para garantir a melhor qualidade aos nossos clientes.' },
      zh: { title: '合作伙伴', description: 'VGOIRE 与旅游和翻译行业最值得信赖的公司合作，确保为我们的客户提供最佳质量。' },
      he: { title: 'שותפים', description: 'VGOIRE עובדת עם החברות המהימנות ביותר בתעשיית הנסיעות והתרגום כדי להבטיח את האיכות הטובה ביותר עבור לקוחותינו.' },
      ar: { title: 'شركاؤنا', description: 'تعمل VGOIRE مع أكثر الشركات موثوقية في صناعة السفر والترجمة لضمان أفضل جودة لعملائنا.' },
      ru: { title: 'ПАРТНЕРЫ', description: 'VGOIRE работает с самыми надежными компаниями в сфере туризма и переводов, чтобы обеспечить лучшее качество для наших клиентов.' },
      ro: { title: 'PARTENERI', description: 'VGOIRE lucrează cu cele mai de încredere companii din industria călătoriilor și traducerilor pentru a asigura cea mai bună calitate clienților noștri.' },
      nl: { title: 'PARTNERS', description: 'VGOIRE werkt samen met de meest vertrouwde bedrijven in de reis- en vertaalindustrie om de beste kwaliteit voor onze klanten te garanderen.' },
      no: { title: 'PARTNERE', description: 'VGOIRE samarbeider med de mest pålitelige selskapene i reise- og oversettelsesbransjen for å sikre den beste kvaliteten for våre kunder.' },
      hi: { title: 'भागीदार', description: 'VGOIRE यात्रा और अनुवाद उद्योग की सबसे भरोसेमंद कंपनियों के साथ काम करता है ताकि हमारे ग्राहकों के लिए सर्वोत्तम गुणवत्ता सुनिश्चित की जा सके।' },
      ja: { title: 'パートナー', description: 'VGOIREは、旅行および翻訳行业で最も信頼されている企业と协力して、お客様に最高の品质を保证します。' },
      fr: { title: 'PARTENAIRES', description: 'VGOIRE travaille avec les entreprises les plus fiables du secteur du voyage et de la traduction pour garantir la meilleure qualité à nos clients.' },
      it: { title: 'PARTNER', description: 'VGOIRE collabora con le aziende più affidabili nel settore dei viaggi e delle traduzioni per garantire la migliore qualità ai nostri clienti.' },
      de: { title: 'PARTNER', description: 'VGOIRE arbeitet mit den vertrauenswürdigsten Unternehmen der Reise- und Übersetzungsbranche zusammen, um unseren Kunden die beste Qualität zu bieten.' },
      ko: { title: '파트너', description: 'VGOIRE는 여행 및 번역 업계에서 가장 신뢰받는 회사들과 협력하여 고객에게 최고의 품질을 보장합니다.' },
      fi: { title: 'KUMPPANIT', description: 'VGOIRE tekee yhteistyötä matkailu- ja käännösalan luotettavimpien yritysten kanssa varmistaakseen parhaan laadun asiakkaillemme.' },
      el: { title: 'ΣΥΝΕΡΓΑΤΕΣ', description: 'Η VGOIRE συνεργάζεται με τις πιο αξιόπιστες εταιρείες στον κλάδο των ταξιδιών και των μεταφράσεων για να εξασφαλίσει την καλύτερη ποιότητα για τους πελάτες μας.' }
    }
  },
  {
    id: 'faq',
    icon: HelpCircle,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    translations: {
      en: { 
        title: 'QUESTIONS and RESPONSES', 
        description: 'Find answers to the most common questions about VGOIRE services.',
        faqItems: [
          { 
            question: "What is VGOIRE's primary mission?", 
            answer: "VGOIRE is dedicated to providing premium global solutions, bridging communication and travel gaps with excellence and security." },
          { 
            question: "How can I request a certified translation?", 
            answer: "You can request a quote directly via our WhatsApp integration or through the 'Certified Translations' section in the app." },
          { 
            question: "Are the travel bookings secure?", 
            answer: "Yes, all bookings are handled through our trusted partners like Flytour and Oner Travel, ensuring the highest security standards." },
          { 
            question: "Which languages do you support?", 
            answer: "We currently support 18 global languages, including English, Spanish, Portuguese, Chinese, Hebrew, Arabic, and more." },
          { 
            question: "How do I book a luxury cruise?", 
            answer: "Visit the 'Cruises' section to explore our curated selection of luxury voyages powered by Qualitours." },
          { 
            question: "What is the Hague Apostille?", 
            answer: "The Apostille is a certificate of authenticity issued by countries that are signatories to the Hague Convention, which is affixed to a public document to attest to its origin (signature, public official's position, seal or stamp of the institution). This apostilled public document will be presented in another country, also a signatory to the Hague Convention, since the Apostille is only valid between signatory countries." },
          {
            question: "What are the effects of the Apostille?",
            answer: "The Apostille only certifies the origin of the public document, not the document itself. In other words, it certifies the authenticity of the signature (notarization) of the person, the function or position held by the signatory of the document and, where applicable, the authenticity of the seal or stamp affixed to it. The Apostille does not certify the content of the document, nor should it be used for recognition within the country in which it was issued."
          },
          {
            question: "What types of documents does the Apostille apply to?",
            answer: "Only public documents or those of a private nature that have been previously authenticated by a notary or competent public authority, which have public faith, can be apostilled. Article 1 of the Convention establishes that public documents are: a) documents emanating from an authority or public official connected with any jurisdiction of the State, including documents emanating from the Public Prosecutor's Office, a court clerk or a bailiff; b) administrative documents; c) notarial acts; d) official declarations affixed to documents of a private nature, such as certificates proving the registration of a document or its existence on a given date, and signature acknowledgments. Each country can define which documents it considers eligible for apostille."
          },
          {
            question: "To which documents does the Apostille not apply?",
            answer: "The Apostille Convention does not apply to documents issued by diplomatic or consular agents. Administrative documents related to commercial or customs operations are also excluded, in cases where legalization was no longer necessary according to existing rules, agreements, and understandings. In the case of commercial documents that are usually legalized, an apostille may be issued, which will facilitate trade and investment flows. It should be kept in mind that the objective of the Apostille Convention is always to simplify the international document processing process, and not to create previously non-existent bureaucratic procedures. Finally, the Apostille does not apply to documents to be presented in countries that are not signatories to the Hague Convention. In these cases, the legalization process will continue to be carried out by the Ministry of Foreign Affairs, through its regional offices (in Brazil) and Embassies and Consular Offices (abroad)."
          },
          {
            question: "Do I need an Apostille every time I need to present a document abroad?",
            answer: "Not necessarily. Some countries have treaties with Brazil that waive the need for diplomatic or consular legalization, such as France, for example. In these cases, an Apostille is also not required. It is always recommended to consult the representation of the country where the document will be valid regarding the need for an Apostille or other procedures."
          },
          {
            question: "How many countries are currently part of the Hague Convention?",
            answer: "There are 127 countries so far."
          },
          {
            question: "Does the apostilled document need to be an original?",
            answer: "No. Certified copies can also be apostilled."
          },
          {
            question: "How does the apostille process work in practice? How should I proceed, both to obtain an apostille and to have an apostilled document recognized abroad?",
            answer: "For a document to receive the Apostille certificate, simply take it to one of the authorized notary offices. The apostille process includes both a physical and an electronic copy. The physical copy will be issued along with the document, attached or appended to it. The electronic copy is registered in a dedicated system and will be used both for control by Brazilian authorities and for consultation by foreign authorities regarding Apostilles issued in Brazil. Furthermore, interested foreign parties can verify the authenticity of the Apostille issued in Brazil through a code (QR Code) included on the physical Apostille itself. Foreign documents, once apostilled abroad, will also be valid in Brazil with the relevant authorities, bodies, and institutions. The Ministry of Foreign Affairs – or its representations abroad – will no longer be involved in the process. It is important to note that certain formalities may be required in Brazil, such as translation into Portuguese. The competent authority for apostille services abroad varies from country to country. We suggest consulting the embassy or consulates of the country that issued the document, or the list of competent authorities of the Apostille Convention. You can find this list on the Brazilian National Council of Justice website using the following page: cnj.jus.br/perguntas-frequentes."
          },
          {
            question: "Are translations of Brazilian documents required to be notarized?",
            answer: "It depends on the requirements of the country where the document will be presented. Each country may have different procedures. For this reason, it is important to contact the representation of the country of destination of the documents to be apostilled."
          },
          {
            question: "Is it mandatory to have the electronic signature of a sworn translator notarized?",
            answer: "No. All sworn translators have public faith. Therefore, their electronic signatures do not need to be notarized."
          },
          {
            question: "Should the translation be done before or after the apostille?",
            answer: "Generally, the document to be presented abroad is translated first, and then both (original and translated) are apostilled. It is important to note that for documents to be presented to a Brazilian authority, the certified translation must be done in Brazil."
          },
          {
            question: "Regarding translations, is it necessary to issue an Apostille for the translation and another for the original document? Or is one apostille sufficient?",
            answer: "Two apostilles should be issued: one for the original document and one for the translation, as they are independent documents. We remind you that it is always prudent to request information from the representation of the country where the document will be presented regarding the need to present a simple or sworn translation along with the original document, or regarding the acceptance of translations done by Brazilian translators (some countries may require that the translation be done by a national of their country)."
          },
          {
            question: "Are foreign documents that have been apostilled and translated (into Portuguese) by official translators from those countries valid in Brazil? Or only those translated by Brazilian translators?",
            answer: "In Brazil, foreign documents, even those with apostilles, are only valid with a sworn translation. This translation, in turn, can only be done in Brazil. This matter is regulated by Article 192 of the Code of Civil Procedure, Article 236 of the Code of Criminal Procedure, Decree 13.609/1943, and also Article 216-C of the Internal Regulations of the Superior Court of Justice."
          },
          {
            question: "Can I search for domestic and international hotels on the VGOIRE travel platform?",
            answer: "On the VGOIRE travel platform, you can only search for domestic hotels within Brazil. If you need to search for international hotels, you must contact a VGOIRE travel agent using the company's business number, which is: +55-69-9-8123-2697."
          },
          {
            question: "Can I search for domestic and international cars on the VGOIRE travel platform?",
            answer: "On the VGOIRE travel platform, you can only search for domestic cars within Brazil. If you need to search for international cars, you must contact the VGOIRE travel agent using the company's business number, which is: +55-69-9-8123-2697."
          },
          {
            question: "If I find a good deal on travel, hotels, cars, or a great tour package, what do I need to do to purchase what I need on the VGOIRE platform?",
            answer: "You can follow these steps: 1) Select what you want to buy. 2) Click the PAYMENTS button. 3) After clicking the PAYMENTS button, you will see an option to register on the platform to complete your purchase securely. To ensure your purchase is secure, enter your personal email address. Then, open your email, find the 6-digit code sent from our platform's headquarters, and enter those 6 numbers in the field provided by the platform. 4) Once your email address has been verified, you will enter the forms area where you will enter your personal information to prepare your ticket or voucher for the service you need. 5) After completing the forms, you will be taken to the PAYMENTS page. There, you can choose the option that suits your conditions, make the payment and 6) you will immediately receive the voucher or vouchers for the service or services you requested in your personal email that you provided."
          },
          {
            question: "Information about the Spanish course.",
            answer: "You will learn Spanish with a native instructor from Cuba, who is also the owner of VGOIRE. The course lasts approximately two years. It consists of two 1.5-hour classes per week. Classes are held online using Google Meet or Microsoft Teams. However, if the student lives in Porto Velho, Rondônia, Brazil, within a reasonable distance, in-person classes may be possible. You will learn Spanish with a modern, dynamic, varied, and personalized method, using excellent materials from Spain. You can obtain more information by contacting the owner of VGOIRE. In addition to Spanish classes, if needed, you can receive training to take internationally recognized Spanish exams such as the DELE. Here at VGOIRE, you can be trained for all levels: A1, A2, B1, B2, C1, and C2."
          }
        ]
      },
      es: { 
        title: 'PREGUNTAS y RESPUESTAS', 
        description: 'Encuentre respuestas a las preguntas más comunes sobre los servicios de VGOIRE.',
        faqItems: [
          { question: "¿Cuál es la misión principal de VGOIRE?", answer: "VGOIRE se dedica a proporcionar soluciones globales premium, cerrando las brechas de comunicación y viajes con excelencia y seguridad." },
          { question: "¿Cómo puedo solicitar una traducción certificada?", answer: "Puede solicitar un presupuesto directamente a través de nuestra integración de WhatsApp o mediante la sección 'Traducciones Certificadas' en la aplicación." },
          { question: "¿Son seguras las reservas de viaje?", answer: "Sí, todas las reservas se gestionan a través de nuestros socios de confianza como Flytour y Oner Travel, garantizando los más altos estándares de seguridad." },
          { question: "¿Qué idiomas admiten?", answer: "Actualmente admitimos 18 idiomas globales, incluidos inglés, español, portugués, chino, hebreo, árabe y otros." },
          { question: "¿Cómo reservo un crucero de lujo?", answer: "Visite la sección 'Cruceros' y póngase en contacto con el agente de viajes para más informaciones." },
          { question: "¿Qué es la Apostilla de la Haya?", answer: "La Apostilla es un certificado de autenticidad emitido por los países firmantes del Convenio de la Haya, que se adjunta a un documento público para dar fe de su origen (firma, cargo del funcionario público, sello de la institución). Este documento público apostillado será presentado en otro país, también firmante del Convenio, ya que la Apostilla solo es válida entre países signatarios." },
          { question: "¿Cuáles son los efectos de la Apostilla?", answer: "La Apostilla solo certifica el origen del documento público, no el documento en sí. En otras palabras, certifica la autenticidad de la firma, la función del signatario y, si corresponde, la autenticidad del sello. No certifica el contenido del documento ni debe usarse para reconocimiento dentro del país emisor." },
          { question: "¿A qué tipos de documentos se aplica la Apostilla?", answer: "Solo se pueden apostillar documentos públicos o privados autenticados previamente por un notario o autoridad pública competente. Incluye documentos judiciales, administrativos, actas notariales y declaraciones oficiales." },
          { question: "¿A qué documentos NO se aplica la Apostilla?", answer: "No se aplica a documentos emitidos por agentes diplomáticos o consulares, ni a documentos administrativos relacionados con operaciones comerciales o aduaneras." },
          { question: "¿Necesito una Apostilla cada vez que presente un documento en el extranjero?", answer: "No necesariamente. Algunos países tienen tratados con Brasil que eximen de la legalización, como Francia. Siempre se recomienda consultar con la representación del país de destino." },
          { question: "¿Cuántos países forman parte del Convenio de la Haya?", answer: "Hay 127 países hasta el momento." },
          { question: "¿El documento apostillado debe ser original?", answer: "No. Las copias certificadas también pueden ser apostilladas." },
          { question: "¿Cómo funciona el proceso de apostillado en la práctica?", answer: "Para obtener la Apostilla, lleve el documento a una notaría autorizada. El proceso incluye una copia física y una electrónica registrada en un sistema dedicado. La autenticidad se puede verificar mediante un código QR." },
          { question: "¿Las traducciones de documentos brasileños deben ser notarizadas?", answer: "Depende de los requisitos del país de destino. Es importante contactar a la representación del país donde se presentará el documento." },
          { question: "¿Es obligatorio notarizar la firma electrónica de un traductor jurado?", answer: "No. Todos los traductores jurados tienen fe pública, por lo que sus firmas electrónicas no necesitan notarización." },
          { question: "¿La traducción debe hacerse antes o después de la apostilla?", answer: "Generalmente, el documento se traduce primero y luego ambos (original y traducción) se apostillan. Para documentos presentados en Brasil, la traducción debe hacerse en Brasil." },
          { question: "¿Es necesaria una Apostilla para la traducción y otra para el original?", answer: "Deben emitirse dos apostillas: una para el documento original y otra para la traducción, ya que son documentos independientes." },
          { question: "¿Son válidos en Brasil los documentos extranjeros apostillados y traducidos fuera?", answer: "En Brasil, los documentos extranjeros solo son válidos con una traducción jurada realizada en Brasil, según lo regulado por el Código de Procedimiento Civil y otros decretos." },
          { question: "¿Puedo buscar hoteles internacionales en la plataforma de VGOIRE?", answer: "En la plataforma solo puede buscar hoteles nacionales (Brasil). Para hoteles internacionales, contacte a un agente de VGOIRE al +55-69-9-8123-2697." },
          { question: "¿Puedo buscar autos internacionales en la plataforma?", answer: "Solo puede buscar autos nacionales en Brasil. Para alquileres internacionales, contacte a nuestro agente vía WhatsApp." },
          { question: "¿Cómo realizo una compra en la plataforma de VGOIRE?", answer: "1) Seleccione el servicio. 2) Haga clic en PAGOS. 3) Regístrese con su email y verifique el código de 6 dígitos. 4) Complete sus datos personales. 5) Realice el pago. 6) Reciba su voucher por email." },
          { question: "Información sobre el curso de español.", answer: "Aprenderá con un instructor nativo de Cuba (dueño de VGOIRE). El curso dura 2 años, con clases online de 1.5h dos veces por semana. Utilizamos un método dinámico con materiales de España y preparamos para exámenes DELE (niveles A1 a C2)." }
        ]
      },
      pt: { 
        title: 'PERGUNTAS e RESPOSTAS', 
        description: 'Encontre respostas para as perguntas mais comuns sobre os serviços da VGOIRE.',
        faqItems: [
          { question: "Qual é a missão principal da VGOIRE?", answer: "A VGOIRE dedica-se a fornecer soluções globais premium, unindo lacunas de comunicação e viagens com excelência e segurança." },
          { question: "Como posso solicitar uma tradução juramentada?", answer: "Você pode solicitar um orçamento diretamente através da nossa integração com o WhatsApp ou pela seção 'Traduções Juramentadas' no aplicativo." },
          { question: "As reservas de viagens são seguras?", answer: "Sim, todas as reservas são feitas através de nossos parceiros de confiança, como Flytour e Oner Travel, garantindo os mais altos padrões de segurança." },
          { question: "Quais idiomas vocês suportam?", answer: "Atualmente suportamos 18 idiomas globais, incluindo inglês, espanhol, português, chinês, hebraico, árabe e muito mais." },
          { question: "Como faço para reservar um cruzeiro de luxo?", answer: "Visite a seção 'Cruzeiros' para explorar nossa seleção curada de viagens de luxo operadas pela Qualitours." },
          { question: "O que é a Apostila da Haia?", answer: "A Apostila é um certificado de autenticidade emitido por países signatários da Convenção da Haia, colocado em um documento público para atestar sua origem (assinatura, cargo do agente público, selo ou carimbo da instituição). Este documento público apostilado será apresentado em outro país também signatário." },
          { question: "Quais são os efeitos da Apostila?", answer: "A Apostila apenas certifica a origem do documento público, não o documento em si. Ou seja, certifica a autenticidade da assinatura, a função do signatário e a autenticidade do selo ou carimbo. Não certifica o conteúdo do documento." },
          { question: "A que tipos de documentos a Apostila se aplica?", answer: "Apenas documentos públicos ou de natureza particular previamente autenticados por tabelião ou autoridade pública competente. Exemplos: documentos judiciais, administrativos, atos notariais e declarações oficiais." },
          { question: "A que documentos a Apostila NÃO se aplica?", answer: "Não se aplica a documentos emitidos por agentes diplomáticos ou consulares, nem a documentos administrativos relacionados a operações comerciais ou alfandegárias." },
          { question: "Preciso de Apostila sempre que apresentar um documento no exterior?", answer: "Não necessariamente. Alguns países têm tratados com o Brasil que dispensam a legalização, como a França. Recomenda-se sempre consultar a representação do país de destino." },
          { question: "Quantos países fazem parte da Convenção da Haia?", answer: "Existem 127 países até o momento." },
          { question: "O documento apostilado precisa ser original?", answer: "Não. Cópias autenticadas também podem ser apostiladas." },
          { question: "Como funciona o processo de apostilamento na prática?", answer: "Basta levar o documento a um dos cartórios autorizados. O processo inclui uma via física e uma eletrônica registrada no sistema do CNJ. A autenticidade pode ser verificada via QR Code." },
          { question: "As traduções de documentos brasileiros precisam ser reconhecidas em cartório?", answer: "Depende das exigências do país onde o documento será apresentado. É importante contatar a representação do país de destino." },
          { question: "É obrigatório reconhecer a assinatura eletrônica do tradutor juramentado?", answer: "Não. Todos os tradutores juramentados possuem fé pública. Portanto, suas assinaturas eletrônicas não precisam de reconhecimento de firma." },
          { question: "A tradução deve ser feita antes ou depois da apostila?", answer: "Geralmente, traduz-se o documento primeiro e depois apostila-se ambos (original e tradução). Para documentos apresentados no Brasil, a tradução juramentada deve ser feita no Brasil." },
          { question: "É necessário uma Apostila para a tradução e outra para o original?", answer: "Devem ser emitidas duas apostilas: uma para o original e outra para a tradução, pois são documentos independentes." },
          { question: "Documentos estrangeiros apostilados e traduzidos fora são válidos no Brasil?", answer: "No Brasil, documentos estrangeiros só têm validade com tradução juramentada feita no Brasil, conforme regulado pelo Código de Processo Civil e Decreto 13.609/1943." },
          { question: "Posso pesquisar hotéis internacionais na plataforma de viagens VGOIRE?", answer: "Na plataforma, você só pode pesquisar hotéis nacionais (Brasil). Para hotéis internacionais, entre em contato com um agente VGOIRE pelo número: +55-69-9-8123-2697." },
          { question: "Posso pesquisar carros internacionais na plataforma VGOIRE?", answer: "Somente carros nacionais no Brasil. Para carros internacionais, contate nosso agente de viagens via WhatsApp." },
          { question: "Como comprar na plataforma VGOIRE?", answer: "1) Selecione o serviço. 2) Clique em PAGAMENTOS. 3) Registre seu e-mail e valide com o código de 6 dígitos enviado. 4) Preencha seus dados pessoais para o voucher. 5) Escolha a forma de pagamento e finalize. 6) Receba os vouchers no seu e-mail." },
          { question: "Informações sobre o curso de espanhol.", answer: "Aulas com instrutor nativo de Cuba (proprietário da VGOIRE). O curso dura cerca de 2 anos, com duas aulas semanais de 1,5h via Google Meet ou Teams. Oferecemos treinamento para exames DELE em todos os níveis (A1 a C2)." }
        ]
      },
      zh: { 
        title: '问题与解答', 
        description: '查找有关 VGOIRE 服务的常见问题解答。',
        faqItems: [
          { 
            question: "VGOIRE 的主要使命是什么？", 
            answer: "VGOIRE 致力于提供优质的全球解决方案，以卓越和安全的方式弥合沟通和旅行差距。"
          },
          { 
            question: "如何申请认证翻译？", 
            answer: "您可以直接通过我们的 WhatsApp 集成或通过应用程序中的“认证翻译”部分请求报价。"
          },
          { 
            question: "旅行预订安全吗？", 
            answer: "是的，所有预订均通过 Flytour 和 Oner Travel 等值得信赖的合作伙伴处理，确保最高安全标准。"
          },
          { 
            question: "你们支持哪些语言？", 
            answer: "我们目前支持 18 种全球语言，包括英语、西班牙语、葡萄牙语、中文、希伯来语、阿拉伯语等。"
          },
          { 
            question: "如何预订豪华邮轮？", 
            answer: "访问“邮轮”部分，探索我们由 Qualitours 提供支持的精选豪华航程。"
          },
          { 
            question: "什么是海牙认证（Apostille）？", 
            answer: "海牙认证是由《海牙公约》缔约国签发的真实性证书，附在公共文件上以证明其来源（签名、公职人员身份、机构印章）。该文件将在另一个同样是缔约国的国家出示，因为海牙认证仅在缔约国之间有效。"
          },
          { 
            question: "海牙认证的作用是什么？", 
            answer: "海牙认证仅证明公共文件的来源，而非文件本身的内容。换言之，它证明了签名（公证）的真实性、签署人的身份以及所附印章的真实性。它不证明文件内容，也不应在签发国国内使用。"
          },
          { 
            question: "海牙认证适用于哪些类型的文件？", 
            answer: "仅限公共文件或经公证处/主管部门认证的具有公信力的私人文件。包括：司法机关文件、行政文件、公证书、官方声明（如注册证明或签名认证）。各国可自行定义符合认证条件的文件。"
          },
          { 
            question: "海牙认证不适用于哪些文件？", 
            answer: "不适用于外交或领事机构签发的文件，也不适用于与商业或海关业务直接相关的行政文件（若现有规则已免除其法律化）。此外，不适用于在非海牙公约缔约国出示的文件。"
          },
          { 
            question: "我每次在国外出示文件时都需要海牙认证吗？", 
            answer: "不一定。某些国家（如法国）与巴西签有协议，免除领事认证或海牙认证。建议始终咨询目标国家的代表机构。"
          },
          { 
            question: "目前有多少个国家加入了《海牙公约》？", 
            answer: "到目前为止共有 127 个国家。"
          },
          { 
            question: "经海牙认证的文件必须是原件吗？", 
            answer: "不一定。经过认证的副本也可以办理海牙认证。"
          },
          { 
            question: "海牙认证的具体流程是怎样的？", 
            answer: "将文件带到授权的公证处即可。流程包括纸质证书（附在原件上）和电子注册。外国机构可通过文件上的二维码（QR Code）验证巴西签发的海牙认证真实性。同样，在国外办理的海牙认证在巴西也具有同等效力。"
          },
          { 
            question: "巴西文件的翻译件需要公证吗？", 
            answer: "这取决于目标国家的要求。不同国家可能有不同的程序，因此请务必联系目标国家的代表机构进行确认。"
          },
          { 
            question: "宣誓翻译人员的电子签名必须经过公证吗？", 
            answer: "不需要。宣誓翻译人员具有公共信誉，因此其电子签名无需额外公证。"
          },
          { 
            question: "翻译应该在海牙认证之前还是之后进行？", 
            answer: "通常先翻译文件，然后对原件和翻译件同时办理海牙认证。请注意，若文件要在巴西机构出示，认证翻译必须在巴西境内完成。"
          },
          { 
            question: "关于翻译，是需要为翻译件和原件分别办理海牙认证，还是办一份就够了？", 
            answer: "由于它们是独立的文件，通常需要办理两份海牙认证：一份给原件，一份给翻译件。建议咨询目标国家是否接受巴西翻译人员的翻译。"
          },
          { 
            question: "在国外办理海牙认证并翻译成葡语的文件在巴西有效吗？", 
            answer: "在巴西，外国文件（即使有海牙认证）必须附有在巴西境内完成的宣誓翻译件才具有法律效力。这受巴西民事诉讼法等多项法律监管。"
          },
          { 
            question: "我可以在 VGOIRE 旅游平台上搜索国内和国际酒店吗？", 
            answer: "在 VGOIRE 平台上，您只能搜索巴西国内酒店。如需预订国际酒店，请通过公司业务电话联系我们的旅行代理：+55-69-9-8123-2697。"
          },
          { 
            question: "我可以在 VGOIRE 旅游平台上搜索国内和国际汽车租赁吗？", 
            answer: "在该平台上只能搜索巴西国内租车服务。如需国际租车，请联系 VGOIRE 旅行代理。"
          },
          { 
            question: "如果在平台上发现了优惠，该如何购买？", 
            answer: "1) 选择所需服务。2) 点击“支付（PAYMENTS）”。3) 输入邮箱并使用收到的 6 位验证码注册。4) 填写个人信息以生成凭证。5) 完成支付。6) 您将立即在邮箱中收到服务凭证。"
          },
          { 
            question: "关于西班牙语课程的信息。", 
            answer: "由来自古巴的母语教师（VGOIRE 创始人）授课。学制约两年，每周两次 1.5 小时网课（Meet/Teams）。采用西班牙现代教材，提供个性化教学，并涵盖 DELE 考试（A1 到 C2 级别）的专业培训。"
          }
        ]
      },
      he: { 
        title: 'שאלות ותשובות', 
        description: 'מצא תשובות לשאלות הנפוצות ביותר על שירותי VGOIRE.',
        faqItems: [
          { 
            question: "מהי המשימה העיקרית של VGOIRE?", 
            answer: "VGOIRE מוקדשת למתן פתרונות גלובליים מובחרים, תוך גישור על פערי תקשורת ונסיעות במצוינות ובביטחון." 
          },
          { 
            question: "כיצד אוכל לבקש תרגום מוסמך?", 
            answer: "ניתן לבקש הצעת מחיר ישירות דרך שילוב ה-WhatsApp שלנו או דרך מדור 'תרגומים מוסמכים' באפליקציה." 
          },
          { 
            question: "האם הזמנות הנסיעות מאובטחות?", 
            answer: "כן, כל הזמנות מטופלות באמצעות השותפים המהימנים שלנו כמו Flytour ו-Oner Travel, מה שמבטיח את תקני האבטחה הגבוהים ביותר." 
          },
          { 
            question: "באילו שפות אתם תומכים?", 
            answer: "אנו תומכים כיום ב-18 שפות גלובליות, כולל אנגלית, ספרדית, פורטוגזית, סינית, עברית, ערבית ועוד." 
          },
          { 
            question: "איך מזמינים שייט יוקרתי?", 
            answer: "בקר במדור 'שייט' כדי לחקור את מבחר הפלגות היוקרה שלנו המופעלות על ידי Qualitours." 
          },
          {
            question: "מה זה אפוסטיל האג (Hague Apostille)?",
            answer: "אפוסטיל הוא תעודת אימות המונפקת על ידי מדינות החתומות על אמנת האג, המוצמדת למסמך ציבורי כדי להעיד על מקורו (חתימה, תפקיד פקיד הציבור, חותמת או חותם המוסד). מסמך זה תקף רק בין המדינות החברות באמנה."
          },
          {
            question: "מהן ההשפעות של האפוסטיל?",
            answer: "האפוסטיל מאשר רק את מקור המסמך הציבורי (אמיתות החתימה והחותם), ולא את תוכן המסמך עצמו. אין להשתמש בו להכרה בתוך המדינה בה הונפק."
          },
          {
            question: "על אילו סוגי מסמכים חל האפוסטיל?",
            answer: "ניתן לאפוסטל רק מסמכים ציבוריים או מסמכים פרטיים שאושרו על ידי נוטריון או רשות מוסמכת. זה כולל מסמכים מנהליים, פעולות נוטריוניות והצהרות רשמיות."
          },
          {
            question: "על אילו מסמכים האפוסטיל לא חל?",
            answer: "האמנה אינה חלה על מסמכים שהונפקו על ידי סוכנים דיפלומטיים או קונסולריים, או מסמכים מנהליים הקשורים ישירות לפעולות מסחריות או מכס."
          },
          {
            question: "האם אני צריך אפוסטיל בכל פעם שאני מציג מסמך בחו\"ל?",
            answer: "לא בהכרח. למדינות מסוימות (כמו צרפת) יש הסכמים עם ברזיל המוותרים על הצורך בלגליזציה. תמיד כדאי לבדוק מול נציגות מדינת היעד."
          },
          {
            question: "כמה מדינות חברות כיום באמנת האג?",
            answer: "ישנן 127 מדינות חברות נכון לעכשיו."
          },
          {
            question: "האם המסמך המאופוסטל חייב להיות מקורי?",
            answer: "לא. ניתן לאפוסטל גם העתקים מאושרים (Certified Copies)."
          },
          {
            question: "איך עובד תהליך האפוסטיל בפועל?",
            answer: "יש לקחת את המסמך למשרד נוטריון מורשה. התהליך כולל הנפקת אישור פיזי ורישום דיגיטלי במערכת. ניתן לאמת את אמיתות האישור באמצעות קוד QR המופיע עליו."
          },
          {
            question: "האם תרגומים של מסמכים ברזילאיים צריכים אישור נוטריון?",
            answer: "זה תלוי בדרישות המדינה בה המסמך יוצג. מומלץ ליצור קשר עם נציגות מדינת היעד כדי לוודא את הנהלים הספציפיים."
          },
          {
            question: "האם חובה לאשר חתימה אלקטרונית של מתרגם מושבע?",
            answer: "לא. למתרגמים מושבעים יש 'נאמנות ציבורית' (Public Faith), ולכן חתימתם האלקטרונית אינה דורשת אישור נוטריוני נוסף."
          },
          {
            question: "האם התרגום צריך להתבצע לפני או אחרי האפוסטיל?",
            answer: "בדרך כלל מתרגמים תחילה, ואז מאופוסטלים את המקור והתרגום יחד. למסמכים שיוצגו בברזיל, התרגום חייב להתבצע על ידי מתרגם מושבע בברזיל."
          },
          {
            question: "האם צריך אפוסטיל נפרד לתרגום ולמקור?",
            answer: "כן, יש להנפיק שני אישורי אפוסטיל: אחד למסמך המקורי ואחד לתרגום המושבע, שכן הם נחשבים למסמכים עצמאיים."
          },
          {
            question: "האם מסמכים זרים שתורגמו בחו\"ל תקפים בברזיל?",
            answer: "בברזיל, מסמכים זרים תקפים רק אם צורף להם תרגום מושבע שבוצע בתוך ברזיל. הדבר מוסדר בחוק סדר הדין האזרחי הברזילאי."
          },
          {
            question: "האם ניתן לחפש מלונות בינלאומיים בפלטפורמה של VGOIRE?",
            answer: "בפלטפורמה המקוונת ניתן לחפש מלונות בתוך ברזיל בלבד. למלונות בינלאומיים, יש ליצור קשר עם סוכן VGOIRE במספר: +55-69-9-8123-2697."
          },
          {
            question: "האם ניתן לחפש רכבים להשכרה בחו\"ל בפלטפורמה?",
            answer: "החיפוש באתר מוגבל לרכבים בתוך ברזיל. להשכרת רכב בינלאומית, אנא פנה לסוכן הנסיעות שלנו ב-WhatsApp."
          },
          {
            question: "איך מבצעים רכישה מאובטחת בפלטפורמת VGOIRE?",
            answer: "1) בחר שירות. 2) לחץ על PAYMENTS. 3) הירשם עם אימייל והזן את הקוד בן 6 הספרות שיישלח אליך. 4) מלא פרטים אישיים. 5) בצע תשלום וקבל את השוברים מיד במייל."
          },
          { 
            question: "מידע על קורס הספרדית.", 
            answer: "לימוד ספרדית עם מדריך יליד קובה (בעל החברה). הקורס נמשך כשנתיים, פעמיים בשבוע (1.5 שעות לשיעור) דרך Google Meet או Teams. הכנה למבחני DELE בכל הרמות (A1-C2)." 
          }
        ]
      },
      ar: { 
        title: 'الأسئلة والأجوبة', 
        description: 'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول خدمات VGOIRE.',
        faqItems: [
          { question: "ما هي المهمة الأساسية لـ VGOIRE؟", answer: "تكرس VGOIRE جهودها لتقديم حلول عالمية متميزة، وسد فجوات التواصل والسفر بتميز وأمان." },
          { question: "كيف يمكنني طلب ترجمة معتمدة؟", answer: "يمكنك طلب عرض سعر مباشرة من خلال تكامل WhatsApp الخاص بنا أو من خلال قسم 'الترجمات المعتمدة' في التطبيق." },
          { question: "هل حجوزات السفر آمنة؟", answer: "نعم، يتم التعامل مع جميع الحجوزات من خلال شركائنا الموثوقين مثل Flytour و Oner Travel، مما يضمن أعلى معايير الأمان." },
          { question: "ما هي اللغات التي تدعمونها؟", answer: "نحن ندعم حاليًا 18 لغة عالمية، بما في ذلك الإنجليزية والإسبانية والبرتغالية والصينية والعبرية والعربية والمزيد." },
          { question: "كيف يمكنني حجز رحلة بحرية فاخرة؟", answer: "قم بزيارة قسم 'الرحلات البحرية' لاستكشاف مجموعتنا المختارة من الرحلات البحرية الفاخرة المدعومة من Qualitours." }
        ]
      },
      ru: { 
        title: 'ВОПРОСЫ и ОТВЕТЫ', 
        description: 'Найдите ответы на самые распространенные вопросы об услугах VGOIRE.',
        faqItems: [
          { question: "Какова основная миссия VGOIRE?", answer: "VGOIRE стремится предоставлять глобальные решения премиум-класса, преодолевая коммуникационные и туристические барьеры с превосходством и безопасностью." },
          { question: "Как я могу запросить сертифицированный перевод?", answer: "Вы можете запросить расчет стоимости напрямую через нашу интеграцию с WhatsApp или через раздел 'Сертифицированные переводы' в приложении." },
          { question: "Безопасны ли бронирования поездок?", answer: "Да, все бронирования осуществляются через наших доверенных партнеров, таких как Flytour и Oner Travel, что гарантирует высочайшие стандарты безопасности." },
          { question: "Какие языки вы поддерживаете?", answer: "В настоящее время мы поддерживаем 18 мировых языков, включая английский, испанский, португальский, китайский, иврит, арабский и другие." },
          { question: "Как забронировать роскошный круиз?", answer: "Посетите раздел 'Круизы', чтобы изучить нашу подборку роскошных путешествий от Qualitours." }
        ]
      },
      ro: { 
        title: 'ÎNTREBĂRI și RĂSPUNSURI', 
        description: 'Găsiți răspunsuri la cele mai frecvente întrebări despre serviciile VGOIRE.',
        faqItems: [
          { question: "Care este misiunea principală a VGOIRE?", answer: "VGOIRE este dedicată furnizării de soluții globale premium, reducând decalajele de comunicare și călătorie cu excelență și securitate." },
          { question: "Cum pot solicita o traducere autorizată?", answer: "Puteți solicita o ofertă direct prin integrarea noastră WhatsApp sau prin secțiunea 'Traduceri autorizate' din aplicație." },
          { question: "Sunt sigure rezervările de călătorie?", answer: "Da, toate rezervările sunt gestionate prin partenerii noștri de încredere, cum ar fi Flytour și Oner Travel, asigurând cele mai înalte standarde de securitate." },
          { question: "Ce limbi suportați?", answer: "În prezent suportăm 18 limbi globale, inclusiv engleză, spaniolă, portugheză, chineză, ebraică, arabă și multe altele." },
          { question: "Cum rezerv o croazieră de lux?", answer: "Vizitați secțiunea 'Croaziere' pentru a explora selecția noastră curată de călătorii de lux oferite de Qualitours." }
        ]
      },
      nl: { 
        title: 'VRAGEN en ANTWOORDEN', 
        description: 'Vind antwoorden op de meest gestelde vragen over de diensten van VGOIRE.',
        faqItems: [
          { question: "Wat is de primaire missie van VGOIRE?", answer: "VGOIRE is toegewijd aan het leveren van premium wereldwijde oplossingen, waarbij communicatie- en reiskloven worden overbrugd met uitmuntendheid en veiligheid." },
          { question: "Hoe kan ik een beëdigde vertaling aanvragen?", answer: "U kunt direct een offerte aanvragen via onze WhatsApp-integratie of via de sectie 'Beëdigde Vertalingen' in de app." },
          { question: "Zijn de reisboekingen veilig?", answer: "Ja, alle boekingen worden afgehandeld via onze vertrouwde partners zoals Flytour en Oner Travel, wat de hoogste veiligheidsnormen garandeert." },
          { question: "Welke talen ondersteunen jullie?", answer: "We ondersteunen momenteel 18 wereldtalen, waaronder Engels, Spaans, Portugees, Chinees, Hebreeuws, Arabisch en meer." },
          { question: "Hoe boek ik een luxe cruise?", answer: "Bezoek de sectie 'Cruises' om onze zorgvuldig geselecteerde luxe reizen van Qualitours te verkennen." }
        ]
      },
      no: { 
        title: 'SPØRSMÅL og SVAR', 
        description: 'Finn svar på de vanligste spørsmålene om VGOIRE-tjenester.',
        faqItems: [
          { question: "Hva er VGOIREs hovedoppdrag?", answer: "VGOIRE er dedikert til å tilby førsteklasses globale løsninger, og bygge bro over kommunikasjons- og reisehull med fortreffelighet og sikkerhet." },
          { question: "Hvordan kan jeg be om en sertifisert oversettelse?", answer: "Du kan be om et tilbud direkte via vår WhatsApp-integrasjon eller gjennom 'Sertifiserte oversettelser'-delen i appen." },
          { question: "Er reisebestillingene sikre?", answer: "Ja, alle bestillinger håndteres gjennom våre pålitelige partnere som Flytour og Oner Travel, noe som sikrer de høyeste sikkerhetsstandardene." },
          { question: "Hvilke språk støtter dere?", answer: "Vi støtter for øyeblikket 18 globale språk, inkludert engelsk, spansk, portugisisk, kinesisk, hebraisk, arabisk og mer." },
          { question: "Hvordan bestiller jeg et luksuscruise?", answer: "Besøk 'Cruise'-delen for å utforske vårt utvalgte utvalg av luksusreiser drevet av Qualitours." }
        ]
      },
      hi: { 
        title: 'प्रश्न और उत्तर', 
        description: 'VGOIRE सेवाओं के बारे में सबसे आम सवालों के जवाब खोजें।',
        faqItems: [
          { question: "VGOIRE का प्राथमिक मिशन क्या है?", answer: "VGOIRE प्रीमियम वैश्विक समाधान प्रदान करने के लिए समर्पित है, जो उत्कृष्टता और सुरक्षा के साथ संचार और यात्रा के अंतराल को पाटता है।" },
          { question: "मैं प्रमाणित अनुवाद का अनुरोध कैसे कर सकता हूं?", answer: "आप सीधे हमारे व्हाट्सएप एकीकरण के माध्यम से या ऐप में 'प्रमाणित अनुवाद' अनुभाग के माध्यम से उद्धरण का अनुरोध कर सकते हैं।" },
          { question: "क्या यात्रा बुकिंग सुरक्षित हैं?", answer: "हाँ, सभी बुकिंग फ्लाईटूर और ओनर ट्रैवल जैसे हमारे विश्वसनीय भागीदारों के माध्यम से संभाली जाती हैं, जो उच्चतम सुरक्षा मानकों को सुनिश्चित करती हैं।" },
          { question: "आप किन भाषाओं का समर्थन करते हैं?", answer: "हम वर्तमान में अंग्रेजी, स्पेनिश, पुर्तगाली, चीनी, हिब्रू, अरबी और अन्य सहित 18 वैश्विक भाषाओं का समर्थन करते हैं।" },
          { question: "मैं एक लक्जरी क्रूज कैसे बुक करूं?", answer: "क्वालिटोर्स द्वारा संचालित लक्जरी यात्राओं के हमारे क्यूरेटेड चयन का पता लगाने के लिए 'क्रूज' अनुभाग पर जाएं।" }
        ]
      },
      ja: { 
        title: '質問と回答', 
        description: 'VGOIREのサービスに関するよくある質問への回答をご覧ください。',
        faqItems: [
          { question: "VGOIREの主な使命は何ですか？", answer: "VGOIREは、卓越性と安全性を備えたコミュニケーションと旅行のギャップを埋める、プレミアムなグローバルソリューションの提供に専念しています。" },
          { question: "公認翻訳を依頼するにはどうすればよいですか？", answer: "WhatsApp連携を介して直接、またはアプリの「公認翻訳」セクションから見積もりを依頼できます。" },
          { question: "旅行の予約は安全ですか？", answer: "はい、すべての予約はFlytourやOner Travelなどの信頼できるパートナーを通じて行われ、最高のセキュリティ基準を保証します。" },
          { question: "どの言語に対応していますか？", answer: "現在、英語、スペイン語、ポルトガル語、中国語、ヘブライ語、アラビア語など、18のグローバル言語に対応しています。" },
          { question: "豪華クルーズを予約するにはどうすればよいですか？", answer: "「クルーズ」セクションにアクセスして、Qualitoursが提供する厳選された豪華な船旅をご覧ください。" }
        ]
      },
      fr: { 
        title: 'QUESTIONS et RÉPONSES', 
        description: 'Trouvez des réponses aux questions les plus courantes sur les services VGOIRE.',
        faqItems: [
          { question: "Quelle est la mission principale de VGOIRE ?", answer: "VGOIRE se consacre à fournir des solutions mondiales de premier plan, comblant les lacunes en matière de communication et de voyage avec excellence et sécurité." },
          { question: "Comment puis-je demander une traduction certifiée ?", answer: "Vous pouvez demander un devis directement via notre intégration WhatsApp ou via la section 'Traductions certifiées' de l'application." },
          { question: "Les réservations de voyage sont-elles sécurisées ?", answer: "Oui, toutes les réservations sont traitées par nos partenaires de confiance tels que Flytour et Oner Travel, garantissant les normes de sécurité les plus élevées." },
          { question: "Quelles langues prenez-vous en charge ?", answer: "Nous prenons actuellement en charge 18 langues mondiales, dont l'anglais, l'espagnol, le portugais, le chinois, l'hébreu, l'arabe, etc." },
          { question: "Comment réserver une croisière de luxe ?", answer: "Visitez la section 'Croisières' pour explorer notre sélection de voyages de luxe propulsés par Qualitours." }
        ]
      },
      it: { 
        title: 'DOMANDE e RISPOSTE', 
        description: 'Trova le risposte alle domande più comuni sui servizi VGOIRE.',
        faqItems: [
          { question: "Qual è la missione principale di VGOIRE?", answer: "VGOIRE si dedica a fornire soluzioni globali premium, colmando le lacune comunicative e di viaggio con eccellenza e sicurezza." },
          { question: "Come posso richiedere una traduzione certificata?", answer: "Puoi richiedere un preventivo direttamente tramite la nostra integrazione WhatsApp o tramite la sezione 'Traduzioni certificate' nell'app." },
          { question: "Le prenotazioni di viaggio sono sicure?", answer: "Sì, tutte le prenotazioni sono gestite tramite i nostri partner di fiducia come Flytour e Oner Travel, garantendo i più alti standard di sicurezza." },
          { question: "Quali lingue supportate?", answer: "Attualmente supportiamo 18 lingue globali, tra cui inglese, spagnolo, portoghese, cinese, ebraico, arabo e altre." },
          { question: "Come prenoto una crociera di lusso?", answer: "Visita la sezione 'Crociere' per esplorare la nostra selezione curata di viaggi di lusso offerti da Qualitours." }
        ]
      },
      de: { 
        title: 'FRAGEN und ANTWORTEN', 
        description: 'Finden Sie Antworten auf die am häufigsten gestellten Fragen zu den Dienstleistungen von VGOIRE.',
        faqItems: [
          { question: "Was ist die Hauptmission von VGOIRE?", answer: "VGOIRE widmet sich der Bereitstellung erstklassiger globaler Lösungen und schließt Kommunikations- und Reisemängel mit Exzellenz und Sicherheit." },
          { question: "Wie kann ich eine beglaubigte Übersetzung anfordern?", answer: "Sie können ein Angebot direkt über unsere WhatsApp-Integration oder über den Bereich 'Beglaubigte Übersetzungen' in der App anfordern." },
          { question: "Sind die Reisebuchungen sicher?", answer: "Ja, alle Buchungen werden über unsere vertrauenswürdigen Partner wie Flytour und Oner Travel abgewickelt, um höchste Sicherheitsstandards zu gewährleisten." },
          { question: "Welche Sprachen unterstützen Sie?", answer: "Wir unterstützen derzeit 18 globale Sprachen, darunter Englisch, Spanisch, Portugiesisch, Chinesisch, Hebräisch, Arabisch und mehr." },
          { question: "Wie buche ich eine Luxuskreuzfahrt?", answer: "Besuchen Sie den Bereich 'Kreuzfahrten', um unsere kuratierte Auswahl an Luxusreisen von Qualitours zu entdecken." }
        ]
      },
      ko: { 
        title: '질문 및 답변', 
        description: 'VGOIRE 서비스에 대해 가장 자주 묻는 질문에 대한 답변을 확인하세요.',
        faqItems: [
          { question: "VGOIRE의 주요 임무는 무엇입니까?", answer: "VGOIRE는 탁월함과 보안을 바탕으로 커뮤니케이션과 여행의 격차를 해소하고 프리미엄 글로벌 솔루션을 제공하는 데 전념하고 있습니다." },
          { question: "공인 번역을 어떻게 요청할 수 있나요?", answer: "WhatsApp 연동을 통해 직접 견적을 요청하거나 앱의 '공인 번역' 섹션을 통해 요청할 수 있습니다." },
          { question: "여행 예약은 안전한가요?", answer: "예, 모든 예약은 Flytour 및 Oner Travel과 같은 신뢰할 수 있는 파트너를 통해 처리되어 최고의 보안 표준을 보장합니다." },
          { question: "어떤 언어를 지원하나요?", answer: "현재 영어, 스페인어, 포르투갈어, 중국어, 히브리어, 아랍어 등 18개 글로벌 언어를 지원합니다." },
          { question: "호화 크루즈는 어떻게 예약하나요?", answer: "Qualitours가 제공하는 엄선된 호화 항해를 살펴보려면 '크루즈' 섹션을 방문하세요." }
        ]
      },
      fi: { 
        title: 'KYSYMYKSET ja VASTAUKSET', 
        description: 'Löydä vastaukset yleisimpiin kysymyksiin VGOIRE-palveluista.',
        faqItems: [
          { question: "Mikä on VGOIRE:n ensisijainen tehtävä?", answer: "VGOIRE on omistautunut tarjoamaan ensiluokkaisia globaaleja ratkaisuja, kuroen umpeen viestintä- ja matkustusaukkoja erinomaisuudella ja turvallisuudella." },
          { question: "Miten voin pyytää auktorisoidun käännöksen?", answer: "Voit pyytää tarjouksen suoraan WhatsApp-integraatiomme kautta tai sovelluksen 'Auktorisoidut käännökset' -osion kautta." },
          { question: "Ovatko matkavaraukset turvallisia?", answer: "Kyllä, kaikki varaukset hoidetaan luotettavien kumppaneidemme, kuten Flytourin ja Oner Travelin, kautta, mikä takaa korkeimmat turvallisuusstandardit." },
          { question: "Mitä kieliä tuette?", answer: "Tuemme tällä hetkellä 18 maailmanlaajuista kieltä, mukaan lukien englanti, espanja, portugali, kiina, heprea, arabia ja paljon muuta." },
          { question: "Miten varaan luksusristeilyn?", answer: "Vieraile 'Risteilyt'-osiossa tutustuaksesi Qualitoursin tarjoamiin kuratoituihin luksusmatkoihimme." }
        ]
      },
      el: { 
        title: 'ΕΡΩΤΗΣΕΙΣ και ΑΠΑΝΤΗΣΕΙΣ', 
        description: 'Βρείτε απαντήσεις στις πιο συνηθισμένες ερωτήσεις σχετικά με τις υπηρεσίες της VGOIRE.',
        faqItems: [
          { question: "Ποια είναι η κύρια αποστολή της VGOIRE;", answer: "Η VGOIRE είναι αφοσιωμένη στην παροχή κορυφαίων παγκόσμιων λύσεων, γεφυρώνοντας τα κενά επικοινωνίας και ταξιδιών με αριστεία και ασφάλεια." },
          { question: "Πώς μπορώ να ζητήσω μια επίσημη μετάφραση;", answer: "Μπορείτε να ζητήσετε μια προσφορά απευθείας μέσω της ενσωμάτωσης WhatsApp ή μέσω της ενότητας 'Επίσημες Μεταφράσεις' στην εφαρμογή." },
          { question: "Είναι ασφαλείς οι ταξιδιωτικές κρατήσεις;", answer: "Ναι, όλες οι κρατήσεις διεκπεραιώνονται μέσω των έμπιστων συνεργατών μας όπως η Flytour και η Oner Travel, διασφαλίζοντας τα υψηλότερα πρότυπα ασφαλείας." },
          { question: "Ποιες γλώσσες υποστηρίζετε;", answer: "Υποστηρίζουμε επί του παρόντος 18 παγκόσμιες γλώσσες, συμπεριλαμβανομένων των Αγγλικών, Ισπανικών, Πορτογαλικών, Κινεζικών, Εβραϊκών, Αραβικών και άλλων." },
          { question: "Πώς μπορώ να κλείσω μια κρουαζιέρα πολυτελείας;", answer: "Επισκεφθείτε την ενότητα 'Κρουαζιέρες' για να εξερευνήσετε την επιλεγμένη συλλογή μας από ταξίδια πολυτελείας που υποστηρίζονται από την Qualitours." }
        ]
      }
    }
  },
  {
    id: 'google_rates',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    //externalPlatformLink: 'https://www.google.com/search?q=tradutor+em+porto+velho+ro&rlz=1C1GCEA_enBR1167BR1184&oq=TRAD&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIPCAEQRRg5GIMBGLEDGIAEMgYIAhAjGCcyEggDEAAYQxiDARixAxiABBiKBTINCAQQABiDARixAxiABDIMCAUQABhDGIAEGIoFMgcIBhAAGI8CMgcIBxAAGI8CMgcICBAAGI8C0gEJNjEzNGowajE1qAIMsAIB8QUwVehxl9Aovw&sourceid=chrome&ie=UTF-8#mpd=~14647349417961252840/customers/reviews',
    externalPlatformLink: 'https://www.google.com/search?q=Tradu%C3%A7%C3%B5es+VGOIRE#lrd=0x92325d2cf06b9af3:0x32abe3bef477542f,1,,,,',
    translations: {
      en: { title: 'CLIENT RATINGS', description: 'Access our official Google page to read all the ratings and reviews from our clients.' },
      es: { title: 'CALIFICACIONES DE CLIENTES', description: 'Acceda a nuestra página oficial de Google para leer todas las calificaciones y opiniones de nuestros clientes.' },
      pt: { title: 'AVALIAÇÕES NO GOOGLE', description: 'Acesse nossa página oficial no Google para ler todas as avaliações e comentários de nossos clientes.' },
      zh: { title: '客户评分', description: '访问我们的官方 Google 页面，阅读客户的所有评分和评价。' },
      he: { title: 'דירוגי לקוחות', description: 'גש לדף הגוגל הרשמי שלנו כדי לקרוא את כל הדירוגים והביקורות מהלקוחות שלנו.' },
      ar: { title: 'تقييمات العملاء', description: 'قم بالوصول إلى صفحتنا الرسمية على Google لقراءة جميع التقييمات والمراجعات من عملائنا.' },
      ru: { title: 'РЕЙТИНГИ КЛИЕНТОВ', description: 'Перейдите на нашу официальную страницу в Google, чтобы прочитать все рейтинги и отзывы наших клиентов.' },
      ro: { title: 'EVALUĂRI CLIENȚI', description: 'Accesați pagina noastră oficială Google pentru a citi toate evaluările și recenziile clienților noștri.' },
      nl: { title: 'KLANTBEOORDELINGEN GOOGLE', description: 'Ga naar onze officiële Google-pagina om alle beoordelingen en recensies van onze klanten te lezen.' },
      no: { title: 'KUNDEVURDERINGER', description: 'Gå til vår offisielle Google-side for å lese alle vurderinger og anmeldelser fra våre kunder.' },
      hi: { title: 'ग्राहक रेटिंग', description: 'हमारे ग्राहकों की सभी रेटिंग और समीक्षाएं पढ़ने के लिए हमारे आधिकारिक Google पेज पर जाएं।' },
      ja: { title: '顧客評価', description: '公式Googleページにアクセスして、お客様からのすべての評価とレビューをお読みください。' },
      fr: { title: 'ÉVALUATIONS CLIENTS', description: 'Accédez à notre page Google officielle pour lire tous les classements et avis de nos clients.' },
      it: { title: 'VALUTAZIONI CLIENTI', description: 'Accedi alla nostra pagina Google ufficiale per leggere tutte le valutazioni e le recensioni dei nostri clientes.' },
      de: { title: 'KUNDENBEWERTUNGEN GOOGLE', description: 'Besuchen Sie unsere offizielle Google-Seite, um alle Bewertungen und Rezensionen unserer Kunden zu lesen.' },
      ko: { title: '고객 평점', description: '공식 Google 페이지에 접속하여 고객의 모든 평점과 리뷰를 확인하세요.' },
      fi: { title: 'ASIAKASLUOKITUKSET', description: 'Siirry viralliselle Google-sivullemme lukeaksesi kaikki asiakkaidemme arviot ja arvostelut.' },
      el: { title: 'ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ', description: 'Μεταβείτε στην επίσημη σελίδα μας στο Google για να διαβάσετε όλες τις αξιολογήσεις και τις κριτικές των πελατών μας.' }
    }
  },
];
