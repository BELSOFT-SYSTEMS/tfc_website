import { React, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen as farEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
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
    <footer style={{ backgroundColor: "#051f04", paddingTop: "40px", color: "white" }}>
      <Container fluid>
        <Row>
          {/* Get In Touch container */}
          <Col xs={12} md={6} className="mb-4">
            <Container style={{ textAlign: "left", paddingBottom: "25px" }}>
              <h2 className="display-5" style={{ fontSize: "5rem", marginTop: "-1rem", fontWeight:"600" }}>
                Get In Touch
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "1.5rem" }}>
                <li style={{ marginTop: "2rem" }}>
                  <FontAwesomeIcon icon={faPhone} style={{ color: "#d49c04" }} />
                  <span style={{ marginLeft: "1.5rem" }}>+234 703 158 8404 | (09) 290 9000</span>
                </li>
                <li style={{ marginTop: "1.5rem" }}>
                  <FontAwesomeIcon icon={farEnvelopeOpen} style={{ color: "#d49c04" }} />
                  <span style={{ marginLeft: "1.5rem" }}>info@thefatherschurchonline.org</span>
                </li>
                <li style={{ marginTop: "1.5rem" }}>
                  <FontAwesomeIcon icon={faMapPin} style={{ color: "#d49c04" }} />
                  <span style={{ marginLeft: "1.5rem" }}>
                    Eden Centre, Along Banex/Gwarinpa Bypass, Near NEXT Cash & Carry, Abuja
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="https://facebook.com/TheFathersChurch" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="5x"
                    style={{
                      color: isHovered ? "#d49c04" : "#edb61f",
                      transition: "all 0.3s ease",
                      marginRight: "1rem",
                    }}
                  />
                </a>
                <a href="https://www.instagram.com/thefatherschurch/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="5x"
                    style={{
                      color: isHovered ? "#d49c04" : "#edb61f",
                      transition: "all 0.3s ease",
                      marginRight: "1rem",
                    }}
                  />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="5x"
                    style={{
                      color: isHovered ? "#d49c04" : "#edb61f",
                      transition: "all 0.3s ease",
                    }}
                  />
                </a>
              </div>
            </Container>
          </Col>

          {/* Subscribe form container */}
          <Col xs={12} md={6} className="mb-4">
            <Container style={{ textAlign: "left" }}>
              <h2 className="display-6" style={{ fontSize: "2rem" }}>
                Subscribe to receive updates from <br /> The Father's Church
              </h2>
              <Form method="post" id="newsletter_subscribe_form" name="Newsletter Subscribe">
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    style={{
                      maxWidth: "60%",
                      height: "3.5rem",
                      fontSize: "1.7rem",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    style={{
                      maxWidth: "60%",
                      height: "3.5rem",
                      fontSize: "1.7rem",
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="warning"
                  style={{
                    backgroundColor: "#d49c04",
                    color: "#fff",
                    width: "20%",
                    marginTop: "10px",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span style={{ paddingLeft: "10px" }}>Send</span>
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p 
            className="small text-white mb-0"
            style={{
              fontSize: "1.7rem",
            }}
            
            >© 2024 All rights Reserved. Designed by Our Creative Media</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;