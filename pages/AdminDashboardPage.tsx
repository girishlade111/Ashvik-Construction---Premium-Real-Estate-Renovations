
import React, { useState } from 'react';
import { type Language } from '../types';
import { properties as mockProperties, projects as mockProjects } from '../constants';

type AdminTab = 'properties' | 'projects' | 'leads';

interface AdminDashboardPageProps {
  language: Language;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('properties');

  const tabs = [
    { id: 'properties', name: { en: 'Properties', mr: 'मालमत्ता' } },
    { id: 'projects', name: { en: 'Projects', mr: 'प्रकल्प' } },
    { id: 'leads', name: { en: 'Leads', mr: 'लीड्स' } },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'properties':
        return <PropertiesTable language={language} />;
      case 'projects':
        return <ProjectsTable language={language} />;
      case 'leads':
        return <LeadsTable language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-heading">
          {language === 'en' ? 'Admin Dashboard' : 'अ‍ॅडमिन डॅशबोर्ड'}
        </h1>
        <button className="bg-[#D4AF37] text-black font-bold py-2 px-5 rounded-md hover:bg-[#b89a31] transition-colors duration-300">
          {language === 'en' ? 'Add New' : 'नवीन जोडा'}
        </button>
      </div>

      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`${
                activeTab === tab.id
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.name[language]}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">{renderContent()}</div>
    </div>
  );
};


const PropertiesTable: React.FC<{language: Language}> = ({ language }) => (
  <div className="overflow-x-auto bg-[#2B2B2B] rounded-lg">
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-[#1A1A1A]">
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">{language === 'en' ? 'Title' : 'शीर्षक'}</th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{language === 'en' ? 'Location' : 'स्थान'}</th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{language === 'en' ? 'Type' : 'प्रकार'}</th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{language === 'en' ? 'Price' : 'किंमत'}</th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Edit</span></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {mockProperties.map((prop) => (
          <tr key={prop.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{prop.title[language]}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{prop.location}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{prop.listingType} / {prop.type}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">₹ {prop.price.toLocaleString('en-IN')}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-[#D4AF37] hover:text-[#b89a31]">{language === 'en' ? 'Edit' : 'संपादित करा'}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProjectsTable: React.FC<{language: Language}> = ({ language }) => (
    <div className="overflow-x-auto bg-[#2B2B2B] rounded-lg">
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-[#1A1A1A]">
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">{language === 'en' ? 'Title' : 'शीर्षक'}</th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{language === 'en' ? 'Location' : 'स्थान'}</th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Edit</span></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {mockProjects.map((proj) => (
          <tr key={proj.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{proj.title[language]}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{proj.location}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-[#D4AF37] hover:text-[#b89a31]">{language === 'en' ? 'Edit' : 'संपादित करा'}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const LeadsTable: React.FC<{language: Language}> = ({ language }) => (
    <div className="text-center py-16 bg-[#2B2B2B] rounded-lg">
        <h3 className="text-xl text-gray-300">{language === 'en' ? 'No leads yet.' : 'अद्याप कोणतेही लीड्स नाहीत.'}</h3>
        <p className="text-gray-500 mt-2">{language === 'en' ? 'Leads from the contact form will appear here.' : 'संपर्क फॉर्ममधील लीड्स येथे दिसतील.'}</p>
    </div>
);


export default AdminDashboardPage;
