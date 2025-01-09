import React from "react";
import { Outlet } from "react-router-dom";
import CompanyNavigation from "./CompanyNavigation";

const CompanyLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CompanyNavigation />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default CompanyLayout;
