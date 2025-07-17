'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 bg-[#F0F6FB] text-gray-900 font-sans">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 text-center pb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Dubai's Most Elegant Catering Experience
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 italic mb-12 leading-relaxed">
            Crafted by chefs. Curated for brands. Beyond Catering redefines premium events with 100,000+ meals delivered with precision and care.
          </p>
          <div className="relative w-full aspect-[16/7] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-100/50 transition-all duration-500 group">
            <Image
              src="/images/blog.JPG"
              alt="Catering setup"
              fill
              className="object-cover object-[center_62%] transition-transform duration-700 group-hover:scale-[1.025]"
              priority
            />
          </div>
        </section>

        {/* OUTSTANDING CATERING */}
        <section className="bg-white py-28 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="text-left md:flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug tracking-tight">
                Outstanding Catering
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mb-8 leading-relaxed">
                From corporate galas to private soirées, our bespoke menus and white-glove service bring sophistication to every table.
              </p>
              <a
                href="/book"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-900 transition"
              >
                Book a Tasting
              </a>
            </div>
            <div className="md:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/blog3.JPG"
                  alt="Gourmet Plate"
                  width={800}
                  height={600}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY BEYOND CATERING */}
        <section className="py-28 px-6 sm:px-10 bg-gradient-to-b from-[#F0F4F8] to-[#FAFAF9] text-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              Why Beyond Catering?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 italic max-w-2xl mx-auto mb-16 leading-relaxed">
              Elegant cuisine. Timeless service. Discover what makes us Dubai’s trusted name in luxury catering.
            </p>
            <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '👨‍🍳',
                  title: 'Master Chefs',
                  desc: 'Culinary artists with Michelin-starred pedigree delivering food with finesse.',
                },
                {
                  icon: '🥗',
                  title: 'Seasonal Ingredients',
                  desc: 'Each dish begins with thoughtfully selected, market-fresh produce.',
                },
                {
                  icon: '📋',
                  title: 'Tailored Menus',
                  desc: 'Every course designed for your theme, guests, and vision with no templates.',
                },
                {
                  icon: '🛎️',
                  title: 'Flawless Service',
                  desc: 'Friendly, discreet, and prepared for anything. Our team ensures elegance flows seamlessly.',
                },
                {
                  icon: '⏱️',
                  title: 'Punctual Execution',
                  desc: 'Precision that guarantees timely setup and service every time.',
                },
                {
                  icon: '🎯',
                  title: 'Details Obsessed',
                  desc: 'From plating finesse to scent and ambiance, no element is left unconsidered.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FAFAF9] border border-gray-200 rounded-2xl px-8 py-10 text-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06)] hover:shadow-xl hover:scale-[1.015] transition duration-300 ease-in-out"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}