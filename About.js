import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { aboutContent } from '../mock';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {language === 'en' ? 'About Us' : 'எங்களை பற்றி'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'en' 
              ? "Cuddalore's First School Blending CBSE Academics with Quranic Education"
              : "குடலூரின் முதல் பள்ளி - CBSE கல்வியுடன் குர்ஆன் கல்வியை ஒருங்கிணைக்கும்"
            }
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-t-4 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full mr-4">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    {language === 'en' ? 'Our Vision' : 'எங்கள் நோக்கம்'}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {content.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-purple-100 rounded-full mr-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-purple-900">
                    {language === 'en' ? 'Our Mission' : 'எங்கள் நோக்கம்'}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {content.mission}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Pillars */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
              {language === 'en' ? 'Core Pillars of Our Mission' : 'எங்கள் நோக்கத்தின் முக்கிய தூண்கள்'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: language === 'en' ? 'Academic Excellence' : 'கல்வி சிறப்பு',
                  desc: language === 'en' ? 'Rigorous CBSE curriculum with innovative teaching' : 'CBSE பாடத்திட்டம் மற்றும் புதிய கற்பித்தல்',
                  color: 'from-blue-400 to-blue-600'
                },
                {
                  icon: Heart,
                  title: language === 'en' ? 'Islamic Foundation' : 'இஸ்லாமிய அடிப்படை',
                  desc: language === 'en' ? 'Quran memorization and Islamic values' : 'குர்ஆன் மன்னம் மற்றும் இஸ்லாமிய மதிப்புகள்',
                  color: 'from-green-400 to-green-600'
                },
                {
                  icon: Target,
                  title: language === 'en' ? 'Holistic Development' : 'முழுமையான வளர்ச்சி',
                  desc: language === 'en' ? 'Sports, arts, and life skills programs' : 'விளையாட்டு, கலை மற்றும் வாழ்க்கை திறன்கள்',
                  color: 'from-orange-400 to-orange-600'
                },
                {
                  icon: Heart,
                  title: language === 'en' ? 'Community Service' : 'சமூக சேவை',
                  desc: language === 'en' ? 'Values of empathy and social responsibility' : 'இரக்கம் மற்றும் சமூக பொறுப்பு',
                  color: 'from-pink-400 to-pink-600'
                }
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-full mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-purple-900">{pillar.title}</h3>
                      <p className="text-gray-600">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
              {language === 'en' ? "Principal's Message" : 'முதல்வரின் செய்தி'}
            </h2>
            <Card className="shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd"
                    alt="Principal"
                    className="w-40 h-40 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-2">{content.principalName}</h3>
                    <p className="text-lg text-gray-600 mb-4">{content.principalTitle}</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "{content.principalMessage}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
              {language === 'en' ? 'Our Story' : 'எங்கள் கதை'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {language === 'en'
                  ? "CUDDALORE IQRA EDUCATIONAL TRUST (CIET) was formed on 6th May 2016, to provide a holistic education harmonizing Islamic values with a strong CBSE curriculum foundation. What began with two Kindergarten schools has successfully grown into Nursery and Primary Schools, now educating over 150 students from LKG to Standard V."
                  : "குடலூர் இக்ரா கல்வி நிறுவனம் (CIET) 2016 மே 6 அன்று தொடங்கப்பட்டது. இரண்டு மழலையர் பள்ளிகளில் தொடங்கிய இது இந்து LKG முதல் 5-ம் வகுப்பு வரை 150-க்கும் மேற்பட்ட மாணவர்களுக்கு கல்வி வழங்கும் நர்சரி மற்றும் தொடக்கப் பள்ளிகளாக வளர்ந்துள்ளது."
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "With the grace of Allah, CIET purchased 3 acres of land to build a state-of-the-art campus in Vellappakkam. Our vision is to expand education up to +2 level and produce Hafiz students by 10th standard, empowering future generations to serve society with knowledge and faith."
                  : "அல்லாஹ்வின் அருளால், CIET வெள்ளப்பாக்கம் என்ற இடத்தில் 3 ஏக்கர் நிலத்தை வாங்கியுள்ளது. எங்கள் நோக்கம் +2 வரை கல்வியை விரிவாக்குவது மற்றும் 10-ம் வகுப்பில் ஹாஃபிழ் மாணவர்களை தயார் செய்வது."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
