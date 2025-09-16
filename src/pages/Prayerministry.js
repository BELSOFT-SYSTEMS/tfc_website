import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCprayer from '../components/Prayer-ministry/TFCprayer';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import Knowusbetter from '../components/Prayer-ministry/Knowusbetter';
import Ourvalues from '../components/Prayer-ministry/Ourvalues';

function Prayerministry() {
  return (
    <div>
      <Header />
      <TFCprayer />
      <Ourvalues />
      <Knowusbetter />
      <MinistryEvents
        targetAudience="prayer-ministry"
        title="Prayer Ministry Events"
        emptyMessage="No Prayer Ministry events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Prayerministry
