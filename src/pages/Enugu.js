import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCenugu from '../components/enugu/TFCenugu';
import TFCenuguexpect from '../components/enugu/TFCenuguexpect';
import Sitepast from '../components/enugu/Sitepast';
import MinistryEvents from '../components/events-calendar/MinistryEvents';

function Enugu() {
  return (
    <div>
      <Header />
      <TFCenugu />
      <TFCenuguexpect />
      <Sitepast />
      <MinistryEvents
        targetAudience="enugu"
        title="Enugu Campus Events"
        emptyMessage="No Enugu Campus events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Enugu
