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
      <section className="w-full bg-[#0B1120] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-[Playfair Display] font-bold text-gold mb-6">
            Main Course
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR MAIN COURSE */}
      <section className="w-full bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Our Main Course?</h2>
            <p className="text-xl text-gray-700 mb-6">
              Our main courses are crafted to satisfy every palate. From tender meats to vibrant vegetarian options, each dish is made with fresh, premium ingredients.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Whether plated or buffet style, our mains bring warmth, flavor, and presentation to your event.
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
                src="/images/maincourse.jpg"
                alt="Main Course"
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
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Roasted Chicken</h3>
            <p className="text-lg text-gray-700 mb-4">
              Herb-marinated chicken, slow-roasted to juicy perfection with seasonal sides.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Slow-Braised Brisket</h3>
            <p className="text-lg text-gray-700 mb-4">
              Tender beef brisket braised for hours in red wine and aromatics.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Seafood Paella</h3>
            <p className="text-lg text-gray-700 mb-4">
              Spanish-style paella with shrimp, mussels, saffron rice, and fresh herbs.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Vegetarian Lasagna</h3>
            <p className="text-lg text-gray-700 mb-4">
              Layered with roasted vegetables, creamy béchamel, and tangy tomato sauce.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Grilled Salmon</h3>
            <p className="text-lg text-gray-700 mb-4">
              Atlantic salmon grilled with lemon butter, served with asparagus and baby potatoes.
            </p>
          </div>
          <div className="bg-[#F4F4F4] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">Wild Mushroom Risotto</h3>
            <p className="text-lg text-gray-700 mb-4">
              Creamy arborio rice, wild mushrooms, truffle oil, and shaved parmesan.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainCoursePage;