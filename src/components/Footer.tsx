import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-4">
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl gap-8 ">
        <div className="md:grid-cols-4 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-400">
              Your premier destination for online music education.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="font-semibold text-white text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#instructor" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-semibold text-lg text-white mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>Email: info@musictech.com</li>
              <li>Phone: (555) 123-4567</li>
              <p>New Delhi, India</p>
              <p>Delhi 10001</p>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-semibold text-white text-lg mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={28} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={28} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={28} />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MusicTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
