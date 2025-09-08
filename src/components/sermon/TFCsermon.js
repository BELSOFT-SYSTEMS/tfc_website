import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TFCsermon = () => {
  // keep simple public paths
  const backgroundImageUrl = "/sermon-bg.jpeg";

  // ===== HERO WRAPPER =====
  const containerStyle = {
    position: "relative",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",

    /* Key: medium band, not full screen */
    minHeight: "clamp(320px, 32vh, 640px)",

    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,

    /* Let the ellipse bleed below like Sanctus */
    overflow: "visible",
    boxSizing: "border-box",
    marginBottom: "40px",
  };

  // white veil like Sanctus
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(255, 255, 255, 0.86)",
    zIndex: 1,
  };

  // ===== LEFT/TEXT =====
  const textWrapStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "left",
    padding: "clamp(16px, 4vw, 56px)",
    maxWidth: "48rem",
  };

  const titleStyle = {
    fontSize: "clamp(42px, 5vw, 132px)",
    fontWeight: 900,
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"',
    color: "#000",
    margin: 0,
    lineHeight: 0.9,
  };

  const subtitleStyle = {
    marginTop: "14px",
    marginBottom: 0,
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"',
    textTransform: "uppercase",
    fontWeight: 500,
    color: "#000",
    fontSize: "12px",
    whiteSpace: "normal",
  };

  // ===== RIGHT/IMAGE =====
  const imageColStyle = {
    position: "relative",
    zIndex: 2,
    paddingLeft: "clamp(0px, 6vw, 80px)",
    paddingRight: "clamp(0px, 3vw, 24px)",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "640px",
    height: "auto",
    display: "block",
    marginTop: "clamp(16px, 3vw, 48px)",
    marginBottom: "-60px",  
    borderRadius: "12px", 
  };

  return (
    <>
      {/* HERO */}
      <section className="your-section-class">
        <Container fluid style={containerStyle}>
          {/* Overlay */}
          <div style={overlayStyle} />

          <Row className="align-items-center g-0">
            {/* LEFT: TEXT */}
            <Col xs={12} md={6}>
              <div style={textWrapStyle}>
                <h2 style={titleStyle}>Sermons.</h2>
                <p style={subtitleStyle}>
                  MAIN TEACHING FROM PASTOR JON THOMPSON
                </p>
              </div>
            </Col>

            {/* RIGHT: IMAGE (structure unchanged) */}
            <Col xs={12} md={6} style={imageColStyle}>
              <img
                src="/pastor2.png"
                alt="Pastor on stage"
                className="img-fluid"
                style={imageStyle}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TFCsermon;
