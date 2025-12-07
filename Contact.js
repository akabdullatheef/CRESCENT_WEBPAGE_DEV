import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schoolInfo } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    toast({
      title: language === 'en' ? 'Message Sent!' : 'செய்தி அனுப்பப்பட்டது!',
      description: language === 'en' 
        ? 'We will get back to you soon.'
        : 'நாங்கள் வெகு விரைவில் உங்களை தொடர்பு கொள்வோம்.'
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {language === 'en' ? 'Contact Us' : 'எங்களை தொடர்பு கொள்ளுங்கள்'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'en'
              ? 'We\'d love to hear from you! Get in touch with us today.'
              : 'உங்களிடமிருந்து கேட்பதை நாங்கள் விரும்புகிறோம்! இன்றே எங்களை தொடர்பு கொள்ளுங்கள்.'
            }
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-purple-900">
                {language === 'en' ? 'Get in Touch' : 'தொடர்பில் இருங்கள்'}
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-900 mb-2">
                          {language === 'en' ? 'Address' : 'விலாசம்'}
                        </h3>
                        <p className="text-gray-700">{schoolInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-900 mb-2">
                          {language === 'en' ? 'Phone' : 'தொலைபேசி'}
                        </h3>
                        <p className="text-gray-700">{schoolInfo.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-pink-100 rounded-full">
                        <Mail className="h-6 w-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-900 mb-2">
                          {language === 'en' ? 'Email' : 'மின்னஞ்சல்'}
                        </h3>
                        <p className="text-gray-700">{schoolInfo.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-900 mb-2">
                          {language === 'en' ? 'Office Hours' : 'அலுவலக நேரம்'}
                        </h3>
                        <p className="text-gray-700">
                          {language === 'en' 
                            ? 'Monday - Friday: 9:00 AM - 4:00 PM'
                            : 'திங்கள் - வெள்ளி: காலை 9:00 - மாலை 4:00'
                          }
                        </p>
                        <p className="text-gray-700">
                          {language === 'en' 
                            ? 'Saturday: 9:00 AM - 1:00 PM'
                            : 'சனி: காலை 9:00 - மதியம் 1:00'
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-lg text-purple-900 mb-4">
                  {language === 'en' ? 'Follow Us' : 'எங்களை பின்தொடரவும்'}
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                    <Youtube className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-purple-900">
                {language === 'en' ? 'Send us a Message' : 'எங்களுக்கு செய்தி அனுப்பவும்'}
              </h2>

              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{language === 'en' ? 'Your Name *' : 'உங்கள் பெயர் *'}</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">{language === 'en' ? 'Email *' : 'மின்னஞ்சல் *'}</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{language === 'en' ? 'Phone *' : 'தொலைபேசி *'}</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">{language === 'en' ? 'Subject *' : 'பிரிவு *'}</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{language === 'en' ? 'Message *' : 'செய்தி *'}</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-6"
                    >
                      {language === 'en' ? 'Send Message' : 'செய்தியை அனுப்பவும்'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Find Us' : 'எங்களை கண்டுபிடிக்கவும்'}
          </h2>
          <Card className="shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'Map integration will be added here'
                  : 'வரைபடம் இங்கு சேர்க்கப்படும்'
                }
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
