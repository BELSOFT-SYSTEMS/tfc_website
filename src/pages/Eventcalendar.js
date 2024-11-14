import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TFCeventscalendar from "../components/events-calendar/TFCevents-calendar";
import TFCevent from "../components/events-calendar/TFCevent";
import "../components/events-calendar/events.css";

function Eventcalendar() {
  return (
    <div>
      <Header />
      <TFCevent />
      <TFCeventscalendar />
      <Footer />
    </div>
  );
}

export default Eventcalendar;
