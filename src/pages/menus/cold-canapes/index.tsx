'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const ColdCanapesPage = () => {
  return (
    <>
      <Head>
        <title>Cold Canapés - Beyond Catering</title>
        <meta name="description" content="Elegant cold canapés crafted with premium ingredients." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/cold-canapes" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/menus/coldcanapes.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Cold Canapés
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Elegant, refreshing bites that set the tone. Crafted to impress, perfect for any event.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR COLD CANAPÉS */}
      <section className="w-full bg-[#F6EFE6] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Our Cold Canapés?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Our cold canapés are thoughtfully designed to provide a sophisticated start to your event. Each bite combines premium ingredients with artistic presentation to ensure your guests are delighted from the first taste.
              </p>
              <p className="text-xl text-gray-700 mb-10">
                From classic combinations to creative new pairings, our menu offers a refreshing and elegant introduction to your dining experience.
              </p>
              <Link
                href="/book-tasting"
                className="inline-block bg-[#D4AF37] text-white text-lg px-7 py-3 rounded-full transition-all hover:bg-[#b68c1f]"
              >
                Book a Tasting Experience
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full h-96 rounded-xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
              <Image
                src="/images/coldCanapes.jpg"
                alt="Cold Canapés"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section className="bg-[#FFFDF7] px-6 pt-24 pb-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Canapés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated with creativity and finesse — cold canapés designed to elevate every gathering.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-[#FFFDF7] pb-32 px-6 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Goat Cheesecake',
              desc: 'With red onion jam on rosemary shortbread (v).',
            },
            {
              title: 'Tomato Pesto Tartlet',
              desc: 'Balsamic tomato and cashew pesto (v).',
            },
            {
              title: 'Burrata Tartine',
              desc: 'Heirloom tomato, burrata, basil (v).',
            },
            {
              title: 'Smoked Salmon Rye',
              desc: 'Cucumber, dill cream cheese on rye.',
            },
            {
              title: 'Mini Caprese Skewers',
              desc: 'With balsamic reduction (v).',
            },
            {
              title: 'Beetroot Cured Salmon',
              desc: 'With horseradish crème fraîche on blini.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#F1EADB] rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-[#0B1120] mb-2">{item.title}</h3>
              <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mb-4 rounded-full" />
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ColdCanapesPage;