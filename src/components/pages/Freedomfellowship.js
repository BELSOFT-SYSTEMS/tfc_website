import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCfreedom from '../freedom-fellowship/TFCfreedom';
import Freedomevents from '../freedom-fellowship/TFCfreedom-events';
import Knowusbetter from '../freedom-fellowship/Knowusbetter';
import Ourvalues from '../freedom-fellowship/Ourvalues';
import { freedom_fellowship_data } from '../data/PhotoData';

import { Swipper } from '../Swiper/Swiper'



function Freedomfellowship() {
  return (
    <div>
      <Header />
      <TFCfreedom />
      <Swipper items={freedom_fellowship_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <Freedomevents />
      <Footer />
    </div>
  )
}

export default Freedomfellowship
