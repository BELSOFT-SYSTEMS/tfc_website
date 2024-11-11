import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './home.css';

const HomeSlider = () => {
  const aspectRatio = 'calc(1638 / 2560 * 100%)'; // Aspect ratio for image

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const [fade, setFade] = useState(true); // Control fade-in and fade-out effect

  const images = [
    "slider-home.png",
    "pastor-home-3.jpg",
    "freedom-2.jpg",
  ];

  // Handle auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Change slide after fade-out
        setFade(true); // Start fade-in
      }, 1000); // Wait for fade-out duration before changing slide
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <section className="home-slider-section">
      <Container fluid className="text-center">
        {/* Title text */}
        <h1 className="hero-text">
          There is room for <br /> <span>Everyone.</span>
        </h1>
        
        {/* Image Slider */}
        <div className="hero-banner" style={{ position: 'relative', paddingBottom: aspectRatio}}>
          <div className="image-container">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className={`img-fluid rounded ${fade ? 'fade-in' : 'fade-out'}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSlider;