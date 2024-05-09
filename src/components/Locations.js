
import React, { useState } from 'react';
import { Tab, Tabs, Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button as ResponsiveButton } from './Button/Button';

const Locations = () => {
  const [activeKey, setActiveKey] = useState('eden');
  const windowWidth = window.innerWidth; // 
  const flexDirection = windowWidth < 768 ? 'column' : 'row';

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
        <p style={{ fontSize: '18px', textAlign: 'center', textTransform: 'uppercase' }}>Join us at our sites across Abuja</p>
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
                  src="pastor-3.jpg"
                  alt=""
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
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am & 11:00am
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      599 Bayly Street East, Ajax, Ontario
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with warm and inviting people,
                    Ajax acts as our largest in-person site with live teaching,
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
                  src="pastor-3.jpg"
                  alt=""
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
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am & 11:00am
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      599 Bayly Street East, Ajax, Ontario
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with warm and inviting people,
                    Ajax acts as our largest in-person site with live teaching,
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

        <Tab eventKey="enugu">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="pastor-3.jpg"
                  alt=""
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
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am & 11:00am
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      599 Bayly Street East, Ajax, Ontario
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with warm and inviting people,
                    Ajax acts as our largest in-person site with live teaching,
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

        <Tab eventKey="online">
          <Container fluid>
            <Row>
              <Col xs={12} md={5} className="text-center" style={{ marginTop: '40px' }}>
                <img
                  src="pastor-3.jpg"
                  alt=""
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
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04' }} className="mr-2" />      Sunday services @ 9:00am & 11:00am
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04' }} className="mr-2" />      599 Bayly Street East, Ajax, Ontario
                    </span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Filled with warm and inviting people,
                    Ajax acts as our largest in-person site with live teaching,
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
      </Tabs>
    </div>
  );
};

export default Locations;
