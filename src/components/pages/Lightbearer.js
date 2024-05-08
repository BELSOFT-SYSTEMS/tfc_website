import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCkids from '../lightbearer/TFC-kids';
import Kidsevents from '../lightbearer/TFCkids-events';
import Knowusbetter from '../lightbearer/Knowusbetter';
import Ourvalues from '../lightbearer/Ourvalues';
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


function Lightbearer() {
  return (
    <div>
      <Header />
      <TFCkids />
      <Swipper items={items} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <Kidsevents />
      <Footer />
      
    </div>
  )
}

export default Lightbearer
