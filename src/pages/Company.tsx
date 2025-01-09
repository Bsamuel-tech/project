//import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyNavigation from '../components/CompanyNavigation';
import CompanyHome from './company/CompanyHome';
import Products from './company/Products';
import Services from './company/Services';
import Tracker from './company/Tracker';
import Development from './company/Development';
import Community from './company/Community';

const Company = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Company-specific Navigation */}
      <CompanyNavigation />
      <div className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          {/* Redirect /company to /company/home */}
          <Route path="/" element={<Navigate to="/company/home" replace />} />
          <Route path="home" element={<CompanyHome />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="development" element={<Development />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </div>
    </div>
  );
};

export default Company;
