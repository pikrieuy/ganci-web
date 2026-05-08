import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Heart, Palette, Gift, Users } from 'lucide-react';
import { settings } from '../data/mockData';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-pink-light/30 relative"
    >
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <Users size={36} className="text-pink-main" />
            <h1 className="heading-section mb-0">
              {t('aboutPage.title')}
            </h1>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="subheading-section"
          >
            {t('aboutPage.subtitle')}
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-pink-light overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-64 md:h-auto bg-pink-light relative overflow-hidden">
              <img 
                src="/foto_keychain/foto-8.jpg" 
                alt="Piko & Lea" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-sans text-3xl font-bold text-purple-dark mb-4">
                {t('aboutPage.whoAreWe')}
              </h2>
              <p className="text-gray-text font-sans text-lg leading-relaxed mb-6">
                {t('aboutPage.whoAreWeDesc')}
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-pink-main font-semibold">
                  <Heart size={20} className="fill-pink-main" />
                  <span>Handmade</span>
                </div>
                <div className="flex items-center gap-2 text-pink-main font-semibold">
                  <Gift size={20} />
                  <span>Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Piko */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-light mb-6 overflow-hidden border-4 border-white shadow-md">
              <img 
                src="/foto_keychain/foto-2.jpg" 
                alt="Piko" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-sans text-2xl font-bold text-purple-dark mb-1">Piko</h3>
            <p className="text-pink-main font-semibold mb-4 flex items-center justify-center gap-2">
              <Palette size={18} /> {t('aboutPage.pikoRole')}
            </p>
            <p className="text-gray-text font-sans leading-relaxed">
              {t('aboutPage.pikoDesc')}
            </p>
          </motion.div>

          {/* Lea */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-light mb-6 overflow-hidden border-4 border-white shadow-md">
              <img 
                src="/foto_keychain/foto-5.jpg" 
                alt="Lea" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-sans text-2xl font-bold text-purple-dark mb-1">Lea</h3>
            <p className="text-pink-main font-semibold mb-4 flex items-center justify-center gap-2">
              <Gift size={18} /> {t('aboutPage.leaRole')}
            </p>
            <p className="text-gray-text font-sans leading-relaxed">
              {t('aboutPage.leaDesc')}
            </p>
          </motion.div>
        </div>

        {/* Location & Social */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-pink-light shadow-sm flex gap-4"
          >
            <div className="bg-pink-light p-3 rounded-full h-fit text-pink-main">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-purple-dark mb-2">
                {t('aboutPage.location')}
              </h3>
              <p className="text-gray-text font-sans">
                {t('aboutPage.locationDesc')}
              </p>
            </div>
          </motion.div>

          <motion.a 
            href={settings.ig_link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-main to-purple-accent rounded-2xl p-8 shadow-md flex gap-4 group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-white"
          >
            <div className="bg-white/20 p-3 rounded-full h-fit">
              <InstagramIcon size={28} />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold mb-2 flex items-center gap-2">
                Instagram <span className="text-sm font-sans font-normal opacity-80 group-hover:opacity-100 transition-opacity">{settings.ig_handle}</span>
              </h3>
              <p className="font-sans text-white/80">
                {t('aboutPage.instagram')}
              </p>
            </div>
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
