import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Equal, X, ShoppingBag, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/liquid-glass-button';
import { cn } from '@/lib/utils';
import { getWhatsAppLink } from '../data/mockData';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/catalog', label: t('nav.catalog') },
    { path: '/how-to-order', label: t('nav.howToOrder') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/about', label: t('nav.about') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuState(false);
  }, [location.pathname]);

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : 'closed'}
        className="fixed left-0 w-full z-50 px-1 md:px-2 transition-all duration-300"
      >
        <div
          className={cn(
            'mx-auto mt-1.5 max-w-7xl px-4 transition-all duration-300 md:px-8',
            isScrolled && 'bg-white/80 max-w-5xl rounded-3xl border border-pink-light/50 backdrop-blur-lg md:px-6 shadow-md'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-4 lg:gap-0 py-2.5">
            <div className="flex w-full justify-between lg:w-auto">
              {/* Logo Piko & Lea */}
              <Link to="/" aria-label="home" className="flex gap-3 items-center group">
                <img
                  src="/logo_kepala.png"
                  alt="KriyaCustom"
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                />
                <span
                  className={cn(
                    "font-playfair font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 group-hover:text-pink-main tracking-tight leading-none",
                    "transition-all duration-300 ease-in-out",
                    isScrolled && "opacity-0 max-w-0 -mr-3 pointer-events-none overflow-hidden"
                  )}
                >
                  Kriya Custom
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-50 -m-2.5 block cursor-pointer p-2.5 lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {menuState ? (
                  <X className="size-6 text-purple-dark transition-all duration-200" />
                ) : (
                  <Equal className="size-6 text-purple-dark transition-all duration-200" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 xl:gap-8 text-base font-medium font-sans">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={cn(
                        "block duration-150 relative py-2 px-1 min-h-[44px] flex items-center justify-center",
                        location.pathname === item.path
                          ? "text-pink-main font-bold"
                          : "text-slate-600 hover:text-pink-main"
                      )}
                    >
                      <span>{item.label}</span>
                      {location.pathname === item.path && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pink-main" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions & Mobile Menu Content */}
            <div className={cn(
              "w-full flex-wrap items-center justify-end space-y-4 rounded-2xl border border-pink-light p-3 sm:p-4 shadow-lg shadow-pink-main/10 lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none transition-all duration-300 mt-3 lg:mt-0 bg-white/95",
              menuState ? "block mb-4" : "hidden lg:flex"
            )}>
              <div className="lg:hidden">
                <ul className="space-y-4 text-base font-sans font-medium text-center">
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={cn(
                          "block duration-150 py-2 px-3 min-h-[40px] flex items-center justify-center text-sm",
                          location.pathname === item.path
                            ? "text-pink-main font-bold"
                            : "text-slate-600 hover:text-pink-main"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-2 sm:flex-row sm:gap-2 sm:space-y-0 lg:w-fit items-center justify-center pt-3 lg:pt-0 border-t border-pink-light lg:border-t-0">

                <Button
                  asChild
                  size="sm"
                  className={cn("w-full sm:w-auto bg-pink-main text-white hover:bg-pink-600 min-h-[40px] text-sm", isScrolled && 'lg:hidden')}
                >
                  <a href={getWhatsAppLink('', i18n.language)} target="_blank" rel="noopener noreferrer">
                    <PhoneCall size={14} className="mr-1" />
                    <span>{t('hero.ctaOrder')}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
