
import React from 'react';
import { type Page, type Language } from '../types';
import { navLinks } from '../constants';

interface FooterProps {
  setActivePage: (page: Page) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ setActivePage, language }) => {
  return (
    <footer className="bg-[#2B2B2B] text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-heading font-bold text-white">
              Ashvik<span className="text-[#D4AF37]">.</span>
            </h3>
            <p className="mt-4 text-sm">
              {language === 'en'
                ? 'Your trusted partner in premium construction, renovation, and real estate services in Mumbai. We build with passion and precision.'
                : 'मुंबईतील प्रीमियम बांधकाम, नूतनीकरण आणि रिअल इस्टेट सेवांमध्ये तुमचा विश्वासू भागीदार. आम्ही उत्कटतेने आणि अचूकतेने बांधकाम करतो.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider">
              {language === 'en' ? 'Quick Links' : 'द्रुत दुवे'}
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button onClick={() => setActivePage(link.page as Page)} className="hover:text-[#D4AF37] transition-colors duration-300 text-sm">
                    {link.name[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider">
              {language === 'en' ? 'Contact Us' : 'संपर्क साधा'}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>123 Construction House,</li>
              <li>Marine Drive, Mumbai - 400020</li>
              <li className="pt-2">
                <a href="mailto:contact@ashvik.com" className="hover:text-[#D4AF37]">contact@ashvik.com</a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-[#D4AF37]">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ashvik Construction. {language === 'en' ? 'All Rights Reserved.' : 'सर्व हक्क राखीव.'}</p>
          <div className="mt-4 md:mt-0" dangerouslySetInnerHTML={{ __html: `<a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">Made by <b>LadeStack</b></a>` }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
