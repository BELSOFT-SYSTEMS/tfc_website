import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Homepage'; // Your landing page component
import ContactPage from './components/pages/Contactpage';
import Landing from './components/pages/Landing';
import Aboutus from './components/pages/Aboutus';
import Ambassadors from './components/pages/Ambassadors';
import Lightbearers from './components/pages/Lightbearer';
import Sundays from './components/pages/Sundays';
import Freedomfellowship from './components/pages/Freedomfellowship';
import Governors from './components/pages/Governors';
import Queens from './components/pages/Queens';
import Evangelism from './components/pages/Evangelism';
import Prayerministry from './components/pages/Prayerministry';
import Eden from './components/pages/Eden';
import Mpape from './components/pages/Mpape';
import Enugu from './components/pages/Enugu';
import Joyforceacademy from './components/pages/Joyforceacademy';
import Sermons from './components/pages/Sermons';
import Nextsteps from './components/pages/Nextsteps';
import Believerfoundation from './components/pages/believersfoundation';
import Baptism from './components/pages/Baptism';
import Marriagecourse from './components/pages/Marriagecourse';
import Prayerrequest from './components/pages/Prayerrequest';
import Counseling from './components/pages/Counseling';
import Eventcalendar from './components/pages/Eventcalendar';
import Summercamp from './components/pages/Summercamp';
import Waystogive from './components/pages/Waystogive';


import './index.css';

{/*
import './css/frontend.min.css';
import './css/frontend.css';
import './css/frontend-lite.min.css';
import './css/header-footer.min.css';
import './css/all.css';
import './css/eael-9361.css';
import './css/eael-19128.css';
import './css/ecs-style.css';
import './css/elementor-icons.min.css';
import './css/featherlight.css';
import './css/general.min.css';
import './css/lity.min.css';
import './css/mec-general-calendar.css';
import './css/post-6.css';
import './css/select2.min.css';
import './css/slick-carousal.css';
import './css/style.min.css';
import './css/swiper.min.css';
import './css/theme.min.css';
import './css/tooltip.css';
import './css/tooltipster-sideTip-shadow.min.css';
import './css/widget-icon-list.min.css';
import './css/widget-nav-menu.min.css';

*/}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/lightbearers" element={<Lightbearers />} />
        <Route path="/freedom-fellowship" element={<Freedomfellowship />} />
        <Route path="/sundays" element={<Sundays />} />
        <Route path="/the-governors" element={<Governors />} />
        <Route path="/the-queens" element={<Queens />} />
        <Route path="/evangelism" element={<Evangelism />} />
        <Route path="/prayer-ministry" element={<Prayerministry />} />
        <Route path="/eden" element={<Eden />} />
        <Route path="/mpape" element={<Mpape />} />
        <Route path="/enugu" element={<Enugu />} />
        <Route path="/joyforce-academy" element={<Joyforceacademy />} />
        <Route path="/sermons" element={<Sermons />} >
          <Route path='recent' element={<Recent />} />
          <Route path='topic' element={<h1>Topic</h1>} />
          <Route path='speaker' element={<h1>speaker</h1>} />
          <Route path='scripture' element={<h1>scripture</h1>} />
        </Route>
        <Route path="/next-steps" element={<Nextsteps />} />
        <Route path="/believers-foundation" element={<Believerfoundation />} />
        <Route path="/baptism" element={<Baptism />} />
        <Route path="/Marriage-course" element={<Marriagecourse />} />
        <Route path="/Prayer-request" element={<Prayerrequest />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/event-calendar" element={<Eventcalendar />} />
        <Route path="/summer-camps" element={<Summercamp />} />
        <Route path="/ways-to-give" element={<Waystogive />} />
      </Routes>
    </Router>
  );
}

export default App;
