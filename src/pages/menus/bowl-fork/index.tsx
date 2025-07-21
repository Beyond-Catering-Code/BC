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
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/menus/bowlandfork.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Bowl & Fork
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Refined bowls crafted to impress. A luxurious follow-up to your canapé service, or a meal on their own.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR BOWLS */}
      <section className="w-full bg-[#F9F5F0] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Bowl & Fork?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Our signature bowls are perfectly portioned and thoughtfully curated for elegance, nutrition, and bold flavor.
              </p>
              <p className="text-xl text-gray-700 mb-10">
                From creamy risottos to aromatic biryanis and international fusions — it’s the ultimate way to keep guests nourished and impressed throughout your event.
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
                src="/images/bowlFork.jpg"
                alt="Bowl & Fork Dish"
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
            Explore Our Signature Bowl & Fork Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elegant mains served in a bowl — nourishing, luxurious, and plated to perfection.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-[#FFFDF7] pb-32 px-6 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Cauliflower 'Rice' Biryani (V)",
              desc: 'Aromatic and wholesome with a modern twist.',
            },
            {
              title: 'Parisian Gnocchi (V)',
              desc: 'Wild mushrooms, hazelnuts, burnt butter sauce.',
            },
            {
              title: 'Teriyaki Chicken Bowl',
              desc: 'Green tea noodle salad, Japanese miso dressing.',
            },
            {
              title: 'Lamb Ragu Rigatoni',
              desc: 'Slow cooked with rich tomato and parmesan.',
            },
            {
              title: 'Butter Chicken Bowl',
              desc: 'Served with steamed saffron rice and herbs.',
            },
            {
              title: 'Miso Black Cod',
              desc: 'With barley and spiced mango salsa.',
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

export default BowlAndForkPage;