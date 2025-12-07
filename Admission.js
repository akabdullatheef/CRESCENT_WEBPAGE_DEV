import React, { useState } from 'react';
import { CheckCircle, FileText, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { admissionProcess } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const Admissions = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const process = admissionProcess[language];
  
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    dob: '',
    grade: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    toast({
      title: language === 'en' ? 'Application Submitted!' : 'விண்ணப்பம் சமர்ப்பிக்கப்பட்டது!',
      description: language === 'en' 
        ? 'We will contact you within 24 hours.'
        : 'நாங்கள் 24 மணி நேரத்திற்குள் உங்களை தொடர்பு கொள்வோம்.'
    });
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      studentName: '',
      dob: '',
      grade: '',
      address: '',
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
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'en' ? 'Admissions Open' : 'சேர்க்கை திறந்துள்ளது'}
            </h1>
            <p className="text-2xl mb-2">
              {language === 'en' ? 'Academic Year 2025-26' : 'கல்வி ஆண்டு 2025-26'}
            </p>
            <p className="text-xl">
              {language === 'en' 
                ? 'Join Cuddalore\'s Premier Islamic Education Institution'
                : 'குடலூரின் தலைசிறந்த இஸ்லாமிய கல்வி நிறுவனத்தில் சேரவும்'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Admission Process' : 'சேர்க்கை செயல்முறை'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step) => {
              const icons = [FileText, FileText, Users, Award];
              const Icon = icons[step.step - 1];
              return (
                <Card key={step.step} className="relative shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <CardContent className="pt-12 pb-6 px-6 text-center">
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3 text-purple-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Fee Structure' : 'கட்டண அமைப்பு'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <tr>
                        <th className="p-4 text-left">{language === 'en' ? 'Grade' : 'வகுப்பு'}</th>
                        <th className="p-4 text-right">{language === 'en' ? 'Annual Fee' : 'ஆண்டு கட்டணம்'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { grade: language === 'en' ? 'Nursery' : 'நர்சரி', fee: '₹25,000' },
                        { grade: language === 'en' ? 'LKG - UKG' : 'LKG - UKG', fee: '₹30,000' },
                        { grade: language === 'en' ? 'Grade 1-3' : 'வகுப்பு 1-3', fee: '₹35,000' },
                        { grade: language === 'en' ? 'Grade 4-5' : 'வகுப்பு 4-5', fee: '₹40,000' }
                      ].map((item, index) => (
                        <tr key={index} className="border-b hover:bg-purple-50 transition-colors">
                          <td className="p-4 font-medium text-gray-700">{item.grade}</td>
                          <td className="p-4 text-right font-bold text-purple-700">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm text-gray-700">
                    <strong>{language === 'en' ? 'Note:' : 'குறிப்பு:'}</strong>{' '}
                    {language === 'en'
                      ? 'Fee includes tuition, Islamic education, and extracurricular activities. Additional charges for uniforms and books.'
                      : 'கட்டணம் கற்பித்தல், இஸ்லாமிய கல்வி மற்றும் பாடம் சாரா நடவடிக்கைகளை உள்ளடக்கியது. சீருடை மற்றும் புத்தகங்களுக்கு கூடுதலாக கட்டணம்.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">
              {language === 'en' ? 'Online Application Form' : 'ஆன்லைன் விண்ணப்ப படிவம்'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {language === 'en'
                ? 'Fill out the form below to start the admission process'
                : 'சேர்க்கை செயல்முறையை தொடங்க கீழே உள்ள படிவத்தை பூர்த்தி செய்யவும்'
              }
            </p>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-900">
                      {language === 'en' ? 'Parent Details' : 'பெற்றோர் விவரங்கள்'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parentName">{language === 'en' ? 'Parent Name *' : 'பெற்றோர் பெயர் *'}</Label>
                        <Input 
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{language === 'en' ? 'Phone Number *' : 'தொலைபேசி எண் *'}</Label>
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
                    <div className="mt-4">
                      <Label htmlFor="email">{language === 'en' ? 'Email Address *' : 'மின்னஞ்சல் *'}</Label>
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
                  </div>

                  {/* Student Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-900">
                      {language === 'en' ? 'Student Details' : 'மாணவர் விவரங்கள்'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="studentName">{language === 'en' ? 'Student Name *' : 'மாணவர் பெயர் *'}</Label>
                        <Input 
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob">{language === 'en' ? 'Date of Birth *' : 'பிறந்த தேதி *'}</Label>
                        <Input 
                          id="dob"
                          name="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="grade">{language === 'en' ? 'Applying for Grade *' : 'வகுப்பு *'}</Label>
                      <Select name="grade" value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={language === 'en' ? 'Select Grade' : 'வகுப்பை தேர்ந்தெடுக்கவும்'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="lkg">LKG</SelectItem>
                          <SelectItem value="ukg">UKG</SelectItem>
                          <SelectItem value="grade1">Grade 1</SelectItem>
                          <SelectItem value="grade2">Grade 2</SelectItem>
                          <SelectItem value="grade3">Grade 3</SelectItem>
                          <SelectItem value="grade4">Grade 4</SelectItem>
                          <SelectItem value="grade5">Grade 5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address">{language === 'en' ? 'Address *' : 'விலாசம் *'}</Label>
                    <Textarea 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">{language === 'en' ? 'Additional Message (Optional)' : 'கூடுதல் செய்தி (வேண்டுமெனில்)'}</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-6"
                  >
                    {language === 'en' ? 'Submit Application' : 'விண்ணப்பத்தை சமர்ப்பிக்கவும்'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {language === 'en' ? 'Why Choose Crescent?' : 'ஏன் கிரசண்டை தேர்வு செய்ய வேண்டும்?'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: language === 'en' ? 'CBSE Curriculum' : 'CBSE பாடத்திட்டம்',
                desc: language === 'en' ? 'Recognized national curriculum with modern teaching' : 'நவீன கற்பித்தலுடன் நாட்டாரா அங்கீகரிக்கப்பட்ட பாடத்திட்டம்'
              },
              { 
                title: language === 'en' ? 'Islamic Education' : 'இஸ்லாமிய கல்வி',
                desc: language === 'en' ? 'Quran, Hadith, and Islamic studies integrated' : 'குர்ஆன், ஹதீஸ் மற்றும் இஸ்லாமிய படிப்புகள்'
              },
              { 
                title: language === 'en' ? 'Hafiz Program' : 'ஹாஃபிழ் திட்டம்',
                desc: language === 'en' ? 'Specialized Quran memorization track' : 'சிறப்பு குர்ஆன் மனனம் திட்டம்'
              },
              { 
                title: language === 'en' ? 'Modern Facilities' : 'நவீன வசதிகள்',
                desc: language === 'en' ? 'Smart classrooms, labs, library, playgrounds' : 'ஸ்மார்ட் வகுப்பறை, ஆய்வகங்கள், நூலகம், விளையாட்டு மைதானங்கள்'
              },
              { 
                title: language === 'en' ? 'Experienced Teachers' : 'அனுபவ ஆசிரியர்கள்',
                desc: language === 'en' ? 'Qualified and caring teaching staff' : 'தகுதியுள்ள மற்றும் அக்கறையுள்ள ஆசிரியர் கள்'
              },
              { 
                title: language === 'en' ? 'Safe Environment' : 'பாதுகாப்பான சூழல்',
                desc: language === 'en' ? 'Secure campus with caring supervision' : 'பாதுகாப்பான வளாகம் மற்றும் கவனிப்பான மேல்பார்வை'
              }
            ].map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
