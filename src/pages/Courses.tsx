//import React from 'react';
import { Link } from "react-router-dom";

// Import images
import introGeneticsImg from "../images/introduction-to-genetics.jpeg";
import molecularBiologyImg from "../images/molecular-biology.jpeg";
import geneticEngineeringImg from "../images/genetic-engineering.jpeg";

const courses = [
  {
    title: "Introduction to Genetics",
    description: "Learn the fundamentals of genetics, from DNA structure to inheritance patterns.",
    image: introGeneticsImg,
    link: "/courses/introduction-to-genetics",
  },
  {
    title: "Molecular Biology",
    description: "Explore the molecular mechanisms of life, including DNA replication, transcription, and translation.",
    image: molecularBiologyImg,
    link: "/courses/molecular-biology",
  },
  {
    title: "Genetic Engineering",
    description: "Discover the tools and techniques used in genetic modification and CRISPR technology.",
    image: geneticEngineeringImg,
    link: "/courses/genetic-engineering",
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Course Details */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>

            {/* Learn More Link */}
            <Link
              to={course.link}
              className="text-indigo-500 hover:underline font-semibold"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
