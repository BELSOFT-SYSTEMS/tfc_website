import React from 'react';
import Header from '../components/Header';
import Expectation from '../components/sundays/Expectation';
import TFCkids from '../components/sundays/TFC-kids';
import TFCsundays from '../components/sundays/TFC-sundays';
import Locations from '../components/Locations';
import Footer from '../components/Footer';
import { Swipper } from '../components/Swiper/Swiper';
import { sundays_data } from '../components/data/PhotoData';



function Sundays() {
  return (
    <div>
      <Header />
      <TFCsundays />
      <Expectation />
      <Swipper items={sundays_data} />
      <TFCkids />
      <Locations />
      <Footer />
    </div>
  )
}

export default Sundays
