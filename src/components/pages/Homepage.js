// Homepage.js
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HomeSlider from '../HomeSlider';
import Locations from '../Locations';
import CurrentSermon from '../CurrentSermon';
import Upcomingevents from '../Upcomingevents';
import Sunday from '../Sunday';

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
