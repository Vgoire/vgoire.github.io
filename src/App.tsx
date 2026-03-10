/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  MessageCircle, 
  ExternalLink, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Languages as LanguagesIcon,
  Handshake,
  HelpCircle,
} from 'lucide-react';
import { 
  SERVICES, 
  Service, 
  OFFICIAL_WEBSITE_URL,
  LANGUAGES,
  Language,
  UI_STRINGS,
  WHATSAPP_BASE_URL
} from './constants';

// --- Components ---

const LanguageSelector = ({ currentLang, onSelect }: { currentLang: Language, onSelect: (lang: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.language-selector-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative language-selector-container">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-all active:scale-95"
      >
        <LanguagesIcon className="w-5 h-5 text-vgoire-gold" />
        <span className="text-sm font-bold uppercase tracking-wider">{currentLang}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-3 w-64 bg-vgoire-blue/98 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-y-auto max-h-[60vh] custom-scrollbar ring-1 ring-white/10"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onSelect(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-4 text-sm hover:bg-vgoire-gold hover:text-vgoire-blue transition-colors flex items-center justify-between border-b border-white/5 last:border-0 ${currentLang === lang.code ? 'text-vgoire-gold font-bold' : 'text-white'}`}
              >
                <span>{lang.name}</span>
                {currentLang === lang.code && <div className="w-1.5 h-1.5 bg-current rounded-full" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SplashScreen = ({ onComplete, lang }: { onComplete: () => void, lang: Language, key?: string }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const t = UI_STRINGS[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-vgoire-blue luxury-bg"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <div className="flex items-center gap-6 mb-4">
          <div className="w-32 h-32 bg-vgoire-blue rounded-[20%] flex items-center justify-center shadow-2xl shadow-black/50 overflow-hidden border-4 border-vgoire-gold/30">
            <img 
              src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=512&h=512" 
              alt="VGOIRE Icon"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-vgoire-blue text-7xl font-black tracking-tighter drop-shadow-lg text-white">VGOIRE</span>
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20px] border-2 border-dashed border-vgoire-gold/40 rounded-full pointer-events-none"
        />
      </motion.div>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-vgoire-gold font-bold tracking-[0.3em] uppercase text-sm px-6 text-center"
      >
        {t.excellence}
      </motion.p>
    </motion.div>
  );
};

const ServiceCard = ({ service, lang, onClick }: { service: Service, lang: Language, onClick: () => void, key?: string }) => {
  const content = service.translations[lang];
  const isEnlarged = service.id === 'google_rates' || service.id === 'vgoire_videos';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass-card cursor-pointer group relative ${isEnlarged ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className={`relative ${isEnlarged ? 'h-64 md:h-80' : 'h-56'} overflow-hidden`}>
        <img 
          src={service.image} 
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vgoire-blue via-vgoire-blue/10 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <service.icon className={`${isEnlarged ? 'w-8 h-8' : 'w-5 h-5'} text-white`} />
        </div>
        {isEnlarged && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-6">
              <h3 className="text-vgoire-gold text-2xl md:text-4xl font-bold tracking-widest uppercase mb-2 drop-shadow-2xl">
                {content.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto drop-shadow-lg">
                {content.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={`p-6 flex flex-col items-center ${isEnlarged ? '-mt-12' : '-mt-10'} relative z-10`}>
        <button className={`gold-button ${isEnlarged ? 'max-w-md' : 'w-full'} flex items-center justify-center gap-3 group-hover:shadow-vgoire-gold/50`}>
          <span className="truncate">{content.title}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ServiceDetail = ({ service, lang, onBack, onLangChange }: { service: Service, lang: Language, onBack: () => void, onLangChange: (lang: Language) => void, key?: string }) => {
  const content = service.translations[lang];
  const t = UI_STRINGS[lang];
  const isRtl = LANGUAGES.find(l => l.code === lang)?.dir === 'rtl';

  const whatsappUrl = WHATSAPP_BASE_URL;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="min-h-screen bg-vgoire-blue luxury-bg pb-20"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="relative h-[45vh] overflow-hidden">
        <img 
          src={service.image} 
          alt={content.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vgoire-blue/40 via-transparent to-vgoire-blue" />
        <button 
          onClick={onBack}
          className={`absolute top-8 ${isRtl ? 'right-8' : 'left-8'} w-12 h-12 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-vgoire-gold hover:text-vgoire-blue transition-all border border-white/10 shadow-xl z-20`}
        >
          <ChevronLeft className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <div className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} z-20`}>
          <LanguageSelector currentLang={lang} onSelect={onLangChange} />
        </div>
      </div>

      <div className="px-6 -mt-16 relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="p-5 bg-vgoire-blue/40 backdrop-blur-xl rounded-2xl shadow-2xl mb-4 border-2 border-vgoire-gold/30">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight text-center uppercase drop-shadow-lg">
            {content.title}
          </h1>
        </div>

        <div className="glass-card p-8 mb-10 border-vgoire-gold/20">
          <p className="text-gray-100 leading-relaxed text-xl font-light">
            {content.description}
          </p>
        </div>

        {service.slides && (
          <div className="mb-10">
            <h3 className="text-vgoire-gold font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {service.slides.map((slide, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="h-40 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                >
                  <img src={slide} alt={`Slide ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {service.partners && (
          <div className="mb-10">
            <h3 className="text-vgoire-gold font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              {t.partners}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.partners.map((partner, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group h-48 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                >
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-bold tracking-wider text-lg uppercase">{partner.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {content.faqItems && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-vgoire-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                {t.questionsResponses}
              </h3>
              
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="space-y-10">
                {content.faqItems.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-4">
                        <span className="text-vgoire-gold/30 font-mono text-xs mt-1">Q.{String(idx + 1).padStart(2, '0')}</span>
                        <div className="flex-1">
                          
                            <div className="text-white/90 font-medium italic leading-relaxed border-b border-white/10 pb-2 min-h-[2rem]">
                              {item.question || '________________________________________________________________________________'}
                            </div>
                         
                        </div>
                      </div>
                      <div className="flex items-start gap-4 pl-8">
                        <span className="text-vgoire-gold/30 font-mono text-xs mt-1">A.{String(idx + 1).padStart(2, '0')}</span>
                        <div className="flex-1">
                          
                            <div className="text-white/60 text-sm leading-relaxed border-b border-white/5 pb-2 min-h-[3rem]">
                              {item.answer || '________________________________________________________________________________'}
                            </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-vgoire-gold/40 font-bold">
                <span>Official VGOIRE Information Record</span>
                <span>Verified & Secured</span>
              </div>
            </div>
          </div>
        )}

        {service.id === 'updates' && (
          <div className="mb-12 space-y-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-vgoire-gold font-bold mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Version 2.1.0 - Feb 2026
              </h3>
              <ul className="space-y-3 text-white/70 text-sm list-disc list-inside">
                <li>Expanded language support to 18 global languages</li>
                <li>New interactive Cruises window with Qualitours partnership</li>
                <li>Improved UI performance and luxury design refinements</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-vgoire-gold font-bold mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Version 2.0.0 - Jan 2026
              </h3>
              <ul className="space-y-3 text-white/70 text-sm list-disc list-inside">
                <li>Initial launch of VGOIRE Premium Global Solutions</li>
                <li>Integration with major travel and car rental platforms</li>
                <li>Multi-language support for English, Spanish, Portuguese, Chinese, Hebrew, and Arabic</li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-5">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="green-button flex items-center justify-center gap-4 text-lg py-4"
          >
            <MessageCircle className="w-7 h-7" />
            {t.requestQuote}
          </a>

          {service.externalPlatformLink && (
            <a 
              href={service.externalPlatformLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button flex items-center justify-center gap-4 text-lg py-4"
            >
              <ExternalLink className="w-7 h-7" />
              {service.id === 'reviews' ? t.rateUs : (service.id === 'google_rates' ? t.readReviews : (service.id === 'partners' ? t.accessPartnersPlatform : t.accessPlatform))}
            </a>
          )}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-vgoire-gold/70 text-sm font-medium bg-black/20 py-3 rounded-full backdrop-blur-sm">
          <ShieldCheck className="w-5 h-5" />
          <span>{t.secureService}</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('service');
    if (serviceId) {
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        setShowSplash(false);
      }
    }
  }, []);

  const t = UI_STRINGS[lang];
  const isRtl = LANGUAGES.find(l => l.code === lang)?.dir === 'rtl';

  return (
    <div className="min-h-screen bg-vgoire-blue selection:bg-vgoire-gold selection:text-vgoire-blue" dir={isRtl ? 'rtl' : 'ltr'}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} lang={lang} />
        ) : selectedService ? (
          <ServiceDetail 
            key="detail"
            service={selectedService} 
            lang={lang}
            onBack={() => setSelectedService(null)} 
            onLangChange={setLang}
          />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="luxury-bg min-h-screen"
          >
            <nav className="sticky top-0 z-40 bg-vgoire-blue/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
              <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-vgoire-blue rounded-lg flex items-center justify-center shadow-lg overflow-hidden border border-vgoire-gold/30">
                    <img 
                      src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=128&h=128" 
                      alt="VGOIRE Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-xl font-black text-white tracking-tighter">VGOIRE</span>
                </div>
                <div className="flex items-center gap-4">
                  <LanguageSelector currentLang={lang} onSelect={setLang} />
                </div>
              </div>
            </nav>

            <div className="max-w-5xl mx-auto px-6 pt-12 pb-24">
              <header className="flex flex-col items-center mb-16 text-center">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-6 flex flex-col items-center gap-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-vgoire-blue rounded-2xl flex items-center justify-center shadow-xl overflow-hidden border-2 border-vgoire-gold/30">
                      <img 
                        src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=256&h=256" 
                        alt="VGOIRE Icon"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h1 className="text-6xl font-black text-white tracking-tighter drop-shadow-2xl">VGOIRE</h1>
                  </div>
                </motion.div>
                <div className="h-1 w-32 bg-vgoire-gold mx-auto rounded-full mb-4" />
                <p className="text-vgoire-gold font-bold tracking-[0.4em] uppercase text-xs">
                  {t.tagline}
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    lang={lang}
                    onClick={() => setSelectedService(service)}
                  />
                ))}
              </div>

              <footer className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-8">
                <a 
                  href={OFFICIAL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button flex items-center gap-3 px-8"
                >
                  <Globe className="w-5 h-5" />
                  {t.visitWebsite}
                </a>
                <div className="text-center text-white/40 text-xs space-y-4">
                  <p>© {new Date().getFullYear()} VGOIRE. All rights reserved.</p>
                  <button 
                    onClick={() => setShowPrivacy(true)}
                    className="text-vgoire-gold/60 hover:text-vgoire-gold underline transition-colors"
                  >
                    {t.privacyPolicy}
                  </button>
                  <p className="font-medium text-vgoire-gold/40 tracking-widest uppercase">
                    Excellence • Security • Quality
                  </p>
                </div>
              </footer>
            </div>

            <AnimatePresence>
              {showPrivacy && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-vgoire-blue border border-vgoire-gold/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
                  >
                    <button 
                      onClick={() => setShowPrivacy(false)}
                      className="absolute top-4 right-4 text-white/60 hover:text-white"
                    >
                      <ChevronLeft className="w-6 h-6 rotate-90" />
                    </button>
                    <h2 className="text-2xl font-bold text-vgoire-gold mb-6 uppercase tracking-tight">
                      {t.privacyPolicy}
                    </h2>
                    <div className="text-gray-200 leading-relaxed text-lg font-light">
                      {t.privacyContent}
                    </div>
                    <button 
                      onClick={() => setShowPrivacy(false)}
                      className="mt-8 w-full gold-button"
                    >
                      Close
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
