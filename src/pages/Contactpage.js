import React from 'react';
import Header from '../components/Header';
import Gettouch from '../components/contact/Gettouch';
import Connect from '../components/contact/Connect';
import Offices from '../components/contact/Offices';
import Footer from '../components/Footer';

function Contactpage() {
  return (
    <div>
      <Header />
      <Gettouch />
      <Connect />
      <Offices />
      <Footer />
      
    </div>
  )
}

export default Contactpage
