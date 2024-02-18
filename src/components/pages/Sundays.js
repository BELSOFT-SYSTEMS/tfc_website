import React from 'react';
import Header from '../Header';
import Expectation from '../sundays/Expectation';
import TFCkids from '../sundays/TFC-kids';
import TFCsundays from '../sundays/TFC-sundays';
import Locations from '../Locations';
import Footer from '../Footer';

function Sundays() {
  return (
    <div>
      <Header />
      <TFCsundays />
      <Expectation />
      <TFCkids />
      <Locations />
      <Footer />
    </div>
  )
}

export default Sundays
