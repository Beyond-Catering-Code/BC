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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        mobileMenuOpen &&
        !target.closest('.mobile-menu-container') &&
        !target.closest('.mobile-menu-button')
      ) {
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
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ease-in-out bg-white ${scrolled ? 'shadow-xl' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-40 sm:h-12 sm:w-48">
                <Image src="/images/logo.png" alt="Beyond Catering" fill className="object-contain" priority />
              </div>
            </Link>

            <div className="hidden md:flex items-center justify-center flex-1 gap-12 text-[14px] sm:text-[15px] font-semibold tracking-wide text-gray-800">
              <div className="relative" onMouseEnter={() => handleHover(setMenusOpen, menusTimeout, true)} onMouseLeave={() => { menusTimeout.current = setTimeout(() => setMenusOpen(false), 200); }}>
                <Link href="/menus" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">Menus</Link>
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

              <div className="relative" onMouseEnter={() => handleHover(setServicesOpen, servicesTimeout, true)} onMouseLeave={() => { servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200); }}>
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
              <Link href="/contact#form" className="hover:text-blue-800 transition-all font-playfair text-base sm:text-lg">Contact us</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/contact#form" className="bg-[#D4AF37] text-white hover:bg-[#C7A12F] px-4 py-2 md:px-6 md:py-3 rounded-md text-xs md:text-base font-semibold transition duration-300 ease-in-out">Book a Tasting</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-button md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none group relative z-50 cursor-pointer touch-manipulation" aria-label="Toggle mobile menu" type="button">
                <span className={`w-6 h-0.5 bg-gray-800 group-hover:bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-[#D4AF37]' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 group-hover:bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 group-hover:bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-[#D4AF37]' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-gradient-to-br from-black/60 via-blue-900/30 to-black/80 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden" onClick={closeMobileMenu}></div>
          <div className="mobile-menu-container fixed top-16 left-0 right-0 bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto transform transition-all duration-300 ease-out z-40 md:hidden">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#C7A12F] px-6 py-6 text-center">
              <h2 className="text-white text-xl font-playfair font-bold tracking-wide">Navigation</h2>
              <div className="w-12 h-0.5 bg-white/60 mx-auto mt-2"></div>
            </div>
            <div className="flex flex-col">
              <Link href="/menus" onClick={closeMobileMenu} className="block px-8 py-5 text-lg font-playfair text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 transition-all duration-200 flex items-center justify-between group">
                <span>Menus</span>
                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </Link>
              <Link href="/services" onClick={closeMobileMenu} className="block px-8 py-5 text-lg font-playfair text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 transition-all duration-200 flex items-center justify-between group">
                <span>Services</span>
                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </Link>
              <Link href="/blog" onClick={closeMobileMenu} className="px-8 py-5 text-lg font-playfair text-gray-800 border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 transition-all duration-200 flex items-center justify-between group">
                <span>Blog</span>
                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </Link>
              <Link href="/contact#form" onClick={closeMobileMenu} className="px-8 py-5 text-lg font-playfair text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 transition-all duration-200 flex items-center justify-between group">
                <span>Contact us</span>
                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </Link>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 px-8 py-6 text-center border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">Ready to create something extraordinary?</p>
                <Link href="/contact#form" onClick={closeMobileMenu} className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C7A12F] text-white px-8 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:from-[#C7A12F] hover:to-[#B8941F] transition-all duration-300 transform hover:scale-105">Book Your Tasting</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;