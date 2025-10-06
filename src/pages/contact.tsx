import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us - Beyond Catering",
  "description": "Get in touch with Beyond Catering for premium catering services in Dubai. Contact us for inquiries, bookings, and feedback.",
  "url": "https://beyondcatering.ae/contact",
  "publisher": {
    "@type": "Organization",
    "name": "Beyond Catering",
    "url": "https://beyondcatering.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beyondcatering.ae/images/logo.png"
    }
  }
};

const ContactPage = () => {
  const [dialog, setDialog] = useState({ open: false, message: '', success: true });

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    email: (form.elements.namedItem('email') as HTMLInputElement).value,
    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    message: (form.elements.namedItem('message') as HTMLInputElement).value,
  };
  // ... rest is the same

    const res = await fetch('/api/send-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setDialog({ open: true, message: 'Message sent!', success: true });
      form.reset();
    } else {
      setDialog({ open: true, message: 'Failed to send message.', success: false });
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Beyond Catering</title>
        <meta name="description" content="Get in touch with Beyond Catering for premium catering services in Dubai. Contact us for inquiries, bookings, and feedback." />
        <meta name="keywords" content="Contact Beyond Catering, Dubai catering contact, event catering inquiry, catering Dubai, food booking Dubai, catering phone number, catering email, catering location" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://beyondcatering.ae/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - Beyond Catering" />
        <meta property="og:description" content="Get in touch with Beyond Catering for premium catering services in Dubai. Contact us for inquiries, bookings, and feedback." />
        <meta property="og:url" content="https://beyondcatering.ae/contact" />
        <meta property="og:site_name" content="Beyond Catering" />
        <meta property="og:image" content="https://beyondcatering.ae/images/contact1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Beyond Catering" />
        <meta name="twitter:description" content="Contact Beyond Catering for event catering, bookings, and customer support in Dubai." />
        <meta name="twitter:image" content="https://beyondcatering.ae/images/contact1.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-60 md:h-[400px] w-full overflow-hidden"
        aria-label="Contact Us Hero"
        role="region"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/contact1.webp"
            alt="Contact Us background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg md:text-xl">Home • Contact Us</p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24 bg-white text-center" aria-label="Get In Touch">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            For any inquiries, reservations, or to review our extensive culinary selections, please do not hesitate to contact Beyond Catering. Whether you are organising a corporate function, a wedding reception, or an exclusive private event, our dedicated team is committed to fulfilling your requirements with meticulous attention to detail. You may reach us by phone, email, or by visiting our offices in person.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We look forward to bringing exceptional gastronomic experience at your next event in Dubai.
          </p>
          <div className="mt-10" aria-label="Social Media Links">
            <h4 className="text-xl font-semibold text-gray-900">FOLLOW US</h4>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.instagram.com/beyondcatering.ae/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Beyond Catering Instagram">
                <Instagram size={28} className="text-gray-600 hover:text-yellow-600 transition-colors" />
              </a>
              <a href="https://www.facebook.com/beyondcatering.ae" target="_blank" rel="noopener noreferrer" aria-label="Beyond Catering Facebook">
                <Facebook size={28} className="text-gray-600 hover:text-yellow-600 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/beyond-catering-catering-services/?originalSubdomain=ae" target="_blank" rel="noopener noreferrer" aria-label="Beyond Catering LinkedIn">
                <Linkedin size={28} className="text-gray-600 hover:text-yellow-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-gray-50 py-16 md:py-24" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" tabIndex={0} aria-label="Our Location">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <MapPin size={24} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">Our Location</h4>
                  <address className="text-sm text-gray-700 not-italic">
                    Warehouse 29 - Al Quoz - Al Quoz Industrial Area 1 Dubai - United Arab Emirates
                  </address>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" tabIndex={0} aria-label="Call Us">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <Phone size={24} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">Call Us</h4>
                  <p className="text-sm text-gray-700">
                    <a href="tel:+971524823650" className="hover:text-blue-700">+971 52 482 3650</a><br />
                    <a href="tel:+971525138737" className="hover:text-blue-700">+971 52 513 8737</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mail Us Card */}
{/* Mail Us Card */}
<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" tabIndex={0} aria-label="Mail Us">
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
      <Mail size={24} className="text-blue-900" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-blue-900">Mail Us</h4>
      <p className="text-sm text-gray-700">
        <a
          href="mailto:info@beyondcatering.ae?subject=Inquiry&body=Hello%20Beyond%20Catering%20Team"
          className="hover:text-blue-700"
        >
          info@beyondcatering.ae
        </a>
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Online Form Section */}
<section className="relative overflow-hidden" aria-label="Online Contact Form" role="region">
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/images/contact2.webp"
      alt="Online form background"
      fill
      className="object-cover"
      sizes="100vw"
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      priority={false}
    />
  </div>
  <div className="relative z-10 py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dialog/Modal for submission feedback */}
{dialog.open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setDialog({ ...dialog, open: false })}
    />
    {/* Modal */}
    <div
      className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-6 px-8 py-10 flex flex-col items-center
        ${dialog.success ? 'border-2 border-yellow-400' : 'border-2 border-red-400'}
        animate-dialog-pop`}
      style={{
        boxShadow: '0 8px 40px rgba(24, 44, 96, 0.17)',
      }}
    >
      <span className={`text-2xl font-black mb-3 tracking-tight
        ${dialog.success ? 'text-blue-900' : 'text-red-600'}`}>
        {dialog.success ? 'Message Received' : 'Not Sent'}
      </span>
      <span className="block text-base mb-5 text-blue-900 text-center font-medium leading-relaxed">
        {dialog.success ? (
          <>
            Thank you for reaching out.<br />
            Our concierge team is reviewing your request<br />
            and will respond within <span className="font-semibold text-yellow-500">24 hours</span>.
          </>
        ) : (
          dialog.message
        )}
      </span>
      <button
        onClick={() => setDialog({ ...dialog, open: false })}
        className="mt-2 px-7 py-2.5 rounded-full bg-blue-900 text-white font-bold shadow hover:bg-yellow-400 hover:text-blue-900 transition-all text-base"
        style={{ letterSpacing: '0.03em' }}
        aria-label="Close dialog"
      >
        Close
      </button>
    </div>
    <style jsx global>{`
      @keyframes dialog-pop {
        0% { opacity: 0; transform: scale(0.93);}
        100% { opacity: 1; transform: scale(1);}
      }
      .animate-dialog-pop {
        animation: dialog-pop 0.24s cubic-bezier(.24,1.24,.45,1.22);
      }
    `}</style>
  </div>
)}

      <form
        id="form"
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6"
        aria-label="Contact Form"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-6">Book a Tasting</h2>
        <div>
          <label htmlFor="name" className="block text-md font-bold text-black mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600 text-black"
            required
            aria-required="true"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-md font-bold text-black mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600 text-black"
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-md font-bold text-black mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600 text-black"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-md font-bold text-black mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="w-full p-3 border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600 text-black"
            required
            aria-required="true"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors"
            aria-label="Submit Contact Form"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
      <footer />
    </>
  );
};

export default ContactPage;