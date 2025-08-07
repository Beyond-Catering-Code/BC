import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="Beyond Catering" width={150} height={40} className="object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 pr-4 text-sm sm:text-base">
              Premium catering services for corporate events, weddings, and private parties. Experience exceptional cuisine and service that goes beyond expectations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm sm:text-base">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/menus" className="text-gray-400 hover:text-white transition-colors">Menus</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-400">
              <li>Warehouse 29 - Al Quoz - Al Quoz Industrial Area 1 Dubai - United Arab Emirates</li>
              <li>
                <Link href="mailto:info@beyondcatering.ae?subject=Inquiry&body=Hey%20Beyond%20Catering," className="text-yellow-500 hover:text-white">
                  info@beyondcatering.ae
                </Link>
              </li>
              <li>
                <Link href="tel:+971524823650" className="text-yellow-500 hover:text-white">
                  +971 52 482 3650
                </Link>
              </li>
              <li>
                <Link href="tel:+971553323562" className="text-yellow-500 hover:text-white">
                  +971 55 332 3562
                </Link>
              </li>
            </ul>
            {/* Google Maps Button */}
            <div className="mt-4">
              <Link
<<<<<<< HEAD
                href="https://www.google.com/maps/dir/?api=1&destination=Warehouse+29+-+Al+Quoz+-+Al+Quoz+Industrial+Area+1+-+Dubai"
=======
                href="https://www.google.com/maps/dir/?api=1maps/dir//destination=Warehouse+29+-+Al+Quoz+-+Al+Quoz+Industrial+Area+1+-+Dubai/@25.1452207,55.1477725,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69f521e57575:0xc949514d02b13f49!2m2!1d55.230174!2d25.1452435?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
>>>>>>> 0f51c03 (fix: correct google maps dir url to prevent next/router errors)
                className="inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Directions"
              >
                <span>Get Directions</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 Beyond Catering. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;