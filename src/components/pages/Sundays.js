import React from 'react';
import Header from '../Header';
import Expectation from '../sundays/Expectation';
import TFCkids from '../sundays/TFC-kids';
import TFCsundays from '../sundays/TFC-sundays';
import Locations from '../Locations';
import Footer from '../Footer';
import { Swipper } from '../Swiper/Swiper';
import { data } from '../data/data';



function Sundays() {
  return (
    <div>
      <Header />
      <TFCsundays />
      <Expectation />
      <Swipper items={data} />
      <TFCkids />
      <Locations />
      <Footer />
    </div>
  )
}

export default Sundays
