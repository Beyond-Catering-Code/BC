'use client';

import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const MenusPage = () => {
  return (
    <>
      <Head>
        <title>Salads - Beyond Catering</title>
        <meta name="description" content="Fresh & premium salads, crafted with the finest ingredients." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/salads" />
      </Head>

      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Fresh & Premium Salads
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            Discover a healthy and delicious selection of salads, perfect for any occasion. Each salad is crafted with fresh, high-quality ingredients.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SALADS */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Our Salads?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Each of our salads is crafted with the finest ingredients, ensuring a combination of flavors and textures that will delight your taste buds. Our chefs hand-select the freshest produce to deliver a premium dining experience, whether it's a light starter or a hearty meal.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              From classic Mediterranean ingredients to inventive new flavors, our salad offerings bring a touch of luxury and freshness to any occasion.
            </p>
            <Link
              href="/book-tasting"
              className="inline-block bg-[#D4AF37] text-white text-lg px-7 py-3 rounded-full transition-all hover:bg-[#b68c1f]"
            >
              Book a Tasting Experience
            </Link>
          </div>

          <div className="w-1/2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden border-4 border-[#D4AF37] shadow-lg">
              <Image
                src="/images/saladbackground.jpg"  // Fixed image source
                alt="Salad Image"
                layout="intrinsic"  // Changed layout to intrinsic
                objectFit="cover"
                objectPosition="center"
                width={500}  // Set width
                height={400}  // Set height
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-white pt-24 pb-24 px-6 sm:px-10 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Salad Items */}
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Greek Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              With Feta Cheese, Cucumbers, Baby Gem, Capsicum, Tomato, and Olives.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Burrata Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              Mixed tomatoes, candied walnuts, grilled nectarine, pickled red onion, arugula & balsamic vinaigrette.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Quinoa Beetroot Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              With Quinoa, Orange Segments, Green Onions, Feta Cheese, and Green Goddess Vinaigrette.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Watermelon Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              With Feta, Cherry Tomatoes, Toasted Almonds, Basil, and Mint Vinaigrette.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Legumes Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              Lentils, Black Eyed Peas, Mixed Pickled Mirepoix, Raisins, Hazelnuts & White Balsamic Dressing.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Mediterranean Roasted Chickpea & Baby Spinach Salad</h3>
            <p className="text-lg text-gray-700 mb-4">
              With roasted pumpkin, slivered almonds, and maple balsamic dressing.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenusPage;