
import React, { useState } from 'react';
import { type Page, type Language } from '../types';
import { navLinks } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2B2B2B]/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="text-2xl font-heading font-bold text-white cursor-pointer"
            onClick={() => handleNavClick('Home')}
          >
            Ashvik<span className="text-[#D4AF37]">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page as Page)}
                className={`font-medium text-sm tracking-wider uppercase transition-colors duration-300 ${
                  activePage === link.page
                    ? 'text-[#D4AF37]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name[language]}
              </button>
            ))}
             <button
                onClick={() => handleNavClick('Admin Dashboard' as Page)}
                className={`font-medium text-sm tracking-wider uppercase transition-colors duration-300 ${
                  activePage === 'Admin Dashboard'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Admin
              </button>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-[#1A1A1A] rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${
                  language === 'en' ? 'bg-[#D4AF37] text-black' : 'text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${
                  language === 'mr' ? 'bg-[#D4AF37] text-black' : 'text-white'
                }`}
              >
                MR
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2B2B2B] absolute w-full">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page as Page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activePage === link.page
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name[language]}
              </button>
            ))}
             <button
                onClick={() => handleNavClick('Admin Dashboard' as Page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activePage === 'Admin Dashboard'
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Admin
              </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
