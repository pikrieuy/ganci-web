import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Palette, Package, Eye, Truck } from 'lucide-react';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials, getWhatsAppLink } from '../data/mockData';

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const featuredProducts = products.filter((p) => p.is_featured && p.is_active);

  const orderSteps = t('orderProcess.steps', { returnObjects: true });
  const stepIcons = [MessageCircle, Palette, Package, Truck];

  return (
    <div className="overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 text-5xl opacity-30"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-40 right-20 text-4xl opacity-20"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-32 left-1/4 text-3xl opacity-25"
          >
            💗
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-20 right-1/3 text-4xl opacity-20"
          >
            🎀
          </motion.div>
          {/* Soft gradient circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-main/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center md:text-left z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full 
                           text-sm font-nunito font-semibold text-pink-main mb-6
                           border border-pink-main/20"
              >
                🌸 Handmade with Love
              </motion.div>

              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl 
                           text-purple-dark leading-tight mb-6">
                Piko & Lea
                <span className="block text-gradient-pink mt-2">
                  {t('hero.tagline')}
                </span>
              </h1>

              <p className="font-nunito text-gray-text text-lg md:text-xl mb-8 
                          max-w-lg mx-auto md:mx-0 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/catalog" className="btn-primary inline-flex items-center justify-center gap-2">
                  {t('hero.ctaCatalog')}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={getWhatsAppLink('', lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {t('hero.ctaOrder')}
                </a>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="relative z-10 flex justify-center"
            >
              <div className="relative">
                {/* Main Image Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl 
                           border-4 border-white/50 rotate-3"
                >
                  <img
                    src="https://placehold.co/600x600/FCE4EC/F48FB1?text=Piko+%26+Lea%0AKeychain"
                    alt="Piko & Lea Keychain"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Mini Cards */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [-6, -3, -6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 
                           rounded-2xl overflow-hidden shadow-xl border-2 border-white -rotate-6"
                >
                  <img
                    src="https://placehold.co/300x300/E1BEE7/4A148C?text=Sketsa"
                    alt="Sketch keychain"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [6, 3, 6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-6 bottom-8 w-20 h-20 md:w-28 md:h-28 
                           rounded-2xl overflow-hidden shadow-xl border-2 border-white rotate-6"
                >
                  <img
                    src="https://placehold.co/300x300/F8BBD9/FFFFFF?text=Color"
                    alt="Color keychain"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BRAND STORY SECTION ============ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section">{t('brandStory.title')}</h2>
            <p className="font-nunito text-gray-text text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {t('brandStory.description')}
            </p>

            {/* Piko & Lea Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-pink-light 
                              flex items-center justify-center text-3xl">
                  🎨
                </div>
                <h3 className="font-nunito font-bold text-purple-dark text-lg">Piko</h3>
                <p className="text-sm text-gray-text font-nunito">Illustrator</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-pink-light 
                              flex items-center justify-center text-3xl">
                  ✂️
                </div>
                <h3 className="font-nunito font-bold text-purple-dark text-lg">Lea</h3>
                <p className="text-sm text-gray-text font-nunito">Finisher</p>
              </motion.div>
            </div>

            
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS SECTION ============ */}
      <section className="section-padding bg-pink-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section">{t('featuredProducts.title')}</h2>
            <p className="subheading-section">{t('featuredProducts.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/catalog"
              className="btn-secondary inline-flex items-center gap-2"
            >
              {t('featuredProducts.viewAll')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ ORDER PROCESS SECTION ============ */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section">{t('orderProcess.title')}</h2>
            <p className="subheading-section">{t('orderProcess.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center p-6"
                >
                  {/* Step Number */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 
                                bg-pink-main text-white rounded-full flex items-center justify-center
                                font-nunito font-bold text-sm shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-pink-light 
                                flex items-center justify-center">
                    <Icon size={28} className="text-pink-main" />
                  </div>

                  <h3 className="font-nunito font-bold text-purple-dark text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="font-nunito text-gray-text text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (desktop) */}
                  {index < orderSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 
                                  border-t-2 border-dashed border-pink-medium" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              to="/how-to-order"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('orderProcess.cta')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="section-padding bg-gradient-to-b from-pink-light/30 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section">{t('testimonials.title')}</h2>
            <p className="subheading-section">{t('testimonials.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-nunito text-gray-text text-sm leading-relaxed mb-4 italic">
                  "{lang === 'id' ? item.text : item.text_en}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-light flex items-center 
                                justify-center font-nunito font-bold text-pink-main text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-nunito font-bold text-purple-dark text-sm">
                      {item.name}
                    </p>
                    <p className="font-nunito text-gray-text text-xs">
                      {lang === 'id' ? item.product : item.product_en}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
