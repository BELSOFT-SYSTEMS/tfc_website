import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './home.css';




const HomeSlider = () => {
  const aspectRatio = 'calc(1438 / 2560 * 100%)'; // Calculate the aspect ratio
  const windowWidth = window.innerWidth; // Get the window width

  // Calculate font size based on window width
  const fontSize = windowWidth < 768 ? '40px' : '90px';

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class" style={{textAlign: 'center'}}>
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col>
              <div >
                <div style={{ marginLeft: '30px' }}>
                <Container xs={12} lg={6}>
                  <h1  style={{ fontSize: fontSize, fontWeight: 'bold', fontFamily: 'Sans-serif', justifyContent: 'flex-start', textAlign: 'left', marginLeft: '140px',marginTop: '30px', marginBottom: '20px', display:"flex",alignSelf:'center' }}>
                    There Is Room For <br /> Everyone.
                  </h1>
                  </Container> 
                  <Container xs={12} lg={6}>
                  <div className="hero-banner" style={{ position: 'relative', paddingBottom: aspectRatio }}>
                    <Container className="image-container">
                      <img
                        src="slider1.jpg"
                        alt="Hero Banner"
                        className="img-fluid rounded"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          maxWidth: '100%', // Set maximum width to 100% for responsiveness
                          maxHeight: '100%', // Set maximum height to 100% for responsiveness
                          objectFit: 'cover',
                          borderRadius: '40px',
                        }}
                      />
                    </Container>
                  </div>
                  </Container>
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





