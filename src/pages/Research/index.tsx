//import React from 'react';
import ResearchCard from './ResearchCard';

export default function Research() {
  const researchPapers = [
    {
      title: "CRISPR Gene Editing Advances",
      description: "Latest developments in CRISPR technology and its applications in genetic engineering.",
      author: "Dr. Samuel Bizimana",
      date: "March 2024",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Human Genome Project Updates",
      description: "New discoveries and insights from ongoing human genome research.",
      author: "Dr. Eden Muhima",
      date: "February 2024",
      imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Epigenetics and Disease Prevention",
      description: "Understanding the role of epigenetics in disease prevention and treatment.",
      author: "Dr. kallen Bizimana",
      date: "January 2024",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Research Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchPapers.map((paper) => (
          <ResearchCard key={paper.title} {...paper} />
        ))}
      </div>
    </div>
  );
}