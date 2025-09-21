import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingSection } from './components/TrendingSection';
import { WeddingBanner } from './components/WeddingBanner';
import { ArtisanStory } from './components/ArtisanStory';
import { ProductListing } from './components/ProductListing';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Button } from './components/ui/button';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <TrendingSection />
            <WeddingBanner />
            <ArtisanStory />
          </>
        );
      case 'products':
        return <ProductListing />;
      case 'product-detail':
        return <ProductDetail />;
      case 'cart':
        return <Cart />;
      default:
        return (
          <>
            <Hero />
            <TrendingSection />
            <WeddingBanner />
            <ArtisanStory />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      {/* Navigation Demo - Remove in production */}
      <div className="fixed top-24 right-4 z-50 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg border space-y-2">
        <div className="text-sm font-semibold text-[#0F0F0F] mb-2">Demo Navigation</div>
        <Button 
          variant={currentPage === 'home' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentPage('home')}
          className={currentPage === 'home' ? 'bg-[#D4AF37] text-[#0F0F0F]' : ''}
        >
          Home
        </Button>
        <Button 
          variant={currentPage === 'products' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentPage('products')}
          className={currentPage === 'products' ? 'bg-[#D4AF37] text-[#0F0F0F]' : ''}
        >
          Products
        </Button>
        <Button 
          variant={currentPage === 'product-detail' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentPage('product-detail')}
          className={currentPage === 'product-detail' ? 'bg-[#D4AF37] text-[#0F0F0F]' : ''}
        >
          Product Detail
        </Button>
        <Button 
          variant={currentPage === 'cart' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentPage('cart')}
          className={currentPage === 'cart' ? 'bg-[#D4AF37] text-[#0F0F0F]' : ''}
        >
          Cart
        </Button>
      </div>

      <main className="relative">
        {renderPage()}
      </main>
      
      <Footer />

      {/* Custom Styles */}
      <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #B8941F;
        }

        /* Typography overrides for brand fonts */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif !important;
        }
        
        body, p, span, div, button, input {
          font-family: 'Inter', sans-serif !important;
        }

        /* Smooth transitions */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        /* Gold gradient shine animation */
        @keyframes goldShine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .gold-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: goldShine 2s ease-in-out infinite;
        }

        /* Hover animations for buttons */
        .btn-gold-hover {
          position: relative;
          overflow: hidden;
        }

        .btn-gold-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-gold-hover:hover::before {
          left: 100%;
        }

        /* Cultural pattern backgrounds */
        .phulkari-pattern {
          background-image: radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0);
          background-size: 20px 20px;
          opacity: 0.1;
        }

        /* Luxury card shadows */
        .luxury-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(212, 175, 55, 0.1);
        }

        .luxury-shadow:hover {
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </div>
  );
}