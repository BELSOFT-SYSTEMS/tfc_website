import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TFCeden from "../components/eden/TFCeden";
import TFCedenexpect from "../components/eden/TFCedenexpect";
import Sitepast from "../components/eden/Sitepast";
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import Edenevents from "../components/eden/TFCeden-events";

function Eden() {
  return (
    <div>
      <Header />
      <TFCeden />
      <TFCedenexpect />
      <Sitepast />
      <MinistryEvents
        targetAudience="eden"
        title="Eden Events"
        emptyMessage="No Eden events scheduled at this time. Check back later!"
      />
      <Footer />
    </div>
  );
}

export default Eden;
