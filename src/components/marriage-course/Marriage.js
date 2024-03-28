import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

const Marriage = () => {

  const backgroundImageUrl = 'prayer-bg.jpeg'; // Replace with your image URL

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
    marginBottom: '40px',
  };


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={containerStyle}>
          <div style={{justifyContent:'center'}}>
          <Row >
            <Col md={6} >
              <div style={{ marginLeft: '30px' }}>
                <div className="elementor-element elementor-element-52ff6ed elementor-invisible elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container" style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', textAlign: 'left', height: '100vh' }}>
                  <div style={{ textAlign: 'left' }}>
                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '130px', fontFamily: 'Coolvetica', color: '#000', fontWeight: 700, textTransform:'capitalize', marginTop:'60px' }}>
                    Marriage Course.
                      </h2>
                      <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '30px', fontWeight: 200, fontFamily: 'Jost', color: '#000' }}>
                      STRENGTHEN YOUR MARRIAGE
                        </h2>
                        </div>
                        </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              {/* Your image goes here */}
              <img
                src="marriage1.png"
                alt="Opposite"
                className="img-fluid"
                style={{ borderRadius: '10px', margin: '20px 0' }}
              />
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Marriage;