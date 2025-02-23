import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, ButtonGroup } from "react-bootstrap";
import { Button } from "../components/Button/Button";

const Landing = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showSmallImage, setShowSmallImage] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const redirectToHomePage = () => navigate("/home");
  const redirectToSundays = () => navigate("/sundays");
  const downloadTheMonthlyBulletin = () => {
    const link = document.createElement("a");
    link.href = "THE-FATHER'S-HEART-eBULLETIN-NOVEMBER-2024.pdf";
    link.download = "THE-FATHER'S-HEART-eBULLETIN-NOVEMBER-2024.pdf";
    link.click();
  };

  const redirectToPrayerRequest = () =>
    window.open("https://nkyoergtwq2.typeform.com/to/nASHAAir", "_blank");

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
    } else if (event === 1) {
      setShowSmallImage(true);
      // Delay the next slide after 5 seconds
      setTimeout(() => {
        setShowSmallImage(false);
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 5000); // 5000ms delay
    } else if (event === 2) {
      setShowSmallImage(true);
      // Delay the next slide after 5 seconds
      setTimeout(() => {
        setShowSmallImage(false);
     
      }, 7000); // 5000ms delay
    }
  };

  return (
    <div className="landing-page">
      <header>
        <div className="home-button-container">
          <Button variant="warning" onClick={redirectToHomePage}>
            HOME
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
            preload="auto"
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
          {showSmallImage && (
            <img
              className="small-image"
              src="text-1.png"
              alt=""
            />
          )}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="media"
            src="bg-6.jpg"
            alt="Background scenery with landscape"
          />
          {showSmallImage && (
            <img
              className="small-image third"
              src="text-2.png"
              alt=""
            />
          )}
        </Carousel.Item>
      </Carousel>

      <footer className="landing-footer">
        <div className="footer-buttons">
          <ButtonGroup className="footer-button-group">
            <Button variant="danger" onClick={downloadTheMonthlyBulletin}>
              MONTHLY BULLETIN
            </Button>
            <Button variant="warning" onClick={redirectToPrayerRequest}>
              PRAYER REQUEST
            </Button>
            <Button variant="warning" onClick={redirectToSundays}>
              PLAN A VISIT
            </Button>
          </ButtonGroup>
        </div>
      </footer>

      <style jsx>{`
        .landing-page {
          position: absolute;
          overflow: hidden;
          display: flex;
          width: 100%;
          height: 100%;
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

        .carousel {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: black;
        }

        .media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .small-image {
          position: absolute;
          top: 45%;
          right: -200px;
          width: 60vw;
          height: auto;
          transform: translateY(-50%);
          animation: slideIn 2s forwards ease-in-out;
        }

        .third {
          width: 90vh;
        }

        @keyframes slideIn {
          from {
            right: -200px;
            opacity: 0;
          }
          to {
            right: 50%;
            opacity: 1;
            transform: translate(50%, -50%);
          }
        }

        .landing-footer {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          bottom: 10%;
        }

        .footer-buttons {
          display: flex;
          position: absolute;
        }

        .footer-button-group {
          display: flex;
          gap: 15px;
          padding: 0 10px;
        }

        .footer-button-group button {
          font-weight: 600;
        }

        @media (max-width: 430px) {
          .footer-button-group {
            gap: 5px;
          }

          .footer-button-group button {
            font-weight: 500;
          }
        }

        @media (max-width: 768px) {
          .media {
            width: unset;
            height: 100vh;
            max-height: 100vh;
            object-fit: contain;
          }

          .footer-button-group button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
