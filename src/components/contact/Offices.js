import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarDays, faEnvelopeOpenText, faMapPin, } from '@fortawesome/free-solid-svg-icons';
import {  faBell,  faFaceLaugh,faHourglassHalf, } from '@fortawesome/free-regular-svg-icons'; 


const Offices = () => {

const backgroundImageUrl = 'gettoknow.jpeg'; // Replace with your image URL

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '41% auto', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundColor: '#fff',
    opacity: '0.73',
    width: '100%', // Set the width to 100% of the viewport width
    // height: '100vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
        <h1 style={{fontSize:'55px',justifyContent:'center', textAlign:'center', fontWeight:'bolder'}}>
          Our Offices
        </h1>
      <Container fluid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        <div style={{ flex: 1, marginRight: '20px', marginTop:'50px', marginBottom:'50px', paddingLeft:'30px' }}>
          <h2 style={{fontSize:'25px'}}>EDEN BRANCH</h2>
          <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'30px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>599 Bayly Street East, Ajax, Ontario </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>Monday - Thursday : 10am - 3pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>(905) 686-4450</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>hello@TheFathersChurch.com</span>
          </div>
             </p>
          </div>
          <div style={{ flex: 1, marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <h2 style={{fontSize:'25px'}}>MPAPE BRANCH</h2>
            <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'30px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>599 Bayly Street East, Ajax, Ontario </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>Monday - Thursday : 10am - 3pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>(905) 686-4450</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>hello@TheFathersChurch.com</span>
          </div>
             </p>
            </div>
            <div style={{ flex: 1, marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <h2 style={{fontSize:'25px'}}>ENUGU BRANCH</h2>
            <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'30px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>599 Bayly Street East, Ajax, Ontario </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>Monday - Thursday : 10am - 3pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>(905) 686-4450</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04', fontSize:'18px'}} />
          <span style={{paddingLeft:'10px', fontSize: '16px', fontWeight: '400'}}>hello@TheFathersChurch.com</span>
          </div>
             </p>
            </div>
</Container>
            </Container>
      </section>
    </>
  );
};

export default Offices ;
