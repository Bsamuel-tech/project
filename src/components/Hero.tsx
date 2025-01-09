
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="bg-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold">Welcome to the Genetic Community</h1>
        <p className="mt-4 text-xl">
          Unlock the power of AI for your courses and beyond. Explore the world of genetics through our platform.
        </p>
        <div className="mt-6 space-x-4">
          <a href="/get-started" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
            Get Started
          </a>
          <Link to="/discover-more" className="bg-indigo-500 px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
              Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
