import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryImages } from '../mock';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Classroom', 'Activities', 'Sports', 'Events', 'Islamic Studies', 'Quran Class'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {language === 'en' ? 'Photo Gallery' : 'படத்தொகுப்பு'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'en'
              ? 'Glimpses of life at Crescent School - Where learning meets joy'
              : 'கிரசண்ட் பள்ளியில் வாழ்க்கையின் காட்சிகள் - கற்றல் மகிழ்ச்சியை சந்திக்கும் இடம்'
            }
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-64 group">
                  <img 
                    src={image.url}
                    alt={image.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-lg font-bold">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-600">
                {language === 'en' ? 'No images found in this category' : 'இந்த பகுப்பில் படங்கள் இல்லை'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Want to See More?' : 'மேலும் பார்க்க விரும்புகிறீர்களா?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Take a virtual tour of our campus and see our facilities in action!'
              : 'எங்கள் வளாகத்தின் மெய்நிகர் சுற்றுப் பார்வையை மேற்கொள்ளுங்கள்!'
            }
          </p>
          <Button 
            size="lg"
            className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold text-lg px-10 py-6 shadow-xl transform hover:scale-110 transition-all"
          >
            {language === 'en' ? 'Request Virtual Tour' : 'மெய்நிகர் சுற்றுப் பார்வை கோரவும்'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
