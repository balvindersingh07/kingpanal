import React from 'react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/70 to-[#7E1F24]/30 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      ></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-20" style={{
        backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="%23D4AF37" fill-opacity="1" fill-rule="evenodd"><circle cx="30" cy="30" r="2"/><circle cx="15" cy="15" r="1"/><circle cx="45" cy="15" r="1"/><circle cx="15" cy="45" r="1"/><circle cx="45" cy="45" r="1"/></g></svg>')`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#FDFCF7]" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="block">Singh & Kaur</span>
          <span className="block text-[#D4AF37] text-3xl md:text-4xl lg:text-5xl mt-4">Heritage. Elegance. Culture.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#FDFCF7]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover timeless elegance rooted in tradition. Where every thread tells a story of heritage and every design celebrates culture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Shop Women
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Shop Men
          </Button>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] animate-shine"></div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};