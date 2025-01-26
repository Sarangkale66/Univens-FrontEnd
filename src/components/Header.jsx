import React from 'react';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <div className="fixed w-screen z-20">
      <header className="flex flex-wrap justify-between items-center py-5 px-4 md:px-52">
        <h1 className="text-lg md:text-xl">Univens</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap gap-2 space-x-2 md:space-x-6 border rounded-full py-3 px-2 bg-gradient-to-b">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 bg-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="process"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="comparison"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                Comparison
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 rounded-full py-2 px-3 cursor-pointer"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <button className="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
          Contact Us
        </button>
      </header>
    </div>
  );
};

export default Header;
