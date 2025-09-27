import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Courses
            </a>
          </li>
        </ul>

        {/* Logo Centered */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="font-cursive text-blue-600 text-3xl tracking-wide drop-shadow-md underline decoration-blue-400 decoration-2 underline-offset-4">
            IELTS Institute
          </span>
        </div>

        {/* Right Links + CTA */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a href="#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </a>
          <a href="#footer" className="hover:text-blue-600 transition">
            Contact
          </a>
          <a
            href="#enroll"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-700"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium bg-white shadow">
          <ul className="space-y-4">
            <li>
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#enroll"
            onClick={() => setOpen(false)}
            className="block text-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
