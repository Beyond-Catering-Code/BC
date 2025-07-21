'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const PlattersPage = () => {
  return (
    <>
      <Head>
        <title>Platters - Beyond Catering</title>
        <meta name="description" content="Curated platters for every occasion – from mezze spreads to artisanal cheese boards." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/platters" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Platters
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            Perfect for sharing. Artisanal cheese boards, mezze spreads, burger baskets, and more. Receive your guests with an impressive selection.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR PLATTERS */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Our Platters?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Our platters are built for presentation and flavor. Ideal for both corporate and private events, each platter is filled with premium ingredients, balanced textures, and seasonal flair.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              From elegant cheese boards to hearty burger baskets, our platters set the tone for memorable gatherings.
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
                src="/menus/platters.jpg"
                alt="Platters"
                layout="intrinsic"
                objectFit="cover"
                objectPosition="center"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-white pt-24 pb-24 px-6 sm:px-10 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Artisanal Cheese Board</h3>
            <p className="text-lg text-gray-700 mb-4">
              A refined selection of imported cheeses, dried fruit, honeycomb, and fresh baguette.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Mezze Spread</h3>
            <p className="text-lg text-gray-700 mb-4">
              Hummus, muhammara, labneh, pickles, olives, pita chips, and seasonal dips.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Burger Basket</h3>
            <p className="text-lg text-gray-700 mb-4">
              Mini beef and chicken sliders served with house-made condiments and fries.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Fruit Platter</h3>
            <p className="text-lg text-gray-700 mb-4">
              Vibrant seasonal fruits sliced and arranged for elegance and freshness.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Charcuterie Board</h3>
            <p className="text-lg text-gray-700 mb-4">
              Premium cold cuts, pickles, dijon mustard, grilled bread, and aged cheeses.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Smoked Salmon Board</h3>
            <p className="text-lg text-gray-700 mb-4">
              Smoked salmon with dill cream, capers, red onion, and toasted brioche.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlattersPage;