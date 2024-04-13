import React from 'react';
import { Container,Row, Col  } from 'react-bootstrap';

const TFCsermon = () => {

  const backgroundImageUrl = 'sermon-bg.jpeg'; // Replace with your image URL

  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%', // Set the width to 100% of the viewport width
    height: '100vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Set text color
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: 'hidden',
    boxSizing:'border-box',
    marginBottom: '40px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    width: '100%', // Adjust to position the overlay to the left
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust overlay color and opacity
    zIndex: 1,
  };

  const textStyle = {
    position: 'relative', // Ensure text is above the overlay
    zIndex: 2, // Higher z-index than overlay
    textAlign: 'left',
    marginLeft: '20px',
  };


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid style={containerStyle} >
      <Row>
        {/* Overlay */}
        <div style={overlayStyle}></div>
        {/* Text */}
       <Col> <div style={textStyle}>
          <h2 style={{ fontSize: '130px', fontWeight: 'bolder', fontFamily: 'Sans-serif', color: '#000' }}>
          Sermons.
          </h2>
          <p style={{fontSize:'40px', fontWeight:'60',color: '#000', fontFamily: 'monospace'}}>MAIN TEACHING FROM PASTOR JON THOMPSON</p>
        </div></Col>
        <Col style={{zIndex:3, paddingLeft:'80px'}}>
              {/* Your image goes here */}
              <img
                src="pastor2.png"
                alt="Opposite"
                className="img-fluid"
                style={{ borderRadius: '10px', margin: '70px 0',  }}
              />
            </Col></Row>
      </Container>
      </section>
    </>
  );
};

export default TFCsermon;