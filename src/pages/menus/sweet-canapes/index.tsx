'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sweet Canapés - Beyond Catering",
  "description": "Handcrafted sweet canapés for a luxurious dessert finale at Dubai events. Elegant, indulgent, and unforgettable desserts.",
  "url": "https://beyondcatering.ae/menus/sweet-canapes",
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

const SweetCanapesPage = () => {
  return (
    <>
      <Head>
        <title>Sweet Canapés - Beyond Catering | Luxury Dessert Canapés Dubai</title>
        <meta
          name="description"
          content="Sweet Canapés by Beyond Catering: Handcrafted, luxury dessert canapés for Dubai events. Indulgent, elegant, unforgettable finale for weddings, galas, and parties."
        />
        <meta
          name="keywords"
          content="Sweet Canapés, Beyond Catering, Dubai catering, dessert canapés, luxury desserts, wedding catering Dubai, event desserts, mini cheesecakes, mousse, pavlova, profiteroles"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/sweet-canapes" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sweet Canapés - Beyond Catering | Luxury Dessert Canapés Dubai" />
        <meta property="og:description" content="Handcrafted sweet canapés for Dubai events. Elegant, indulgent, and unforgettable." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/sweet-canapes" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/sweetcanapes.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sweet Canapés - Beyond Catering | Luxury Dessert Canapés Dubai" />
        <meta name="twitter:description" content="Signature sweet canapés for Dubai events. Mini cheesecakes, mousse, pavlova, profiteroles, and more." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/sweetcanapes.jpg" />

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
        aria-label="Sweet Canapés Event Catering Hero"
        role="region"
      >
        <div
          className="absolute inset-0 opacity-10 bg-[url('/menus/sweet.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Sweet Canapés
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR SWEET CANAPÉS */}
      <section
        className="w-full bg-[#F9F5F0] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Our Sweet Canapés"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">Why Choose Our Sweet Canapés?</h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Our sweet canapés are more than desserts; they're mini masterpieces. Perfectly portioned and plated with care, each treat combines flavor, texture, and visual charm.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                Whether passed around at the end of an evening or displayed on elegant dessert stations, they bring your event to a delightful close.
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
                src="/images/sweetcanapes.webp"
                alt="Sweet canapés beautifully plated for Dubai dessert catering"
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
        aria-label="Explore Signature Sweet Canapés"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Sweet Canapés
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Miniature delights crafted to elevate your dessert course; unforgettable in taste and presentation.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Sweet Canapés Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
              desc: 'Creamy New York style bites with seasonal fruit or chocolate ganache topping.',
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

export default SweetCanapesPage;