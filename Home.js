import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Trophy, Baby, ArrowRight, CheckCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schoolInfo, heroImages, programs, facilities, testimonials } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const { language } = useLanguage();
  const currentPrograms = programs[language];
  const currentFacilities = facilities[language];
  const currentTestimonials = testimonials[language];

  const iconMap = {
    Baby: Baby,
    BookOpen: BookOpen,
    Star: Star,
    Trophy: Trophy
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImages[0]}
            alt="Happy Children"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {schoolInfo.tagline[language].split('!!')[0]}!!
            </h1>
            <p className="text-xl md:text-3xl mb-8 font-semibold text-yellow-300 animate-fade-in-delay">
              {schoolInfo.tagline[language].split('!!')[1]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold text-lg px-8 shadow-lg transform hover:scale-105 transition-transform"
              >
                <Link to="/admissions">
                  {language === 'en' ? 'Admissions Open 2025-26' : '2025-26 சேர்க்கை திறந்துள்ளது'}
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold text-lg px-8 transform hover:scale-105 transition-transform"
              >
                <Link to="/contact">
                  {language === 'en' ? 'Apply Virtual Tour' : 'மெய்நிகர் சுற்றுப் பார்வைக்கு'}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '150+', label: language === 'en' ? 'Students' : 'மாணவர்கள்', color: 'from-pink-400 to-pink-500' },
              { number: '20+', label: language === 'en' ? 'Teachers' : 'ஆசிரியர்கள்', color: 'from-blue-400 to-blue-500' },
              { number: '3', label: language === 'en' ? 'Acres Campus' : 'ஏக்கர் வளாகம்', color: 'from-orange-400 to-orange-500' },
              { number: '5+', label: language === 'en' ? 'Years Experience' : 'வருடங்கள் அனுபவம்', color: 'from-purple-400 to-purple-500' }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-purple-900">
                {language === 'en' ? 'About Us' : 'எங்களை பற்றி'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === 'en' 
                  ? "CIET is Cuddalore's first school blending CBSE academics with Quranic education, nurturing well-rounded individuals for Duniya and Akhirah."
                  : "CIET குடலூரின் முதல் பள்ளியாகும், CBSE கல்வியுடன் குர்ஆன் கல்வியை ஒருங்கிணைக்கும் பள்ளியாகும்."
                }
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  language === 'en' ? 'CBSE Curriculum Excellence' : 'CBSE பாடத்திட்ட சிறப்பு',
                  language === 'en' ? 'Quran & Islamic Education' : 'குர்ஆன் மற்றும் இஸ்லாமிய கல்வி',
                  language === 'en' ? 'Safe & Caring Environment' : 'பாதுகாப்பான சூழல்',
                  language === 'en' ? 'Experienced Teachers' : 'அனுபவம் வாய்ந்த ஆசிரியர்கள்'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
                <Link to="/about">
                  {language === 'en' ? 'Learn More' : 'மேலும் அறிய'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={heroImages[1]}
                  alt="School"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hafiz Program Highlight */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-full mb-4 animate-bounce-slow">
              {language === 'en' ? 'SPECIAL PROGRAM' : 'சிறப்பு திட்டம்'}
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'HAFIZ PROGRAM' : 'ஹாஃபிழ் திட்டம்'}
            </h2>
            <p className="text-2xl font-semibold text-purple-800 mb-8">
              {language === 'en' 
                ? 'Enabling Students to Become Hafiz by Grade 10'
                : '10-ம் வகுப்பில் மாணவர்கள் ஹாஃபிழ் ஆவதற்கு'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1643429096345-9de0d2ab7e7c"
                alt="Hafiz Program"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-pulse">
                ⭐
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'en'
                  ? 'Our specialized Hafiz program combines Quran memorization with academic excellence. Students receive dedicated guidance from qualified Qari teachers.'
                  : 'எங்கள் சிறப்பு ஹாஃபிழ் திட்டம் குர்ஆன் மன்னத்தை கல்வி சிறப்புடன் ஒருங்கிணைக்கிறது.'
                }
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Heart, text: language === 'en' ? 'Qualified Qari Teachers' : 'தகுதிவாய்ந்த கரீ ஆசிரியர்கள்', color: 'text-pink-600' },
                  { icon: Star, text: language === 'en' ? 'Structured Curriculum' : 'கட்டமைக்கப்பட்ட பாடத்திட்டம்', color: 'text-yellow-600' },
                  { icon: CheckCircle, text: language === 'en' ? 'Regular Progress Tracking' : 'வழக்கமான முன்னேற்ற கண்காணிப்பு', color: 'text-green-600' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className={`h-7 w-7 ${item.color}`} />
                      <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold">
                <Link to="/hafiz-program">
                  {language === 'en' ? 'Learn More About Hafiz Program' : 'ஹாஃபிழ் திட்டத்தை பற்றி மேலும் அறிய'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">
              {language === 'en' ? 'Programs Offered' : 'வழங்கப்படும் திட்டங்கள்'}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === 'en' 
                ? 'Comprehensive education programs for holistic development'
                : 'முழுமையான வளர்ச்சிக்கு விரிவான கல்வி திட்டங்கள்'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPrograms.map((program) => {
              const IconComponent = iconMap[program.icon];
              return (
                <Card 
                  key={program.id} 
                  className={`${program.color} border-0 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {IconComponent && <IconComponent className="h-12 w-12 text-purple-700" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-purple-900">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">
              {language === 'en' ? 'World-Class Facilities' : 'உலகத்தரம் வசதிகள்'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFacilities.map((facility) => (
              <div 
                key={facility.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer"
              >
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">
              {language === 'en' ? 'What Parents Say' : 'பெற்றோர் குறிப்புகள்'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-purple-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to Join Our Community?'
              : 'எங்கள் சமூகத்தில் சேர தயாரா?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Give your child the gift of quality education rooted in faith and excellence.'
              : 'உங்கள் குழந்தைக்கு நம்பிக்கையிலும் சிறப்பிலும் வேரூன்றிய தரமான கல்வியை வழங்குங்கள்.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold text-lg px-8 shadow-xl transform hover:scale-105 transition-all"
            >
              <Link to="/admissions">
                {language === 'en' ? 'Apply Now' : 'இப்போது விண்ணப்பிக்கவும்'}
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold text-lg px-8 transform hover:scale-105 transition-all"
            >
              <Link to="/contact">
                {language === 'en' ? 'Contact Us' : 'எங்களை தொடர்பு கொள்ளுங்கள்'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
