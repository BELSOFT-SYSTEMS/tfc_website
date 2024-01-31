import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ButtonGroup, Button, Carousel } from 'react-bootstrap';

const Landing = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    console.log('Redirecting to home page');
    navigate('/home');
  };

  console.log('Rendering Landing component');


  return (
    <Container fluid style={{ width: '100%', height: '100vh', position: 'relative',overflow: 'hidden'  }}>
      {/* Slider */}
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
        
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>

      {/* Logo at top left 
      <img src="tfcLogo.png" alt="Logo" style={{ position: 'absolute', top: '20px', left: '20px', width: '140px', height: '140px' }} />*/}

      {/* Home button at top right */}
      <Button variant="warning" onClick={redirectToHomePage} style={{ position: 'absolute', top: '30px', left: '20px', backgroundColor: '#d49c04', color: '#000', zIndex: 1 }}>Home</Button>

      {/* Buttons at the bottom center */}
      <ButtonGroup style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', gap:'25px' }}>
        <Button variant="warning" style={{backgroundColor: '#d49c04', color: '#000',}}> MONTHLY BULLETIN </Button>
        <Button variant="warning" style={{backgroundColor: '#d49c04', color: '#000',}}>PRAYER REQUEST</Button>
        <Button variant="warning"style={{backgroundColor: '#d49c04', color: '#000',}}>PLAN TO VISIT</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Landing
