import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCevans from '../evangelism/TFCevans';
import TFCevansevents from '../evangelism/TFCevans-events';
import Knowusbetter from '../evangelism/Knowusbetter';
import Ourvalues from '../evangelism/Ourvalues';


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
