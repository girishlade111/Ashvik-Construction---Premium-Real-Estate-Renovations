
import React from 'react';
import { type Language, type Page } from '../types';
import { content, properties, projects, testimonials, services } from '../constants';
import PropertyCard from '../components/PropertyCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

interface HomePageProps {
  language: Language;
  setActivePage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, setActivePage }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img src="https://picsum.photos/seed/skyline/1920/1080" alt="Mumbai Skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading drop-shadow-lg">
            {content.heroTitle[language]}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {content.heroSubtitle[language]}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setActivePage('Contact')}
              className="bg-[#D4AF37] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-[#b89a31] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {content.getQuote[language]}
            </button>
            <button 
              onClick={() => setActivePage('Properties')}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              {content.exploreProperties[language]}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
            {content.ourServices[language]}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-[#2B2B2B] p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 bg-[#1A1A1A] rounded-full">
                <service.icon className="h-10 w-10 text-[#D4AF37]" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-heading text-white">{service.title[language]}</h3>
              <p className="mt-2 text-gray-400 text-sm">{service.description[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
          {content.featuredProperties[language]}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((prop) => (
            <PropertyCard key={prop.id} property={prop} language={language} />
          ))}
        </div>
        <div className="text-center mt-12">
            <button onClick={() => setActivePage('Properties')} className="text-[#D4AF37] border-2 border-[#D4AF37] font-bold py-2 px-6 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
                {language === 'en' ? 'View All Properties' : 'सर्व मालमत्ता पहा'}
            </button>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="bg-[#2B2B2B] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
            {language === 'en' ? 'Our Craftsmanship' : 'आमची कारागिरी'}
          </h2>
          <div className="mt-12">
            {projects.slice(0,1).map((project) => (
                <ProjectCard key={project.id} project={project} language={language} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setActivePage('Portfolio')} className="text-[#D4AF37] border-2 border-[#D4AF37] font-bold py-2 px-6 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
                {language === 'en' ? 'Explore Full Portfolio' : 'संपूर्ण पोर्टफोलिओ एक्सप्लोर करा'}
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
          {content.whatOurClientsSay[language]}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} language={language} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
