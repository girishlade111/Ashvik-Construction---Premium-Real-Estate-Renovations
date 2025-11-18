
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StickyContact from './components/StickyContact';
import { type Language, type Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage language={language} setActivePage={setActivePage} />;
      case 'Properties':
        return <PropertiesPage language={language} />;
      case 'Services':
        return <ServicesPage language={language} />;
      case 'Portfolio':
        return <PortfolioPage language={language} />;
      case 'About':
        return <AboutPage language={language} />;
      case 'Contact':
        return <ContactPage language={language} />;
      case 'Admin Dashboard':
        return <AdminDashboardPage language={language} />;
      default:
        return <HomePage language={language} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-[#1A1A1A] text-gray-200 min-h-screen">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <StickyContact />
      <Footer setActivePage={setActivePage} language={language}/>
    </div>
  );
};

export default App;
