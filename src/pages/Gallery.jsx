import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/mockData';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-pink-light/30"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="heading-section"
          >
            {t('galleryPage.title')}
          </motion.h1>
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
              className={`px-5 py-2 rounded-full font-nunito font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-pink-main text-white shadow-md'
                  : 'bg-white text-gray-text hover:bg-pink-light hover:text-purple-dark border border-pink-light'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.image} 
                  alt={i18n.language === 'id' ? item.caption : item.caption_en} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-purple-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-white mb-2" size={24} />
                    <p className="text-white font-nunito text-sm line-clamp-2">
                      {i18n.language === 'id' ? item.caption : item.caption_en}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-text font-nunito text-lg">
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
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>

              {/* Navigation Prev */}
              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
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
                  <p className="text-white font-nunito text-lg">
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
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
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
