import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCenugu from '../enugu/TFCenugu';
import TFCenuguexpect from '../enugu/TFCenuguexpect';
import Sitepast from '../enugu/Sitepast';
import Enuguevents from '../enugu/TFCenugu-events';

function Enugu() {
  return (
    <div>
      <Header />
      <TFCenugu />
      <TFCenuguexpect />
      <Sitepast />
      <Enuguevents />
      <Footer />
      
    </div>
  )
}

export default Enugu
