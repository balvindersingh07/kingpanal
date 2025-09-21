import React from 'react';
import { Button } from './ui/button';

export const ArtisanStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1632726733402-4a059a476028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwd2VhdmluZyUyMHRleHRpbGV8ZW58MXx8fHwxNzU4MzgwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artisan at work" 
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Golden border accent */}
            <div className="absolute -inset-4 border-4 border-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-[#D4AF37] opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-[#D4AF37] opacity-60"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Crafted by Artisans,
                <span className="text-[#D4AF37] block">Curated by Singh & Kaur</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every piece in our collection tells a story of generations-old craftsmanship. 
                Our skilled artisans pour their heart and soul into creating masterpieces that 
                honor our rich cultural heritage while embracing contemporary elegance.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From the intricate Phulkari embroidery of Punjab to the delicate mirror work 
                of Rajasthan, each creation is a testament to India's diverse textile traditions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F0F0F] mb-1">Hand-Crafted Excellence</h3>
                  <p className="text-gray-600">Each piece is meticulously crafted by master artisans with decades of experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F0F0F] mb-1">Cultural Heritage</h3>
                  <p className="text-gray-600">Preserving traditional techniques while creating contemporary designs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#0F0F0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F0F0F] mb-1">Sustainable Practices</h3>
                  <p className="text-gray-600">Supporting local communities and environmentally conscious production.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 transform hover:scale-105"
              >
                Know Our Virsa
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                <div className="text-sm text-gray-600 mt-1">Skilled Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>25+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>15+</div>
                <div className="text-sm text-gray-600 mt-1">States Represented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};