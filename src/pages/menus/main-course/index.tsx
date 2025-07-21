'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Main Course - Beyond Catering",
  "description": "Exquisite main course options for every event in Dubai. Crafted, premium mains and signature dishes for weddings, corporate functions, and gatherings.",
  "url": "https://beyondcatering.ae/menus/main-course",
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

const MainCoursePage = () => {
  return (
    <>
      <Head>
        <title>Main Course - Beyond Catering | Premium Event Catering Dubai</title>
        <meta
          name="description"
          content="Main Course by Beyond Catering: Exquisite, premium main courses for Dubai events and corporate catering. Discover our signature mains menu."
        />
        <meta
          name="keywords"
          content="Main Course, Beyond Catering, Dubai catering, event main course, premium mains, wedding catering Dubai, corporate catering, signature dishes, Dubai event menu"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/menus/main-course" />
        <link rel="preload" as="image" href="/images/maincourse.webp" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Main Course - Beyond Catering | Premium Event Catering Dubai" />
        <meta property="og:description" content="Exquisite main course menu for Dubai events, weddings, and gatherings." />
        <meta property="og:url" content="https://beyondcatering.ae/menus/main-course" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/maincourse.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Main Course - Beyond Catering | Premium Event Catering Dubai" />
        <meta name="twitter:description" content="Signature main courses for Dubai events and gatherings." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/maincourse.jpg" />

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
        aria-label="Main Course Event Catering Hero"
        role="region"
      >
        <div
          className="absolute inset-0 opacity-10 bg-[url('/menus/maincourse.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-semibold text-gold mb-6 leading-tight">
            Main Course
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-loose">
            From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE MAIN COURSE */}
      <section
        className="w-full bg-[#FAF3EA] px-4 sm:px-6 py-16 sm:py-24"
        aria-label="Why Choose Our Main Course"
        role="region"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
                Why Choose Our Main Course?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Our main courses are crafted to satisfy every palate. From tender meats to vibrant vegetarian options, each dish is made with fresh, premium ingredients.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                Whether plated or buffet style, our mains bring warmth, flavor, and presentation to your event.
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
                src="/images/maincourse.jpg"
                alt="Main course dish beautifully presented for premium Dubai event catering"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-xl"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        className="bg-[#FFFDF7] px-4 sm:px-6 pt-16 sm:pt-24 pb-6 sm:pb-10"
        aria-label="Explore Signature Mains"
        role="region"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide mb-2">
            Explore Our Signature Mains
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A thoughtfully curated menu of hearty, flavorful dishes designed to impress every guest.
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <main
        className="bg-[#FFFDF7] pb-20 sm:pb-32 px-4 sm:px-10 font-sans"
        aria-label="Signature Main Course Menu"
        role="main"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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

export default MainCoursePage;