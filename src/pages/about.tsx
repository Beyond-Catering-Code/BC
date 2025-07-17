import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { BadgeCheck, Users, ChefHat, Star, Trophy, Target } from 'lucide-react';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Beyond Catering</title>
        <meta name="description" content="Learn about Beyond Catering, Dubai’s premier catering service dedicated to creating unforgettable culinary experiences." />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>

      <Navbar />

      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/private.jpg"
              alt="Our team at a catering event"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About Beyond Catering</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Crafting Dubai’s Most Memorable Culinary Narratives, One Event at a Time.</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story: A Passion for Perfection</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in the heart of Dubai, Beyond Catering was born from a simple yet powerful idea: that every meal should be an experience. Our founders, a team of seasoned chefs and event visionaries, saw a need for a catering service that went beyond just food. They envisioned a company that would blend culinary artistry with flawless execution, transforming ordinary events into extraordinary memories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our humble beginnings with a small, dedicated team, we have grown into one of Dubai’s most trusted catering partners. We have served royalty, celebrated with global brands, and added a touch of magic to countless private gatherings. Yet, our core mission remains unchanged: to delight your guests and exceed your expectations with every plate we serve.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Target size={32} className="text-blue-900" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-loose">
                  To deliver unparalleled catering experiences by combining innovative culinary techniques, the finest ingredients, and world-class service. We strive to be a seamless extension of our clients' vision, ensuring every event is executed with precision, passion, and a personal touch.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Trophy size={32} className="text-blue-900" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-loose">
                  To be the definitive name in luxury catering in the UAE and beyond, continuously pushing the boundaries of culinary creativity and setting new standards for event hospitality. We aim to create a legacy of unforgettable moments, celebrated around the world.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/blog.jpg"
                alt="Elaborate food platter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">The Pillars of Our Promise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Star, title: 'Excellence', description: 'We pursue perfection in every detail, from menu design to final cleanup.' },
                { icon: Users, title: 'Client-Centric', description: 'Your vision is our blueprint. We listen, adapt, and deliver on your unique needs.' },
                { icon: ChefHat, title: 'Culinary Innovation', description: 'Our chefs constantly explore new flavors and techniques to surprise and delight.' },
                { icon: BadgeCheck, title: 'Unwavering Quality', description: 'We source only the freshest, premium ingredients for every dish we create.' },
                { icon: 'Teamwork', title: 'Collaborative Spirit', description: 'Our coordinated team of chefs, servers, and planners ensures a flawless event flow.' },
                { icon: 'Integrity', title: 'Trust & Transparency', description: 'We operate with honesty and clear communication from the first call to the final invoice.' },
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    {typeof value.icon === 'string' ? (
                      <span className="font-bold text-blue-900">{value.icon.slice(0, 1)}</span>
                    ) : (
                      <value.icon size={32} className="text-blue-900" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create an Unforgettable Event?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life. Contact us today for a personalized consultation and begin crafting your next memorable experience with Beyond Catering.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

    </>
  );
};

export default AboutPage; 