'use client'
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 p-4 flex items-center justify-between">

      <div className="text-white text-2xl font-bold">
        Dynamic Blog By Mithu
      </div>


      <div className="space-x-4">
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
        <Link target='_blank' href="https://github.com/Mithu3311">
          <Button variant="link" className=" text-white hover:text-gray-200" >
            About
          </Button>
        </Link>
      </div>
    </nav>
  );
}
