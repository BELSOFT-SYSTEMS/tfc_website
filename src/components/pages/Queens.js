import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCqueens from '../queens/TFCqueens';
import TFCqueensevents from '../queens/TFCqueens-events';
import Knowusbetter from '../queens/Knowusbetter';
// import Ourvalues from '../queens/Ourvalues';
import { Swipper } from '../Swiper/Swiper'
import { queens_data } from '../data/PhotoData';




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
