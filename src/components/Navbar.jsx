import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo1.png';

const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/95 backdrop-blur-xl shadow font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Nav Row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 block" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-[17px] font-medium">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
                end={link.to === "/"}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-primary text-white rounded-full px-6 py-2 shadow-md hover:bg-primary-dark transition-all duration-300 font-semibold"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-2 rounded-full text-primary focus:outline-none"
            aria-label="Toggle menu"
            type="button"
          >
            <ChevronDown
              size={28}
              className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Dropdown (in flow, not absolute/fixed) */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col gap-2 py-3">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-[15px] py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-gray-900 hover:text-primary'
                    }`
                  }
                  end={link.to === "/"}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-white text-center rounded-full px-5 py-2 shadow-md hover:bg-primary-dark transition-all duration-300 font-medium text-[15px]"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
