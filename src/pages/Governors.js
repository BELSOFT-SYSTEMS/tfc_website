import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCGov from '../components/governors/TFCGov';
import TFCGovevents from '../components/governors/TFCGov-events';
import Knowusbetter from '../components/governors/Knowusbetter';
// import Ourvalues from '../governors/Ourvalues';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import { Swipper } from '../components/Swiper/Swiper';
import { useMinistryGallery } from '../hooks/useMinistryGallery';



function Governors() {
  const { data: galleryItems, loading, error } = useMinistryGallery('governors');

  return (
    <div>
      <Header />
      <TFCGov />
      {galleryItems && galleryItems.length > 0 && <Swipper items={galleryItems} />}
      {/* <Ourvalues /> */}
      <Knowusbetter />
      {/* <TFCGovevents /> */}
      <MinistryEvents
        targetAudience="governors"
        title="Governors Events"
        emptyMessage="No Governors events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Governors
