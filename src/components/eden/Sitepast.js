import React from 'react';
import Style from './eden.module.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Sitepast = () => {

  const navigate = useNavigate();

  const redirectToContactPage = () => {
    console.log('Redirecting to contact page');
    navigate('/contact');
  };

  const backgroundImageUrl = 'gettoknow.jpeg'; // Replace with your image URL

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%', // Set the width to 100% of the viewport width
    // height: '100vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column-reverse',
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
      <section className="your-section-class" style={{ marginTop: '-4rem' }}>
        <Container fluid style={containerStyle}>
          <div style={{justifyContent:'center'}}>
            <Row className={Style.Pastor}>
            <Col md={6} >
              <div style={{ marginLeft: '5rem' }}>
                <div>
                  <div style={{justifyContent:'center',textAlign: 'left',}} >
                    <h2 style={{ fontSize: '55px', fontWeight: 'bolder', justifyContent: 'center', textAlign: 'left', marginTop: '50px', color: '#000' }}>
                    Meet The Senior Pastor
                    </h2>
                  </div>
                </div>
                <div>
                  <div>
                    <p style={{ fontSize:'30px', color: '#000' }}>
                    Pastor Ikenna Okeke
                     </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div style={{display: 'flex', marginRight: '20px' }}>
                      <p style={{fontSize:'15px', color: '#000'}}>
                      Pastor Ikenna Okeke is the Senior Pastor of The Father’s Church: a vibrant assembly of believers with Headquarters at Eden Centre, Abuja. 
                      He is a remarkable, insightful and practical teacher of the Word of God whose message has enabled many people find hope and restoration through Jesus Christ. 
                      His answer to God's Call in 1997 to “…go to Abuja and raise Me men that I can use” is born out of his unyielding passion, dedication and love of God. 
                      Blessed with a unique teaching gift, Pastor Ikenna's insightful messages on the development of the total man are well received across various platforms such as Radio, 
                      Television and online/Social Media.He began his early ministry as pioneer Pastor at the Desire of Nations Parish of The Redeemed Christian Church of God, Abuja. 
                      He served in that capacity for a period of six years, before a proceeding Call of God led him to the establishment of The Father's Church, in November 2003.
                      A Chartered Accountant by training, he obtained a Bachelor of Science Degree in Accounting from the University of Nigeria and served in various capacities in the 
                      Banking Industry prior to this Call.Pastor Ikenna is a man with a proven heart for God, a tender heart for God’s people and a deep passion for righteous living.
                      He is married to Pastor Chineze Okeke and they are blessed with two children, Uche Okeke and Tochukwu Okeke.
                      </p>
                       </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className={Style.Past_div}>
              {/* Your image goes here */}
              <img
                src="pastor2.png"
                alt="Opposite"
                className="img-fluid"
                style={{ borderRadius: '10px', margin: '20px 0', paddingTop:'50px',paddingLeft:'70px' }}
              />
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sitepast;