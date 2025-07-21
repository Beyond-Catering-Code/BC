'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const HotCanapesPage = () => {
  return (
    <>
      <Head>
        <title>Hot Canapés - Beyond Catering</title>
        <meta name="description" content="Delicious hot canapés made fresh for your event." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/hot-canapes" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Hot Canapés
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            Fresh from the kitchen and designed to delight. Our hot canapés bring bold flavors and heartwarming presentation to any event.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE HOT CANAPÉS */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Our Hot Canapés?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Served warm and made to impress, our hot canapés are perfect for creating memorable moments at your event. Each piece is a blend of flavor, creativity, and comfort.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Whether you're hosting a formal affair or a cozy gathering, our hot canapés deliver both taste and elegance.
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
                src="/images/hotcanapes.jpg"
                alt="Hot Canapés"
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
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Mini Beef Wellingtons</h3>
            <p className="text-lg text-gray-700 mb-4">
              Tender beef wrapped in golden puff pastry with a savory mushroom duxelles.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Truffle Mac & Cheese Bites</h3>
            <p className="text-lg text-gray-700 mb-4">
              Creamy mac and cheese infused with truffle oil, crisp-fried to perfection.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Spicy Chicken Skewers</h3>
            <p className="text-lg text-gray-700 mb-4">
              Marinated chicken grilled on skewers with a hint of heat and herbs.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Vegetarian Spring Rolls</h3>
            <p className="text-lg text-gray-700 mb-4">
              Crispy rolls filled with seasoned veggies, served with sweet chili dip.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Mini Crab Cakes</h3>
            <p className="text-lg text-gray-700 mb-4">
              Succulent crab meat with herbs and seasoning, pan-seared to golden.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Halloumi Sliders</h3>
            <p className="text-lg text-gray-700 mb-4">
              Grilled halloumi on mini buns with roasted peppers and aioli.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HotCanapesPage;