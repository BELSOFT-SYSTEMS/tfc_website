import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionOne from '../components/ambassadors/SectionOne';
// import SectionTwo from '../components/ambassadors/SectionTwo';
import SectionFour from '../components/ambassadors/SectionFour';
import SectionThree from '../components/ambassadors/SectionThree';
import { Swipper } from '../components/Swiper/Swiper'
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import { useMinistryGallery } from '../hooks/useMinistryGallery';



function Ambassadors() {
  const { data: galleryItems, loading, error } = useMinistryGallery('ambassadors');

  return (
    <div>
      <Header />
      <SectionOne />
      {galleryItems && galleryItems.length > 0 && <Swipper items={galleryItems} />}
      {/* <SectionTwo /> */}
      <SectionThree />
      {/* <SectionFour /> */}
      <MinistryEvents
        targetAudience="ambassadors"
        title="Ambassadors Events"
        emptyMessage="No Ambassadors events scheduled at this time. Check back later!"
      />
      <Footer />

    </div>
  )
}

export default Ambassadors
