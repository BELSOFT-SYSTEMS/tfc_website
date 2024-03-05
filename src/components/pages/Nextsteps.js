import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Journey from '../next-step/Journey';
import Nextstep from '../next-step/Nextstep';
import Together from '../next-step/Together';


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
