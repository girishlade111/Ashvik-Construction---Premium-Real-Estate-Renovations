
import React, { useState, useRef, useEffect } from 'react';
import { type Project, type Language } from '../types';
import { content } from '../constants';

interface ProjectCardProps {
  project: Project;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#1A1A1A] p-8 rounded-lg">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden select-none" ref={imageContainerRef} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
        <img
          src={project.afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 w-full h-full object-cover overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={project.beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-0 bottom-0 bg-[#D4AF37] w-1 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#D4AF37] text-black h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">
            &lt;&gt;
          </div>
        </div>
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">{content.before[language]}</div>
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">{content.after[language]}</div>
      </div>
      <div>
        <h3 className="text-2xl font-bold font-heading text-white">{project.title[language]}</h3>
        <p className="text-md text-gray-400 mt-2">{project.location}</p>
        <p className="mt-4 text-gray-300">
          {project.description[language]}
        </p>
        <a 
          href={project.pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-6 bg-[#D4AF37] text-black font-bold py-2 px-6 rounded-full hover:bg-[#b89a31] transition-colors duration-300"
        >
          {content.viewProjectDetails[language]}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
