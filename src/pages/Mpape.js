import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCmpape from '../components/mpape/TFCmpape';
import TFCmpapeexpect from '../components/mpape/TFCmpapeexpect';
import Sitepast from '../components/mpape/Sitepast';
import Mpapeevents from '../components/mpape/TFCmpape-events';

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
