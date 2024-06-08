import {React, useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen as farEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "./Button/Button";


function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
  setIsHovered(true);
};
  const handleMouseLeave = () => {
  setIsHovered(false);
};
  return (
    <footer
      style={{ backgroundColor: "#051f04", paddingTop: "40px", color: "white" }}
    >
      <Container>
        {/* Use Bootstrap grid classes for responsive behavior */}
        <Row>
          {/* Get In Touch container */}
          <Col xs={12} lg={6}>
            <Container style={{ textAlign: "left", paddingBottom: "25px" }}>
              <div style={{ width: "100%" }}>
                <h2 style={{ fontSize: "60px", marginTop: "-3rem" }}>
                  Get In Touch
                </h2>
              </div>
              <div style={{ listStyleType: "none", paddingLeft: "0" }}>
                <Row style={{ marginTop: "3.5rem" }}>
                  <Col>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="elementor-icon-list-icon"
                      style={{ color: "#d49c04" }}
                    />
                    <span style={{ marginLeft: "2rem" }}>
                      +234 703 158 8404 | (09) 290 9000
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <FontAwesomeIcon
                      icon={farEnvelopeOpen}
                      className="elementor-icon-list-icon"
                      style={{ color: "#d49c04" }}
                    />
                    <span style={{ marginLeft: "2rem", }}>
                      info@thefatherschurchonline.org
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="elementor-icon-list-icon"
                      style={{ color: "#d49c04" }}
                    />
                    
                  </Col>
                  <span style={{ marginLeft: "2.5rem", marginTop:'-2.5rem', textWrap:'wrap' }}>
                      Eden Centre Along Banex/Gwarinpa Bypass, Near NEXT Cash & Carry,Abuja
                    </span>
                </Row>
              </div>
              <div style={{marginTop: "11rem"  }}>
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
                        color: isHovered ? '#d49c04' : "#edb61f", 
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
                        color: isHovered ? '#d49c04' : "#edb61f", 
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
                        color: isHovered ? '#d49c04' : "#edb61f", 
                      transition:'all 0.3s ease', 
                      transform: isHovered ? 'scale(1.1)' : 'none',
                      
                    }}
                    />
                  </a>
                </span>
              </div>
            </Container>
          </Col>
          {/* Subscribe form container */}
          <Col xs={12} lg={6}>
            <Container style={{ paddingRight: "10px", textAlign: "left", marginLeft:'1rem', }}>
              <h2 style={{ fontSize: "25px" }}>
                Subscribe to receive updates from <br />
                The Father's Church
              </h2>
              <Form
                method="post"
                id="newsletter_subscribe_form"
                name="Newsletter Subscribe"
                style={{ textAlign: "left" }}
              >
                {/* ... (your form code) ... */}
                <Form.Group controlId="formEmail" style={{ marginTop: "10px" }}>
                  <Form.Control
                    type="email"
                    name="form_fields[name]"
                    placeholder="Email"
                    style={{
                      maxWidth: "350px",
                      height: "3.5rem",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formName" style={{ marginTop: "10px" }}>
                  <Form.Control
                    type="text"
                    name="form_fields[field_a7d8490]"
                    placeholder="Name"
                    style={{
                      maxWidth: "350px",
                      height: "3.5rem",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    type="submit"
                    variant="warning"
                    style={{ backgroundColor: "#d49c04", color: "#fff" }}
                  >
                    <span>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span style={{ paddingLeft: "10px" }}>Send</span>
                    </span>
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ color: "white", margin:'-6rem 0 0 6rem' }}>
              © 2024 All rights Reserved. Design by Our Creative Media
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
