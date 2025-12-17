import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCqueens from '../components/queens/TFCqueens';
import TFCqueensevents from '../components/queens/TFCqueens-events';
import Knowusbetter from '../components/queens/Knowusbetter';
// import Ourvalues from '../queens/Ourvalues';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import { Swipper } from '../components/Swiper/Swiper';
import { useMinistryGallery } from '../hooks/useMinistryGallery';



function Queens() {
  const { data: galleryItems, loading, error } = useMinistryGallery('queens');

  return (
    <div>
      <Header />
      <TFCqueens />
      {galleryItems && galleryItems.length > 0 && <Swipper items={galleryItems} />}
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <MinistryEvents
        targetAudience="queens"
        title="Queens Events"
        emptyMessage="No Queens events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Queens
