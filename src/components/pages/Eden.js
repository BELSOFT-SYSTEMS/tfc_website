import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCeden from '../eden/TFCeden';
import TFCedenexpect from '../eden/TFCedenexpect';
import Sitepast from '../eden/Sitepast';
import Edenevents from '../eden/TFCeden-events';

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
