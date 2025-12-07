import React from 'react';
import { BookOpen, Globe, Calculator, Beaker, Palette, Music, Languages, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/card';

const Curriculum = () => {
  const { language } = useLanguage();

  const subjects = [
    {
      icon: Languages,
      title: language === 'en' ? 'Languages' : 'மொழிகள்',
      desc: language === 'en' ? 'English, Tamil, Hindi, Arabic' : 'ஆங்கிலம், தமிழ், இந்தி, அறபி',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Calculator,
      title: language === 'en' ? 'Mathematics' : 'கணிதம்',
      desc: language === 'en' ? 'Problem-solving and logical thinking' : 'சிக்கல் தீர்வு மற்றும் நுட்ப சிந்தனை',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Beaker,
      title: language === 'en' ? 'Science' : 'அறிவியல்',
      desc: language === 'en' ? 'Physics, Chemistry, Biology' : 'இயக்கவியல், வேதியியல், உயிரியல்',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Social Studies' : 'சமூக அறிவியல்',
      desc: language === 'en' ? 'History, Geography, Civics' : 'வரலாறு, நிலவியல், குடிமக்கள்',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Islamic Studies' : 'இஸ்லாமிய படிப்புகள்',
      desc: language === 'en' ? 'Quran, Hadith, Dheeniyath' : 'குர்ஆன், ஹதீஸ், தீனியத்',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Palette,
      title: language === 'en' ? 'Arts & Crafts' : 'கலை மற்றும் கருவிகள்',
      desc: language === 'en' ? 'Creative expression and design' : 'படைப்பாற்றல் விரிவு மற்றும் வடிவமைப்பு',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Music,
      title: language === 'en' ? 'Music' : 'இசை',
      desc: language === 'en' ? 'Vocal and instrumental training' : 'குரல் மற்றும் கருவியிசை பயிற்சி',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Sports & PE' : 'விளையாட்டு மற்றும் உடற்கல்வி',
      desc: language === 'en' ? 'Physical fitness and team sports' : 'உடல் தண்டிப்பு மற்றும் குழு விளையாட்டுகள்',
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {language === 'en' ? 'Our Curriculum' : 'எங்கள் பாடத்திட்டம்'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'en'
              ? 'A comprehensive CBSE curriculum integrated with Islamic education for holistic development'
              : 'முழுமையான வளர்ச்சிக்காக இஸ்லாமிய கல்வியுடன் ஒருங்கிணைக்கப்பட்ட விரிவான CBSE பாடத்திட்டம்'
            }
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${subject.color} rounded-full mb-4`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-purple-900">{subject.title}</h3>
                    <p className="text-gray-600">{subject.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
