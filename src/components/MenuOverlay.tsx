'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  onClose: () => void;
};

const MenuOverlay = ({ onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgroundimage1.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-[Playfair Display] mb-6">
          Explore Our Menus
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-light">
          Discover handcrafted canapés, comforting bowls, artful platters, and elegant mains — tailored for every occasion.
        </p>

        {/* Close Button (Arrow Down) */}
        <button
          onClick={onClose}
          className="mt-10 animate-bounce focus:outline-none"
          aria-label="Close menu overlay"
        >
          <IoIosArrowForward
            size={40}
            className="rotate-90 opacity-80 hover:opacity-100 transition"
          />
        </button>
      </div>
    </div>
  );
};

export default MenuOverlay;