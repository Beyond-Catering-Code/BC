'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Structured Data (JSON-LD)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Bowl & Fork - Beyond Catering',
  'description': 'Refined bowls designed to impress. Elegant, flavorful, and perfectly portioned for your Dubai events.',
  'url': 'https://beyondcatering.ae/menus/bowl-fork',
  'inLanguage': 'en',
  'publisher': {
    '@type': 'Organization',
    'name': 'Beyond Catering',
    'url': 'https://beyondcatering.ae',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://beyondcatering.ae/favicon.ico'
    }
  }
};

const BowlAndForkPage = () => {
  return (
    <>
      <Head>
        <title>Bowl & Fork - Beyond Catering | Dubai Premium Event Bowls</title>
        <meta
          name="description"
          content="Bowl & Fork by Beyond Catering: Dubai’s signature bowls for luxury events and corporate catering. Elegant, nutritious, and crafted to impress. Discover our premium event menu."
        />
        <meta
          name="keywords"
          content="Bowl & Fork, Beyond Catering, Dubai catering, event bowls, signature bowls, luxury catering, premium catering Dubai, bowl meals, Dubai events, corporate catering UAE"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/bowl-fork" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bowl & Fork - Beyond Catering | Dubai Premium Event Bowls" />
        <meta property="og:description" content="Discover signature bowls for luxury Dubai events and corporate catering. Crafted to impress and nourish." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/bowl-fork" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/bowlFork.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bowl & Fork - Beyond Catering | Dubai Premium Event Bowls" />
        <meta name="twitter:description" content="Signature bowls for Dubai events. Elegant, flavorful, and crafted for corporate catering." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/bowlFork.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      {/* HERO */}
      <section
        className="w-full bg-[#0B1120] text-white px-4 sm:px-6 py-20 sm:py-28 relative overflow-hidden"
        aria-label="Bowl & Fork Signature Event Catering Hero"
        role="region"
      >
        <div
          className="absolute inset-0 opacity-10 bg-[url('/menus/bowl.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Bowl & Fork
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Refined bowls crafted to impress. A luxurious follow up to your canapé service, or a meal on their own.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR BOWLS */}
      <section
        className="w-full bg-[#F9F5F0] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Bowl & Fork"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
                Why Choose Bowl & Fork?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Our signature bowls are perfectly portioned and thoughtfully curated for elegance, nutrition, and bold flavor.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                From creamy risottos to aromatic biryanis and international fusions, it’s the ultimate way to keep guests nourished and impressed throughout your event.
              </p>
              <Link
                href="/book-tasting"
                className="inline-block bg-[#D4AF37] text-white text-base sm:text-lg px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all hover:bg-[#b68c1f]"
                aria-label="Book a Tasting Experience"
              >
                Book a Tasting Experience
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
              <Image
                src="/images/bowlFork.webp"
                alt="Bowl & Fork dish beautifully presented for Dubai event catering"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhoCAABXRUJQVlA4WAoAAAASAAAAEAAA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        className="bg-[#FFFDF7] px-4 sm:px-6 pt-16 sm:pt-24 pb-6 sm:pb-10"
        aria-label="Explore Signature Bowls"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Bowl & Fork Dishes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Elegant mains served in a bowl, nourishing, luxurious, and plated to perfection.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Bowl & Fork Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
              className="bg-white border border-[#F1EADB] rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-all duration-300 ease-in-out"
              role="article"
              aria-label={item.title}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1120] mb-2">{item.title}</h3>
              <div className="w-10 sm:w-12 h-[2px] bg-[#D4AF37] mx-auto mb-4 rounded-full" />
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BowlAndForkPage;