import React, {useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, ButtonGroup } from 'react-bootstrap';
import { Button } from '../Button/Button';

const Landing = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // State to track if video is playing
  const videoRef = useRef(null); // Ref for the video element
  const carouselRef = useRef(null); // Ref for the carousel element

  const navigate = useNavigate();

  const redirectToHomePage = () => {
    console.log('Redirecting to home page');
    navigate('/home');
  };

  const redirectToSundays = () => {
    console.log('Redirecting to Sundays page');
    navigate('/sundays');
  };

  const downloadTheMonthlyBulletin = () => {
    const link = document.createElement('a');
    link.href = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
    link.download = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
    link.click();
  };

  const redirectToPrayerRequest = () => {
    console.log('Redirecting to Prayer Request');
    navigate('/Prayer-request');
  };

  // Trigger the carousel to go to the next slide once the video finishes playing
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    if (carouselRef.current) {
      carouselRef.current.next(); // Move to the next slide
    }
  };

  // This useEffect ensures the video is reset to play again when the carousel comes back to the video slide
  const handleSlideChange = (event) => {
    if (event === 0 && videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play(); // Replay the video when it returns to the first slide
    }
  };

  // useEffect(() => {
  //   // Play video on component mount
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);

  // const handleVideoEnd = () => {
  //   setIsVideoPlaying(false);
  // };

  console.log('Rendering Landing component');

  return (
    <div fluid>
      <header>
        {/* Home button at top right */}
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            variant="warning"
            onClick={redirectToHomePage}
            style={{
              position: 'absolute',
              backgroundColor: '#d49c04',
              color: '#fff',
              zIndex: '10',
              right: '20px',
              top: '10px',
              maxWidth: '150px',
              fontWeight: '600',
              fontSize: '14px',
              height: '40px',
            }}
          >
            Home
          </Button>
        </div>
      </header>

      {/* Slider */}
      <Carousel
        style={{ width: '100vw', height: '100vh', position: 'relative' }}
        controls={false}
        indicators={false}
        interval={isVideoPlaying ? null : 3000} // Disable auto slide when video is playing
        ref={carouselRef}
        onSlide={(event) => handleSlideChange(event)}
      >
        {/* Video Slide */}
        <Carousel.Item style={{ height: '100vh' }}>
          <video
            className="d-block w-100 h-100"
            src="msg-vid.mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd} // Trigger when video finishes playing
            ref={videoRef}
            style={{ objectFit: 'cover', height: '100%' }}
          >
            <source src="msg-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>

        {/* Image Slide 1 */}
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-2.jpg"
            alt="Background scenery with landscape"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </Carousel.Item>

        {/* Image Slide 2 */}
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-6.jpg"
            alt="Background scenery with landscape"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </Carousel.Item>
      </Carousel>

      <footer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '8%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '10vh',
          }}
        >
          <ButtonGroup
            style={{
              gap: '25px',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
            }}
          >
            <Button
              variant="danger"
              onClick={downloadTheMonthlyBulletin}
              style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}
            >
              MONTHLY BULLETIN
            </Button>
            <Button
              variant="warning"
              onClick={redirectToPrayerRequest}
              style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}
            >
              PRAYER REQUEST
            </Button>
            <Button
              variant="warning"
              onClick={redirectToSundays}
              style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}
            >
              PLAN TO VISIT
            </Button>
          </ButtonGroup>
        </div>
      </footer>
    </div>
  );
};

export default Landing;