import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCjoyforce from '../joyforce/TFC-joyforce';
import TFCjoyforceevents from '../joyforce/TFCjoyforce-events';
import Knowusbetter from '../joyforce/Knowusbetter';
import Slider from '../Slider/Slider';

function Joyforceacademy() {
  return (
    <div>
      <Header />
      <TFCjoyforce />
      <Slider />
      <Knowusbetter />
      <TFCjoyforceevents />
      <Footer />
      
    </div>
  )
}

export default Joyforceacademy
