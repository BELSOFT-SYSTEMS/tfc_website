import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';


const Connect = () => {
  const navigate = useNavigate();

  const redirectToContactPage = () => {
    console.log('Redirecting to contact page');
    navigate('/contact');
  };



  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: 1, marginRight: '20px', marginTop:'50px', marginBottom:'50px', paddingLeft:'30px', paddingTop:'20px' }}>
          <h2 style={{fontSize:'70px', fontWeight:'bolder', paddingTop:'20px'}}>Need To Connect About Care?</h2>
          <p style={{fontFamily:'Montserrat,Sans-serif',paddingTop:'20px', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>FINANCIAL DIFFICULTY • FAMILY SITUATIONS • EMOTIONAL WELL-BEING • PRAYER • SPIRITUAL DYNAMICS • HOSPITAL VISITS</p>
          <p>
          <FontAwesomeIcon icon={faMobileScreen} size='4x' />
          <span style={{fontSize:'20px'}}>
          (905) 686-4450
          </span>
          </p>
          <div style={{paddingTop:'20px'}}>
          <Button  variant="warning" style={{ backgroundColor: '#d49c04', color: '#000' }}>
            I NEED CARE FORM
          </Button>
          </div>
          </div>
</Container>
      </section>
    </>
  );
};

export default Connect;