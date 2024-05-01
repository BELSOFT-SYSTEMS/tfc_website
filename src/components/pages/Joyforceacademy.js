import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCjoyforce from '../joyforce/TFC-joyforce';
import TFCjoyforceevents from '../joyforce/TFCjoyforce-events';
import Knowusbetter from '../joyforce/Knowusbetter';
import Ourvalues from '../joyforce/Ourvalues';
import {Swipper} from '../Swiper/Swiper'

function Joyforceacademy() {
  return (
    <div>
      <Header />
      <TFCjoyforce />
      <Ourvalues />
      <Knowusbetter />
      <TFCjoyforceevents />
      <Swipper items={['bg-lightbearer.jpeg','aboutus1.png','slider1.jpg','bg-lightbearer.jpeg','aboutus1.png','slider1.jpg','bg-lightbearer.jpeg','aboutus1.png','slider1.jpg']} />
      <Footer />
      
    </div>
  )
}

export default Joyforceacademy
