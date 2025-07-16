'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menusOpen, setMenusOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menusTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHover = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
    state: boolean
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(state);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48">
              <Image src="/images/logo.png" alt="Beyond Catering" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-14 text-[16px] font-semibold tracking-wide text-gray-800">
            <Link href="/about" className="hover:text-blue-800 transition">About</Link>

            {/* Menus (dropdown, no arrow) */}
            <div
              className="relative"
              onMouseEnter={() => handleHover(setMenusOpen, menusTimeout, true)}
              onMouseLeave={() => {
                menusTimeout.current = setTimeout(() => setMenusOpen(false), 200);
              }}
            >
              <Link href="/menus" className="hover:text-blue-800 transition">
                Menus
              </Link>
              {menusOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md bg-white shadow-md z-50 transition-all duration-200">
                  <Link href="/menus/cold-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Cold Canapés</Link>
                  <Link href="/menus/hot-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Hot Canapés</Link>
                  <Link href="/menus/sweet-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Sweet Canapés</Link>
                  <Link href="/menus/bowl-fork" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Bowl & Fork</Link>
                  <Link href="/menus/platters" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Platters</Link>
                  <Link href="/menus/salads" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Salads</Link>
                  <Link href="/menus/main-course" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Main Course</Link>
                </div>
              )}
            </div>

            {/* Services (dropdown, no arrow) */}
            <div
              className="relative"
              onMouseEnter={() => handleHover(setServicesOpen, servicesTimeout, true)}
              onMouseLeave={() => {
                servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
              }}
            >
              <Link href="/services" className="hover:text-blue-800 transition">Services</Link>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md bg-white shadow-md z-50 transition-all duration-200">
                  <Link href="/services/corporate" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Corporate Catering</Link>
                  <Link href="/services/private" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Private Events</Link>
                  <Link href="/services/drop-off" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Drop-Off Catering</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="hover:text-blue-800 transition">Blog</Link>
            <Link href="/contact" className="hover:text-blue-800 transition">Contact us</Link>
          </div>

          {/* CTA */}
          <div className="ml-4">
            <Link
              href="/book"
              className="bg-blue-900 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition duration-200"
            >
              Book a Tasting
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;