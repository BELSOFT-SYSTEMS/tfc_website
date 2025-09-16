import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TFCsermon from '../components/sermon/TFCsermon';
import Sermonseries from '../components/sermon/Sermon-series';
import TFCsermonarchives from '../components/sermon/TFCsermon-archives';
// import {RecentContent} from '../sermon/Recent';

function Sermons () {
  return (
    <div>
      <Header />
      <TFCsermon />
      <Sermonseries />
      <TFCsermonarchives />
      {/* <RecentContent />s */}
      <Footer />

    </div>
  )
}

export default Sermons
