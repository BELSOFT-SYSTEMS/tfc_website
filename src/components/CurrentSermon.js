import React from 'react';
import { Button } from './Button/Button';
import { Container, Row, Col, } from 'react-bootstrap';




const CurrentSermon = () => {
  const backgroundImageUrl = 'CSs.jpg'; 
  // Replace with your image URL
  const windowWidth = window.innerWidth; // Get the window width

  // Calculate font size based on window width
  const fontSize = windowWidth < 768 ? '40px' : '65px';
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '0 20px', // Add horizontal padding
    boxSizing: 'border-box',
  };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col md={6} className="elementor-hidden-mobile">
          {/* Empty column as per the original structure */}
        </Col>
        <Col md={6}>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-642c1744 elementor-invisible elementor-widget elementor-widget-heading"
              data-id="642c1744"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInRight"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: fontSize, fontWeight: 'bold' }}>
                  Our Sermon Series
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0dd751a elementor-invisible elementor-widget elementor-widget-text-editor"
              data-id="0dd751a"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInRight"}'
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Come hear the teaching of God’s Word live in Eden or join us online across our locations. Each sermon, full of grace and truth, is culturally relevant to today’s ever-changing social, political, and religious climate.
                  </span>
                  <br />
                </p>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Missed a past sermon or want to go back and listen to a series? Click below to view our sermon archive.
                  </span>
                </p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4e3d176 elementor-invisible elementor-widget elementor-widget-button"
              data-id="4e3d176"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInRight"}'
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper"  style={{width:"100%", display:"flex",  flexDirection: "column"}} >
                  <Button
                    style={{ backgroundColor: '#d49c04', color: '#fff', maxWidth:'200px' }}
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                    variant="success"
                    href="/sermons"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Watch now
                      </span>
                    </span>
                  </Button>
                  <Button
                    style={{ backgroundColor: '#FF0000', color: '#fff', maxWidth:'200px' }}
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                    variant="success"
                    href="/sermons"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Watch Live
                      </span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default CurrentSermon;
