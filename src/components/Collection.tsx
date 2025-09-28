'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import { Product } from '@/types';
import { products, categories } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="collection" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-gray-900 mb-4">
            Our <span className="font-dancing text-gold-600 italic">Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-crimson leading-relaxed">
            Discover our carefully curated selection of exquisite jewelry pieces, 
            each crafted with precision and passion.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Category Filters */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Filter size={20} className="mr-2" />
              Filter
            </button>

            <div className="hidden lg:flex items-center space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gold-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gold-50 hover:text-gold-600 shadow-md hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {filteredProducts.length} products
            </span>
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-gold-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-gold-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Filter Menu */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="lg:hidden mb-8 bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                      selectedCategory === category.id
                        ? 'bg-gold-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-500 mb-4">
              No products found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-primary"
            >
              View All Products
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Collection;
