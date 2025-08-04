'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenus, setShowMenus] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menusTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const toggleDropdown = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
    show: boolean
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(show);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 bg-white transition-all ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/" className="relative w-36 h-10 sm:w-44 sm:h-12">
            <Image src="/images/logo.png" alt="Beyond Catering" fill className="object-contain" priority />
          </Link>

          <div className="hidden md:flex items-center gap-10 text-gray-800 font-semibold text-sm tracking-wide">
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown(setShowMenus, menusTimeout, true)}
              onMouseLeave={() => {
                menusTimeout.current = setTimeout(() => setShowMenus(false), 150);
              }}
            >
              <span className="cursor-pointer font-playfair hover:text-blue-700 text-[16px]">Menus</span>
              {showMenus && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-md rounded-md overflow-hidden z-50 text-center w-48">
                  {['salads', 'cold-canapes', 'hot-canapes', 'sweet-canapes', 'main-course', 'platters', 'bowl-fork'].map((item) => (
                    <Link key={item} href={`/menus/${item}`} className="block px-4 py-2 text-sm hover:bg-blue-100">
                      {item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => toggleDropdown(setShowServices, servicesTimeout, true)}
              onMouseLeave={() => {
                servicesTimeout.current = setTimeout(() => setShowServices(false), 150);
              }}
            >
              <span className="cursor-pointer font-playfair hover:text-blue-700 text-[16px]">Services</span>
              {showServices && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-md rounded-md overflow-hidden z-50 text-center w-48">
                  {['corporate', 'private', 'drop-off'].map((item) => (
                    <Link key={item} href={`/services/${item}`} className="block px-4 py-2 text-sm hover:bg-blue-100">
                      {item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="hover:text-blue-700 font-playfair text-[16px]">Blog</Link>
            <Link href="/contact" className="hover:text-blue-700 font-playfair text-[16px]">Contact us</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/contact#form"
              className="bg-[#D4AF37] text-white hover:bg-[#C7A12F] px-4 py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all"
            >
              Book a Tasting
            </Link>

            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="fixed top-16 left-0 w-full bg-white z-50 shadow-lg md:hidden">
            {[
              { label: 'Menus', href: '/menus' },
              { label: 'Services', href: '/services' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact us', href: '/contact' }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-gray-800 hover:bg-gray-100 text-base font-medium"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              onClick={() => setMobileOpen(false)}
              className="block bg-gradient-to-r from-[#D4AF37] to-[#C7A12F] text-white px-6 py-4 text-center font-semibold"
            >
              Book a Tasting
            </Link>
          </div>
        </>
      )}
    </>
  );
}