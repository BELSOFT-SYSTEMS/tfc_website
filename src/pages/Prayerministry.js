import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCprayer from '../components/Prayer-ministry/TFCprayer';
import TFCprayerevents from '../components/Prayer-ministry/TFCprayer-events';
import Knowusbetter from '../components/Prayer-ministry/Knowusbetter';
import Ourvalues from '../components/Prayer-ministry/Ourvalues';

function Prayerministry() {
  return (
    <div>
      <Header />
      <TFCprayer />
      <Ourvalues />
      <Knowusbetter />
      <TFCprayerevents />
      <Footer />
      
    </div>
  )
}

export default Prayerministry
