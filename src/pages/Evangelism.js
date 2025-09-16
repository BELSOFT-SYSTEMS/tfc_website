import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCevans from '../components/evangelism/TFCevans';
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import Knowusbetter from '../components/evangelism/Knowusbetter';
import Ourvalues from '../components/evangelism/Ourvalues';


function Evangelism() {
  return (
    <div>
      <Header />
      <TFCevans />
      <Ourvalues />
      <Knowusbetter />
      <MinistryEvents
        targetAudience="evangelism"
        title="Evangelism Events"
        emptyMessage="No Evangelism events scheduled at this time. Check back later!"
      />
      <Footer />
      
    </div>
  )
}

export default Evangelism
