import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, ButtonGroup } from "react-bootstrap";
import { Button } from "../components/Button/Button";

const Landing = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const redirectToHomePage = () => navigate("/home");
  const redirectToSundays = () => navigate("/sundays");
  const downloadTheMonthlyBulletin = () => {
    const link = document.createElement("a");
    link.href = "THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf";
    link.download = "THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf";
    link.click();
  };
  const redirectToPrayerRequest = () => navigate("/Prayer-request");

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
          <Button
            variant="warning"
            onClick={redirectToHomePage}
            // className="home-button"
          >
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
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="media"
            src="bg-6.jpg"
            alt="Background scenery with landscape"
          />
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
              PLAN TO VISIT
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

        // .landing-container{
        // position: relative;
        // width: 100%;
        // height: 100%;
        // overflow: hidden;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        // }

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

        .landing-footer {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          bottom: 15%;
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

          // .footer-button-group {
          //   flex-direction: column;
          // }
        }

        // @media (min-width: 1200px) {
        //   .media {
        //     width: 100vw;
        //     height: 100vh;
        //     max-width: 100vw;
        //     max-height: 100vh;
        //   }
        // }
        // @media (min-width: 1440px) {
        //   .media {
        //     object-fit: cover;
        //     width: 100%;
        //     height: 100vh;
        //     max-height: 100vh;
        //   }
        // }
      `}</style>
    </div>
  );
};

export default Landing;
