import React from 'react';
import Hero from '../components/home/Hero';
import FeaturesPreview from '../components/home/FeaturesPreview';
import CommunitiesPreview from '../components/home/CommunitiesPreview';
import EventsPreview from '../components/home/EventsPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesPreview />
      <CommunitiesPreview />
      <EventsPreview />
    </div>
  );
};

export default Home;