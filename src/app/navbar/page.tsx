"use client"
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-500 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        Dynamic Blog By Mithu
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-4">
        <Link href="/">
          <Button variant="link" className="text-white hover:text-gray-200">
            Home
          </Button>
        </Link>
        <Link href="/blog">
          <Button variant="link" className="text-white hover:text-gray-200">
            Blog
          </Button>
        </Link>
        <Link target="_blank" href="https://github.com/Mithu3311">
          <Button variant="link" className="text-white hover:text-gray-200">
            About
          </Button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-500 p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="text-white hover:text-gray-200">
              Home
            </Button>
          </Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="text-white hover:text-gray-200">
              Blog
            </Button>
          </Link>
          <Link target="_blank" href="https://github.com/Mithu3311" onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="text-white hover:text-gray-200">
              About
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
