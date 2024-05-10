import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCkids from '../lightbearer/TFC-kids';
import Kidsevents from '../lightbearer/TFCkids-events';
import Knowusbetter from '../lightbearer/Knowusbetter';
import Ourvalues from '../lightbearer/Ourvalues';
import { Swipper } from '../Swiper/Swiper';
import { lightbearers_data } from '../data/PhotoData';



function Lightbearer() {
  return (
    <div>
      <Header />
      <TFCkids />
      <Swipper items={lightbearers_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <Kidsevents />
      <Footer />
      
    </div>
  )
}

export default Lightbearer
