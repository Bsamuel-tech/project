//import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import CommunityLinks from '../components/CommunityLinks';
import Announcements from '../components/Announcements';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <CommunityLinks />
      <Announcements />
    </div>
  );
};

export default Home;
