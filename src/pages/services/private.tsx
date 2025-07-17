import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { Cake, Users, Calendar, UtensilsCrossed } from 'lucide-react';

const PrivateEventsPage = () => {
  return (
    <div>
      <Head>
        <title>Private Events Catering - Beyond Catering</title>
        <meta name="description" content="Exquisite catering services for your private events, from intimate dinners to milestone celebrations." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Private Events Catering</h1>
            <p className="text-lg text-gray-600">
              Whether it’s an intimate dinner, a milestone birthday, or a stylish garden gathering, we bring refined hospitality to your most special moments.
            </p>
            <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200">
              Plan Your Event
            </button>
          </div>
        </section>

        {/* Event Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Private Event Services</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <Cake size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Full-Service Events</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Complete event catering with staff, setup, and service.</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <UtensilsCrossed size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Menu Design</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Personalized menus for your special occasion.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivateEventsPage;