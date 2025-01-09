//import React from 'react';

const Tracker = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Project Tracker</h1>
      <p className="text-gray-700">
        Stay updated with the progress of our projects and key milestones.
      </p>
      <div className="mt-8">
        <table className="table-auto mx-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Project</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Genetic Analysis</td>
              <td className="px-4 py-2 border border-gray-300 text-green-600">Ongoing</td>
              <td className="px-4 py-2 border border-gray-300">December 31, 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Genome Sequencing</td>
              <td className="px-4 py-2 border border-gray-300 text-yellow-600">Pending</td>
              <td className="px-4 py-2 border border-gray-300">March 15, 2025</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Training Programs</td>
              <td className="px-4 py-2 border border-gray-300 text-green-600">Completed</td>
              <td className="px-4 py-2 border border-gray-300">October 10, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tracker;
