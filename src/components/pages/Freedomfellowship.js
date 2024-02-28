import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCfreedom from '../freedom-fellowship/TFCfreedom';
import Freedomevents from '../freedom-fellowship/TFCfreedom-events';
import Knowusbetter from '../freedom-fellowship/Knowusbetter';
import Ourvalues from '../freedom-fellowship/Ourvalues';

function Freedomfellowship() {
  return (
    <div>
      <Header />
      <TFCfreedom />
      <Ourvalues />
      <Knowusbetter />
      <Freedomevents />
      <Footer />
    </div>
  )
}

export default Freedomfellowship
