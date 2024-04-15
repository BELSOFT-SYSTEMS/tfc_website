import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Carousel ,ButtonGroup, Button, } from 'react-bootstrap';

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
  //  const backgroundImages = [
  //   'bg-1.jpg',
  //   'bg-2.jpg',
  //   'bg-3.jpg',
  //   'bg-4.jpg',
  //   'bg-5.jpg',
  //   'bg-6.jpg',
  //   'bg-7.jpg',

  // ];

  
  // State to track the current background image index
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change background image
  // useEffect(() => {
    // Function to loop through the images
    // const changeBackground = () => {
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    // };

    // Change background image every 5 seconds
    // const interval = setInterval(changeBackground, 10000);

    // Clear interval on component unmount
    // return () => clearInterval(interval);
  // }, [backgroundImages.length]); // Empty dependency array ensures this effect runs only once on component mount

    // Inline style object to set background image
  const backgroundStyle = {
    // backgroundImage: `url(${backgroundImages[currentIndex]})`,
    
  };

  // Inline style object to animate background position
  // const transitionStyle = {
  //   transitionTimingFunction: 'ease-in-out',
  //   transitionDuration: '1s',
  // };

  // Update backgroundStyle with the transition effect for background position
  // Object.assign(backgroundStyle, transitionStyle);

  // const buttonStyle = {
    
  // };



  return (
    
    <div fluid style={backgroundStyle}>

      <header>
        {/* Home button at top right */}
      <div style={{ display: 'flex', justifyContent: 'end'}}>
          <Button variant="warning" onClick={redirectToHomePage} style={{ position: 'absolute', backgroundColor: '#d49c04', color: '#000', zIndex: '10', right: '10px', top: '10px' }}>Home</Button>
      </div>

      </header>
      {/* Slider */}
      <Carousel  style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        
        <Carousel.Item style={{ height: '100vh' }}> 
          <img
            className="d-block w-100 h-100"
            src="bg-1.jpg"
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-2.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-3.jpg"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-4.jpg"
            alt="Fourth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-5.jpg"
            alt="Fifth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-6.jpg"
            alt="Sixth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-7.jpg"
            alt="Seventh slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <p>Welcome to the THE FATHER'S CHURCH</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
      <footer>

     <div style={{ width: '100%', display: 'flex', flexDirection:'column' , position: 'absolute', bottom: '3%' , alignItems: 'center', justifyContent: 'space-evenly'  }}>
          <ButtonGroup style={{ gap: '25px', display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
            <Button variant="danger" onClick={downloadTheMonthlyBulletin} style={{ backgroundColor: '#a72942', color: '#000', }}> MONTHLY BULLETIN </Button>
            <Button variant="warning" onClick={redirectToPrayerRequest} style={{ backgroundColor: '#d49c04', color: '#000', }}>PRAYER REQUEST</Button>
            <Button variant="warning" onClick={redirectToSundays} style={{ backgroundColor: '#d49c04', color: '#000', }}>PLAN TO VISIT</Button>
          </ButtonGroup>
      
      </div> {/* Buttons at the bottom center */}
      
      </footer>
    </div>
  );
};

export default Landing
