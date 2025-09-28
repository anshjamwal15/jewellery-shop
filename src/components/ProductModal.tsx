'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
            >
              <X size={20} className="text-gray-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative aspect-square lg:aspect-auto">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-baskerville font-bold text-gray-900 mb-2">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </p>
                    </div>
                    <span className="text-2xl lg:text-3xl font-montserrat font-bold text-gold-600">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed font-crimson">
                    {product.description}
                  </p>

                  {/* Materials */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Materials</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        product.inStock
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                      isLiked
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-500 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart
                      size={20}
                      className={`mr-2 ${isLiked ? 'fill-current' : ''}`}
                    />
                    {isLiked ? 'Liked' : 'Add to Wishlist'}
                  </button>

                  <button className="flex items-center justify-center px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg font-medium transition-colors duration-200 flex-1">
                    <ShoppingBag size={20} className="mr-2" />
                    Inquire About This Piece
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Category:</span> {product.category}
                    </div>
                    <div>
                      <span className="font-medium">Product ID:</span> {product.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
