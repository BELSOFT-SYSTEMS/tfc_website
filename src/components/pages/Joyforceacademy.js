import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCjoyforce from '../joyforce/TFC-joyforce';
import TFCjoyforceevents from '../joyforce/TFCjoyforce-events';
import Knowusbetter from '../joyforce/Knowusbetter';
import Ourvalues from '../joyforce/Ourvalues';
import {Swipper} from '../Swiper/Swiper'


const items = [
  { 
    url: '/joy/joy1.jpeg',
    description: 'Description for image 1' 
  },
  { 
    url: '/joy/joy2.jpeg',
    description: 'Description for image 2' 
  },
  { 
    url: '/joy/joy3.jpg',
    description: 'Description for image 3' 
  },
  { 
    url: '/joy/joy4.jpg',
    description: 'Description for image 4' 
  },
  { 
    url: '/joy/joy5.jpg',
    description: 'Description for image 5' 
  },
  { 
    url: '/joy/joy6.jpg',
    description: 'Description for image 6' 
  }
];

function Joyforceacademy() {
  return (
    <div>
      <Header />
      <TFCjoyforce />
      <Ourvalues />
      <Knowusbetter />
      <TFCjoyforceevents />
      <Swipper items={items} />
      <Footer />
      
    </div>
  )
}

export default Joyforceacademy
