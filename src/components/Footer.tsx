import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display text-white mb-4">Chile Exclusive</h3>
            <p className="text-white/60 text-sm">
              Luxury experiences in Chile's most breathtaking destinations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#experiences" className="text-white/60 hover:text-gold-400 text-sm">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-gold-400 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-gold-400 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-white/60 hover:text-gold-400 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white/60 hover:text-gold-400 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Chile Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};