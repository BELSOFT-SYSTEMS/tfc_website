import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCenugu from '../components/enugu/TFCenugu';
import TFCenuguexpect from '../components/enugu/TFCenuguexpect';
import Sitepast from '../components/enugu/Sitepast';
import Enuguevents from '../components/enugu/TFCenugu-events';

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
