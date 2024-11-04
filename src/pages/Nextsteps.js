import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Journey from '../components/next-step/Journey';
import Nextstep from '../components/next-step/Nextstep';
import Together from '../components/next-step/Together';


function Nextsteps() {
  return (
    <div>
      <Header />
      <Nextstep />
      <Together />
      <Journey />
      <Footer />
      
    </div>
  )
}

export default Nextsteps
