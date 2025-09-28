'use client';

import { motion } from 'framer-motion';
import { Award, Users, Gem, Heart } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '25+' },
    { icon: Users, label: 'Happy Customers', value: '10K+' },
    { icon: Gem, label: 'Unique Pieces', value: '500+' },
    { icon: Heart, label: 'Handcrafted with Love', value: '100%' },
  ];

  const features = [
    {
      title: 'Handcrafted Excellence',
      description: 'Each piece is meticulously crafted by our skilled artisans using traditional techniques passed down through generations.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
    },
    {
      title: 'Premium Materials',
      description: 'We source only the finest materials - from ethically sourced diamonds to 18k gold and sterling silver.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
    },
    {
      title: 'Timeless Design',
      description: 'Our designs blend classic elegance with contemporary style, creating pieces that transcend time and trends.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            Our <span className="font-dancing text-gold-600 italic">Story</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-crimson leading-relaxed">
            For over two decades, we've been creating exquisite jewelry pieces that celebrate 
            life's most precious moments. Our passion for craftsmanship and attention to detail 
            has made us a trusted name in luxury jewelry.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-gold-600" />
              </div>
              <div className="text-3xl font-montserrat font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-baskerville font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-baskerville font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 font-crimson">
                    {feature.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-0.5 bg-gold-600" />
                    <span className="text-gold-600 font-medium">Crafted with passion</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-gold-50 to-rose-50 rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-gray-900 mb-6">
              Our <span className="font-dancing text-gold-600 italic">Mission</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-crimson italic">
              "We believe that jewelry is more than just an accessory – it's a way to express your 
              unique story, celebrate special moments, and create lasting memories. Our mission is to 
              create pieces that not only enhance your beauty but also become treasured heirlooms 
              passed down through generations."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-gold-600" />
              <Gem className="h-6 w-6 text-gold-600" />
              <div className="w-16 h-0.5 bg-gold-600" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
