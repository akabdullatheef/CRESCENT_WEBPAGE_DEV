import React from 'react';
import { Monitor, BookOpen, Footprints, FlaskConical, Palette, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { facilities } from '../mock';
import { Card, CardContent } from '../components/ui/card';

const Facilities = () => {
  const { language } = useLanguage();
  const currentFacilities = facilities[language];

  const additionalFacilities = [
    {
      icon: Palette,
      title: language === 'en' ? 'Art & Craft Room' : 'கலை மற்றும் கருவிகள் அறை',
      desc: language === 'en' ? 'Creative space for artistic expression' : 'கலை விரிவாக்கதற்கான படைப்பாற்றல் இடம்'
    },
    {
      icon: Music,
      title: language === 'en' ? 'Music Room' : 'இசை அறை',
      desc: language === 'en' ? 'Learn and practice musical instruments' : 'இசை கருவிகளை கற்க மற்றும் பயிற்சி'
    },
    {
      icon: Monitor,
      title: language === 'en' ? 'Computer Lab' : 'கணினி ஆய்வகம்',
      desc: language === 'en' ? 'Latest computers for digital learning' : 'டிஜிட்டல் கற்றலுக்கான சென்ன கணினிகள்'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {language === 'en' ? 'Our Facilities' : 'எங்கள் வசதிகள்'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'en'
              ? 'World-class infrastructure designed for holistic development'
              : 'முழுமையான வளர்ச்சிக்காக வடிவமைக்கப்பட்ட உலகத்தரம் அடிப்படை கட்டமைப்பு'
            }
          </p>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {currentFacilities.map((facility) => (
              <Card key={facility.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Additional Amenities' : 'கூடுதல் வசதிகள்'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-2xl transition-all text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex p-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mb-6">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-900">{facility.title}</h3>
                    <p className="text-gray-600 text-lg">{facility.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Safety & Security' : 'பாதுகாப்பு மற்றும் பராமரிப்பு'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: language === 'en' ? 'CCTV Surveillance' : 'CCTV காப்பு', desc: language === 'en' ? '24/7 monitoring for safety' : '24/7 பாதுகாப்பு கண்காணிப்பு' },
                { title: language === 'en' ? 'Trained Staff' : 'பயிற்சி பெற்ற ஊழியர்கள்', desc: language === 'en' ? 'Qualified staff for child safety' : 'குழந்தைகள் பாதுகாப்புக்கான தகுதி பெற்ற ஊழியர்கள்' },
                { title: language === 'en' ? 'First Aid' : 'முதல்விலை உதவி', desc: language === 'en' ? 'Medical assistance available' : 'மருத்துவ உதவி கிடைக்கும்' },
                { title: language === 'en' ? 'Fire Safety' : 'தீ பாதுகாப்பு', desc: language === 'en' ? 'Fire extinguishers and safety drills' : 'தீ அணைப்பான்கள் மற்றும் பாதுகாப்பு பயிற்சிகள்' }
              ].map((safety, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <div className="p-3 bg-green-500 rounded-full flex-shrink-0">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{safety.title}</h3>
                    <p className="text-gray-700">{safety.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
