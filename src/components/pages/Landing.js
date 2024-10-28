import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, ButtonGroup } from 'react-bootstrap';
import { Button } from '../Button/Button';

const Landing = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const redirectToHomePage = () => navigate('/home');
  const redirectToSundays = () => navigate('/sundays');
  const downloadTheMonthlyBulletin = () => {
    const link = document.createElement('a');
    link.href = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
    link.download = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
    link.click();
  };
  const redirectToPrayerRequest = () => navigate('/Prayer-request');

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleSlideChange = (event) => {
    if (event === 0 && videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <div className="landing-page">
      <header>
        <div className="home-button-container">
          <Button variant="warning" onClick={redirectToHomePage} className="home-button">
            Home
          </Button>
        </div>
      </header>

      <Carousel
        className="carousel"
        controls={false}
        indicators={false}
        interval={isVideoPlaying ? null : 3000}
        ref={carouselRef}
        onSlide={(event) => handleSlideChange(event)}
      >
        <Carousel.Item>
          <video
            className="media"
            src="msg-vid.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            ref={videoRef}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="media"
            src="bg-2.jpg"
            alt="Background scenery with landscape"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="media"
            src="bg-6.jpg"
            alt="Background scenery with landscape"
          />
        </Carousel.Item>
      </Carousel>

      <footer>
        <div className="footer-buttons">
          <ButtonGroup className="footer-button-group">
            <Button variant="danger" onClick={downloadTheMonthlyBulletin}>
              MONTHLY BULLETIN
            </Button>
            <Button variant="warning" onClick={redirectToPrayerRequest}>
              PRAYER REQUEST
            </Button>
            <Button variant="warning" onClick={redirectToSundays}>
              PLAN TO VISIT
            </Button>
          </ButtonGroup>
        </div>
      </footer>

      <style jsx>{`
        .landing-page {
          position: relative;
          max-width: 100vw;
          max-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .home-button-container {
          display: flex;
          justify-content: flex-end;
          position: absolute;
          top: 10px;
          right: 20px;
          z-index: 10;
        }

        .home-button {
          background-color: #d49c04;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          height: 40px;
        }

        .carousel {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .media {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          max-width: 100vw;
          max-height: 100vh;
        }

        .footer-buttons {
          width: 100%;
          display: flex;
          // justify-content: center;
          bottom: 5%;
          position: absolute;
          // margin-right: 20%;
          // align-items: center;
        }

        .footer-button-group {
          display: flex;
          gap: 15px;
          margin-left: -20%;
          
        }

        .footer-button-group button {
          font-weight: 600;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .media {
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            
          }

          .home-button {
            font-size: 12px;
            height: 35px;
          }

          .footer-button-group button {
            font-size: 12px;
            padding: 8px;
            margin-top: 0.5%; 
          }
          .footer-button-group {
            flex-direction: column;
          }
         
        }

        @media (min-width: 1200px) {
          .media {
            width: 100vw;
            height: 100vh;
            max-width: 100vw;
            max-height: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;