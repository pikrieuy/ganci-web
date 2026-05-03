import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/mockData';

const FloatingWA = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="hidden md:block bg-white px-4 py-2 rounded-full shadow-lg 
                   font-nunito text-sm text-purple-dark font-semibold
                   border border-pink-light"
      >
        {t('floatingWa.tooltip')}
      </motion.div>

      {/* WA Button */}
      <motion.a
        href={getWhatsAppLink('', i18n.language)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full 
                   flex items-center justify-center shadow-lg 
                   hover:bg-green-600 transition-colors duration-300
                   animate-pulse-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" fill="white" />
      </motion.a>
    </div>
  );
};

export default FloatingWA;
