import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ButtonGroup, Button, } from 'react-bootstrap';

const Landing = () => {
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

  // Create a link element
  const link = document.createElement('a');
  // Set the href attribute to the URL of the PDF file
  link.href = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
  // Set the download attribute to specify the filename when downloaded
  link.download = 'THE-FATHER_S-HEART-eBULLETIN-JUNE-2023.pdf';
  // Programmatically trigger a click event on the link to start the download
  link.click();

  };
  const redirectToPrayerRequest = () => {
    console.log('Redirecting to Prayer Request');
    navigate('/Prayer-request');
  };

  console.log('Rendering Landing component');



   // List of background images
   const backgroundImages = [
    'landing1.jpg',
    'landing5.jpg',
    'landing3.jpg',
    'worship.jpeg',

  ];

  
  // State to track the current background image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change background image
  useEffect(() => {
    // Function to loop through the images
    const changeBackground = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    // Change background image every 5 seconds
    const interval = setInterval(changeBackground, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [backgroundImages.length]); // Empty dependency array ensures this effect runs only once on component mount

    // Inline style object to set background image
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImages[currentIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background-image 0.5s ease-in-out',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
    };
  



  return (
    <Container fluid style={backgroundStyle}>

      <header>
        {/* Home button at top right */}
      <Button variant="warning" onClick={redirectToHomePage} style={{ position: 'absolute', top: '30px', left: '20px', backgroundColor: '#d49c04', color: '#000', zIndex: 1 }}>Home</Button>

      </header>
      {/* Slider */}{/*
      <Carousel  style={{ width: '100%', height: '100%',objectFit: 'contain' }}>
        
        <Carousel.Item style={{ height: '100%' }}> 
          <img
            className="d-block w-100 h-100"
            src="landing1.jpg"
            alt="Second slide"
            style={{ objectFit: 'contain', height: '100%' }}
          />
          <Carousel.Caption>
          <h1>Landing Page</h1>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100 h-100"
            src="landing2.jpg"
            alt="Second slide"
            style={{ objectFit: 'contain', height: '100%' }}
          />
          <Carousel.Caption>
          <h1>Landing Page</h1>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100 h-100"
            src="landing3.jpg"
            alt="Third slide"
            style={{ objectFit: 'contain', height: '100%' }}
          />
          <Carousel.Caption>
          <h1>Landing Page</h1>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Add more Carousel.Item components for additional slides */}{/*
      </Carousel>*/}

      {/* Logo at top left 
      <img src="tfcLogo.png" alt="Logo" style={{ position: 'absolute', top: '20px', left: '20px', width: '140px', height: '140px' }} />*/}

      <footer>

      {/* Buttons at the bottom center */}
      <ButtonGroup style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', gap:'25px',zIndex:'0' }}>
        <Button variant="warning" onClick={downloadTheMonthlyBulletin} style={{backgroundColor: '#d49c04', color: '#000',}}> MONTHLY BULLETIN </Button>
        <Button variant="warning" onClick={redirectToPrayerRequest} style={{backgroundColor: '#d49c04', color: '#000',}}>PRAYER REQUEST</Button>
        <Button variant="warning" onClick={redirectToSundays} style={{backgroundColor: '#d49c04', color: '#000',}}>PLAN TO VISIT</Button>
      </ButtonGroup>
      </footer>
    </Container>
  );
};

export default Landing
