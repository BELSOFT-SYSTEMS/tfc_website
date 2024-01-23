// Homepage.js
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HomeSlider from '../HomeSlider';
import Locations from '../Locations';
import CurrentSermon from '../CurrentSermon';
import Upcomingevents from '../Upcomingevents';

function Homepage() {
  return (
    <div>
      <Header />
      <HomeSlider />
      <CurrentSermon />
      <Locations />
      <Upcomingevents />
      <Footer />
    </div>
  );
}

export default Homepage;
