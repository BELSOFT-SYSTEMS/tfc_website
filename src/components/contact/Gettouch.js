import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Container, Row, Col,  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, } from '@fortawesome/free-brands-svg-icons';

const Gettouch = () => {

  const navigate = useNavigate();

  const redirectToContactPage = () => {
    console.log('Redirecting to contact page');
    navigate('/contact');
  };

  const backgroundImageUrl = 'gettoknow2.jpeg'; // Replace with your image URL

  const containerbgStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    width: '100%',
    height: '540px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    opacity: '0.3',
    position: 'absolute',
    zIndex: '0',
  };

  const containerStyle = {
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    position: 'relative',
    zIndex: '1',
    width: '100%', 
    maxHeight: '540px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    // overflow: 'hidden',
    boxSizing:'border-box',
    marginBottom: '40px',
  };

  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={containerbgStyle}></Container>
        <Container fluid style={containerStyle}>
          <div style={{justifyContent:'center'}}>
          <Row >
            <Col md={6} >
              <div style={{ marginLeft: '-30px' }}>
                <div className="elementor-element elementor-element-52ff6ed elementor-invisible elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container" style={{justifyContent:'center',textAlign: 'left',}} >
                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '130px', fontWeight: 'bolder', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '85px', color: '#000', marginBottom: '-35px', }}>
                      Get In <br />Touch
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-70f18ad elementor-invisible elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p style={{ fontFamily: 'Sans-serif', fontSize:'30px', fontWeight: '600', color: '#000' }}>
                    HOW CAN WE HELP YOU?
                     </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-72f4e51 elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container" style={{display: 'flex', marginTop: '-15px' }}>
                    <div style={{display: 'flex', marginRight: '50px' }}>
                    <FontAwesomeIcon icon={faFacebook} size='3x' style={{ color: '#d49c04',  }} />
                    <FontAwesomeIcon icon={faInstagram} size='3x' style={{ color: '#d49c04',  marginLeft: '20px'  }} />
                    <FontAwesomeIcon icon={faYoutube} size='3x'style={{ color: '#d49c04',  marginLeft: '20px' }} />
                    </div>
                    <div className="elementor-button-wrapper">
                      <Button
                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                        variant="warning"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', maxWidth:'180px', height: '40px', marginTop: '4px' }}
                        onClick={redirectToContactPage}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', color: '#fff', height: '30px', textTransform: 'capitalize', fontSize: '16px', fontWeight: '600', border: 'none'}}>Plan your visit</span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              {/* Your image goes here */}
              <img
                src="gettoknow3.png"
                alt="Opposite"
                className="img-fluid"
                style={{ borderRadius: '10px', marginTop: '80px', marginBottom: '-60px' }}
              />
            </Col>
          </Row>
          </div>
          </Container>
      </section>
    </>
  );
};

export default Gettouch;