import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories, casingShapes } from '../data/mockData';

const Catalog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = products.filter((p) => {
    if (!p.is_active) return false;
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding bg-gradient-hero pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-section">{t('catalog.title')}</h1>
            <p className="subheading-section">{t('catalog.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 md:px-8 -mt-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-nunito font-semibold text-sm 
                           transition-all duration-300 shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-pink-main text-white shadow-md scale-105'
                    : 'bg-white text-gray-text hover:bg-pink-light hover:text-purple-dark border border-pink-light'
                }`}
              >
                {lang === 'id' ? cat.name_id : cat.name_en}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-nunito text-gray-text text-lg">
                  {t('catalog.noProducts')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Casing Shapes */}
      <section className="section-padding bg-pink-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section">{t('catalog.casingTitle')}</h2>
            <p className="subheading-section">{t('catalog.casingSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {casingShapes.map((shape, index) => (
              <motion.div
                key={shape.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 cursor-default"
              >
                <div className="text-4xl mb-3">{shape.icon}</div>
                <p className="font-nunito font-bold text-purple-dark text-sm">
                  {lang === 'id' ? shape.name_id : shape.name_en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
