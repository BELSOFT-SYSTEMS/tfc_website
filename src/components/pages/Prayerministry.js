import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCprayer from '../Prayer-ministry/TFCprayer';
import TFCprayerevents from '../Prayer-ministry/TFCprayer-events';
import Knowusbetter from '../Prayer-ministry/Knowusbetter';
import Ourvalues from '../Prayer-ministry/Ourvalues';

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
