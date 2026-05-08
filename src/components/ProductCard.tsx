import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Star } from 'lucide-react';
import { formatPrice } from '../data/mockData';

const ProductCard = ({ product, index = 0 }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const name = lang === 'id' ? product.name_id : product.name_en;
  const duration = lang === 'id' ? product.duration : product.duration_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/catalog/${product.id}`} className="block">
        <div className="card-product group cursor-pointer">
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.photos[0]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Best Seller Badge */}
            {product.is_featured && (
              <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 
                            bg-gradient-to-r from-pink-main to-purple-accent
                            text-white text-xs font-sans font-bold rounded-full shadow-lg">
                <Star size={12} fill="currentColor" />
                {t('featuredProducts.bestSeller')}
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-end justify-center pb-4">
              <span className="btn-primary text-sm px-4 py-2 transform translate-y-4 
                             group-hover:translate-y-0 transition-transform duration-300">
                {t('featuredProducts.detail')}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-sans font-bold text-purple-dark text-base mb-1 
                         group-hover:text-pink-main transition-colors duration-300">
              {name}
            </h3>

            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-xs text-gray-text font-sans">
                  {t('featuredProducts.startingFrom')}
                </p>
                <p className="font-sans font-bold text-pink-main text-lg">
                  {product.price === 0 ? 'Custom' : formatPrice(product.price)}
                </p>
              </div>
              <div className="flex items-center gap-1 text-gray-text text-xs font-sans">
                <Clock size={12} />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
