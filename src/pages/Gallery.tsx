import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image } from 'lucide-react';
import { galleryItems } from '../data/mockData';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollYRef = useRef(0);

  const filters = [
    { id: 'all', label: t('galleryPage.filterAll') },
    { id: 'sketsa', label: t('galleryPage.filterSketsa') },
    { id: 'color', label: t('galleryPage.filterColor') },
    { id: 'couple', label: t('galleryPage.filterCouple') },
    { id: 'anime', label: t('galleryPage.filterAnime') },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const lockScroll = () => {
    scrollYRef.current = window.scrollY || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    const y = scrollYRef.current || 0;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, y);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    lockScroll();
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    unlockScroll();
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-pink-light/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <Image size={36} className="text-pink-main" />
            <h1 className="heading-section mb-0">
              {t('galleryPage.title')}
            </h1>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="subheading-section"
          >
            {t('galleryPage.subtitle')}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-main/20 focus-visible:ring-offset-2 ${
                activeFilter === filter.id
                  ? 'bg-pink-main text-white shadow-md'
                  : 'bg-white text-gray-text hover:bg-pink-light hover:text-purple-dark border border-pink-light'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div 
          layout
          className="masonry-grid"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Calculate dynamic row span based on image aspect ratio
              const aspectRatio = item.height / item.width;
              const rowSpan = Math.max(8, Math.round(aspectRatio * 10)); // Minimum 8 rows
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="masonry-item group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ gridRow: `span ${rowSpan}` }}
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={item.image} 
                    alt={i18n.language === 'id' ? item.caption : item.caption_en} 
                    className="transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-purple-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="text-white mb-2" size={20} />
                      <p className="text-white font-sans text-xs sm:text-sm line-clamp-2">
                        {i18n.language === 'id' ? item.caption : item.caption_en}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-text font-sans text-lg">
              {t('catalog.noProducts')}
            </p>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-[calc(1rem+env(safe-area-inset-top))] right-[calc(1rem+env(safe-area-inset-right))] md:top-[calc(2rem+env(safe-area-inset-top))] md:right-[calc(2rem+env(safe-area-inset-right))] text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>

              {/* Navigation Prev */}
              <button 
                onClick={prevImage}
                className="absolute left-[calc(1rem+env(safe-area-inset-left))] md:left-[calc(2rem+env(safe-area-inset-left))] text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
              >
                <ChevronLeft size={40} />
              </button>

              {/* Main Image */}
              <motion.div 
                key={lightboxIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={filteredItems[lightboxIndex].image} 
                  alt="Gallery Preview" 
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="w-full bg-black/50 backdrop-blur-md p-4 mt-4 rounded-xl text-center">
                  <p className="text-white font-sans text-lg">
                    {i18n.language === 'id' ? filteredItems[lightboxIndex].caption : filteredItems[lightboxIndex].caption_en}
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Next */}
              <button 
                onClick={nextImage}
                className="absolute right-[calc(1rem+env(safe-area-inset-right))] md:right-[calc(2rem+env(safe-area-inset-right))] text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
              >
                <ChevronRight size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Gallery;
