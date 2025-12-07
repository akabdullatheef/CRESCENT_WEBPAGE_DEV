import React from 'react';
import { Star, BookOpen, Users, Award, CheckCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { hafizProgram } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const HafizProgram = () => {
  const { language } = useLanguage();
  const content = hafizProgram[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 animate-bounce-slow">
              <Star className="h-20 w-20 text-yellow-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {content.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-delay">
              {content.subtitle}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold text-lg px-8 shadow-xl transform hover:scale-110 transition-all animate-fade-in-delay-2"
            >
              <Link to="/admissions">
                {language === 'en' ? 'Enroll Now' : 'இப்போது சேரவும்'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={content.image}
                alt="Hafiz Program"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50 blur-2xl"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-purple-900">
                {language === 'en' ? 'What is the Hafiz Program?' : 'ஹாଃபிழ் திட்டம் என்ன?'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {content.description}
              </p>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-800 font-semibold">
                  {language === 'en'
                    ? '“The best among you are those who learn the Quran and teach it.” - Prophet Muhammad (PBUH)'
                    : '"குர்ஆனை கற்று அதை கற்பிக்கும் உங்களில் சிறந்தவர்களே உங்களில் சிறந்தவர்கள்." - நபி (PBUH)'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Program Features' : 'திட்ட அம்சங்கள்'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Learning Journey' : 'கற்றல் பயணம்'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  icon: BookOpen,
                  title: language === 'en' ? 'Foundation Phase (Grades 1-3)' : 'அடிப்படை கட்டம் (1-3)',
                  desc: language === 'en' ? 'Basic Arabic pronunciation, short Surahs, and Tajweed fundamentals' : 'அறபி உச்சரிப்பு, சிறிய சூராக்கள், தஜ்வீத் அடிப்படைகள்',
                  color: 'from-blue-400 to-blue-600'
                },
                {
                  icon: Star,
                  title: language === 'en' ? 'Memorization Phase (Grades 4-7)' : 'மன்னம் கட்டம் (4-7)',
                  desc: language === 'en' ? 'Structured Quran memorization with regular revision' : 'கட்டமைக்கப்பட்ட குர்ஆன் மன்னம் மற்றும் திருத்தம்',
                  color: 'from-purple-400 to-purple-600'
                },
                {
                  icon: Award,
                  title: language === 'en' ? 'Completion Phase (Grades 8-10)' : 'முடிவு கட்டம் (8-10)',
                  desc: language === 'en' ? 'Final portions and comprehensive revision leading to Hafiz certification' : 'இறுதி பகுதிகள் மற்றும் முழு திருத்தம் - ஹாஃபிழ் சான்றிதழ்',
                  color: 'from-orange-400 to-orange-600'
                },
                {
                  icon: Users,
                  title: language === 'en' ? 'Community Integration' : 'சமூக ஒருங்கிணைப்பு',
                  desc: language === 'en' ? 'Regular Quran recitation programs and community events' : 'வழக்கமான குர்ஆன் ஒதுதல் நிகழ்ச்சிகள் மற்றும் சமூக நிகழ்வுகள்',
                  color: 'from-green-400 to-green-600'
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 bg-gradient-to-br ${phase.color} rounded-full flex-shrink-0`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3 text-purple-900">{phase.title}</h3>
                          <p className="text-gray-700 text-lg">{phase.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Benefits of Becoming a Hafiz' : 'ஹாஃபிழ் ஆவதற்கான நன்மைகள்'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: language === 'en' ? 'Spiritual Growth' : 'ஆன்மீக வளர்ச்சி',
                desc: language === 'en' ? 'Deep connection with Allah and Islamic values' : 'அல்லாஹ்வுடன் ஆழமான தொடர்பு'
              },
              {
                icon: Star,
                title: language === 'en' ? 'Memory Excellence' : 'நினைவாற்றல் சிறப்பு',
                desc: language === 'en' ? 'Enhanced memory and cognitive abilities' : 'மேம்படுத்தப்பட்ட நினைவாற்றல் திறன்'
              },
              {
                icon: Award,
                title: language === 'en' ? 'Community Honor' : 'சமூக மரியாதை',
                desc: language === 'en' ? 'Respected position in Muslim community' : 'முஸ்லீம் சமூகத்தில் மரியாதை'
              },
              {
                icon: BookOpen,
                title: language === 'en' ? 'Academic Success' : 'கல்வி வெற்றி',
                desc: language === 'en' ? 'Disciplined study habits aid all subjects' : 'அனைத்து பாடங்களுக்கும் உதவும் '
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-purple-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' 
              ? 'Enroll Your Child in the Hafiz Program Today!'
              : 'உங்கள் குழந்தையை இன்றே ஹாஃபிழ் திட்டத்தில் சேர்க்கவும்!'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Give your child the gift of memorizing the Holy Quran while excelling academically.'
              : 'கல்வியில் சிறந்து விளங்கும் போது பரிசுத்த குர்ஆனை மனப்பாடம் செய்யும் வரத்தை உங்கள் குழந்தைக்கு வழங்குங்கள்.'
            }
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 font-bold text-lg px-10 py-6 shadow-xl transform hover:scale-110 transition-all"
          >
            <Link to="/admissions">
              {language === 'en' ? 'Apply for Admission' : 'சேர்க்கைக்கு விண்ணப்பிக்கவும்'}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HafizProgram;
