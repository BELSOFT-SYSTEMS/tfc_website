import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Carousel ,ButtonGroup,  } from 'react-bootstrap';
import { Button } from '../Button/Button';

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






  return (
    
    <div fluid >

      <header>
        {/* Home button at top right */}
      <div style={{ display: 'flex', justifyContent: 'end'}}>
          <Button variant="warning" onClick={redirectToHomePage} style={{ position: 'absolute', backgroundColor: '#d49c04', color: '#fff', zIndex: '10', right: '20px', top: '10px', maxWidth: '150px', fontWeight:'600',  fontSize:'14px', height:'10px' }}>Home</Button>
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
          
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-2.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item >
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-3.jpg"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-4.jpg"
            alt="Fourth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-5.jpg"
            alt="Fifth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
         
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-6.jpg"
            alt="Sixth slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item>
        <Carousel.Item style={{ height: '100vh' }}>
          <img
            className="d-block w-100 h-100"
            src="bg-7.jpg"
            alt="Seventh slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item>
        
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
      <footer>

     <div style={{ width: '100%', display: 'flex', flexDirection:'column' , position: 'absolute', bottom: '8%' , alignItems: 'center', justifyContent: 'space-evenly'  }}>
          <ButtonGroup style={{ gap: '25px', display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
            <Button variant="danger" onClick={downloadTheMonthlyBulletin} style={{color: '#fff', fontWeight:'600',  fontSize:'14px'}}> MONTHLY BULLETIN </Button>
            <Button variant="warning" onClick={redirectToPrayerRequest} style={{ color: '#fff', fontWeight:'600',  fontSize:'14px'}}>PRAYER REQUEST</Button>
            <Button variant="warning" onClick={redirectToSundays} style={{ color: '#fff', fontWeight:'600',  fontSize:'14px'}}>PLAN TO VISIT</Button>
          </ButtonGroup>
      
      </div> {/* Buttons at the bottom center */}
      
      </footer>
    </div>
  );
};

export default Landing
