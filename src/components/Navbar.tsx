'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-800 transition flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-white shadow-md z-50 transition-all duration-200">
                  <Link href="/services" className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blue-100 transition">All Services</Link>
                  <div className="border-t border-gray-100" />
                  <Link href="/services/corporate" className="block px-4 py-2 text-sm hover:bg-blue-100 transition">Corporate Catering</Link>
                  <Link href="/services/private" className="block px-4 py-2 text-sm hover:bg-blue-100 transition">Private Events</Link>
                  <Link href="/services/drop-off" className="block px-4 py-2 text-sm hover:bg-blue-100 transition">Drop-Off Catering</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="hover:text-blue-800 transition">Blog</Link>
            <Link href="/contact" className="hover:text-blue-800 transition">Contact</Link>
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