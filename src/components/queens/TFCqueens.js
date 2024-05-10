import React from 'react';
import { Container } from 'react-bootstrap';

const TFCqueens = () => {

  const backgroundImageUrl = 'queens-1.jpg'; // Replace with your image URL

  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%', // Set the width to 100% of the viewport width
    height: '75vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Set text color
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginBottom: '7rem',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: '10rem',
    width: '60%', // Adjust to position the overlay to the left
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust overlay color and opacity
    zIndex: 1,
  };

  const textStyle = {
    position: 'relative', // Ensure text is above the overlay
    zIndex: 2, // Higher z-index than overlay
    textAlign: 'left',
   
  };


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid style={containerStyle}>
        {/* Overlay */}
        <div style={overlayStyle}></div>
        {/* Text */}
        <div style={textStyle}>
          <h2 style={{ fontSize: '110px', fontWeight: 'bolder', fontFamily: 'Sans-serif', color: '#000', marginLeft: '-35rem', }}>
          TFC <br/> Queens <br/> Fellowship.
          </h2>
        </div>
      </Container>
      </section>
    </>
  );
};

export default TFCqueens;