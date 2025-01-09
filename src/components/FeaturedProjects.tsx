import React from "react";

// Import images
import aiGeneticsWebp from "../images/ai-genetics.webp";
import remoteLearningWebp from "../images/remote-learning.webp";
import genomeSequencingWebp from "../images/genome-sequencing.webp";

const projects = [
  {
    title: "AI in Genetics",
    description: "Discover how AI is revolutionizing genetic research and data analysis.",
    link: "/ai-genetics",
    webp: aiGeneticsWebp,
  },
  {
    title: "Remote Learning",
    description: "Access genetic courses and resources from anywhere in the world.",
    link: "/remote-learning",
    webp: remoteLearningWebp,
  },
  {
    title: "Genome Sequencing",
    description: "Explore advanced genome sequencing techniques and applications.",
    link: "/genome-sequencing",
    webp: genomeSequencingWebp,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.webp}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-500 hover:underline font-semibold"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
