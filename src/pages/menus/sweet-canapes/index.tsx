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
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/menus/sweet.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Sweet Canapés
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SWEET CANAPÉS */}
      <section className="w-full bg-[#F9F5F0] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Our Sweet Canapés?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Our sweet canapés are more than desserts — they're mini masterpieces. Perfectly portioned and plated with care, each treat combines flavor, texture, and visual charm.
              </p>
              <p className="text-xl text-gray-700 mb-10">
                Whether passed around at the end of an evening or displayed on elegant dessert stations, they bring your event to a delightful close.
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
                src="/images/sweet.jpg"
                alt="Sweet Canapés"
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
            Explore Our Signature Sweet Canapés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miniature delights crafted to elevate your dessert course — unforgettable in taste and presentation.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-[#FFFDF7] pb-32 px-6 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Chocolate Mousse Cups',
              desc: 'Rich, velvety mousse layered in elegant glasses and topped with dark chocolate curls.',
            },
            {
              title: 'Lemon Tartlets',
              desc: 'Tangy lemon curd in buttery shells, garnished with torched meringue.',
            },
            {
              title: 'Mini Cheesecakes',
              desc: 'Creamy New York–style bites with seasonal fruit or chocolate ganache topping.',
            },
            {
              title: 'Fruit Pavlovas',
              desc: 'Crisp meringue nests filled with cream and topped with fresh berries and mint.',
            },
            {
              title: 'Salted Caramel Profiteroles',
              desc: 'Choux puffs with vanilla cream and a glossy salted caramel glaze.',
            },
            {
              title: 'Raspberry Panna Cotta',
              desc: 'Silky Italian cream set with raspberry coulis and white chocolate shards.',
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

export default SweetCanapesPage;