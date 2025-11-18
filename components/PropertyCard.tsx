import React, { useState, useEffect } from 'react';
import { type Property, type Language } from '../types';
import { BedIcon, BathIcon, AreaIcon, ChevronLeftIcon, ChevronRightIcon, HeartIcon, ChevronDownIcon } from './IconComponents';
import PriceHistoryChart from './PriceHistoryChart';

interface PropertyCardProps {
  property: Property;
  language: Language;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  // The minimum distance (in pixels) to register a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('ashvikWishlist') || '[]');
      if (Array.isArray(wishlist) && wishlist.includes(property.id)) {
        setIsWishlisted(true);
      }
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      localStorage.setItem('ashvikWishlist', '[]');
    }
  }, [property.id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    nextImage();
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    prevImage();
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end determination on new touch start
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const wishlist: number[] = JSON.parse(localStorage.getItem('ashvikWishlist') || '[]');
      const propertyId = property.id;
      
      let updatedWishlist;
      if (wishlist.includes(propertyId)) {
        updatedWishlist = wishlist.filter(id => id !== propertyId);
        setIsWishlisted(false);
      } else {
        updatedWishlist = [...wishlist, propertyId];
        setIsWishlisted(true);
      }
      localStorage.setItem('ashvikWishlist', JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error("Failed to update wishlist in localStorage", error);
    }
  };

  const formatPrice = (price: number) => {
    const isRent = property.listingType === 'Rent';

    if (isRent) {
      return `₹ ${price.toLocaleString('en-IN')}${language === 'mr' ? '/महिना' : '/month'}`;
    }

    const crore = 10000000;
    const lakh = 100000;

    if (price >= crore) {
      return `₹ ${(price / crore).toFixed(2)} ${language === 'mr' ? 'कोटी' : 'Cr'}`;
    }
    if (price >= lakh) {
      return `₹ ${(price / lakh).toFixed(2)} ${language === 'mr' ? 'लाख' : 'Lac'}`;
    }
    return `₹ ${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-[#2B2B2B] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
      <div 
        className="relative overflow-hidden cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {property.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${property.title[language]} ${index + 1}`}
              className="w-full h-56 object-cover flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>

        {property.images.length > 1 && (
          <>
            <button onClick={handlePrevClick} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-opacity opacity-0 group-hover:opacity-100 z-10" aria-label="Previous Image">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button onClick={handleNextClick} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-opacity opacity-0 group-hover:opacity-100 z-10" aria-label="Next Image">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
            <button 
              onClick={handleWishlistToggle} 
              className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300"
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <HeartIcon 
                className={`w-5 h-5 transition-colors ${isWishlisted ? 'text-red-500' : 'text-white'}`}
                filled={isWishlisted}
              />
            </button>
            <div className="bg-[#D4AF37] text-black text-sm font-bold px-3 py-1 rounded-full">
              {formatPrice(property.price)}
            </div>
        </div>

        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
           {language === 'en' ? property.listingType : (property.listingType === 'Buy' ? 'खरेदी' : 'भाड्याने')}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-heading font-bold text-white truncate">{property.title[language]}</h3>
        <p className="text-sm text-gray-400 mt-1">{property.location}</p>
        <div className="flex items-center justify-between mt-4 text-gray-300">
          <div className="flex items-center space-x-2">
            <BedIcon className="text-[#D4AF37]" />
            <span className="text-sm">{property.bhk} {language === 'en' ? 'BHK' : 'बीएचके'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BathIcon className="text-[#D4AF37]" />
            <span className="text-sm">{property.bhk} {language === 'en' ? 'Bath' : 'बाथ'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <AreaIcon className="text-[#D4AF37]" />
            <span className="text-sm">{property.area} {language === 'en' ? 'sqft' : 'चौ. फूट'}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            property.furnishing === 'Furnished' ? 'bg-green-800 text-green-200' :
            property.furnishing === 'Semi-Furnished' ? 'bg-yellow-800 text-yellow-200' :
            'bg-red-800 text-red-200'
          }`}>
            {language === 'en' ? property.furnishing : 
                (property.furnishing === 'Furnished' ? 'सुसज्ज' : 
                (property.furnishing === 'Semi-Furnished' ? 'अर्ध-सुसज्ज' : 'सुसज्ज नाही'))
            }
          </span>
           {property.listingType === 'Buy' && property.priceHistory && property.priceHistory.length > 1 && (
             <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                aria-expanded={showHistory}
             >
                {language === 'en' ? 'Price History' : 'किंमत इतिहास'}
                <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${showHistory ? 'rotate-180' : ''}`} />
             </button>
          )}
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showHistory ? 'max-h-60 mt-4' : 'max-h-0'}`}>
          {property.listingType === 'Buy' && property.priceHistory && (
              <div className="bg-[#1A1A1A] rounded-lg p-2">
                 <PriceHistoryChart data={property.priceHistory} language={language} />
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;