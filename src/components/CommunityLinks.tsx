import React from "react";

// Import images
import forumsWebp from "../images/forums.webp";
import downloadResourcesWebp from "../images/download-resources.webp";
import supportWebp from "../images/support.webp";
import newsWebp from "../images/news.webp";

const links = [
  {
    title: "Forums",
    description: "Join discussions, share insights, and connect with the community.",
    link: "/forums",
    webp: forumsWebp,
  },
  {
    title: "Download Resources",
    description: "Access materials, tools, and guides for learning and research.",
    link: "/downloads",
    webp: downloadResourcesWebp,
  },
  {
    title: "Support",
    description: "Get help and answers to your questions from the support team.",
    link: "/support",
    webp: supportWebp,
  },
  {
    title: "News",
    description: "Stay updated with the latest news and developments in the field.",
    link: "/news",
    webp: newsWebp,
  },
];

const CommunityLinks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Community Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.webp}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-indigo-500 hover:underline font-semibold"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLinks;
