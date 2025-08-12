import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo1.webp';

const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blogs", to: "/blog" },
  { name: "Products", to: "/products" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/50 backdrop-blur-md shadow font-sans fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 block" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-[17px] font-medium">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `transition-all duration-200 transform hover:scale-105 ${
                    isActive ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'
                  }`
                }
                end={link.to === "/"}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-primary text-white rounded-full px-6 py-2 shadow-md hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-3">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-[15px] py-2 px-3 rounded-md transition-all transform hover:scale-105 duration-200 ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'text-gray-900 hover:text-primary hover:font-semibold'
                      }`
                    }
                    end={link.to === "/"}
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Contact Button in Mobile */}
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-[15px] py-2 px-4 mt-1 bg-primary text-white rounded-full font-semibold text-center transition-transform transform hover:scale-105 duration-200"
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
