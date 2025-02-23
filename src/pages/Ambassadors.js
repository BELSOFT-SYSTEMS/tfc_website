import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionOne from '../components/ambassadors/SectionOne';
// import SectionTwo from '../components/ambassadors/SectionTwo';
import SectionFour from '../components/ambassadors/SectionFour';
import SectionThree from '../components/ambassadors/SectionThree';
import { Swipper } from '../components/Swiper/Swiper'
import Upcomingevents from '../components/Upcomingevents';
import { ambassadors_data } from '../components/data/PhotoData';




function Ambassadors() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Swipper items={ambassadors_data} />
      {/* <SectionTwo /> */}
      <SectionThree />
      {/* <SectionFour /> */}
      <Upcomingevents />
      <Footer />

    </div>
  )
}

export default Ambassadors
