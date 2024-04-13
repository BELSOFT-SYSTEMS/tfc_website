import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCeventscalendar from '../events-calendar/TFCevents-calendar';
import TFCevent from '../events-calendar/TFCevent';

function Eventcalendar() {
  return (
    <div>
      <Header />
      <TFCevent />
      <TFCeventscalendar />
      <Footer />
      
    </div>
  )
}

export default Eventcalendar
