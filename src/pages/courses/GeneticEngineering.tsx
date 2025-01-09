import React from "react";
import geneticEngineeringImage from "../../images/genetic-engineering.jpeg";

const GeneticEngineering = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
        {/* Course Image */}
        <img
          src={geneticEngineeringImage}
          alt="Genetic Engineering"
          className="w-full h-60 object-cover rounded-md mb-6"
        />

        {/* Course Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Genetic Engineering
        </h1>

        {/* Course Content */}
        <p className="text-gray-600">
          Discover the fascinating field of genetic engineering, where science
          meets innovation. This course delves into advanced techniques for
          editing genes and their applications in medicine, agriculture, and
          biotechnology.
        </p>
        <p className="text-gray-600 mt-4">
          From CRISPR technology to gene therapy, learn how scientists are
          shaping the future of biology by modifying the building blocks of
          life.
        </p>
      </div>
    </div>
  );
};

export default GeneticEngineering;
