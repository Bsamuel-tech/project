import React from "react";

const CompanyNavigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-4 justify-center font-semibold">
        <li>
          <a
            href="/company/home"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Home
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
        <li>
          <a
            href="/company/products"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Products
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
        <li>
          <a
            href="/company/services"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Services
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
        <li>
          <a
            href="/company/tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Tracker
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
        <li>
          <a
            href="/company/development"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Development
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
        <li>
          <a
            href="/company/community"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center"
          >
            Community Announcement
            <span className="ml-1 text-sm">🔗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CompanyNavigation;
