import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCqueens from '../components/kingdom-ladies/TFCqueens';
import TFCqueensevents from '../components/queens/TFCqueens-events';
import Knowusbetter from '../components/kingdom-ladies/Knowusbetter';
// import Ourvalues from '../queens/Ourvalues';
import Upcomingevents from '../components/Upcomingevents';
import { Swipper } from '../components/Swiper/Swiper'
import { queens_data } from '../components/data/PhotoData';




function KingdomLadies() {
  return (
    <div>
      <Header />
      <TFCqueens />
      <Swipper items={queens_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      {/* <TFCqueensevents /> */}
      <Upcomingevents />
      <Footer />
      
    </div>
  )
}

export default KingdomLadies
