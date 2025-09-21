import React from 'react';
import { Button } from './ui/button';

export const WeddingBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with maroon silk texture */}
      <div className="absolute inset-0 bg-[#7E1F24]"></div>
      
      {/* Gold floral overlay pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23D4AF37" fill-opacity="0.6"><path d="M50 5 C 65 20, 80 35, 65 50 C 80 65, 65 80, 50 95 C 35 80, 20 65, 35 50 C 20 35, 35 20, 50 5 Z"/><circle cx="50" cy="50" r="8" fill="%23D4AF37" fill-opacity="0.8"/></g></svg>')`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }}
      ></div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent transform skew-x-12 translate-x-[-100%] animate-shine"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDFCF7] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Wedding Edit
          </h2>
          
          <p className="text-xl md:text-2xl text-[#FDFCF7]/90 mb-8 leading-relaxed">
            Celebrate your special moments with our exquisite collection of wedding attire. 
            From regal lehengas to majestic sherwanis, make your day unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 transform hover:scale-105 text-lg"
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-[#FDFCF7] text-[#FDFCF7] hover:bg-[#FDFCF7] hover:text-[#7E1F24] px-10 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Book Consultation
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FDFCF7] mb-2">Premium Quality</h3>
              <p className="text-[#FDFCF7]/80">Finest fabrics and intricate craftsmanship</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FDFCF7] mb-2">Custom Tailoring</h3>
              <p className="text-[#FDFCF7]/80">Perfect fit guaranteed for your special day</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FDFCF7] mb-2">Heritage Designs</h3>
              <p className="text-[#FDFCF7]/80">Timeless patterns rooted in tradition</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};