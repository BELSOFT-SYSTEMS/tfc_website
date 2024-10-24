import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

const HomeSlider = () => {
  const aspectRatio = 'calc(1438 / 2560 * 100%)'; // Aspect ratio for image
  const windowWidth = window.innerWidth; // Get the window width for font size adjustment
  const fontSize = windowWidth < 768 ? '40px' : '90px'; // Set font size based on screen width

  const [currentSlide, setCurrentSlide] = useState(0); // To track the current slide (0, 1, 2 for 3 images)
  const [fade, setFade] = useState(true); // To control the fade-in and fade-out effect

  const images = [
    "slider-home.png", // First image
    "podcast-rejoice.webp", // Second image
    "freedom-2.jpg", // Third image
  ];

  // Handle auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Change slide after fade-out
        setFade(true); // Start fade-in
      }, 1000); // Wait for fade-out duration before changing slide
    }, 6000); // Change slide every 6 seconds (5000ms + 1000ms for fade duration)

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class" style={{ textAlign: 'center' }}>
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col>
              <div>
                <div style={{ marginLeft: '30px' }}>
                  <Container xs={12} lg={6}>
                    <h1
                      style={{
                        fontSize: fontSize,
                        fontWeight: 'bold',
                        fontFamily: 'Sans-serif',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        marginLeft: '11rem',
                        marginTop: '30px',
                        display: "flex",
                        alignSelf: 'center'
                      }}
                    >
                      There Is Room For <br /> Everyone.
                    </h1>
                  </Container>
                  <Container xs={12} lg={6} style={{ marginTop: '-12rem' }}>
                    <div className="hero-banner" style={{ position: 'relative', paddingBottom: aspectRatio }}>
                      <Container className="image-container">
                        <img
                          src={images[currentSlide]} // Dynamically set the image source based on current slide
                          alt={`Slide ${currentSlide + 1}`} // Alt text for the image
                          className={`img-fluid rounded ${fade ? 'fade-in' : 'fade-out'}`} // Apply fade-in/out classes based on state
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '100%',
                            maxHeight: '80%',
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