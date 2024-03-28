import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Prayerreq from '../prayer-request/Prayer-request';
import Knowusbetter from '../prayer-request/Knowusbetter';
import Ourvalues from '../prayer-request/Ourvalues';

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
