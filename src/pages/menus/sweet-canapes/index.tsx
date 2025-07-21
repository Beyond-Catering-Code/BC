'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const SweetCanapesPage = () => {
  return (
    <>
      <Head>
        <title>Sweet Canapés - Beyond Catering</title>
        <meta name="description" content="Handcrafted sweet canapés for a luxurious dessert finale. Elegant, indulgent, unforgettable." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/sweet-canapes" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Sweet Canapés
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SWEET CANAPÉS */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Our Sweet Canapés?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Our sweet canapés are more than desserts — they're mini masterpieces. Perfectly portioned and plated with care, each treat combines flavor, texture, and visual charm.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Whether passed around at the end of an evening or displayed on elegant dessert stations, they bring your event to a delightful close.
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
                src="/menus/sweet.jpg"
                alt="Sweet Canapés"
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
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Chocolate Mousse Cups</h3>
            <p className="text-lg text-gray-700 mb-4">
              Rich, velvety mousse layered in elegant glasses and topped with dark chocolate curls.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Lemon Tartlets</h3>
            <p className="text-lg text-gray-700 mb-4">
              Tangy lemon curd in buttery shells, garnished with torched meringue.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Mini Cheesecakes</h3>
            <p className="text-lg text-gray-700 mb-4">
              Creamy New York–style bites with seasonal fruit or chocolate ganache topping.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Fruit Pavlovas</h3>
            <p className="text-lg text-gray-700 mb-4">
              Crisp meringue nests filled with cream and topped with fresh berries and mint.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Salted Caramel Profiteroles</h3>
            <p className="text-lg text-gray-700 mb-4">
              Choux puffs with vanilla cream and a glossy salted caramel glaze.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Raspberry Panna Cotta</h3>
            <p className="text-lg text-gray-700 mb-4">
              Silky Italian cream set with raspberry coulis and white chocolate shards.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SweetCanapesPage;