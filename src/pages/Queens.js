import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCqueens from '../components/queens/TFCqueens';
import TFCqueensevents from '../components/queens/TFCqueens-events';
import Knowusbetter from '../components/queens/Knowusbetter';
// import Ourvalues from '../queens/Ourvalues';
import { Swipper } from '../components/Swiper/Swiper'
import { queens_data } from '../components/data/PhotoData';




function Queens() {
  return (
    <div>
      <Header />
      <TFCqueens />
      <Swipper items={queens_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <TFCqueensevents />
      <Footer />
      
    </div>
  )
}

export default Queens
