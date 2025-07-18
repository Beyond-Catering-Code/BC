'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const menuSections = [
  {
    title: 'Salads',
    description:
      'Buffet-style, light and fresh. The perfect vegetarian or side pairing for your main course. From Kale Caesar to Roasted Chickpea, every salad is handcrafted to impress.',
    link: '/menus/salads',
    image: 'salad.jpg',
  },
  {
    title: 'Cold Canapés',
    description:
      'Elegant and bite-sized. Ideal for the beginning of your event. Choose from vibrant tomato tartlets to indulgent crab bites, all served chilled.',
    link: '/menus/cold-canapes',
    image: 'cold-canapes.jpg',
  },
  {
    title: 'Hot Canapés',
    description:
      'Fresh from the kitchen and designed to delight. Our hot canapés bring bold flavors and heartwarming presentation to any event.',
    link: '/menus/hot-canapes',
    image: 'hot-canapes.jpg',
  },
  {
    title: 'Sweet Canapés',
    description:
      'End your event on a sweet note. These handcrafted bites are the perfect finale to your celebration. Indulgent, elegant, unforgettable.',
    link: '/menus/sweet-canapes',
    image: 'sweet-canapes.jpg',
  },
  {
    title: 'Main Course',
    description:
      'From roasted chicken to slow-braised brisket and seafood paella. Our curated mains balance flavor, nutrition, and portion for a standout dining experience.',
    link: '/menus/main-course',
    image: 'main-course.jpg',
  },
  {
    title: 'Platters',
    description:
      'Perfect for sharing. Artisanal cheese boards, mezze spreads, burger baskets, and more. Receive your guests with an impressive selection.',
    link: '/menus/platters',
    image: 'platter.jpg',
  },
  {
    title: 'Bowl & Fork',
    description:
      'A great way to receive your guests after the canapé service. Nice portions inside our delight bowls, from truffle pasta to miso black cod.',
    link: '/menus/bowl-fork',
    image: 'bowl-fork.jpg',
  },
];

const MenusPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar />

      {/* HERO SPLIT SECTION */}
      <section className="h-screen flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div
          className="w-full md:w-1/2 h-80 md:h-auto bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: "url('/images/backgroundimage1.jpg')" }}
        />

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold font-[Playfair Display] mb-6">Our Menus</h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Our Menus are totally customized and flexible to your needs. Our cold canapés are a great option for the beginning of your event.
            </p>
            <div className="space-y-6 text-white/90 text-base sm:text-lg">
              <div>
                <p className="uppercase tracking-wide font-semibold text-base sm:text-lg">Packages · The Beginner</p>
                <p>4 selections per guest (min. 20 guests)</p>
                <p>Recommended for 1 hour events</p>
              </div>
              <div>
                <p className="uppercase tracking-wide font-semibold text-base sm:text-lg">The Standard</p>
                <p>6 selections per guest (min. 20 guests)</p>
                <p>Recommended for a 2 hour event</p>
              </div>
              <div>
                <p className="uppercase tracking-wide font-semibold text-base sm:text-lg">The Premium</p>
                <p>8 selections per guest (min. 20 guests)</p>
                <p>Recommended for a 3 hour event</p>
              </div>
              <hr className="border-white/20 my-4" />
            </div>
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <main ref={scrollRef} className="bg-white pt-24 pb-24 px-6 sm:px-10 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {menuSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col-reverse items-center gap-12 md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 text-center">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 font-[Playfair Display]">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                    {section.description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={section.link}
                      className="inline-block bg-[#0d1528] text-white hover:bg-blue-900 text-lg px-7 py-3 rounded-full transition font-[Playfair Display]"
                    >
                      View {section.title}
                    </Link>
                  </div>
                </div>

                <div className="md:w-1/2 h-80 w-full rounded-xl overflow-hidden bg-gray-200 relative">
                  <Image
                    src={`/menus/${section.image}`}
                    alt={section.title}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MenusPage;