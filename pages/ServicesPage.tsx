
import React from 'react';
import { type Language } from '../types';
import { services } from '../constants';

interface ServicesPageProps {
  language: Language;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ language }) => {
  return (
    <div className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            {language === 'en' ? 'Our Expertise' : 'आमची विशेषज्ञता'}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            {language === 'en'
              ? 'Delivering excellence in every aspect of construction and renovation, from concept to completion.'
              : 'बांधकाम आणि नूतनीकरणाच्या प्रत्येक पैलूमध्ये, संकल्पनेपासून ते पूर्णत्वापर्यंत उत्कृष्टता प्रदान करणे.'}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="relative flex flex-col items-center text-center p-6 bg-[#2B2B2B] rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 inline-block p-5 bg-[#1A1A1A] rounded-full text-[#D4AF37]">
                    <service.icon className="h-10 w-10" />
                </div>
              <h3 className="text-xl font-bold font-heading text-white">{service.title[language]}</h3>
              <p className="mt-2 text-base text-gray-400 leading-relaxed">
                {service.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
