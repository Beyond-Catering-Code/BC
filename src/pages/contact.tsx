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
      <section className="relative h-60 md:h-150 w-full overflow-hidden">
        <img 
          src="/images/contact1.JPG" 
          alt="Contact Us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
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
                  <p className="text-sm text-gray-700">Warehouse 29 - Al Quoz - Al Quoz Industrial
                  Area 1 Dubai - United Arab Emirates</p>
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
      <section className="relative overflow-hidden">
        <img 
          src="/images/contact2.jpg" 
          alt="Online form background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <form className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-6">Online Form</h2>
                    <div>
                        <label htmlFor="name" className="block text-md font-bold text-black mb-2">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-md font-bold text-black mb-2">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-md font-bold text-black mb-2">Phone</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-md font-bold text-black mb-2">Message</label>
                        <textarea id="message" placeholder="Enter your message" rows={5} className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default ContactPage; 