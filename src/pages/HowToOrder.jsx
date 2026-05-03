import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Image,
  CreditCard,
  Palette,
  Clock,
  Eye,
  Truck,
  Heart,
} from 'lucide-react';
import { getWhatsAppLink } from '../data/mockData';

const HowToOrder = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const steps = t('howToOrder.steps', { returnObjects: true });
  const stepIcons = [MessageCircle, Image, CreditCard, CreditCard, Clock, Eye, Truck, Heart];
  const stepColors = [
    'from-green-400 to-green-500',
    'from-pink-main to-pink-medium',
    'from-purple-accent to-purple-dark',
    'from-blue-400 to-blue-500',
    'from-orange-400 to-orange-500',
    'from-pink-main to-purple-accent',
    'from-green-400 to-teal-500',
    'from-pink-main to-red-400',
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding bg-gradient-hero pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-section">{t('howToOrder.title')}</h1>
            <p className="subheading-section">{t('howToOrder.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-pink-light 
                        md:-translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-pink-light md:hidden" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-4 md:gap-0 mb-8 md:mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile Step Number */}
                <div className="md:hidden flex-shrink-0 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stepColors[index]} 
                                flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-nunito font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Desktop Content */}
                <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="glass-card p-5 md:p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stepColors[index]} 
                                    flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-nunito font-bold text-purple-dark text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-nunito text-gray-text text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Center Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stepColors[index]} 
                                flex items-center justify-center shadow-lg border-4 border-white`}>
                    <span className="text-white font-nunito font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Desktop Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-white to-pink-light/30">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">🌸</div>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-purple-dark mb-4">
              {lang === 'id' ? 'Siap Order Keychain-mu?' : 'Ready to Order Your Keychain?'}
            </h2>
            <p className="font-nunito text-gray-text mb-8">
              {lang === 'id'
                ? 'Langsung chat kami di WhatsApp ya! Kami siap bantu kamu bikin keychain impianmu 💕'
                : "Chat us on WhatsApp right away! We're ready to help you create your dream keychain 💕"}
            </p>
            <a
              href={getWhatsAppLink('', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <MessageCircle size={22} />
              {t('howToOrder.ctaOrder')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowToOrder;
