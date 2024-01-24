import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CurrentSermon = () => {
  const backgroundImageUrl = 'CSs.jpg'; // Replace with your image URL

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%', // Set the width to 100% of the viewport width
    height: '100vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Set text color
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: 'hidden',
    boxSizing:'border-box',
  };

 return (
    
        <Container  fluid style={containerStyle}>
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
                    <h2 className="elementor-heading-title elementor-size-default" style={{fontSize:'65px', fontWeight:'bold',}}>
                      Current Sermon Series
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
                        Come hear the teaching of God’s Word live in Ajax or via
                        video across our locations. Each sermon, full of grace
                        and truth, is culturally relevant to today’s ever
                        changing social, political, and religious climate.
                      </span>
                      <br />
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Missed a past sermon or want to go back and listen to a
                        series? Click below to view our sermon archive.
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
                    <div className="elementor-button-wrapper">
                      <Button
                      style={{ backgroundColor: '#d49c04', color:'#000' }}
                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                        variant="success"
                        href="https://sanctuschurch.com/sermons/"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Watch now
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