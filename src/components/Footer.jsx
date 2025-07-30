import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Goldensands</h3>
          <p className="text-gray-400">
            Premium sand supplier since 2005, delivering high-quality sand for construction and landscaping across regions with reliability and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><NavLink to="/about" className="text-gray-400 hover:text-white">About</NavLink></li>
            <li><NavLink to="/products" className="text-gray-400 hover:text-white">Products</NavLink></li>
            <li><NavLink to="/why-us" className="text-gray-400 hover:text-white">Why Us</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-400 hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <address className="not-italic text-gray-400 space-y-1">
            <p>
              <a 
                href="https://www.google.com/maps/place/123+Industrial+Area" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white"
              >
                123 Industrial Area, Zone 4
              </a>
            </p>
            <p>Cityname, State 560001</p>
            <p>
              <a href="tel:7837888666" className="hover:text-white">Phone: 7837 888 666</a>
            </p>
            <p>
              <a href="mailto:info@goldensands.com" className="hover:text-white">info@goldensands.com</a>
            </p>
          </address>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="font-semibold mb-3">Business Hours</h4>
          <p className="text-gray-400">Monday – Saturday: 8AM – 8PM</p>
          <p className="text-gray-400">Sunday: Closed</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4 space-y-1">
        <p>© 2025 Goldensands. All rights reserved.</p>
        <p>Developed by <span className="text-white">DiveGrid*</span></p>
      </div>
    </footer>
  );
};

export default Footer;
