import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navigationLinks, schoolInfo } from '../mock';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const links = navigationLinks[language];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_f681bcf0-8959-4a89-909f-d4576eda9f3a/artifacts/tbezm2ux_LOGO.png" 
              alt="Crescent School Logo" 
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-purple-700">
                {language === 'en' ? 'CRESCENT' : 'கிரசண்ட்'}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'en' ? 'Public School' : 'பொது பள்ளி'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-yellow-400 text-purple-900'
                    : 'text-gray-700 hover:bg-orange-100 hover:text-purple-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2 border-purple-300 hover:bg-purple-50"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </Button>

            {/* Admission Button */}
            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold"
            >
              <Link to="/admissions">
                {language === 'en' ? 'Admission Open' : 'சேர்க்கை திறந்துள்ளது'}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-purple-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-yellow-400 text-purple-900'
                      : 'text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="flex items-center justify-center space-x-2 border-purple-300"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold"
              >
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  {language === 'en' ? 'Admission Open' : 'சேர்க்கை திறந்துள்ளது'}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
