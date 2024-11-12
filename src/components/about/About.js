import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about-page.css";

const About = () => {
  // const backgroundImageUrl = "background-img1.jpg";

  const [containerHeight, setContainerHeight] = useState("80vh");
  const [fontSize, setFontSize] = useState({ title: 100, subtitle: 18 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 450) {
        setContainerHeight("60vh");
        setFontSize({ title: 40, subtitle: 12 });
      } else if (width <= 768) {
        setContainerHeight("70vh");
        setFontSize({ title: 50, subtitle: 10 });
      } else if (width <= 1024) {
        setContainerHeight("70vh");
        setFontSize({ title: 60, subtitle: 12 });
      } else if (width <= 1540) {
        setContainerHeight("80vh");
        setFontSize({ title: 70, subtitle: 14 });
      } else {
        setContainerHeight("80vh");
        setFontSize({ title: 100, subtitle: 18 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: containerHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    marginBottom: "40px",
    overflow: "visible",
  };

  return (
    <section className="your-section-class">
      <Container fluid style={containerStyle} className="about-container">
        <Row className="about-header-row">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <div className="elementor-element elementor-element-52ff6ed elementor-invisible elementor-widget elementor-widget-heading">
                <div
                  className="elementor-widget-container"
                  style={{ justifyContent: "center", textAlign: "left" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h2
                      className="elementor-heading-title elementor-size-default"
                      style={{
                        fontSize: `${fontSize.subtitle}px`,
                        color: "#000",
                      }}
                    >
                      DISCOVER THE PRINCIPLES THAT GUIDE US
                    </h2>
                    <h2
                      className="elementor-heading-title elementor-size-default"
                      style={{
                        fontSize: `${fontSize.title}px`,
                        fontWeight: "bold",
                        color: "#000",
                        marginBottom: "-35px",
                      }}
                    >
                      About Us.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="aboutus1.png"
              alt="Opposite"
              className="img-fluid"
              style={{
                borderRadius: "10px",
                margin: "20px 0px -60px 0px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
