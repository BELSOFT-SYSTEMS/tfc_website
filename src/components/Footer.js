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
      {/* Container for the "Explore Your" and "Next Steps @ Sanctus" section */}
{/* <Container>
        <Row>
          <Col md={6} className="elementor-column elementor-col-50 elementor-top-column elementor-element">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ac707ff elementor-invisible elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>Explore Your</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-ab3ddf3 animated-slow elementor-invisible elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Next Steps @ TFC</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="elementor-column elementor-col-50 elementor-top-column elementor-element">

            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-b082f66 elementor-hidden-mobile elementor-widget elementor-widget-spacer">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-e1500c7 elementor-view-default elementor-widget elementor-widget-icon">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <a className="elementor-icon elementor-animation-grow" href="https://sanctuschurch.com/next-steps/">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: '#d49c04',  }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>*/}


      <Container style={{ display: 'flex' , justifyContent: 'space-between' }}>
      {/* Container for the "Get In Touch" heading and contact information */}
      <Container style={{ textAlign: 'left' }}>
        <Row>
          <Col md={6}>
            <div className="elementor-element elementor-element-0e0ec13 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{fontSize:'45px'}}>Get In Touch</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ listStyleType: 'none' }}>
        <Col md={12}>
      {/* Apply custom styles for the list */}
      <div style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <Col >
            <FontAwesomeIcon icon={faPhone} className="elementor-icon-list-icon" style={{ color: '#d49c04',  }}/>
            <span style={{paddingLeft:'10px'}} >(905) 686-4450</span>
          </Col>
          <Col >
            <FontAwesomeIcon icon={farEnvelopeOpen} className="elementor-icon-list-icon" style={{ color: '#d49c04',  }} />
            <span style={{paddingLeft:'10px'}}>hello@TheFathersChurch.com</span>
          </Col>
          <Col >
            <FontAwesomeIcon icon={faMapPin} className="elementor-icon-list-icon" style={{ color: '#d49c04',  }} />
            <span style={{paddingLeft:'10px'}}>Main Office 599 Bayly St East Ajax, ON L1Z 1L4</span>
          </Col>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={{paddingTop:'10px'}} >
              <span  style={{ marginLeft: '10px',}}>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Facebook</span>*/}
                  <FontAwesomeIcon icon={faFacebook} size='3x' style={{ color: '#d49c04',  }} />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px', }}>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Instagram</span>*/}
                  <FontAwesomeIcon icon={faInstagram} size='3x' style={{ color: '#d49c04',  }} />
                </a>
              </span>
              <span className="elementor-grid-item" style={{ marginLeft: '10px', }}>
                <a  href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  {/*<span className="elementor-screen-only">Youtube</span>*/}
                  <FontAwesomeIcon icon={faYoutube} size='3x'style={{ color: '#d49c04',  }} />
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
  
      {/* Container for the social media icons */}
      
      
  
      {/* Container for the "Subscribe to receive updates" section */}
      <Container style={{ textAlign: 'left' }}>
        <Row>
          <Col>
            <h2 style={{fontSize:'25px'}}>Subscribe to receive updates from The Father's Church</h2>
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
          <Form.Control type="email" name="form_fields[name]" placeholder="Email" style={{ maxWidth: '350px' }} />
        </Form.Group>

        <Form.Group controlId="formName" style={{ marginTop: '10px' }}>
          <Form.Control type="text" name="form_fields[field_a7d8490]" placeholder="Name" style={{ maxWidth: '350px' }} />
        </Form.Group>

        <div className="e-form__buttons" style={{ marginTop: '10px' }}>
          <Button type="submit" variant='warning' className="elementor-button elementor-size-sm elementor-animation-grow" style={{backgroundColor: '#d49c04', color: '#000',}}>
            <span>
              <span className="elementor-button-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="elementor-button-text" style={{paddingLeft:'10px'}}>Send</span>
            </span>
          </Button>
        </div>
      </Form>
    </Container>
  </Col>
</Row>
        <Row>
        <Col md={12}>
          <p style={{ color: 'white' }}>© 2024 All rights Reserved. Design by Creative Media</p>
        </Col>
      </Row>
      </Container>
      </Container>
  
      
    </Container>
  </footer>
  )
}

export default Footer
