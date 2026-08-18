import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Nem todo vídeo tem maxresdefault (só os enviados em 1280x720 ou mais).
// Quando não existe, o YouTube responde 404 servindo um JPEG cinza de 120x90:
// o navegador exibe esse placeholder em vez de disparar onError, e é ele que
// aparece esticado como se a imagem não tivesse carregado. Por isso a queda
// para a próxima resolução é decidida pelo tamanho real da imagem carregada.
const THUMBNAIL_QUALITIES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];
const PLACEHOLDER_MAX_WIDTH = 120;

const VideoModal = ({ videoUrl, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnailLevel, setThumbnailLevel] = useState(0);

  // Função para extrair o ID do vídeo do YouTube de URLs variadas
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(videoUrl);

  // Volta para a melhor qualidade quando o vídeo muda
  useEffect(() => setThumbnailLevel(0), [videoId]);

  const useNextThumbnail = () =>
    setThumbnailLevel((level) => Math.min(level + 1, THUMBNAIL_QUALITIES.length - 1));

  if (!videoId) return <p className="text-red-500">URL de vídeo inválida</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${THUMBNAIL_QUALITIES[thumbnailLevel]}.jpg`;

  return (
    <>
      {/* Thumbnail / Trigger */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={thumbnailUrl} 
          alt="Video thumbnail" 
          className="w-full aspect-video object-contain bg-black transition-transform duration-500 group-hover:scale-105"
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth <= PLACEHOLDER_MAX_WIDTH) useNextThumbnail();
          }}
          onError={useNextThumbnail}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
          <div className="w-16 h-16 bg-vgoire-gold rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <iframe
                className="w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoModal;