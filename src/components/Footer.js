import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,  faPhone, faEnvelopeOpen, faMapPin, faEnvelope, faUser  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen as farEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook, faYoutube, } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <footer style={{ backgroundColor: '#012101', padding: '20px 0', color: 'white' }}>
    <Container className="elementor-container elementor-column-gap-default">

      {/* Container for the "Get In Touch" heading and contact information */}
      <Container style={{ textAlign: 'left' }}>
        <Row>
          <Col md={6}>
            <div className="elementor-element elementor-element-0e0ec13 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Get In Touch</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ listStyleType: 'none' }}>
        <Col md={12}>
      {/* Apply custom styles for the list */}
      <div style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <Col md={4} className="elementor-icon-list-item">
            <FontAwesomeIcon icon={faPhone} className="elementor-icon-list-icon" />
            <span className="elementor-icon-list-text">(905) 686-4450</span>
          </Col>
          <Col md={4} className="elementor-icon-list-item">
            <FontAwesomeIcon icon={farEnvelopeOpen} className="elementor-icon-list-icon" />
            <span className="elementor-icon-list-text">hello@sanctuschurch.com</span>
          </Col>
          <Col md={4} className="elementor-icon-list-item">
            <FontAwesomeIcon icon={faMapPin} className="elementor-icon-list-icon" />
            <span className="elementor-icon-list-text">Main Office 599 Bayly St East Ajax, ON L1Z 1L4</span>
          </Col>
          </div>
          </Col>
        </Row>
      </Container>
  
      {/* Container for the social media icons */}
      <Container>
        <Row>
          <Col md={6}>
            <div className="elementor-social-icons-wrapper elementor-grid">
              <span className="elementor-grid-item" style={{ marginLeft: '10px' }}>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-grow" href="https://www.facebook.com/sanctuschurch19/" target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Facebook</span>*/}
                  <FontAwesomeIcon icon={faFacebook} size='x4' />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px' }}>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-grow" href="https://www.instagram.com/sanctuschurch" target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Instagram</span>*/}
                  <FontAwesomeIcon icon={faInstagram} size='x4' />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px' }}>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-grow" href="https://www.youtube.com/sanctuschurch" target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Youtube</span>*/}
                  <FontAwesomeIcon icon={faYoutube} size='lg' />
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
  
      {/* Container for the "Subscribe to receive updates" section */}
      <Container style={{ textAlign: 'left' }}>
        <Row>
          <Col>
            <h2>Subscribe to receive updates from Sanctus</h2>
          </Col>
        </Row>
        <Row className="justify-content-start">
          <Col md={9} className="d-flex justify-content-start">
    <Container style={{ paddingRight: '15px', textAlign: 'left' }}>
      <Form className="elementor-form" method="post" id="newsletter_subscribe_form" name="Newsletter Subscribe" style={{ textAlign: 'left' }}>
        {/* ... (your form code) ... */}
        <input type="hidden" name="post_id" value="9361" />
        <input type="hidden" name="form_id" value="c886317" />
        <input type="hidden" name="referer_title" value="Home - Sanctus Church" />
        <input type="hidden" name="queried_id" value="19128" />

        <Form.Group controlId="formEmail" style={{ marginTop: '10px' }}>
          <Form.Control type="email" name="form_fields[name]" placeholder="Email" style={{ maxWidth: '250px' }} />
        </Form.Group>

        <Form.Group controlId="formName" style={{ marginTop: '10px' }}>
          <Form.Control type="text" name="form_fields[field_a7d8490]" placeholder="Name" style={{ maxWidth: '250px' }} />
        </Form.Group>

        <div className="e-form__buttons" style={{ marginTop: '10px' }}>
          <Button type="submit" className="elementor-button elementor-size-sm elementor-animation-grow">
            <span>
              <span className="elementor-button-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="elementor-button-text">Send</span>
            </span>
          </Button>
        </div>
      </Form>
    </Container>
  </Col>
</Row>
        <Row>
        <Col md={12}>
          <p style={{ color: 'white' }}>© 2022 All rights Reserved. Design by Our Creative Factory</p>
        </Col>
      </Row>
      </Container>
  
      
    </Container>
  </footer>
  )
}

export default Footer
