import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TFCedenexpect = () => {

  const navigate = useNavigate();
  
  const backgroundImageUrl = 'location-bg.jpg'; // Replace with your image URL

  const redirectToSundaysPage = () => {
    console.log('Redirecting to sundays page');
    navigate('/sundays');
  };

  const containerStyle = {
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


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={containerStyle}>
          <div style={{justifyContent:'center'}}>
          <Row >
          <Col >
              {/* Your image goes here */}
              <img
                src="sundays1.png"
                alt="Opposite"
                style={{ borderRadius: '10px', margin: '10px 0' }}
              />
            </Col>
            <Col  >
              <div style={{ marginLeft: '10px',paddingRight:'20px' }}>
                <div>
                  <div  style={{justifyContent:'center',textAlign: 'left',}} >
                    <h2  style={{ fontSize: '60px', fontWeight: 'bold', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '50px', color: '#000' }}>
                    What To Expect
                    </h2>
                  </div>
                </div>
                <div>
                  <div style={{fontFamily: 'Montserrat', fontSize:'25px'}} >
                    <p style={{ color: '#000' }}>Each week, with the help of volunteers, we provide an engaging worship experience for our congregation, guests, and those interested in knowing more about Jesus. Services are currently offering <span style={{fontWeight:'bold'}}>teaching and worship</span> live in the building. Services are currently <span style={{fontWeight:'bold'}}>operating at full capacity.</span>
                    <br/>At Sanctus Church, we take a <span style={{fontWeight:'bold'}}> ‘come as you are’ </span> approach. Some people dress in suits, others in jeans and a t-shirt.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TFCedenexpect;