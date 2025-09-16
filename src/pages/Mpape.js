import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCmpape from '../components/mpape/TFCmpape';
import TFCmpapeexpect from '../components/mpape/TFCmpapeexpect';
import Sitepast from '../components/mpape/Sitepast';
import MinistryEvents from '../components/events-calendar/MinistryEvents';

function Mpape() {
  return (
    <div>
      <Header />
      <TFCmpape />
      <TFCmpapeexpect />
      <Sitepast />
      <MinistryEvents
        targetAudience="mpape"
        title="Mpape Campus Events"
        emptyMessage="No Mpape Campus events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Mpape
