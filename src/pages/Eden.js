import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCeden from '../components/eden/TFCeden';
import TFCedenexpect from '../components/eden/TFCedenexpect';
import Sitepast from '../components/eden/Sitepast';
import Edenevents from '../components/eden/TFCeden-events';

function Eden() {
  return (
    <div>
      <Header />
      <TFCeden />
      <TFCedenexpect />
      <Sitepast />
      <Edenevents />
      <Footer />
      
    </div>
  )
}

export default Eden
