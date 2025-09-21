import React, { useState } from 'react';
import { Filter, Grid, List, Star, Heart, Eye, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Royal Maroon Lehenga",
      price: 25999,
      originalPrice: 35999,
      image: "https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 124,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Maroon', 'Gold'],
      category: 'Women'
    },
    {
      id: 2,
      name: "Golden Embroidered Kurta",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1699800709647-649643a39de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW4lMjBrdXJ0YSUyMHB1bmphYmklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzODA4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 89,
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Golden', 'Cream'],
      category: 'Men'
    },
    {
      id: 3,
      name: "Vintage Gold Jewelry Set",
      price: 45999,
      originalPrice: 55999,
      image: "https://images.unsplash.com/photo-1723879580148-517048db5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGluZGlhbnxlbnwxfHx8fDE3NTgzODA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 67,
      sizes: ['One Size'],
      colors: ['Gold'],
      category: 'Jewelry'
    },
    {
      id: 4,
      name: "Traditional Wedding Sherwani",
      price: 18999,
      originalPrice: 24999,
      image: "https://images.unsplash.com/photo-1617310490327-7ccc880ca34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5qYWJpJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MzgwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 156,
      sizes: ['M', 'L', 'XL'],
      colors: ['Cream', 'Gold'],
      category: 'Wedding'
    },
    // Duplicate for demonstration
    ...Array(8).fill(null).map((_, i) => ({
      id: i + 5,
      name: "Elegant Silk Saree",
      price: 15999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      reviews: 98,
      sizes: ['Free Size'],
      colors: ['Silk Blue', 'Golden'],
      category: 'Women'
    }))
  ];

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100000}
            min={1000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Category</h3>
        <div className="space-y-3">
          {['Women', 'Men', 'Wedding', 'Jewelry', 'Crafts'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm text-gray-600 cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Size</h3>
        <div className="space-y-3">
          {['S', 'M', 'L', 'XL', 'XXL', 'Free Size'].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} />
              <label htmlFor={size} className="text-sm text-gray-600 cursor-pointer">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Color</h3>
        <div className="grid grid-cols-4 gap-2">
          {['Red', 'Blue', 'Green', 'Gold', 'Black', 'White', 'Maroon', 'Pink'].map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-[#D4AF37] transition-colors"
              style={{ backgroundColor: color.toLowerCase() === 'maroon' ? '#7E1F24' : color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Rating</h3>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label htmlFor={`rating-${rating}`} className="flex items-center text-sm text-gray-600 cursor-pointer">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < rating ? 'text-[#D4AF37] fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2">& above</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-[#FDFCF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F0F0F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Products
            </h1>
            <p className="text-gray-600 mt-2">Showing {products.length} results</p>
          </div>

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#D4AF37] text-white' : 'text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#D4AF37] text-white' : 'text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-[#0F0F0F] mb-6">Filters</h2>
              <FilterSidebar />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'grid' ? 'h-64' : 'h-48'}`}
                    />
                    
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

                    <h3 className="font-semibold text-lg text-[#0F0F0F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-[#0F0F0F]">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>

                    <Button 
                      className="w-full bg-[#0F0F0F] hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] transition-all duration-300"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="px-3 py-2">Previous</Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button 
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    className={`px-3 py-2 ${page === 1 ? 'bg-[#D4AF37] text-[#0F0F0F]' : ''}`}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" className="px-3 py-2">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};