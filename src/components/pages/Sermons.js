import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TFCsermon from '../sermon/TFCsermon';
import Sermonseries from '../sermon/Sermon-series';
import Sermonarchive from '../sermon/TFCsermon-archives';

function Sermons () {
  return (
    <div>
      <Header />
      <TFCsermon />
      <Sermonseries />
      <Sermonarchive />
      <Footer />
      
    </div>
  )
}

export default Sermons
