import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCkids from '../components/lightbearer/TFC-kids';
import Kidsevents from '../components/lightbearer/TFCkids-events';
import Knowusbetter from '../components/lightbearer/Knowusbetter';
// import Ourvalues from '../lightbearer/Ourvalues';
import Upcomingevents from '../components/Upcomingevents';
import { Swipper } from '../components/Swiper/Swiper';
import { lightbearers_data } from '../components/data/PhotoData';



function Lightbearer() {
  return (
    <div>
      <Header />
      <TFCkids />
      <Swipper items={lightbearers_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      {/* <Kidsevents /> */}
      <Upcomingevents />
      <Footer />
      
    </div>
  )
}

export default Lightbearer
