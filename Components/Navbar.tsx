'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 font-inter text-gray-900">
        <div className="flex items-center justify-between md:justify-normal gap-6 h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-9 w-36 sm:h-10 sm:w-40">
              <Image
                src="/images/logo.png"
                alt="Beyond Catering"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-12 text-[16px] font-semibold tracking-wide">
            <Link href="/blog" className="hover:text-blue-800 transition">Blog</Link>

            <div ref={dropdownRef} className="relative flex items-center gap-1">
              <Link href="/services" className="hover:text-blue-800 transition">Services</Link>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-xl bg-white border shadow-xl z-50 transition-all duration-200 origin-top scale-100">
                  {[
                    ['Private Dining', '/services/private-dining'],
                    ['Weddings', '/services/weddings'],
                    ['Corporate Events', '/services/corporate-events'],
                    ['VIP & Royal Events', '/services/vip-events'],
                  ].map(([label, path]) => (
                    <Link
                      key={path}
                      href={path}
                      className="block px-5 py-3 text-sm text-gray-800 hover:bg-blue-50 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-blue-800 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-800 transition">Contact</Link>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link
              href="/book"
              className="bg-blue-900 text-white hover:bg-blue-800 px-5 py-2 rounded-md text-[15px] font-semibold transition duration-200"
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