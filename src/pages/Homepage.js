// Homepage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import Locations from '../components/Locations';
import CurrentSermon from '../components/CurrentSermon';
import Upcomingevents from '../components/Upcomingevents';
import Sunday from '../components/Sunday';

function Homepage() {
  return (
    <div>
      <Header />
      <HomeSlider />
      <Sunday />
      <CurrentSermon />
      <Locations />
      <Upcomingevents />
      <Footer />
    </div>
  );
}

export default Homepage;
