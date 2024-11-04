import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCevans from '../components/evangelism/TFCevans';
import TFCevansevents from '../components/evangelism/TFCevans-events';
import Knowusbetter from '../components/evangelism/Knowusbetter';
import Ourvalues from '../components/evangelism/Ourvalues';


function Evangelism() {
  return (
    <div>
      <Header />
      <TFCevans />
      <Ourvalues />
      <Knowusbetter />
      <TFCevansevents />
      <Footer />
      
    </div>
  )
}

export default Evangelism
