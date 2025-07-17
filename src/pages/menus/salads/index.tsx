import React from 'react';
import Navbar from '@/components/Navbar';

const SaladsPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-[Playfair Display] mb-6 text-center">Salads</h1>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-center">
          Buffet-style, light and fresh. The perfect vegetarian or side pairing for your main course. From Kale Caesar to Roasted Chickpea, every salad is handcrafted to impress.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Kale Caesar Salad</li>
          <li>Roasted Chickpea Salad</li>
          <li>Greek Salad</li>
          <li>Quinoa & Avocado Salad</li>
          <li>Caprese Salad</li>
        </ul>
      </section>
    </>
  );
};

export default SaladsPage;