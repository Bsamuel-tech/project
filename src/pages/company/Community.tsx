import React from 'react';

const Community = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Community Announcements</h1>
      <p className="text-gray-700">
        Stay informed with the latest news and updates from our community.
      </p>
      <div className="mt-8 space-y-6">
        {/* Announcement 1 */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600">Upcoming Genetic Workshop</h2>
          <p className="text-gray-600 mt-2">
            Join us for a hands-on workshop on advanced genetic techniques. Learn from industry experts and enhance your skills.
          </p>
          <p className="mt-2 text-gray-500 text-sm">Date: January 15, 2025 | Location: GeneticEdu HQ</p>
        </div>

        {/* Announcement 2 */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600">Community Fundraiser</h2>
          <p className="text-gray-600 mt-2">
            Support our efforts to provide free genetic resources to underprivileged schools. Your contribution makes a difference!
          </p>
          <p className="mt-2 text-gray-500 text-sm">Date: February 10, 2025 | Online Event</p>
        </div>

        {/* Announcement 3 */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-indigo-600">Annual Conference on Genetic Research</h2>
          <p className="text-gray-600 mt-2">
            Attend our annual conference featuring groundbreaking research and networking opportunities with leading scientists.
          </p>
          <p className="mt-2 text-gray-500 text-sm">Date: March 25-27, 2025 | Location: GeneticEdu Conference Center</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
