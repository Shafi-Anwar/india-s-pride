"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { routes } from './items';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='relative flex justify-between items-center p-4 bg-transparent shadow-md'>
      <div className='flex items-center'>
        <Image
          width={50}
          height={50}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fgallery%2FAI-generated-cyberpunk-style-female-avatar.jpg&f=1&nofb=1&ipt=8db060b81b9aa6fe84ece78518e367cf851230d69692eb630e8c311679865d1e&ipo=images"
          alt='hello'
        />
      </div>
      <nav className='hidden md:flex space-x-4'>
        {routes.map((item) => (
          <Link key={item.href} href={item.href} passHref className='text-gray-700 hover:text-blue-500'>

              {item.label}
          </Link>
        ))}
      </nav>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className='absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:hidden animate-slideDown'>
          <div className='flex flex-col space-y-2'>
            {routes.map((item) => (
              <Link key={item.href} href={item.href} passHref className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>
                  {item.label}

              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
