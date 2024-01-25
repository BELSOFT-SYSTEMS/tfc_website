import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeSlider = () => {



  const aspectRatio = 'calc(1438 / 2560 * 100%)'; // Calculate the aspect ratio


  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid>
          <Row>
            <Col>
              <div className="elementor-element elementor-element-ddb34a3 elementor-invisible elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container" style={{ marginLeft: '30px' }}>
                  <h1 className="elementor-heading-title elementor-size-default" style={{ fontSize: '80px', fontWeight: 'bold', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '30px', marginBottom: '20px' }}>
                    There Is Room <br /> For Everyone.
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
                          width: '70%',
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

    </>
  );
};

export default HomeSlider;