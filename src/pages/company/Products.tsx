// import React from 'react';

const Products = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Products</h1>
      <p className="text-gray-700">
        Explore our innovative range of products designed to support genetic research, education, and development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Product 1</h2>
          <p className="text-gray-600">Description of Product 1.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Product 2</h2>
          <p className="text-gray-600">Description of Product 2.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Product 3</h2>
          <p className="text-gray-600">Description of Product 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
