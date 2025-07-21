'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const BowlAndForkPage = () => {
  return (
    <>
      <Head>
        <title>Bowl & Fork - Beyond Catering</title>
        <meta
          name="description"
          content="Refined bowls designed to impress. Elegant, flavorful, and perfectly portioned for your events."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/bowl-fork" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Bowl & Fork
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            Refined bowls crafted to impress. A luxurious follow-up to your canapé service, or a meal on their own.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE BOWL & FORK */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Bowl & Fork?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Our signature bowls are perfectly portioned and thoughtfully curated for elegance, nutrition, and bold flavor. Whether it’s vegetarian, seafood, or red meat, each recipe is crafted for maximum satisfaction.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              From creamy risottos to aromatic biryanis and international fusions — it’s the ultimate way to keep guests nourished and impressed throughout your event.
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
                src="/menus/bowlandfork.jpg"
                alt="Bowl & Fork Dish"
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
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Cauliflower 'Rice' Biryani (V)</h3>
            <p className="text-lg text-gray-700 mb-4">Aromatic and wholesome with a modern twist.</p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Parisian Gnocchi (V)</h3>
            <p className="text-lg text-gray-700 mb-4">Wild mushrooms, hazelnuts, burnt butter sauce.</p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Teriyaki Chicken Bowl</h3>
            <p className="text-lg text-gray-700 mb-4">Green tea noodle salad, Japanese miso dressing.</p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Lamb Ragu Rigatoni</h3>
            <p className="text-lg text-gray-700 mb-4">Slow cooked with rich tomato and parmesan.</p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Butter Chicken Bowl</h3>
            <p className="text-lg text-gray-700 mb-4">Served with steamed saffron rice and herbs.</p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Miso Black Cod</h3>
            <p className="text-lg text-gray-700 mb-4">With barley and spiced mango salsa.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BowlAndForkPage;