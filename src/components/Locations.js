
import React, { useState } from 'react';
import { Tab, Tabs, Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faCalendarAlt, faMapMarkerAlt,  } from '@fortawesome/free-solid-svg-icons';
import { Button as ResponsiveButton } from './Button/Button';
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Locations = () => {
  const [activeKey, setActiveKey] = useState('eden');
  const windowWidth = window.innerWidth; // 
  const flexDirection = windowWidth < 768 ? 'column' : 'row';
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
  setIsHovered(true);
};
  const handleMouseLeave = () => {
  setIsHovered(false);
};

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const buttonData = [
    { name: 'Eden', value: 'eden', icon: faChurch },
    { name: 'Mpape', value: 'mpape', icon: faChurch },
    { name: 'Enugu', value: 'enugu', icon: faChurch },
    { name: 'Online', value: 'online', icon: faChurch },
  ];

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <Container style={{ justifyContent: 'center', textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '55px' }}> Our Locations</h2>
        <p style={{ fontSize: '18px', textAlign: 'center', textTransform: 'uppercase' }}>Join us at our sites across Abuja and Nigeria</p>
      </Container>

      <ButtonGroup size="lg" style={{ justifyContent: 'center', display: 'flex', flexDirection: flexDirection, textAlign: 'center', margin: '0 60px', gap: '15px', paddingBottom: '60px', height: '100px' }}>
        {buttonData.map((button) => (
          <Button
            key={button.value} // Add a unique key for each button
            onClick={() => handleSelect(button.value)}
            active={activeKey === button.value}
            style={{ fontSize: '16px', fontWeight: '600', backgroundColor: activeKey === button.value ? '#d49c04' : '#051f04', borderColor: activeKey === button.value ? '#d49c04' : '#051f04' }}
          >
            <FontAwesomeIcon icon={button.icon} style={{ color: activeKey === button.value ? '#051f04' : '#d49c04', marginRight: '7px' }} />
            {button.name}
          </Button>
        ))}
      </ButtonGroup>

      <Tabs id="locations-tabs" activeKey={activeKey} onSelect={handleSelect} className="eael-tabs-nav">
        <Tab eventKey="eden">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="pastor-home-3.jpg"
                  alt="Pastor Ikenna Okeke"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: '300px', height: '300px', objectFit: 'cover' }}
                />
                <h2 style={{ fontSize: '32px', fontWeight: '600' }}>Pastor Ikenna Okeke</h2>
                <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Senior Pastor</h2>
              </Col>
              <Col xs={12} md={7} style={{ padding: '0 60px', }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', padding: '0' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am | Wednesdays @ 6:00pm
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      Eden Centre Along Banex/Gwarinpa Bypass, Near NEXT Cash & Carry,Abuja.
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with warm and inviting people,
                    Eden acts as our largest in-person site with live teaching,
                    worship and many events that help foster and build up our community.</p>
                </div>
                <div>
                  <ResponsiveButton
                    variant="success"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', color: '#fff', height: '40px', textTransform: 'uppercase', fontSize: '16px', fontWeight: '600', border: 'none', }}
                    href="#"
                  >
                    More Information
                  </ResponsiveButton>
                </div>
                {/* <Row>
                  <Col className="text-center">
                    
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="mpape">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="user.png"
                  alt="Pastor Mudi"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: '300px', height: '300px', objectFit: 'cover' }}
                />
                <h2 style={{ fontSize: '32px', fontWeight: '600' }}>Pastor Mudi</h2>
                <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Site Pastor</h2>
              </Col>
              <Col xs={12} md={7} style={{ padding: '0 60px', }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', padding: '0' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am | wednesdays @ 6:00pm
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      Mpape, Abuja.
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Each week, with the help of volunteers, we provide an 
                  engaging worship experience for our congregation, guests, and those interested in knowing more about Jesus. 
                  Services are currently offering teaching and worship through video in the building. Services are currently 
                  operating at full capacity.</p>
                </div>
                <div>
                  <ResponsiveButton
                    variant="success"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', color: '#fff', height: '40px', textTransform: 'uppercase', fontSize: '16px', fontWeight: '600', border: 'none', }}
                    href="#"
                  >
                    More Information
                  </ResponsiveButton>
                </div>
                {/* <Row>
                    <Col className="text-center">
                      
                    </Col>
                  </Row> */}
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="enugu">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="user.png"
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: '300px', height: '300px', objectFit: 'cover' }}
                />
                <h2 style={{ fontSize: '32px', fontWeight: '600' }}>???</h2>
                <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Site Pastor</h2>
              </Col>
              <Col xs={12} md={7} style={{ padding: '0 60px', }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', padding: '0' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am | wednesdays @ 6:00pm
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      Enugu, Nigeria.
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Often described as family, our Enugu 
                  site is a smaller woven community with a special focus on one-on-one relationships that 
                  ultimately help members grow in their relationship with God. Enugu welcomes new visitors 
                  with open arms and has a special way of making them feel at home right away.</p>
                </div>
                <div>
                  <ResponsiveButton
                    variant="success"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', color: '#fff', height: '40px', textTransform: 'uppercase', fontSize: '16px', fontWeight: '600', border: 'none', }}
                    href="#"
                  >
                    More Information
                  </ResponsiveButton>
                </div>
                {/* <Row>
                    <Col className="text-center">
                      
                    </Col>
                  </Row> */}
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="online">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="socials.png"
                  alt="Online"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: '300px', height: '300px', objectFit: 'cover' }}
                />
                <h2 style={{ fontSize: '32px', fontWeight: '600' }}>Join us</h2>
                <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Online</h2>
              </Col>
              <Col xs={12} md={7} style={{ padding: '0 60px', }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', padding: '0' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am | wednesdays @ 6:00pm
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      ONLINE
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with a community that has bloomed, 
                  our online site now acts as our largest site. Engage in worship and teaching from our speakers 
                  each week with people from across the nation. Join us on  
                   <a 
                  href="https://facebook.com/TheFathersChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{marginLeft:'1rem'}}
                  >
                    
                    Facebook
                  
                  </a>,  

                   <a 
                   href="https://www.instagram.com/thefatherschurch/"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{marginLeft:'1rem', marginRight:'1rem'}}
                  >
                    
                    Instagram
                  
                  </a>  
                  
                  and 

                    <a href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginLeft:'1rem', marginRight:'1rem'}}
                    >
                      YouTube
                    </a> 
                    for a life changing experience. Its all about Jesus.
                  
                  </p>
                </div>
                <div>
                <span style={{ marginLeft: "0" }}>
                  <a
                    href="https://facebook.com/TheFathersChurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      size="3x"
                      style={{ 
                        color: '#1877F2', 
                      transition:'all 0.3s ease', 
                      transform: isHovered ? 'scale(1.1)' : 'none',
                      
                    }}
                    />
                  </a>
                </span>
                <span
                  className="elementor-grid-item"
                  style={{ marginLeft: "2rem" }}
                >
                  <a
                    href="https://www.instagram.com/thefatherschurch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      size="3x"
                      style={{ 
                     color: '#ee2a7b',
                      transition:'all 0.3s ease', 
                      transform: isHovered ? 'scale(1.1)' : 'none',
                      
                    }}
                    />
                  </a>
                </span>
                <span
                  className="elementor-grid-item"
                  style={{ marginLeft: "2rem" }}
                >
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      size="3x"
                      style={{ 
                      color: '#FF0000',
                      transition:'all 0.3s ease', 
                      transform: isHovered ? 'scale(1.1)' : 'none',
                      
                    }}
                    />
                  </a>
                </span>
                </div>
                {/* <Row>
                    <Col className="text-center">
                      
                    </Col>
                  </Row> */}
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Locations;
