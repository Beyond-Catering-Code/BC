'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const MainCoursePage = () => {
  return (
    <>
      <Head>
        <title>Main Course - Beyond Catering</title>
        <meta name="description" content="Exquisite main course options for every event." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/main-course" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#0B1120] text-white px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/menus/maincourse.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Main Course
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE MAIN COURSE */}
      <section className="w-full bg-[#FAF3EA] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Our Main Course?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Our main courses are crafted to satisfy every palate. From tender meats to vibrant vegetarian options, each dish is made with fresh, premium ingredients.
              </p>
              <p className="text-xl text-gray-700 mb-10">
                Whether plated or buffet style, our mains bring warmth, flavor, and presentation to your event.
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
                src="/images/maincourse.jpg"
                alt="Main Course"
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
            Explore Our Signature Mains
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A thoughtfully curated menu of hearty, flavorful dishes designed to impress every guest.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main className="bg-[#FFFDF7] pb-32 px-6 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Roasted Chicken',
              desc: 'Herb-marinated chicken, slow-roasted to juicy perfection with seasonal sides.',
            },
            {
              title: 'Slow-Braised Brisket',
              desc: 'Tender beef brisket braised for hours in red wine and aromatics.',
            },
            {
              title: 'Seafood Paella',
              desc: 'Spanish-style paella with shrimp, mussels, saffron rice, and fresh herbs.',
            },
            {
              title: 'Vegetarian Lasagna',
              desc: 'Layered with roasted vegetables, creamy béchamel, and tangy tomato sauce.',
            },
            {
              title: 'Grilled Salmon',
              desc: 'Atlantic salmon grilled with lemon butter, served with asparagus and baby potatoes.',
            },
            {
              title: 'Wild Mushroom Risotto',
              desc: 'Creamy arborio rice, wild mushrooms, truffle oil, and shaved parmesan.',
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

export default MainCoursePage;