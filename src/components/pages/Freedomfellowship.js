import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCfreedom from '../freedom-fellowship/TFCfreedom';
import Freedomevents from '../freedom-fellowship/TFCfreedom-events';
import Knowusbetter from '../freedom-fellowship/Knowusbetter';
import Ourvalues from '../freedom-fellowship/Ourvalues';

import { Swipper } from '../Swiper/Swiper'


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

function Freedomfellowship() {
  return (
    <div>
      <Header />
      <TFCfreedom />
      <Swipper items={items} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <Freedomevents />
      <Footer />
    </div>
  )
}

export default Freedomfellowship
