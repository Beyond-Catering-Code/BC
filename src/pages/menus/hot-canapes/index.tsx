'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hot Canapés - Beyond Catering",
  "description": "Delicious hot canapés made fresh for your Dubai event. Premium appetizers for luxury gatherings and corporate catering.",
  "url": "https://beyondcatering.ae/menus/hot-canapes",
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

const HotCanapesPage = () => {
  return (
    <>
      <Head>
        <title>Hot Canapés - Beyond Catering | Luxury Event Canapés Dubai</title>
        <meta
          name="description"
          content="Hot Canapés by Beyond Catering: Fresh, premium, and creative hot canapés for luxury Dubai events and corporate catering. Discover our signature hot canapés menu."
        />
        <meta
          name="keywords"
          content="Hot Canapés, Beyond Catering, Dubai catering, luxury event canapés, hot appetizers, corporate catering Dubai, premium canapés UAE, canapés menu"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/hot-canapes" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hot Canapés - Beyond Catering | Luxury Event Canapés Dubai" />
        <meta property="og:description" content="Fresh, premium hot canapés menu for Dubai events and luxury gatherings." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/hot-canapes" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/hotcanapes.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hot Canapés - Beyond Catering | Luxury Event Canapés Dubai" />
        <meta name="twitter:description" content="Signature hot canapés for luxury Dubai events and gatherings." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/hotcanapes.jpg" />

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
        aria-label="Hot Canapés Event Catering Hero"
        role="region"
      >
        <div
          className="absolute inset-0 opacity-10 bg-[url('/menus/hot-canapes.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Hot Canapés
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            Fresh from the kitchen and designed to delight. Our hot canapés bring bold flavors and heartwarming presentation to any event.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE HOT CANAPÉS */}
      <section
        className="w-full bg-[#FBF6ED] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Our Hot Canapés"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
                Why Choose Our Hot Canapés?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Served warm and made to impress, our hot canapés are perfect for creating memorable moments at your event. Each piece is a blend of flavor, creativity, and comfort.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                Whether you're hosting a formal affair or a cozy gathering, our hot canapés deliver both taste and elegance.
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
                src="/images/hotcanapes.webp"
                alt="Hot canapés beautifully presented for luxury Dubai event catering"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        className="bg-[#FFFDF7] px-4 sm:px-6 pt-16 sm:pt-24 pb-6 sm:pb-10"
        aria-label="Explore Signature Canapés"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Canapés
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Warm, flavorful bites crafted to elevate your occasion with heart and heat.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Hot Canapés Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: 'Mini Beef Wellingtons',
              desc: 'Tender beef wrapped in golden puff pastry with a savory mushroom duxelles.',
            },
            {
              title: 'Truffle Mac & Cheese Bites',
              desc: 'Creamy mac and cheese infused with truffle oil, crisp-fried to perfection.',
            },
            {
              title: 'Spicy Chicken Skewers',
              desc: 'Marinated chicken grilled on skewers with a hint of heat and herbs.',
            },
            {
              title: 'Vegetarian Spring Rolls',
              desc: 'Crispy rolls filled with seasoned veggies, served with sweet chili dip.',
            },
            {
              title: 'Mini Crab Cakes',
              desc: 'Succulent crab meat with herbs and seasoning, pan-seared to golden.',
            },
            {
              title: 'Halloumi Sliders',
              desc: 'Grilled halloumi on mini buns with roasted peppers and aioli.',
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

export default HotCanapesPage;