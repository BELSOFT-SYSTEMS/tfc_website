import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCmpape from '../mpape/TFCmpape';
import TFCmpapeexpect from '../mpape/TFCmpapeexpect';
import Sitepast from '../mpape/Sitepast';
import Mpapeevents from '../mpape/TFCmpape-events';

function Mpape() {
  return (
    <div>
      <Header />
      <TFCmpape />
      <TFCmpapeexpect />
      <Sitepast />
      <Mpapeevents />
      <Footer />
      
    </div>
  )
}

export default Mpape
