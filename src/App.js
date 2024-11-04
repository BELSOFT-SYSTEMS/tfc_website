import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'; // Your landing page component
import ContactPage from './pages/Contactpage';
import Landing from './pages/Landing';
import Aboutus from './pages/Aboutus';
import Ambassadors from './pages/Ambassadors';
import Lightbearers from './pages/Lightbearer';
import Sundays from './pages/Sundays';
import Freedomfellowship from './pages/Freedomfellowship';
import Governors from './pages/Governors';
import Queens from './pages/Queens';
import Evangelism from './pages/Evangelism';
import Prayerministry from './pages/Prayerministry';
import Eden from './pages/Eden';
import Mpape from './pages/Mpape';
import Enugu from './pages/Enugu';
import Joyforceacademy from './pages/Joyforceacademy';
import Sermons from './pages/Sermons';
import Nextsteps from './pages/Nextsteps';
import Believerfoundation from './pages/believersfoundation';
import Baptism from './pages/Baptism';
import Marriagecourse from './pages/Marriagecourse';
import Prayerrequest from './pages/Prayerrequest';
import Counseling from './pages/Counseling';
import Eventcalendar from './pages/Eventcalendar';
import Summercamp from './pages/Summercamp';
import Waystogive from './pages/Waystogive';
import {RecentContent} from './components/sermon/Recent';
import { TopicContent } from './/components/sermon/Topic';
import { Speaker } from './components/sermon/Speaker';
import './index.css';

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
          <Route path='recent' element={<RecentContent />} />
          <Route path='topic' element={<TopicContent />} />
          <Route path='speaker' element={<Speaker/>} />
          <Route path='scripture' element={<Speaker/>} />
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
