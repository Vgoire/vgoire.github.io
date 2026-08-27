import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Arrastar menos que isso é tratado como toque (abre a tela cheia), não como swipe.
const SWIPE_THRESHOLD = 60;

interface ImageCarouselProps {
  images: string[];
  /** Texto base do alt de cada imagem (recebe o número do slide no final). */
  alt?: string;
  className?: string;
}

// Slide entra pelo lado para onde o usuário está navegando e sai pelo oposto.
const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction >= 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction >= 0 ? -80 : 80 }),
};

const ImageCarousel = ({ images, alt = 'Imagem', className = '' }: ImageCarouselProps) => {
  // [índice atual, direção do último movimento] andam juntos para a animação saber o sentido.
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Evita que o fim de um swipe seja interpretado também como clique de abrir.
  const draggedRef = useRef(false);

  const total = images.length;

  const paginate = useCallback((step: number) => {
    setSlide(([current]) => [(current + step + total) % total, step]);
  }, [total]);

  const goTo = useCallback((target: number) => {
    setSlide(([current]) => [target, target - current]);
  }, []);

  // Na tela cheia: setas navegam, Esc fecha e a página atrás não rola.
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false);
      if (event.key === 'ArrowRight') paginate(1);
      if (event.key === 'ArrowLeft') paginate(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, paginate]);

  if (total === 0) return null;

  const dragProps = {
    drag: total > 1 ? ('x' as const) : false,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.15,
    onPointerDown: () => { draggedRef.current = false; },
    onDragStart: () => { draggedRef.current = true; },
    onDragEnd: (_event: unknown, info: { offset: { x: number } }) => {
      if (info.offset.x <= -SWIPE_THRESHOLD) paginate(1);
      else if (info.offset.x >= SWIPE_THRESHOLD) paginate(-1);
    },
  };

  const ArrowButton = ({ step, position }: { step: number; position: string }) => (
    <button
      onClick={(e) => { e.stopPropagation(); paginate(step); }}
      aria-label={step > 0 ? 'Próxima imagem' : 'Imagem anterior'}
      className={`absolute top-1/2 -translate-y-1/2 ${position} w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-vgoire-gold hover:text-vgoire-blue transition-all active:scale-95 z-10`}
    >
      {step > 0 ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
    </button>
  );

  const Dots = ({ onSelect }: { onSelect: (target: number) => void }) => (
    <div className="flex items-center justify-center gap-2">
      {images.map((image, idx) => (
        <button
          key={image}
          onClick={(e) => { e.stopPropagation(); onSelect(idx); }}
          aria-label={`Ir para a imagem ${idx + 1}`}
          className={`h-2 rounded-full transition-all ${idx === index ? 'w-6 bg-vgoire-gold' : 'w-2 bg-white/30 hover:bg-white/60'}`}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className={`relative ${className}`}>
        <div
          className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl cursor-zoom-in"
          onClick={() => { if (!draggedRef.current) setIsFullscreen(true); }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover select-none"
              draggable={false}
              referrerPolicy="no-referrer"
              {...dragProps}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {total > 1 && (
            <>
              <ArrowButton step={-1} position="left-3" />
              <ArrowButton step={1} position="right-3" />
            </>
          )}

          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-xs font-bold tracking-widest">
            {index + 1}/{total}
          </span>
        </div>

        {total > 1 && (
          <>
            <div className="mt-4">
              <Dots onSelect={goTo} />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto custom-scrollbar pb-2">
              {images.map((image, idx) => (
                <button
                  key={image}
                  onClick={() => goTo(idx)}
                  aria-label={`Ver a imagem ${idx + 1}`}
                  className={`shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === index ? 'border-vgoire-gold opacity-100' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Tela cheia */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/95 p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={() => setIsFullscreen(false)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  alt={`${alt} ${index + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-contain select-none"
                  draggable={false}
                  referrerPolicy="no-referrer"
                  {...dragProps}
                />
              </AnimatePresence>

              {total > 1 && (
                <>
                  <ArrowButton step={-1} position="left-2 sm:-left-14" />
                  <ArrowButton step={1} position="right-2 sm:-right-14" />
                </>
              )}
            </div>

            {total > 1 && (
              <div className="mt-6" onClick={(e) => e.stopPropagation()}>
                <Dots onSelect={goTo} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;
