import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCkids from '../lightbearer/TFC-kids';
import Kidsevents from '../lightbearer/TFCkids-events';
import Knowusbetter from '../lightbearer/Knowusbetter';
import Ourvalues from '../lightbearer/Ourvalues';

function Lightbearer() {
  return (
    <div>
      <Header />
      <TFCkids />
      <Ourvalues />
      <Knowusbetter />
      <Kidsevents />
      <Footer />
      
    </div>
  )
}

export default Lightbearer
