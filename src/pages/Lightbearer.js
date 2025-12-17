import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCkids from '../components/lightbearer/TFC-kids';
import Kidsevents from '../components/lightbearer/TFCkids-events';
import Knowusbetter from '../components/lightbearer/Knowusbetter';
// import Ourvalues from '../lightbearer/Ourvalues';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import { Swipper } from '../components/Swiper/Swiper';
import { useMinistryGallery } from '../hooks/useMinistryGallery';



function Lightbearer() {
  const { data: galleryItems, loading, error } = useMinistryGallery('lightbearer');

  return (
    <div>
      <Header />
      <TFCkids />
      {galleryItems && galleryItems.length > 0 && <Swipper items={galleryItems} />}
      {/* <Ourvalues /> */}
      <Knowusbetter />
      {/* <Kidsevents /> */}
      <MinistryEvents
        targetAudience="lightbearer"
        title="Lightbearer Events"
        emptyMessage="No Lightbearer events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Lightbearer
