import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const suggestions = ['Lehenga', 'Kurta', 'Jewelry', 'Wedding Collection', 'Phulkari'];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#0F0F0F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Singh & Kaur
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 py-2">
                Women
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 p-6">
                <div className="space-y-3">
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Lehenga</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Suits & Kurtas</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Sarees</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Accessories</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 py-2">
                Men
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 p-6">
                <div className="space-y-3">
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Kurtas</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Sherwanis</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">Accessories</a>
                </div>
              </div>
            </div>
            <button className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200">
              Wedding
            </button>
            <button className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200">
              Jewelry
            </button>
            <button className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200">
              Crafts
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              {searchValue && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-lg mt-2 p-4 z-50">
                  {suggestions.filter(s => s.toLowerCase().includes(searchValue.toLowerCase())).map((suggestion, idx) => (
                    <div key={idx} className="py-2 px-3 hover:bg-gray-50 cursor-pointer rounded text-sm">
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-[#D4AF37] transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <button className="p-2 text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-2">
              <button className="block w-full text-left py-2 text-gray-700 hover:text-[#D4AF37] transition-colors">Women</button>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-[#D4AF37] transition-colors">Men</button>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-[#D4AF37] transition-colors">Wedding</button>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-[#D4AF37] transition-colors">Jewelry</button>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-[#D4AF37] transition-colors">Crafts</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};