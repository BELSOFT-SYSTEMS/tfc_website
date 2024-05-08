import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SectionOne from '../ambassadors/SectionOne';
import SectionTwo from '../ambassadors/SectionTwo';
import SectionFour from '../ambassadors/SectionFour';
import SectionThree from '../ambassadors/SectionThree';
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




function Ambassadors() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Swipper items={items} />
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
      <Footer />

    </div>
  )
}

export default Ambassadors
