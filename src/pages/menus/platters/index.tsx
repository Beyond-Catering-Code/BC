'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Platters - Beyond Catering",
  "description": "Curated platters for every occasion in Dubai. From mezze spreads to artisanal cheese boards, perfect for events and gatherings.",
  "url": "https://beyondcatering.ae/menus/platters",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/favicon.ico"
    }
  }
};

const PlattersPage = () => {
  return (
    <>
      <Head>
        <title>Platters - Beyond Catering | Curated Event Platters Dubai</title>
        <meta
          name="description"
          content="Platters by Beyond Catering: Curated, artisanal platters for Dubai events. Cheese boards, mezze spreads, burger baskets, and more for memorable gatherings."
        />
        <meta
          name="keywords"
          content="Platters, Beyond Catering, Dubai catering, event platters, cheese board, mezze spread, charcuterie Dubai, corporate catering, party platters UAE"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/platters" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Platters - Beyond Catering | Curated Event Platters Dubai" />
        <meta property="og:description" content="Curated event platters for Dubai. Artisanal cheese boards, mezze spreads, burger baskets, and more." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/platters" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/platter.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Platters - Beyond Catering | Curated Event Platters Dubai" />
        <meta name="twitter:description" content="Signature platters, cheese boards, mezze, and more for Dubai events." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/platter.jpg" />

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
        aria-label="Platters Event Catering Hero"
        role="region"
      >
        <div
          className="absolute inset-0 opacity-10 bg-[url('/menus/platters.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Platters
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Perfect for sharing. Artisanal cheese boards, mezze spreads, burger baskets, and more. Receive your guests with an impressive selection.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR PLATTERS */}
      <section
        className="w-full bg-[#FAF3EA] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Our Platters"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
                Why Choose Our Platters?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Our platters are built for presentation and flavor. Ideal for both corporate and private events, each platter is filled with premium ingredients, balanced textures, and seasonal flair.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                From elegant cheese boards to hearty burger baskets, our platters set the tone for memorable gatherings.
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
                src="/images/platter.jpg"
                alt="Event platters beautifully arranged for Dubai catering"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        className="bg-[#FFFDF7] px-4 sm:px-6 pt-16 sm:pt-24 pb-6 sm:pb-10"
        aria-label="Explore Signature Platters"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Platters
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Plated with elegance and perfect for sharing, our platters are designed for indulgence and celebration.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Platters Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: 'Artisanal Cheese Board',
              desc: 'A refined selection of imported cheeses, dried fruit, honeycomb, and fresh baguette.',
            },
            {
              title: 'Mezze Spread',
              desc: 'Hummus, muhammara, labneh, pickles, olives, pita chips, and seasonal dips.',
            },
            {
              title: 'Burger Basket',
              desc: 'Mini beef and chicken sliders served with house-made condiments and fries.',
            },
            {
              title: 'Fruit Platter',
              desc: 'Vibrant seasonal fruits sliced and arranged for elegance and freshness.',
            },
            {
              title: 'Charcuterie Board',
              desc: 'Premium cold cuts, pickles, dijon mustard, grilled bread, and aged cheeses.',
            },
            {
              title: 'Smoked Salmon Board',
              desc: 'Smoked salmon with dill cream, capers, red onion, and toasted brioche.',
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

export default PlattersPage;