import React from 'react';
import backgroundVideo from "../../videos/about-bg.mp4";

export default function About() {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      >
      </video>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About GeneticEdu</h1>

          <div className="prose prose-lg text-white">
            <p className="text-white mb-6">
              GeneticEdu is a leading platform dedicated to advancing genetics education and research. 
              Our mission is to make genetics education accessible to everyone, from students to professionals.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
            <p className="text-white mb-6">
              We strive to bridge the gap between complex genetic concepts and practical understanding, 
              providing high-quality educational resources and cutting-edge research insights.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Vision</h2>
            <p className="text-white mb-6">
              To be the world's leading platform for genetics education, fostering a community of 
              learners and researchers passionate about advancing genetic science.
            </p>

            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-white">
             Have questions? We'd love to hear from you. Send us a message at{' '}
             <a href="mailto:contact@geneticedu.com" className="text-indigo-600 hover:text-indigo-800">
                 contact@geneticedu.com
                </a>
                    </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
