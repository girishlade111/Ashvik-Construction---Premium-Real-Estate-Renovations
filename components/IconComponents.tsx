
import React from 'react';

// Generic Icon Props
interface IconProps {
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const BedIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

export const BathIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V3.545M6 21H3.75v-6H6v6z" />
  </svg>
);

export const AreaIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5v2.25m0-2.25l2.25 1.313M9 1.5l2.25 1.313M9 1.5v2.25m0-2.25l2.25-1.313M9 1.5L6.75 2.813M15 1.5l-2.25 1.313M15 1.5v2.25m0-2.25l-2.25-1.313M15 1.5l2.25 2.813M21 12l-2.25-1.313M21 12v2.25m0-2.25l-2.25 1.313M3 12l2.25-1.313M3 12v2.25m0-2.25l2.25 1.313M9 6.75l2.25 1.313M9 6.75v2.25m0-2.25l2.25-1.313M9 6.75L6.75 8.063M15 6.75l-2.25 1.313M15 6.75v2.25m0-2.25l-2.25-1.313M15 6.75l2.25 1.313M9 21.75v-2.25m0 2.25l-2.25-1.313M9 21.75l2.25-1.313M15 21.75v-2.25m0 2.25l-2.25-1.313M15 21.75l2.25-1.313M12 16.5l-2.25-1.313M12 16.5v2.25m0-2.25l2.25-1.313M12 16.5l-2.25 1.313M12 16.5l2.25 1.313M6 12l-2.25 1.313M6 12v-2.25m0 2.25L3.75 10.687M18 12l2.25 1.313M18 12v-2.25m0 2.25l2.25-1.313" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export const BuildingOffice2Icon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.625.625 0 01.625.625v3.75a.625.625 0 01-.625.625H9v-5zM9 12.75h6.375a.625.625 0 01.625.625v3.75a.625.625 0 01-.625.625H9v-5z" />
    </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
);

export const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25l-2.25 2.25m0 0l2.25 2.25M12 8.25V6m0 2.25h2.25m-2.25 0h-2.25m2.25 0V12m2.25 0h-2.25m2.25 0l2.25-2.25M12 12v2.25m0 0h-2.25m2.25 0h2.25m2.25 0l-2.25 2.25M12 15.75l-2.25-2.25m0 0l-2.25 2.25m2.25-2.25V18m0-2.25h-2.25m2.25 0h2.25M4.5 12.75l-2.25-2.25m0 0l2.25-2.25m-2.25 2.25h2.25m-2.25 0v2.25m2.25-2.25v-2.25m2.25 0h-2.25m2.25 0l-2.25-2.25m2.25 2.25l2.25-2.25M9 3.75l2.25 2.25m0 0l2.25-2.25M9 3.75v2.25m0-2.25h2.25m-2.25 0H6.75m2.25 0L6.75 6m2.25-2.25l2.25 2.25m0 0l2.25 2.25M15 20.25l-2.25-2.25m0 0l-2.25-2.25m2.25 2.25v-2.25m0 2.25h-2.25m2.25 0h2.25m-2.25 0l2.25-2.25m-2.25 2.25l-2.25-2.25m2.25 2.25l2.25-2.25m0 0l2.25-2.25m-2.25 2.25l-2.25 2.25m0 0l-2.25 2.25M19.5 12.75l2.25-2.25m0 0l-2.25-2.25m2.25 2.25h-2.25m2.25 0v2.25m-2.25-2.25v-2.25m-2.25 0h2.25m-2.25 0l2.25-2.25m-2.25 2.25l-2.25-2.25" />
    </svg>
);

export const HomeModernIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18h16.5a1.5 1.5 0 011.5 1.5v16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-15.75a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5V21" />
    </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 3.75zM12 15.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM15.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM7.05 7.05a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.9 9.9a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM7.05 16.95a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zm9.9-9.9a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z" />
        <path fillRule="evenodd" d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd" />
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3.75-6.375l-1.442-1.442a.75.75 0 00-1.06 0l-1.442 1.442a.75.75 0 000 1.06l1.442 1.442a.75.75 0 001.06 0l1.442-1.442a.75.75 0 000-1.06z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.885-.002 2.024.604 3.933 1.687 5.632l-1.141 4.144 4.273-1.129z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

export const HeartIcon: React.FC<IconProps & { filled?: boolean }> = ({ className = "w-6 h-6", filled = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);
