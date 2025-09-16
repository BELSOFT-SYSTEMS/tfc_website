import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TFCjoyforce from "../components/joyforce/TFC-joyforce";
// import TFCjoyforceevents from "../components/joyforce/TFCjoyforce-events";
import MinistryEvents from '../components/events-calendar/MinistryEvents';
import Knowusbetter from "../components/joyforce/Knowusbetter";
// import Ourvalues from '../joyforce/Ourvalues';
import { Swipper } from "../components/Swiper/Swiper";
import "../components/joyforce/joyforce.css";

const items = [
  {
    url: "/joy/joy1.jpeg",
    description: "Description for image 1",
  },
  {
    url: "/joy/joy2.jpeg",
    description: "Description for image 2",
  },
  {
    url: "/joy/joy3.jpg",
    description: "Description for image 3",
  },
  {
    url: "/joy/joy4.jpg",
    description: "Description for image 4",
  },
  {
    url: "/joy/joy5.jpg",
    description: "Description for image 5",
  },
  {
    url: "/joy/joy6.jpg",
    description: "Description for image 6",
  },
];

function Joyforceacademy() {
  return (
    <div>
      <Header />
      <TFCjoyforce />
      <Swipper items={items} />
      {/* <Ourvalues /> */}
      <Knowusbetter />
      <MinistryEvents
        targetAudience="joyforce"
        title="Joyforce Academy Events"
        emptyMessage="No Joyforce Academy events scheduled at this time. Check back later!"
      />
      <Footer />
    </div>
  );
}

export default Joyforceacademy;
