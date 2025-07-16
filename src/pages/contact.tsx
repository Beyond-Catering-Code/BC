import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Beyond Catering</title>
        <meta name="description" content="Get in touch with Beyond Catering for premium catering services in Dubai. Contact us for inquiries, bookings, and feedback." />
      </Head>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 w-full">
        <Image
          src="/images/corp1.JPG"
          alt="Contact Us background"
          fill
          priority
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg md:text-xl">Home • Contact Us</p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            For any inquiries, reservations, or to review our extensive culinary selections, please do not hesitate to contact Beyond Catering. Whether you are organising a corporate function, a wedding reception, or an exclusive private event, our dedicated team is committed to fulfilling your requirements with meticulous attention to detail. You may reach us by phone, email, or by visiting our offices in person.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We look forward to bringing exceptional gastronomic experience at your next event in Dubai.
          </p>
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-gray-900">FOLLOW US</h4>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.instagram.com/beyondcatering.ae/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="https://www.facebook.com/beyondcatering.ae" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
                <Facebook size={28} />
              </a>
              <a href="https://www.linkedin.com/company/beyond-catering-catering-services/?originalSubdomain=ae" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <MapPin size={24} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">Our Location</h4>
                  <p className="text-sm text-gray-700">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <Phone size={24} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">Call Us</h4>
                  <p className="text-sm text-gray-700">
                    <a href="tel:+971524823650" className="hover:text-blue-700">+971 52 482 3650</a><br/>
                    <a href="tel:+971553323562" className="hover:text-blue-700">+971 55 332 3562</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mail Us Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <Mail size={24} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">Mail Us</h4>
                  <p className="text-sm text-gray-700">
                    <a href="mailto:info@beyondcatering.ae" className="hover:text-blue-700">info@beyondcatering.ae</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Form Section */}
      <section className="relative py-16 md:py-24">
        <Image
            src="/images/weddings.jpg"
            alt="Online form background"
            fill
            className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">Online Form</h2>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input type="tel" id="phone" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default ContactPage; 