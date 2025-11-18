
import React from 'react';
import { type Language } from '../types';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

interface PortfolioPageProps {
  language: Language;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ language }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
          {language === 'en' ? 'Our Projects' : 'आमचे प्रकल्प'}
        </h1>
        <p className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto">
          {language === 'en'
            ? 'A showcase of our commitment to quality, detail, and transformative results.'
            : 'गुणवत्ता, तपशील आणि परिवर्तनात्मक परिणामांसाठी आमच्या वचनबद्धतेचे प्रदर्शन.'}
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
