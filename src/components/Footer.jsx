import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
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
            <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
            <li><NavLink to="/about" className="text-gray-400 hover:text-white">About</NavLink></li>
            <li><NavLink to="/blog" className="text-gray-400 hover:text-white">Blog</NavLink></li>
            <li><NavLink to="/products" className="text-gray-400 hover:text-white">Products</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-400 hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <address className="not-italic text-gray-400 space-y-2">
            <p>
              <a 
                href="https://maps.app.goo.gl/y6pVimQEaG7Gs9gr8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white"
              >
                JWPQ+R9C, Vembayam
              </a>
            </p>
            <p className='flex flex-col'>
              <a href="tel:7837888666" className="hover:text-white">Phone: 7837 888 666</a>
              <a href="tel:9447745440" className="hover:text-white">Phone: 9447 745 440</a>
              <a href="tel:7307888666" className="hover:text-white">Phone: 9447 745 440</a>
            </p>
            <p>
              <a href="info@sigmasands.in" className="hover:text-white">info@goldensands.com</a>
            </p>
          </address>
        </div>

        {/* Google Map Embed */}
        <div>
          <h4 className="font-semibold mb-3">Location</h4>
          <div className="w-full h-48 md:h-32 lg:h-40 overflow-hidden rounded-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5715676829045!2d76.93839059999999!3d8.6370625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c73c2626ecc5%3A0x8e6f4570e1f3a615!2sJWPQ%2BR9C%2C%20Vembayam%2C%20Kerala%20695615!5e0!3m2!1sen!2sin!4v1754329191369!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4 space-y-1">
        <p>© 2025 Goldensands. All rights reserved.</p>
        <a href="https://grid-full-stackwebsite.pages.dev/">
          <p>Developed by <span className="text-white">DiveGrid*</span></p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
