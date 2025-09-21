import React, { useState } from 'react';
import { Heart, Share2, Star, Minus, Plus, Truck, RotateCcw, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Royal Maroon Lehenga",
    price: 25999,
    originalPrice: 35999,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1617310490327-7ccc880ca34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5qYWJpJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MzgwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1723879580148-517048db5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGluZGlhbnxlbnwxfHx8fDE3NTgzODA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Royal Maroon', value: '#7E1F24' },
      { name: 'Deep Gold', value: '#D4AF37' },
      { name: 'Classic Black', value: '#0F0F0F' }
    ],
    description: "An exquisite royal maroon lehenga that epitomizes the grandeur of Indian craftsmanship. This masterpiece features intricate gold embroidery, delicate mirror work, and fine silk fabric that drapes beautifully. Perfect for weddings, festivals, and special occasions.",
    fabric: "Pure Silk with Gold Zari Work",
    care: "Dry clean only. Store in a cool, dry place away from direct sunlight."
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Golden Embroidered Kurta",
      price: 8999,
      image: "https://images.unsplash.com/photo-1699800709647-649643a39de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW4lMjBrdXJ0YSUyMHB1bmphYmklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzODA4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Vintage Gold Jewelry Set",
      price: 45999,
      image: "https://images.unsplash.com/photo-1723879580148-517048db5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGluZGlhbnxlbnwxfHx8fDE3NTgzODA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Traditional Wedding Sherwani",
      price: 18999,
      image: "https://images.unsplash.com/photo-1617310490327-7ccc880ca34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5qYWJpJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MzgwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-12 bg-[#FDFCF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-[#D4AF37]' : 'border-gray-200 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-[#D4AF37] fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[#D4AF37] font-semibold">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-gray-300 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[#0F0F0F]">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F0F0F] mb-3">Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded-lg transition-all duration-300 ${
                      selectedSize === size 
                        ? 'border-[#D4AF37] bg-[#D4AF37] text-white' 
                        : 'border-gray-300 hover:border-[#D4AF37]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F0F0F] mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 border-4 rounded-full transition-all duration-300 ${
                      selectedColor === color.name 
                        ? 'border-[#D4AF37]' 
                        : 'border-gray-300 hover:border-[#D4AF37]/50'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F0F0F] mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                size="lg"
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline"
                className="w-full border-2 border-[#0F0F0F] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white py-4 text-lg font-semibold transition-all duration-300"
                size="lg"
              >
                Buy Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-sm text-gray-600">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Accordions */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="description">
              <AccordionTrigger className="text-lg font-semibold text-[#0F0F0F]">
                Description
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {product.description}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="fabric">
              <AccordionTrigger className="text-lg font-semibold text-[#0F0F0F]">
                Fabric & Care
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <div className="space-y-2">
                  <p><strong>Fabric:</strong> {product.fabric}</p>
                  <p><strong>Care Instructions:</strong> {product.care}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-semibold text-[#0F0F0F]">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <div className="space-y-2">
                  <p>• Free shipping on orders above ₹2,999</p>
                  <p>• Delivery within 5-7 business days</p>
                  <p>• Easy 30-day return policy</p>
                  <p>• COD available for orders above ₹1,000</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#0F0F0F] text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#0F0F0F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xl font-bold text-[#0F0F0F]">₹{relatedProduct.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};