
import React from 'react';
import { type Language } from '../types';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  return (
    <div className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
              {language === 'en'
                ? 'Building Trust, Crafting Excellence'
                : 'विश्वास निर्माण करणे, उत्कृष्टता घडवणे'}
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mt-4 mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {language === 'en'
                ? 'Founded in 2005, Ashvik Construction has grown to become one of Mumbai\'s most respected names in the construction and real estate sector. Our journey began with a simple mission: to deliver exceptional quality and unparalleled service, whether we are renovating a heritage bungalow or developing a modern high-rise.'
                : '2005 मध्ये स्थापित, अश्विक कन्स्ट्रक्शन बांधकाम आणि रिअल इस्टेट क्षेत्रातील मुंबईतील सर्वात प्रतिष्ठित नावांपैकी एक बनले आहे. आमचा प्रवास एका साध्या ध्येयाने सुरू झाला: अपवादात्मक गुणवत्ता आणि अतुलनीय सेवा देणे, मग आम्ही वारसा बंगल्याचे नूतनीकरण करत असू किंवा आधुनिक उंच इमारत विकसित करत असू.'}
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              {language === 'en'
                ? 'Our specialization in renovating government officer bungalows has given us a unique appreciation for precision, timeliness, and working within established frameworks. We bring this same discipline and attention to detail to every project we undertake.'
                : 'सरकारी अधिकारी बंगल्यांच्या नूतनीकरणामधील आमची विशेषज्ञता आम्हाला अचूकता, समयसूचकता आणि स्थापित चौकटीत काम करण्याची एक अद्वितीय प्रशंसा देते. आम्ही हीच शिस्त आणि तपशिलाकडे लक्ष आमच्या प्रत्येक प्रकल्पात आणतो.'}
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/team/600/700" 
              alt="Ashvik Construction Team" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
