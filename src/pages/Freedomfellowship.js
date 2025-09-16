import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCfreedom from '../components/freedom-fellowship/TFCfreedom';
import Freedomevents from '../components/freedom-fellowship/TFCfreedom-events';
import Knowusbetter from '../components/freedom-fellowship/Knowusbetter';
// import Ourvalues from '../components/freedom-fellowship/Ourvalues';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import { freedom_fellowship_data } from '../components/data/PhotoData';

import { Swipper } from '../components/Swiper/Swiper'



function Freedomfellowship() {
  return (
    <div>
      <Header />
      <TFCfreedom />
      <Swipper items={freedom_fellowship_data} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      {/* <Freedomevents /> */}
      <MinistryEvents
        targetAudience="freedom-fellowship"
        title="Freedom Fellowship Events"
        emptyMessage="No Freedom Fellowship events scheduled at this time. Check back later!"
      />
      <Footer />
    </div>
  )
}

export default Freedomfellowship
