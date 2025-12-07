import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schoolInfo, navigationLinks } from '../mock';

const Footer = () => {
  const { language } = useLanguage();
  const links = navigationLinks[language];

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_f681bcf0-8959-4a89-909f-d4576eda9f3a/artifacts/tbezm2ux_LOGO.png" 
                alt="Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-300">
                  {language === 'en' ? 'CRESCENT' : 'கிரசண்ட்'}
                </h3>
                <p className="text-sm text-purple-200">
                  {language === 'en' ? 'Public School' : 'பொது பள்ளி'}
                </p>
              </div>
            </div>
            <p className="text-sm text-purple-200 leading-relaxed">
              {schoolInfo.tagline[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              {language === 'en' ? 'Quick Links' : 'விரைவு இணைப்புகள்'}
            </h4>
            <ul className="space-y-2">
              {links.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-purple-200 hover:text-yellow-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              {language === 'en' ? 'Programs' : 'திட்டங்கள்'}
            </h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                {language === 'en' ? 'Nursery & Kindergarten' : 'நர்சரி மற்றும் மழலையர்'}
              </li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                {language === 'en' ? 'Primary School' : 'தொடக்கப் பள்ளி'}
              </li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                {language === 'en' ? 'Hafiz Program' : 'ஹாஃபிழ் திட்டம்'}
              </li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                {language === 'en' ? 'Extracurricular' : 'பாடம் சாரா'}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              {language === 'en' ? 'Contact Us' : 'எங்களை தொடர்பு கொள்ளுங்கள்'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-purple-200">{schoolInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-purple-200">{schoolInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-purple-200">{schoolInfo.email}</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2 text-yellow-300">
                {language === 'en' ? 'Follow Us' : 'எங்களை பின்தொடரவும்'}
              </p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-purple-800 rounded-full hover:bg-yellow-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-purple-800 rounded-full hover:bg-yellow-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-purple-800 rounded-full hover:bg-yellow-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-purple-300 text-center md:text-left">
              {language === 'en' 
                ? `© ${new Date().getFullYear()} Crescent Primary and Nursery School. All rights reserved.`
                : `© ${new Date().getFullYear()} கிரசண்ட் தொடக்க மற்றும் நர்சரி பள்ளி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`
              }
            </p>
            <div className="flex space-x-6 text-sm text-purple-300">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'தனியுரிமை கொள்கை'}
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                {language === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
