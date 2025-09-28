'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collection />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
