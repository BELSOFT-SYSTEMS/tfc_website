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
        <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', minHeight: '455px', maxWeight: '1140px', }}>
        <h1 style={{fontSize:'70px',justifyContent:'center', textAlign:'center', fontWeight:'bolder'}}>
          Our Offices
        </h1>
      <Container fluid style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px', marginTop:'50px', marginBottom:'50px', paddingLeft:'30px' }}>
          <h2 style={{fontSize:'40px'}}>EDEN OFFICE</h2>
          <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'20px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>599 Bayly Street East, Ajax, Ontario </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04'}} />
          <span style={{paddingLeft:'10px'}}>Monday - Thursday : 10am - 3pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>(905) 686-4450</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>hello@TheFathersChurch.com</span>
          </div>
             </p>
          </div>
          <div style={{ flex: 1, marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <h2 style={{fontSize:'40px'}}>MPAPE OFFICE</h2>
            <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'20px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>72 King Street West Bowmanville, Ontario L1C 1R4 </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04'}} />
          <span style={{paddingLeft:'10px'}}>Tuesday - Wednesday: 9am - 5pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>(905) 686-4450 x 6741</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px'}}>hello@TheFathersChurch.com</span>
          </div>
             </p>
            </div>
            <div style={{ flex: 1, marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <h2 style={{fontSize:'40px'}}>ENUGU OFFICE</h2>
            <p style={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'40', lineHeight:'20px'}}>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px', paddingTop:'20px'}}>14480 Old Simcoe Rd Port Perry, Ontario L9L 1C3 </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04'}} />
          <span style={{paddingLeft:'10px', paddingTop:'20px'}}>Tuesday - Wednesday: 9am - 5pm </span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px', paddingTop:'20px'}}>(905) 686-4450 x 6670</span>
          </div>
          <div style={{paddingTop:'5px'}}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'#d49c04'}}/>
          <span style={{paddingLeft:'10px', paddingTop:'20px'}}>hello@TheFathersChurch.com</span>
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
