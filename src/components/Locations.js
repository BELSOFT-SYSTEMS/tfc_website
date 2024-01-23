import React, { useState } from 'react';
import { Tab, Tabs,  Container, Row, Col, Button, Image, ListGroup, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,  faPhone, faChurch, faEnvelopeOpen, faMapPin, faEnvelope, faUser,  faCalendarAlt, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt as farCalendarAlt } from '@fortawesome/free-regular-svg-icons';



const Locations = () => {
  const [activeKey, setActiveKey] = useState('ajax');

  const handleSelect = (key) => {
    setActiveKey(key);
  };


  return (
    <div>
      <section
                      data-particle_enable="false"
                      data-particle-mobile-disabled="false"
                      class="elementor-section elementor-top-section elementor-element elementor-element-f018e71 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                      data-id="f018e71"
                      data-element_type="section"
                    >
                      <div
                        class="elementor-container elementor-column-gap-default"
                      >
                        <div
                          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-db54d6b"
                          data-id="db54d6b"
                          data-element_type="column"
                        >
                          <div
                            class="elementor-widget-wrap elementor-element-populated"
                          >
                            <div
                              class="elementor-element elementor-element-e3c8f7b animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                              data-id="e3c8f7b"
                              data-element_type="widget"
                              data-settings='{"_animation":"fadeInDown"}'
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2
                                  class="elementor-heading-title elementor-size-default"
                                >
                                  Our Locations
                                </h2>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-25f991c animated-fast elementor-invisible elementor-widget elementor-widget-text-editor"
                              data-id="25f991c"
                              data-element_type="widget"
                              data-settings='{"_animation":"fadeInDown"}'
                              data-widget_type="text-editor.default"
                            >
                              <div class="elementor-widget-container">
                                <p>Join us at our sites across Durham</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
      <Tabs
      id="locations-tabs"
      activeKey={activeKey}
      onSelect={handleSelect}
      className="eael-tabs-nav"
    >
      <Tab eventKey="ajax" title="Ajax">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="ajax-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} />
          <span className="eael-tab-title title-after-icon">Ajax</span>
        </div>
        {/* Add content for Ajax tab here */}
    <div id="ajax-tab" className="clearfix eael-tab-content-item inactive" data-title-link="ajax-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor-3.jpg"
              alt=""
              className="img-fluid"
            />
            <h2>Angela Mason</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Sunday services @ 9:00am & 11:00am
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              599 Bayly Street East, Ajax, Ontario
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Filled with warm and inviting people, Ajax acts as our largest
            in-person site with live teaching, worship and many events that help
            foster and build up our community.   </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            href="https://sanctuschurch.com/ajax/"
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

      <Tab eventKey="bowmanville" title="Bowmanville">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="bowmanville-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} />
          <span className="eael-tab-title title-after-icon">Bowmanville</span>
        </div>
        {/* Add content for Bowmanville tab here */}
    <div id="bowmanville-tab" className="clearfix eael-tab-content-item inactive" data-title-link="bowmanville-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor-2.png"
              alt=""
              className="img-fluid"
            />
            <h2>Hollie Charlebois</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Sunday service @ 10:30am
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              116 Church St, Bowmanville ON, L1C 1T2
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
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
            href="https://sanctuschurch.com/bowmanville/"
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

      <Tab eventKey="pickering" title="Pickering">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="pickering-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} />
          <span className="eael-tab-title title-after-icon">Pickering</span>
        </div>
        {/* Add content for Pickering tab here */}
    <div id="pickering-tab" className="clearfix eael-tab-content-item inactive" data-title-link="pickering-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="pastor2.png"
              alt=""
              className="img-fluid"
            />
            <h2>Lucas Prado</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Sunday service @ 10:30am
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              St. Mary Catholic Secondary School 1918 Whites Rd N, Pickering, ON L1V 1R9
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            A close-knit community, our Pickering site is filled with lively, friendly, and welcoming people who love God and have a special passion for people on their journey to Jesus.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="success"
            href="https://sanctuschurch.com/pickering/"
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

      <Tab eventKey="port-perry" title="Port Perry">
        <div
          className={`inactive eael-tab-item-trigger`}
          role="tab"
          aria-controls="port-perry-tab"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faChurch} />
          <span className="eael-tab-title title-after-icon">Port Perry</span>
        </div>
        {/* Add content for Port Perry tab here */}
    <div id="port-perry-tab" className="clearfix eael-tab-content-item inactive" data-title-link="port-perry-tab">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="next.png"
              alt=""
              className="img-fluid"
            />
            <h2>JOEL PENNEY</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Sunday service @ 10:30am
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              14480 Old Simcoe Rd, Port Perry, ON, L9L 1C5
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
              Often described as family, our Port Perry site is a smaller woven community with a special focus on one-on-one relationships that ultimately help members grow in their relationship with God. Port Perry welcomes new visitors with open arms and has a special way of making them feel at home right away.
            </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="primary"
            href="https://sanctuschurch.com/port-perry/"
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
          <FontAwesomeIcon icon={faChurch} />
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
              className="img-fluid"
            />
            <h2>Brandon Lawryshyn</h2>
            <h2>Site Pastor</h2>
          </Col>
          <Col xs={12} md={6}>
          <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Sunday service @ 9:00am, 10:30am, & on-demand
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Wednesday Service @ 7:30PM
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Online
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
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
