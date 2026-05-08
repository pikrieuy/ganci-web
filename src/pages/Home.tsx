import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Palette, Package, Truck, Star, Sparkles, ClipboardList, MessageCircleHeart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/mockData';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';
import { RatingInteraction } from '@/components/ui/emoji-rating';

const Home = () => {
  const { t } = useTranslation();

  const featuredProducts = products.filter((p) => p.is_featured && p.is_active);

  const orderSteps = Array.isArray(t('orderProcess.steps', { returnObjects: true })) 
    ? t('orderProcess.steps', { returnObjects: true }) 
    : [];
  const stepIcons = [MessageCircle, Palette, Package, Truck];

  return (
    <div className="overflow-hidden bg-gradient-to-b from-pink-light/40 via-white/80 to-purple-accent/20">
      {/* ============ HERO SECTION ============ */}
      <Hero />

      {/* ============ BRAND STORY SECTION ============ */}
      <section className="section-padding bg-gradient-to-b from-white/70 via-pink-light/25 to-purple-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles size={32} className="text-pink-main" />
              <h2 className="heading-section mb-0">{t('brandStory.title')}</h2>
            </div>
            <div className="max-w-3xl mx-auto w-full">
              <p className="font-sans text-gray-text text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                {t('brandStory.description')}
              </p>

              <div className="glass-card px-6 py-5 md:px-8 md:py-6 text-left relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-80 bg-gradient-to-r from-pink-light/40 via-white/30 to-purple-accent/20" />
                <blockquote className="relative font-sans text-purple-dark/90">
                  <p className="text-base md:text-lg leading-relaxed">
                    “POV: keychain kamu bukan aksesoris doang — itu mood booster kecil yang ikut kamu ke mana-mana.”
                  </p>
                  <footer className="mt-3 text-sm text-gray-text">
                    — from the studio
                  </footer>
                </blockquote>
              </div>
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
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star size={32} className="text-pink-main" />
              <h2 className="heading-section mb-0">{t('featuredProducts.title')}</h2>
            </div>
            <p className="subheading-section">{t('featuredProducts.subtitle')}</p>
          </motion.div>

          <div className="grid-responsive-3 gap-4 sm:gap-6">
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
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ClipboardList size={32} className="text-pink-main" />
              <h2 className="heading-section mb-0">{t('orderProcess.title')}</h2>
            </div>
            <p className="subheading-section">{t('orderProcess.subtitle')}</p>
          </motion.div>

          <div className="grid-responsive-4">
            {orderSteps.map((step: any, index: number) => {
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
                                font-sans font-bold text-sm shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-pink-light 
                                flex items-center justify-center">
                    <Icon size={28} className="text-pink-main" />
                  </div>

                  <h3 className="font-sans font-bold text-purple-dark text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-gray-text text-sm leading-relaxed">
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
      <section className="bg-pink-light/20 py-16 relative overflow-hidden">
        <div className="w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircleHeart size={32} className="text-pink-main" />
              <h2 className="heading-section mb-0">{t('testimonials.title')}</h2>
            </div>
            <p className="text-center mt-2 text-gray-text">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialsColumn 
              testimonials={testimonials.slice(0, 3)} 
              duration={15} 
              className="w-full"
            />
            <TestimonialsColumn 
              testimonials={testimonials.slice(3, 6)} 
              duration={18} 
              className="w-full hidden md:flex"
            />
            <TestimonialsColumn 
              testimonials={testimonials.slice(6, 9)} 
              duration={21} 
              className="w-full hidden lg:flex"
            />
          </div>
        </div>
      </section>

      {/* ============ RATING SECTION ============ */}
      <section className="py-16 bg-white border-b border-pink-light/30">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center gap-6">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-pink-main/80 text-center">
            How was your experience?
          </p>
          <RatingInteraction />
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-pink-light to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default Home;
