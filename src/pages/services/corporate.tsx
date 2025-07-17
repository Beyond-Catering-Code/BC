import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import {
  ChefHat,
  Calendar,
  Truck,
  Users,
} from 'lucide-react';

const CorporateCateringPage = () => {
  return (
    <div>
      <Head>
        <title>Corporate Catering Solutions - Beyond Catering</title>
        <meta name="description" content="Comprehensive corporate catering services, from daily meal delivery to full canteen setup." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Corporate Catering Solutions</h1>
            <p className="text-lg text-gray-600">
              We partner with companies to design and execute tailored food programs that enhance workplace dining. From concept to rollout, we manage every detail.
            </p>
            <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-semibold transition duration-200">
              Get a Custom Quote
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Corporate Catering Options</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <ChefHat size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Buffet Setup</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">Professional buffet catering for corporate events and meetings.</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <Truck size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">Reliable Delivery</h3>
                </div>
                <p className="mt-4 text-center text-gray-300">We deliver and setup food to ensure a seamless event experience.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CorporateCateringPage;