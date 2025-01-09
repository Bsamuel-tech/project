// import React from 'react';

const Downloads = () => {
  const resources = [
    { name: "Genetic Research Guide", file: "/downloads/genetic-guide.pdf" },
    { name: "AI in Genetics Whitepaper", file: "/downloads/ai-genetics.pdf" },
    { name: "Genome Sequencing Basics", file: "/downloads/genome-basics.pdf" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Download Resources</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore our collection of downloadable resources to deepen your understanding of genetics and related fields.
      </p>
      <ul className="space-y-4">
        {resources.map((resource, idx) => (
          <li key={idx} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md">
            <span className="font-semibold">{resource.name}</span>
            <a
              href={resource.file}
              download
              className="text-indigo-500 hover:underline"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
