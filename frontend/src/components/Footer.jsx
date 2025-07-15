import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-18">
        {/* Brand */}
        <div>
          <h1 className="text-lg font-medium mb-3"><img src="/portfolio_favicon.png" alt="" width="24px"/></h1>
          <p className="text-xs font-extralight text-gray-700 mt-6">
            Crafting modern and scalable web solutions with elegance. 
            Passionate about full-stack development and creating seamless user experiences.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-lg font-medium mb-3">About Us</h2>
          <ul className="text-xs font-extralight space-y-1 text-gray-700">
            <li>Who I Am</li>
            <li>What I Do</li>
            <li>My Projects</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact</h2>
          <ul className="text-xs font-extralight text-gray-700 space-y-2">
            <li>📞 +91 9874243125</li>
            <li>📧 tanay.dutta881@gmail.com</li>
            <li>🌍 Howrah, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-medium mb-3">Follow Me</h2>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61560961414789" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://x.com/itanay24" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/__t.dot.d/" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://github.com/tanay881" className="hover:text-gray-800">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-xs font-extralight text-gray-600">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
