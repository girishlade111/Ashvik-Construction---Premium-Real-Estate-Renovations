
import React, { useState, useMemo } from 'react';
import { type Language, type Property } from '../types';
import { properties, content } from '../constants';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

interface PropertiesPageProps {
  language: Language;
}

const PropertiesPage: React.FC<PropertiesPageProps> = ({ language }) => {
  const [filters, setFilters] = useState<any>({});

  const handleSearch = (newFilters: any) => {
    // A simple price filter logic, can be expanded
    if (newFilters.price) {
        newFilters.maxPrice = parseInt(newFilters.price, 10);
        delete newFilters.price;
    }
    setFilters(newFilters);
  };
  
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const { location, type, bhk, maxPrice } = filters;
      
      if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
      if (type && property.type !== type) {
        return false;
      }
      if (bhk) {
          if (bhk === '4' && property.bhk < 4) return false;
          if (bhk !== '4' && property.bhk.toString() !== bhk) return false;
      }
      if (maxPrice && property.price > maxPrice) {
          return false;
      }
      return true;
    });
  }, [filters]);


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
          {content.allProperties[language]}
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          {language === 'en' ? 'Find your dream property in the heart of Mumbai.' : 'मुंबईच्या हृदयात तुमची स्वप्नातील मालमत्ता शोधा.'}
        </p>
      </div>
      
      <SearchBar language={language} onSearch={handleSearch} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} language={language} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-300">{language === 'en' ? 'No Properties Found' : 'कोणतीही मालमत्ता आढळली नाही'}</h3>
            <p className="text-gray-500 mt-2">{language === 'en' ? 'Try adjusting your search filters.' : 'तुमचे शोध फिल्टर समायोजित करण्याचा प्रयत्न करा.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
