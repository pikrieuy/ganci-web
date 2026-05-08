import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Palette } from 'lucide-react';
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
    <div className="pt-24 pb-16 min-h-screen bg-pink-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <Palette size={36} className="text-pink-main" />
            <h1 className="heading-section mb-0">{t('catalog.title')}</h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="subheading-section"
          >
            {t('catalog.subtitle')}
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-6 py-2 rounded-full font-sans font-semibold text-sm 
                         transition-all duration-300 shadow-sm
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-main/20 focus-visible:ring-offset-2 ${
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

      {/* Product Grid */}
      <section className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
                <div className="mb-4 flex justify-center text-gray-400">
                  <Search size={48} />
                </div>
                <p className="font-sans text-gray-text text-lg">
                  {t('catalog.noProducts')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Casing Shapes */}
      <section className="section-padding bg-pink-light/30">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
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
                <p className="font-sans font-bold text-purple-dark text-sm">
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
