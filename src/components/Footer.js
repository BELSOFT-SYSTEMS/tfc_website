import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faPhone,  faMapPin, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen as farEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook, faYoutube, } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <footer style={{ backgroundColor: '#012101', paddingTop:'10px', color: 'white' }}>
    <Container>
      {/* Use Bootstrap grid classes for responsive behavior */}
      <Row>
        {/* Get In Touch container */}
        <Col xs={12} lg={6}>
          <Container style={{ textAlign: 'left', paddingBottom:'25px' }}>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '60px' }}>Get In Touch</h2>
            </div>
            <div style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faPhone} className="elementor-icon-list-icon" style={{ color: '#d49c04' }} />
                  <span style={{ paddingLeft: '10px' }} >(905) 686-4450</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={farEnvelopeOpen} className="elementor-icon-list-icon" style={{ color: '#d49c04' }} />
                  <span style={{ paddingLeft: '10px' }}>hello@TheFathersChurch.com</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faMapPin} className="elementor-icon-list-icon" style={{ color: '#d49c04' }} />
                  <span style={{ paddingLeft: '10px' }}>Main Office 599 Bayly St East Ajax, ON L1Z 1L4</span>
                </Col>
              </Row>
            </div>
            <div style={{ paddingTop: '10px', paddingBottom:'20px' }} >
              <span style={{ marginLeft: '10px' }}>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size='3x' style={{ color: '#d49c04' }} />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px' }}>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size='3x' style={{ color: '#d49c04' }} />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px' }}>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size='3x' style={{ color: '#d49c04' }} />
                </a>
              </span>
            </div>
          </Container>
        </Col>
        {/* Subscribe form container */}
        <Col xs={12} lg={6}>
          <Container style={{ paddingRight: '15px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '25px' }}>Subscribe to receive updates from <br />The Father's Church</h2>
            <Form method="post" id="newsletter_subscribe_form" name="Newsletter Subscribe" style={{ textAlign: 'left' }}>
              {/* ... (your form code) ... */}
              <Form.Group controlId="formEmail" style={{ marginTop: '10px' }}>
                <Form.Control type="email" name="form_fields[name]" placeholder="Email" style={{ maxWidth: '350px' }} />
              </Form.Group>
              <Form.Group controlId="formName" style={{ marginTop: '10px' }}>
                <Form.Control type="text" name="form_fields[field_a7d8490]" placeholder="Name" style={{ maxWidth: '350px' }} />
              </Form.Group>
              <div style={{ marginTop: '10px' }}>
                <Button type="submit" variant='warning' style={{ backgroundColor: '#d49c04', color: '#000' }}>
                  <span>
                    <span >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span  style={{ paddingLeft: '10px' }}>Send</span>
                  </span>
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'white' }}>© 2024 All rights Reserved. Design by Our Creative Media</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
