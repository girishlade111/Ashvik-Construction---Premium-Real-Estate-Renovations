
import React from 'react';
import { type Testimonial, type Language } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  language: Language;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, language }) => {
  return (
    <div className="bg-[#2B2B2B] p-6 rounded-lg shadow-lg">
      <div className="flex items-start space-x-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
          loading="lazy"
        />
        <div>
          <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.location}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-300 italic">
        "{testimonial.quote[language]}"
      </p>
    </div>
  );
};

export default TestimonialCard;
