import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCGov from '../components/governors/TFCGov';
import TFCGovevents from '../components/governors/TFCGov-events';
import Knowusbetter from '../components/governors/Knowusbetter';
// import Ourvalues from '../governors/Ourvalues';
import { Swipper } from '../components/Swiper/Swiper'
import { governors_data } from '../components/data/PhotoData';



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
