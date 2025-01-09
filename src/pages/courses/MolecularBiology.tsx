import React from "react";
import molecularBiologyImage from "../../images/molecular-biology.jpeg";

const MolecularBiology = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
        <img
          src={molecularBiologyImage}
          alt="Molecular Biology"
          className="w-full h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Molecular Biology
        </h1>
        <p className="text-gray-600">
          Explore the intricate molecular mechanisms that drive biological
          processes. Learn about DNA replication, transcription, translation,
          and the regulation of gene expression.
        </p>
        <p className="text-gray-600 mt-4">
          This course is designed for learners interested in diving deeper into
          the science of life at the molecular level, uncovering the secrets
          that fuel cellular processes.
        </p>
      </div>
    </div>
  );
};

export default MolecularBiology;
