import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCGov from '../governors/TFCGov';
import TFCGovevents from '../governors/TFCGov-events';
import Knowusbetter from '../governors/Knowusbetter';
import Ourvalues from '../governors/Ourvalues';

function Governors() {
  return (
    <div>
      <Header />
      <TFCGov />
      <Ourvalues />
      <Knowusbetter />
      <TFCGovevents />
      <Footer />
      
    </div>
  )
}

export default Governors
