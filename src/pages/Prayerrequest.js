import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prayerreq from '../components/prayer-request/Prayer-request';
import Knowusbetter from '../components/prayer-request/Knowusbetter';
import Ourvalues from '../components/prayer-request/Ourvalues';

function Prayerrequest() {
  return (
    <div>
      <Header />
      <Prayerreq />
      <Ourvalues />
      <Knowusbetter />
      <Footer />
      
    </div>
  )
}

export default Prayerrequest
