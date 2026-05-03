import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AtSign, MessageCircle, Heart } from 'lucide-react';
import { settings, getWhatsAppLink } from '../data/mockData';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/catalog', label: t('nav.catalog') },
    { path: '/how-to-order', label: t('nav.howToOrder') },
  ];

  return (
    <footer className="bg-purple-dark text-white">
      {/* Wave Decoration */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
            fill="#4A148C"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <span className="font-playfair font-bold text-xl text-white">
                Piko & Lea
              </span>
            </div>
            <p className="text-white/70 font-nunito text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4 text-pink-main">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-pink-main font-nunito text-sm 
                             transition-colors duration-300 hover:translate-x-1 
                             inline-block transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4 text-pink-main">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <a
                href={getWhatsAppLink('', i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-green-400 
                         font-nunito text-sm transition-colors duration-300"
              >
                <MessageCircle size={18} />
                <span>{settings.wa_number}</span>
              </a>
              <a
                href={settings.ig_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-pink-main 
                         font-nunito text-sm transition-colors duration-300"
              >
                <AtSign size={18} />
                <span>{settings.ig_handle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 font-nunito text-sm flex items-center justify-center gap-1">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
