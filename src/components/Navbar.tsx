'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menusOpen, setMenusOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menusTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleHover = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
    state: boolean
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(state);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white ${scrolled ? 'shadow-xl' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-40 sm:h-12 sm:w-48">
                <Image src="/images/logo.png" alt="Beyond Catering" fill className="object-contain" priority />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-12 text-[14px] sm:text-[15px] font-semibold tracking-wide text-gray-800">
              <Link href="/about" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">About</Link>

              {/* Menus Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleHover(setMenusOpen, menusTimeout, true)}
                onMouseLeave={() => {
                  menusTimeout.current = setTimeout(() => setMenusOpen(false), 200);
                }}
              >
                <Link href="/menus" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">
                  Menus
                </Link>
                {menusOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md bg-white shadow-xl z-50 transition-all duration-200">
                    <Link href="/menus/salads" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Salads</Link>
                    <Link href="/menus/cold-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Cold Canapés</Link>
                    <Link href="/menus/hot-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Hot Canapés</Link>
                    <Link href="/menus/sweet-canapes" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Sweet Canapés</Link>
                    <Link href="/menus/main-course" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Main Course</Link>
                    <Link href="/menus/platters" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Platters</Link>
                    <Link href="/menus/bowl-fork" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Bowl & Fork</Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleHover(setServicesOpen, servicesTimeout, true)}
                onMouseLeave={() => {
                  servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
                }}
              >
                <Link href="/services" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">Services</Link>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md bg-white shadow-xl z-50 transition-all duration-200">
                    <Link href="/services/corporate" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Corporate Catering</Link>
                    <Link href="/services/private" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Private Events</Link>
                    <Link href="/services/drop-off" className="block px-4 py-3 text-sm hover:bg-blue-100 transition text-center">Drop-Off Catering</Link>
                  </div>
                )}
              </div>

              <Link href="/blog" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">Blog</Link>
              <Link href="/contact" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">Contact us</Link>
            </div>

            {/* Mobile menu button and CTA */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <Link
                href="/book"
                className="bg-[#D4AF37] text-white hover:bg-[#C7A12F] px-4 py-2 md:px-6 md:py-3 rounded-md text-xs md:text-base font-semibold transition duration-300 ease-in-out"
              >
                Book a Tasting
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
          
          {/* Menu Content */}
          <div className="mobile-menu-container fixed top-16 left-0 right-0 bg-white shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col">
              {/* Main Navigation Links */}
              <Link href="/about" onClick={closeMobileMenu} className="px-6 py-4 text-lg font-playfair border-b border-gray-100 hover:bg-blue-50 transition-colors">
                About
              </Link>

              {/* Menus Section */}
              <div className="border-b border-gray-100">
                <Link href="/menus" onClick={closeMobileMenu} className="block px-6 py-4 text-lg font-playfair hover:bg-blue-50 transition-colors">
                  Menus
                </Link>
                <div className="bg-gray-50">
                  <Link href="/menus/salads" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Salads</Link>
                  <Link href="/menus/cold-canapes" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Cold Canapés</Link>
                  <Link href="/menus/hot-canapes" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Hot Canapés</Link>
                  <Link href="/menus/sweet-canapes" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Sweet Canapés</Link>
                  <Link href="/menus/main-course" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Main Course</Link>
                  <Link href="/menus/platters" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Platters</Link>
                  <Link href="/menus/bowl-fork" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Bowl & Fork</Link>
                </div>
              </div>

              {/* Services Section */}
              <div className="border-b border-gray-100">
                <Link href="/services" onClick={closeMobileMenu} className="block px-6 py-4 text-lg font-playfair hover:bg-blue-50 transition-colors">
                  Services
                </Link>
                <div className="bg-gray-50">
                  <Link href="/services/corporate" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Corporate Catering</Link>
                  <Link href="/services/private" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Private Events</Link>
                  <Link href="/services/drop-off" onClick={closeMobileMenu} className="block px-8 py-3 text-sm hover:bg-blue-50 transition-colors">Drop-Off Catering</Link>
                </div>
              </div>

              <Link href="/blog" onClick={closeMobileMenu} className="px-6 py-4 text-lg font-playfair border-b border-gray-100 hover:bg-blue-50 transition-colors">
                Blog
              </Link>
              <Link href="/contact" onClick={closeMobileMenu} className="px-6 py-4 text-lg font-playfair hover:bg-blue-50 transition-colors">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;