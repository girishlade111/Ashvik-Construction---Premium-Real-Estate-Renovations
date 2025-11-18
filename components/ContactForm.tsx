
import React from 'react';
import { type Language } from '../types';

interface ContactFormProps {
  language: Language;
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to an API
    alert(language === 'en' ? 'Thank you for your message!' : 'तुमच्या संदेशाबद्दल धन्यवाद!');
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          {language === 'en' ? 'Full Name' : 'पूर्ण नाव'}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full bg-[#1A1A1A] border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          {language === 'en' ? 'Email Address' : 'ईमेल पत्ता'}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full bg-[#1A1A1A] border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
          {language === 'en' ? 'Phone Number' : 'फोन नंबर'}
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1 block w-full bg-[#1A1A1A] border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          {language === 'en' ? 'Message' : 'संदेश'}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full bg-[#1A1A1A] border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-[#D4AF37] focus:border-[#D4AF37]"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[#D4AF37] text-black font-bold py-3 px-4 rounded-md hover:bg-[#b89a31] transition-colors duration-300"
        >
          {language === 'en' ? 'Send Message' : 'संदेश पाठवा'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
