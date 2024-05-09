import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SectionOne from '../ambassadors/SectionOne';
import SectionTwo from '../ambassadors/SectionTwo';
import SectionFour from '../ambassadors/SectionFour';
import SectionThree from '../ambassadors/SectionThree';
import { Swipper } from '../Swiper/Swiper'
import { ambassadors_data } from '../data/PhotoData';




function Ambassadors() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Swipper items={ambassadors_data} />
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
      <Footer />

    </div>
  )
}

export default Ambassadors
