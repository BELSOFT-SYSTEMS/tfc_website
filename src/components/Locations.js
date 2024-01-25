import React, { useState } from 'react';
import { Tab, Tabs,  Container, Row, Col, Button,  ListGroup, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChurch,  faCalendarAlt, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';




const Locations = () => {
  const [activeKey, setActiveKey] = useState('ajax');

  const handleSelect = (key) => {
    setActiveKey(key);
  };


  return (
    <div>
      <Container style={{justifyContent:'center', textAlign:'center', marginTop:'30px', marginBottom:'20px'}}>
        <h2 style={{fontSize:'55px'}}> Our Locations</h2>
        <p style={{fontSize:'20px'}}>Join us at our sites across Abuja</p>
        </Container>
      <Tabs
      id="locations-tabs"
      activeKey={activeKey}
      onSelect={handleSelect}
      className="eael-tabs-nav"
    >
      <Tab eventKey="eden" title="Eden">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="eden-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04',  }} />
          <span className="eael-tab-title title-after-icon">Eden</span>
        </div>
        {/* Add content for Ajax tab here */}
    <div id="eden-tab" className="clearfix eael-tab-content-item inactive" data-title-link="eden-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor-3.jpg"
              alt=""
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', height: '250px' }} // Adjust size as needed
            />
            <h2>Angela Mason</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Sunday services @ 9:00am & 11:00am
            </ListGroup.Item>
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              599 Bayly Street East, Ajax, Ontario
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize:'15px'}}>
          <p>Filled with warm and inviting people, Ajax acts as our largest
            in-person site with live teaching, worship and many events that help
            foster and build up our community.   </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            style={{ backgroundColor: '#d49c04', color:'#000' }}
            href="#"
          >
            More Information
          </Button>
        </Col>
      </Row>
          </Col>
        </Row>
      </Container>
    </div>
      </Tab>

      <Tab eventKey="mpape" title="Mpape">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="mpape-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04',  }} />
          <span className="eael-tab-title title-after-icon">Mpape</span>
        </div>
        {/* Add content for Bowmanville tab here */}
    <div id="mpape-tab" className="clearfix eael-tab-content-item inactive" data-title-link="mpape-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor-2.png"
              alt=""
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', height: '250px' }} // Adjust size as needed
            />
            <h2>Hollie Charlebois</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Sunday service @ 10:30am
            </ListGroup.Item>
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              116 Church St, Bowmanville ON, L1C 1T2
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize:'15px'}}>
          <p>Each week, with the help of volunteers, we provide an engaging worship experience
          for our congregation, guests, and those interested in knowing more about Jesus.
          Services are currently offering teaching and worship through video in the building.
          Services are currently operating at full capacity.</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            style={{ backgroundColor: '#d49c04', color:'#000' }}
            href="#"
          >
            More Information
          </Button>
        </Col>
      </Row>
          </Col>
        </Row>
      </Container>
    </div>
      </Tab>

      <Tab eventKey="enugu" title="Enugu">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="enugu-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch}  style={{ color: '#d49c04',  }}/>
          <span className="eael-tab-title title-after-icon">Enugu</span>
        </div>
        {/* Add content for Pickering tab here */}
    <div id="enugu-tab" className="clearfix eael-tab-content-item inactive" data-title-link="enugu-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor2.png"
              alt=""
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', height: '250px' }} // Adjust size as needed
            />
            <h2>Lucas Prado</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Sunday service @ 10:30am
            </ListGroup.Item>
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              St. Mary Catholic Secondary School 1918 Whites Rd N, Pickering, ON L1V 1R9
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize:'15px'}}>
          <p>
            A close-knit community, our Pickering site is filled with lively, friendly, and welcoming people who love God and have a special passion for people on their journey to Jesus.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            style={{ backgroundColor: '#d49c04', color:'#000' }}
            href="#"
          >
            More Information
          </Button>
        </Col>
      </Row>
          </Col>
        </Row>
      </Container>
    </div>
      </Tab>

      <Tab eventKey="online" title="Online">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="online-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04',  }} />
          <span className="eael-tab-title title-after-icon">Online</span>
        </div>
        {/* Add content for Online tab here */}
    <div id="online-tab" className="clearfix eael-tab-content-item inactive" data-title-link="online-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor-2.jpg"
              alt=""
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', height: '250px' }} // Adjust size as needed
            />
            <h2>Brandon Lawryshyn</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Sunday service @ 9:00am, 10:30am, & on-demand
            </ListGroup.Item>
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Wednesday Service @ 7:30PM
            </ListGroup.Item>
            <ListGroup.Item style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04',  }} className="mr-2" />
              Online
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize:'15px'}}>
          <p>Filled with a community that has bloomed over the past three
              years, our online site now acts as our largest site. Engage in
              worship and teaching from our speakers each week with people from
              across the nation.</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            style={{ backgroundColor: '#d49c04', color:'#000' }}
            href="https://sanctuschurch.com/online/"
          >
            More Information
          </Button>
        </Col>
      </Row>
          </Col>
        </Row>
      </Container>
    </div>
      </Tab>
    </Tabs>
  
      
    </div>
  )
}

export default Locations
