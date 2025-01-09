// import React from 'react';

const Development = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Research & Development</h1>
      <p className="text-gray-700">
        Our company is committed to pushing the boundaries of genetic research and development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Innovation</h2>
          <p className="text-gray-600">
            We continuously innovate to bring you the most advanced tools for genetics.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Collaboration</h2>
          <p className="text-gray-600">
            Partnering with institutions worldwide to accelerate research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Development;
