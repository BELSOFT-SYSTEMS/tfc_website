import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Homepage'; // Your landing page component
import ContactPage from './components/pages/Contactpage';
import Landing from './components/pages/Landing';
import Aboutus from './components/pages/Aboutus';
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
      </Routes>
  </Router>
  );
}

export default App;
