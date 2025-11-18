
import React from 'react';
import { type Language } from '../types';

interface SearchBarProps {
    language: Language;
    onSearch: (filters: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ language, onSearch }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const filters = Object.fromEntries(formData.entries());
        onSearch(filters);
    };

    return (
        <div className="bg-[#2B2B2B] p-4 sm:p-6 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Location */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">{language === 'en' ? 'Location' : 'स्थान'}</label>
                    <input type="text" name="location" id="location" placeholder={language === 'en' ? 'e.g., Bandra, Juhu' : 'उदा., वांद्रे, जुहू'}
                        className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                </div>
                {/* Property Type */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">{language === 'en' ? 'Type' : 'प्रकार'}</label>
                    <select name="type" id="type" className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]">
                        <option value="">{language === 'en' ? 'All' : 'सर्व'}</option>
                        <option value="Flat">{language === 'en' ? 'Flat' : 'फ्लॅट'}</option>
                        <option value="Villa">{language === 'en' ? 'Villa' : 'व्हिला'}</option>
                        <option value="Apartment">{language === 'en' ? 'Apartment' : 'अपार्टमेंट'}</option>
                    </select>
                </div>
                {/* BHK */}
                <div>
                    <label htmlFor="bhk" className="block text-sm font-medium text-gray-300 mb-1">BHK</label>
                    <select name="bhk" id="bhk" className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]">
                        <option value="">{language === 'en' ? 'Any' : 'कोणतेही'}</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4+ BHK</option>
                    </select>
                </div>
                {/* Price Range */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">{language === 'en' ? 'Price Range' : 'किंमत श्रेणी'}</label>
                    <input type="range" name="price" id="price" min="10000" max="150000000" step="10000"
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]" />
                </div>
                {/* Search Button */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-end">
                    <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-2 px-4 rounded-md hover:bg-[#b89a31] transition-colors duration-300">
                        {language === 'en' ? 'Search' : 'शोधा'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
