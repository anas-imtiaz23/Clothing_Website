import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold">BrandName</h2>
          <p className="text-gray-400 mt-3">
            Elevate your style with our latest fashion collections. Quality, comfort, and elegance in every piece.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/faq" className="text-gray-400 hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <p className="text-gray-400">Subscribe to our newsletter for the latest trends and offers.</p>
          <form className="mt-3 flex items-center">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded-l bg-gray-800 text-white w-full"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">Subscribe</button>
          </form>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BrandName. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
