'use client';

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
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/saladbackground.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] tracking-wide font-semibold text-gold mb-6 leading-tight">
            Fresh & Premium Salads
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Curated for weddings, galas, and elevated gatherings — our salads strike the perfect balance of flavor, freshness, and finesse.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SALADS */}
      <section className="w-full bg-[#F6EFE6] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Our Salads?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Each salad is made with market-fresh produce, artisan ingredients, and plated to perfection — delivering a premium start or complement to any meal.
              </p>
              <p className="text-xl text-gray-700 mb-10">
                From Mediterranean classics to vibrant modern pairings, our salad menu offers light luxury that satisfies both palate and presentation.
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
                src="/images/saladbackground.jpg"
                alt="Salad Display"
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
            Explore Our Signature Salads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection designed to complement every event — plated with elegance and bursting with flavor.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-[#FFFDF7] pb-32 px-6 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Greek Salad',
              desc: 'Feta cheese, cucumbers, baby gem, capsicum, tomato, and olives.',
            },
            {
              title: 'Burrata Salad',
              desc: 'Mixed tomatoes, candied walnuts, grilled nectarine, pickled red onion, arugula & balsamic vinaigrette.',
            },
            {
              title: 'Quinoa Beetroot Salad',
              desc: 'Quinoa, orange segments, green onions, feta cheese, and green goddess vinaigrette.',
            },
            {
              title: 'Watermelon Salad',
              desc: 'Feta, cherry tomatoes, toasted almonds, basil, and mint vinaigrette.',
            },
            {
              title: 'Legumes Salad',
              desc: 'Lentils, black-eyed peas, pickled mirepoix, raisins, hazelnuts & white balsamic dressing.',
            },
            {
              title: 'Roasted Chickpea & Spinach Salad',
              desc: 'Roasted pumpkin, slivered almonds, and maple balsamic dressing.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#F1EADB] rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-[#0B1120] mb-2">
                {item.title}
              </h3>
              <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mb-4 rounded-full" />
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MenusPage;