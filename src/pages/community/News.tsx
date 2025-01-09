//import React from 'react';

const News = () => {
  const newsArticles = [
    {
      title: "Breakthrough in Genetic AI",
      date: "Dec 15, 2024",
      description:
        "Researchers have developed a new AI model capable of analyzing genetic data faster and more accurately.",
      link: "/news/breakthrough-genetic-ai",
    },
    {
      title: "Upcoming Genetics Conference",
      date: "Jan 20, 2025",
      description:
        "Join us for the annual genetics conference to learn about the latest innovations and network with experts.",
      link: "/news/genetics-conference",
    },
    {
      title: "New Remote Learning Platform Launched",
      date: "Nov 10, 2024",
      description:
        "We’re excited to announce the launch of our new remote learning platform for genetics enthusiasts.",
      link: "/news/remote-learning-launch",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Latest News</h1>
      <ul className="space-y-6">
        {newsArticles.map((news, idx) => (
          <li key={idx} className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="font-semibold text-indigo-600 text-xl">{news.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{news.date}</p>
            <p className="text-gray-700">{news.description}</p>
            <a
              href={news.link}
              className="text-indigo-500 hover:underline mt-4 block"
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
