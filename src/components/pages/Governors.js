import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCGov from '../governors/TFCGov';
import TFCGovevents from '../governors/TFCGov-events';
import Knowusbetter from '../governors/Knowusbetter';
import Ourvalues from '../governors/Ourvalues';
import { Swipper } from '../Swiper/Swiper'
import { governors_data } from '../data/PhotoData';



function Governors() {
  return (
    <div>
      <Header />
      <TFCGov />
      <Swipper items={governors_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <TFCGovevents />
      <Footer />
      
    </div>
  )
}

export default Governors
