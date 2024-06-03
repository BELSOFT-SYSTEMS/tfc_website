import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const backgroundImageUrl = 'background-img1.jpg'; // Replace with your image URL

  const [containerHeight, setContainerHeight] = useState('80vh');
  const [fontSize, setFontSize] = useState({ title: 120, subtitle: 23 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setContainerHeight('60vh');
        setFontSize({ title: 60, subtitle: 16 });
      } else if (width <= 992) {
        setContainerHeight('70vh');
        setFontSize({ title: 80, subtitle: 18 });
      } else {
        setContainerHeight('80vh');
        setFontSize({ title: 120, subtitle: 23 });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial adjustments

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerbgStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    width: '100%',
    height: containerHeight,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    opacity: '0.3',
    position: 'absolute',
    zIndex: '0',
  };

  const containerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '1',
    width: '100%',
    height: containerHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    margin: 0,
    padding: 0,
    // overflow: 'hidden',
    boxSizing: 'border-box',
    marginBottom: '40px',
  };

  return (
    <section className="your-section-class">
      <Container fluid style={containerbgStyle}></Container>
      <Container fluid style={containerStyle}>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div style={{ marginRight: '20px' }}>
              <div className="elementor-element elementor-element-52ff6ed elementor-invisible elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container" style={{justifyContent:'center',textAlign: 'left',}} >
                  <div style={{ textAlign: 'center' }}>
                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: `${fontSize.subtitle}px`, fontFamily: 'Sans-serif', color: '#000' }}>
                      DISCOVER THE PRINCIPLES THAT GUIDE US
                    </h2>
                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: `${fontSize.title}px`, fontWeight: 'bold', fontFamily: 'Sans-serif', color: '#000', marginBottom: '-35px' }}>
                      About Us.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="aboutus1.png"
              alt="Opposite"
              className="img-fluid"
              style={{ borderRadius: '10px', margin: '40px 0px -140px 130px', width: '488px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
