import React from 'react';
import rotatingWorld from '../../videos/rotating-world.mp4'; // Ensure the path is correct

const CompanyHome: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={rotatingWorld}
        autoPlay
        loop
        muted
      ></video>

      {/* Optional Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Page Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Our Company</h1>
          <p className="text-xl md:text-2xl">
            Exploring Innovation, Community, and Progress
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-8 bg-black bg-opacity-50">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Our Company, we strive to deliver innovative solutions, build thriving
            communities, and drive global progress through education, research, and
            technology.
          </p>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-black bg-opacity-50">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            For inquiries and collaborations, reach out to us at{' '}
            <a
              href="mailto:info@company.com"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              info@company.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CompanyHome;
