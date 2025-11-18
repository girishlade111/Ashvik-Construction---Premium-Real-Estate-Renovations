
import React from 'react';
import { type Language } from '../types';
import ContactForm from '../components/ContactForm';

interface ContactPageProps {
  language: Language;
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
          {language === 'en' ? 'Get In Touch' : 'संपर्कात रहा'}
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          {language === 'en'
            ? 'We are here to help you with your next project or property inquiry.'
            : 'आम्ही तुमच्या पुढील प्रकल्पात किंवा मालमत्ता चौकशीसाठी मदत करण्यास येथे आहोत.'}
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#2B2B2B] p-8 rounded-lg">
          <ContactForm language={language} />
        </div>
        <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white">{language === 'en' ? 'Contact Information' : 'संपर्क माहिती'}</h3>
            <div>
                <h4 className="font-semibold text-[#D4AF37]">{language === 'en' ? 'Address' : 'पत्ता'}</h4>
                <p className="text-gray-300 mt-1">123 Construction House, Marine Drive, Mumbai - 400020, Maharashtra, India</p>
            </div>
            <div>
                <h4 className="font-semibold text-[#D4AF37]">{language === 'en' ? 'Email' : 'ईमेल'}</h4>
                <a href="mailto:contact@ashvik.com" className="text-gray-300 mt-1 hover:text-white">contact@ashvik.com</a>
            </div>
            <div>
                <h4 className="font-semibold text-[#D4AF37]">{language === 'en' ? 'Phone' : 'फोन'}</h4>
                <a href="tel:+919876543210" className="text-gray-300 mt-1 hover:text-white">+91 98765 43210</a>
            </div>
             <div className="pt-4">
                 <h4 className="font-semibold text-[#D4AF37]">{language === 'en' ? 'Business Hours' : 'व्यवसायाची वेळ'}</h4>
                 <p className="text-gray-300 mt-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                 <p className="text-gray-300">Sunday: Closed</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
