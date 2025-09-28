'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleImageChange = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onMouseEnter={handleImageChange}
        />
        
        {/* Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex space-x-3">
                <motion.button
                  className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  onClick={() => setIsLiked(!isLiked)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Heart
                    size={20}
                    className={`${
                      isLiked ? 'text-red-500 fill-current' : 'text-gray-600'
                    } transition-colors duration-200`}
                  />
                </motion.button>
                
                <motion.button
                  className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  onClick={() => onViewDetails(product)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Eye size={20} className="text-gray-600" />
                </motion.button>
                
                <motion.button
                  className="p-3 bg-gold-600 rounded-full hover:bg-gold-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ShoppingBag size={20} className="text-white" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Badge */}
        {product.featured && (
          <motion.div
            className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured
          </motion.div>
        )}

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-baskerville font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="text-xl font-montserrat font-bold text-gold-600">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Materials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.materials.slice(0, 2).map((material, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {material}
            </span>
          ))}
          {product.materials.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{product.materials.length - 2} more
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              product.inStock ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          <button
            onClick={() => onViewDetails(product)}
            className="text-gold-600 hover:text-gold-700 text-sm font-medium transition-colors duration-200"
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
