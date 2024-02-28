import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarDays,  faMapPin, } from '@fortawesome/free-solid-svg-icons';


const TFCenugu = () => {

 
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
      <Container fluid style={{}}>
        
        {/* Text */}
        <div style={textStyle}>
          <h2 style={{ fontSize: '130px', fontWeight: 'bolder', fontFamily: 'Sans-serif',paddingTop:'20px',paddingLeft:'30px',textAlign:'left', color: '#000' }}>
          TFC  Enugu.
          </h2>
          <div style={{ flex: 1, marginRight: '20px', marginTop:'30px', marginBottom:'50px', paddingLeft:'30px' }}>
          <p style={{fontFamily:'Montserrat', fontSize:'25px', fontWeight:'100', lineHeight:'20px'}}>
          <div style={{paddingTop:'25px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'20px'}}>599 Bayly Street East, Ajax, Ontario </span>
          </div>
          <div style={{paddingTop:'25px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04'}} />
          <span style={{paddingLeft:'20px'}}>Monday - Thursday : 10am - 3pm </span>
          </div>
          <div style={{paddingTop:'25px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'20px'}}>(905) 686-4450</span>
          </div>
             </p>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
};

export default TFCenugu;