import React from "react";
import geneticsImage from "../../images/introduction-to-genetics.jpeg";

const IntroductionToGenetics = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
        <img
          src={geneticsImage}
          alt="Introduction to Genetics"
          className="w-full h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Introduction to Genetics
        </h1>
        <p className="text-gray-600">
          Dive into the basics of genetics, heredity, and gene expression.
          Understand how genes function and the role they play in life.
        </p>
      </div>
    </div>
  );
};

export default IntroductionToGenetics;
