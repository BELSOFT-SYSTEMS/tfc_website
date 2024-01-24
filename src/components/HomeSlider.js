import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeSlider = () => {

  const backgroundImageUrl = 'background-img1.jpg'; // Replace with your image URL

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

  const aspectRatio = 'calc(1438 / 2560 * 100%)'; // Calculate the aspect ratio


  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid>
          <Row>
            <Col>
              <div
                className="elementor-element elementor-element-ddb34a3 elementor-invisible elementor-widget elementor-widget-heading"
                data-id="ddb34a3"
                data-element_type="widget"
                data-settings='{"motion_fx_motion_fx_scrolling":"yes","_animation":"fadeInDown","motion_fx_devices":["desktop","tablet","mobile"]}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <style>
                    {`
                      /*! elementor - v3.18.0 - 20-12-2023 */
                      .elementor-heading-title {
                        padding: 0;
                        margin: 0;
                        line-height: 1;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title[class*="elementor-size-"]
                        > a {
                        color: inherit;
                        font-size: inherit;
                        line-height: inherit;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title.elementor-size-small {
                        font-size: 15px;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title.elementor-size-medium {
                        font-size: 19px;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title.elementor-size-large {
                        font-size: 29px;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title.elementor-size-xl {
                        font-size: 39px;
                      }
                      .elementor-widget-heading
                        .elementor-heading-title.elementor-size-xxl {
                        font-size: 59px;
                      }
                    `}
                  </style>
                  <h1 className="elementor-heading-title elementor-size-default" style={{fontSize: '100px', fontWeight:'bold',fontFamily:'Sans-serif', justifyContent:'center', textAlign:'left', marginTop:'30px', marginBottom:'20px'}}>
                    You Belong Here.
                  </h1>
                  <div className="hero-banner" style={{ position: 'relative', paddingBottom: aspectRatio }}>
      <Container className="image-container">
        <img
          src="slider1.jpg"
          alt="Hero Banner"
          className="img-fluid rounded"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '60%',
            objectFit: 'cover',
            borderRadius: '40px',
          }}
        />
      </Container>
    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 */}
      <section className="your-section-class">
        <Container fluid style={containerStyle} >
          <Row>
            <Col md={6}>
              <div
                className="elementor-element elementor-element-52ff6ed elementor-invisible elementor-widget elementor-widget-heading"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" style={{fontSize: '80px', fontWeight:'bold',fontFamily:'Sans-serif', justifyContent:'center', textAlign:'left', marginTop:'30px', color:'#000', marginBottom:'20px'}}>
                    Sundays @ <br />TFC
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-70f18ad elementor-invisible elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p style={{color:'#000'}}>
                    Welcome to The Fathers Church. Our mission is to glorify God by enabling people of all ages to become fully devoted followers of Jesus Christ. Join us on Sundays to experience engaging teaching, dynamic worship, and intimate prayer. No matter what your age, stage of life, or background, you are welcome here!
                  </p>
                </div>
              </div>
              <div className="elementor-element elementor-element-72f4e51 elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Button
                      className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                      variant="success"
                      style={{backgroundColor: '#d49c04', color: '#000',}}
                      href="https://sanctuschurch.com/sundays-sanctus/"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Plan your visit</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
            {/* Your image goes here */}
            <img
              src="sundays1.png"
              alt="Opposite"
              className="img-fluid"
              style={{ borderRadius: '10px', margin: '20px 0', }} // Add styles as needed
            />
          </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSlider;