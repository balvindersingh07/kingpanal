import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-[#FDFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Singh & Kaur
              </h3>
              <p className="text-[#FDFCF7]/80 leading-relaxed">
                Heritage. Elegance. Culture. Celebrating the timeless beauty of Indian traditions 
                through contemporary luxury fashion.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#D4AF37] rounded-full hover:bg-[#D4AF37]/80 transition-colors">
                <Facebook className="h-5 w-5 text-[#0F0F0F]" />
              </a>
              <a href="#" className="p-2 bg-[#D4AF37] rounded-full hover:bg-[#D4AF37]/80 transition-colors">
                <Instagram className="h-5 w-5 text-[#0F0F0F]" />
              </a>
              <a href="#" className="p-2 bg-[#D4AF37] rounded-full hover:bg-[#D4AF37]/80 transition-colors">
                <Twitter className="h-5 w-5 text-[#0F0F0F]" />
              </a>
              <a href="#" className="p-2 bg-[#D4AF37] rounded-full hover:bg-[#D4AF37]/80 transition-colors">
                <Youtube className="h-5 w-5 text-[#0F0F0F]" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Women's Collection</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Men's Collection</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Wedding Collection</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Jewelry & Accessories</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Handicrafts</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Artisan Partners</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">Help</h4>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#FDFCF7]/80 hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm text-[#FDFCF7]/80">Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm text-[#FDFCF7]/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm text-[#FDFCF7]/80">hello@singhkaur.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-[#D4AF37]/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold text-[#D4AF37] mb-4">Stay Connected</h4>
            <p className="text-[#FDFCF7]/80 mb-6">Subscribe to our newsletter for exclusive offers and cultural stories</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-[#FDFCF7]/10 border border-[#D4AF37]/30 rounded-full text-[#FDFCF7] placeholder-[#FDFCF7]/60 focus:outline-none focus:border-[#D4AF37]"
              />
              <button className="px-6 py-3 bg-[#D4AF37] text-[#0F0F0F] rounded-full hover:bg-[#D4AF37]/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#FDFCF7]/60">We Accept:</span>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-800">VISA</div>
                <div className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-800">UPI</div>
                <div className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-800">PayPal</div>
                <div className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-800">COD</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-[#FDFCF7]/60">
                © 2025 Singh & Kaur – Heritage. Elegance. Culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};