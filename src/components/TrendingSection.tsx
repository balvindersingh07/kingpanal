import React from 'react';
import { Star, Heart, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export const TrendingSection = () => {
  const products = [
    {
      id: 1,
      name: "Royal Maroon Lehenga",
      price: "₹25,999",
      originalPrice: "₹35,999",
      image: "https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 124,
      tag: "TRENDING"
    },
    {
      id: 2,
      name: "Golden Embroidered Kurta",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: "https://images.unsplash.com/photo-1699800709647-649643a39de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW4lMjBrdXJ0YSUyMHB1bmphYmklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzODA4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 89,
      tag: "NEW"
    },
    {
      id: 3,
      name: "Vintage Gold Jewelry Set",
      price: "₹45,999",
      originalPrice: "₹55,999",
      image: "https://images.unsplash.com/photo-1723879580148-517048db5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGluZGlhbnxlbnwxfHx8fDE3NTgzODA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 67,
      tag: "PREMIUM"
    },
    {
      id: 4,
      name: "Traditional Wedding Sherwani",
      price: "₹18,999",
      originalPrice: "₹24,999",
      image: "https://images.unsplash.com/photo-1617310490327-7ccc880ca34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5qYWJpJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MzgwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 156,
      tag: "BESTSELLER"
    }
  ];

  return (
    <section className="py-16 bg-[#FDFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Trending Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most coveted pieces that celebrate the perfect blend of tradition and contemporary style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F0F0F] px-3 py-1 rounded-full text-xs font-semibold">
                  {product.tag}
                </div>

                {/* Wishlist & Quick View */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Golden border on hover */}
                <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-[#D4AF37] fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-lg text-[#0F0F0F] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-[#0F0F0F]">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <Button 
                  className="w-full bg-[#0F0F0F] hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};