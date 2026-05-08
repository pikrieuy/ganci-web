import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  Package,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Frown,
} from 'lucide-react';
import { products, casingShapes, formatPrice, getWhatsAppLink } from '../data/mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-28 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="mb-4 flex justify-center text-gray-400">
          <Frown size={64} />
        </div>
        <h2 className="font-sans text-2xl text-purple-dark mb-4">
          {lang === 'id' ? 'Produk tidak ditemukan' : 'Product not found'}
        </h2>
        <Link to="/catalog" className="btn-primary">
          {t('productDetail.backToCatalog')}
        </Link>
      </div>
    );
  }

  const name = lang === 'id' ? product.name_id : product.name_en;
  const desc = lang === 'id' ? product.desc_id : product.desc_en;
  const duration = lang === 'id' ? product.duration : product.duration_en;
  const material = lang === 'id' ? product.material_id : product.material_en;

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id && p.is_active
  );

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % product.photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + product.photos.length) % product.photos.length);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-pink-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <Package size={36} className="text-pink-main" />
            <h1 className="heading-section mb-0">{name}</h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="subheading-section"
          >
            {desc}
          </motion.p>
        </div>

        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-gray-text hover:text-pink-main 
                   font-sans font-semibold text-sm transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          {t('productDetail.backToCatalog')}
        </Link>
      </div>

      {/* Product Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Photo */}
            <div className="relative rounded-2xl overflow-hidden bg-pink-light aspect-square shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedPhoto}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.photos[selectedPhoto]}
                  alt={`${name} - photo ${selectedPhoto + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Nav Arrows */}
              {product.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 
                             bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center
                             hover:bg-white shadow-md transition-all duration-300"
                  >
                    <ChevronLeft size={20} className="text-purple-dark" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 
                             bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center
                             hover:bg-white shadow-md transition-all duration-300"
                  >
                    <ChevronRight size={20} className="text-purple-dark" />
                  </button>
                </>
              )}

              {/* Photo Counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/40 backdrop-blur-sm 
                            rounded-full text-white text-xs font-sans">
                {selectedPhoto + 1} / {product.photos.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 mt-4">
              {product.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedPhoto === index
                      ? 'border-pink-main shadow-md scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`${name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Category Badge */}
            <div className="inline-flex self-start px-3 py-1 bg-pink-light rounded-full 
                          text-sm font-sans font-semibold text-pink-main mb-3">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>

            <h1 className="font-sans font-bold text-3xl md:text-4xl text-purple-dark mb-4">
              {name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <p className="text-sm text-gray-text font-sans mb-1">
                {t('productDetail.price')}
              </p>
              <p className="font-sans font-bold text-3xl text-pink-main">
                {product.price === 0
                  ? lang === 'id'
                    ? 'Harga Nego'
                    : 'Negotiable'
                  : formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-sans font-bold text-purple-dark mb-2">
                {t('productDetail.description')}
              </h3>
              <p className="font-sans text-gray-text leading-relaxed">{desc}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} className="text-pink-main" />
                  <span className="text-xs text-gray-text font-sans">
                    {t('productDetail.duration')}
                  </span>
                </div>
                <p className="font-sans font-bold text-purple-dark text-sm">{duration}</p>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Package size={16} className="text-pink-main" />
                  <span className="text-xs text-gray-text font-sans">
                    {t('productDetail.material')}
                  </span>
                </div>
                <p className="font-sans font-bold text-purple-dark text-sm">{material}</p>
              </div>
              <div className="glass-card p-4 col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <Ruler size={16} className="text-pink-main" />
                  <span className="text-xs text-gray-text font-sans">
                    {t('productDetail.size')}
                  </span>
                </div>
                <p className="font-sans font-bold text-purple-dark text-sm">{product.size}</p>
              </div>
            </div>

            {/* Casing Options */}
            <div className="mb-8">
              <h3 className="font-sans font-bold text-purple-dark mb-3">
                {t('productDetail.casingOptions')}
              </h3>
              <div className="flex gap-3">
                {casingShapes.map((shape) => (
                  <div
                    key={shape.id}
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl 
                             bg-pink-light/50 border border-pink-light"
                  >
                    <span className="text-xl">{shape.icon}</span>
                    <span className="text-xs font-sans text-gray-text">
                      {lang === 'id' ? shape.name_id : shape.name_en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={getWhatsAppLink(name, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-lg flex items-center justify-center gap-3 
                       py-4 w-full"
            >
              <MessageCircle size={22} />
              {t('productDetail.orderNow')}
            </a>
          </motion.div>
        </div>

        {/* Related Works */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="heading-section">{t('productDetail.relatedWorks')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {relatedProducts.slice(0, 3).map((rp, index) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/catalog/${rp.id}`} className="block">
                    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                                  transition-all duration-300 hover:scale-[1.02]">
                      <img
                        src={rp.photos[0]}
                        alt={lang === 'id' ? rp.name_id : rp.name_en}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
