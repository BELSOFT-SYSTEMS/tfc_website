import "./home.css";
import { React, useState } from "react";
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
      style={{
        backgroundColor: "#051f04",
        padding: "40px 30px",
        color: "white",
      }}
    >
      <Container fluid>
        <Row className="footer-row-container">
          {/* Get In Touch container */}
          <Col xs={12} md={6} className="mb-4">
            <Container className="p-0">
              <h2
                className="display-5"
                style={{
                  fontSize: "4rem",
                  fontWeight: "600",
                }}
              >
                Get In Touch
              </h2>
              <ul
                className="footer-list"
                style={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  fontSize: "12px",
                }}
              >
                <li style={{ marginTop: "2rem" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ marginLeft: "1.5rem" }}>
                    +234 703 158 8404 | (09) 290 9000
                  </span>
                </li>
                <li style={{ marginTop: "1.5rem" }}>
                  <FontAwesomeIcon
                    icon={farEnvelopeOpen}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ marginLeft: "1.5rem" }}>
                    info@thefatherschurchonline.org
                  </span>
                </li>
                <li style={{ marginTop: "1.5rem" }}>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ marginLeft: "1.5rem" }}>
                    Eden Centre, Along Banex/Gwarinpa Bypass, Near NEXT Cash &
                    Carry, Abuja
                  </span>
                </li>
              </ul>
              <div className="mt-4 d-flex justify-content-between justify-content-md-start">
                <a
                  href="https://facebook.com/TheFathersChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2x"
                    style={{
                      color: isHovered ? "#d49c04" : "#edb61f",
                      transition: "all 0.3s ease",
                      marginRight: "1rem",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/thefatherschurch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2x"
                    style={{
                      color: isHovered ? "#d49c04" : "#edb61f",
                      transition: "all 0.3s ease",
                      marginRight: "1rem",
                    }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2x"
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
          <Col xs={12} md={6} className="mb-4 d-flex align-items-center">
            <Container
              className="d-flex w-100 p-0"
              style={{ flexDirection: "column" }}
            >
              <h2 className="footer-heading">
                Subscribe to receive updates from <br /> The Father's Church
              </h2>
              <Form
                method="post"
                id="newsletter_subscribe_form"
                name="Newsletter Subscribe"
              >
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="footer-input"
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="footer-input"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="warning"
                  style={{
                    backgroundColor: "#d49c04",
                    color: "#fff",
                    // width: "20%",
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
        <Row className="mt-4">
          <Col>
            <p
              className="small text-white mb-0"
              style={{
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              © 2024 All rights Reserved. Designed by Our Creative Media
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
