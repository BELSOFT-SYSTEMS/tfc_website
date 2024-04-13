import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCjoyforce from '../joyforce/TFC-joyforce';
import TFCjoyforceevents from '../joyforce/TFCjoyforce-events';
import Knowusbetter from '../joyforce/Knowusbetter';
import Ourvalues from '../joyforce/Ourvalues';

function Joyforceacademy() {
  return (
    <div>
      <Header />
      <TFCjoyforce />
      <Ourvalues />
      <Knowusbetter />
      <TFCjoyforceevents />
      <Footer />
      
    </div>
  )
}

export default Joyforceacademy
