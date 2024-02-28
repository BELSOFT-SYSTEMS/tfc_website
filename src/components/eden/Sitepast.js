import React from 'react';
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
            <Col md={6} >
              <div style={{ marginLeft: '30px' }}>
                <div>
                  <div style={{justifyContent:'center',textAlign: 'left',}} >
                    <h2 style={{ fontSize: '60px', fontWeight: 'bolder', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '50px', color: '#000' }}>
                    Meet The Site Pastor
                    </h2>
                  </div>
                </div>
                <div>
                  <div>
                    <p style={{ fontFamily: 'Sans-serif', fontSize:'30px', color: '#000' }}>
                    ANGELA MASON
                     </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div style={{display: 'flex', marginRight: '20px' }}>
                      <p style={{fontFamily: 'Sans-serif', fontSize:'15px', color: '#000'}}>
                      Nostrud commodo mollit id excepteur tempor ullamco mollit cupidatat cupidatat. Deserunt sit fugiat irure esse ipsum exercitation non laboris et qui. Cupidatat enim quis magna ea.

Proident enim elit in non minim ex veniam elit consectetur eiusmod. Aliquip voluptate aute eiusmod laborum ipsum proident adipisicing ullamco. Sint culpa commodo et mollit nisi incididunt dolore cillum. Culpa amet fugiat ex in. Deserunt est officia elit ad sunt ullamco do ut esse excepteur officia.

In sit mollit velit cupidatat nostrud. Ullamco officia amet esse qui non. Veniam in eiusmod cupidatat pariatur proident cillum enim. Sit non incididunt eiusmod qui. Nostrud est occaecat velit laboris culpa duis ea reprehenderit veniam. Reprehenderit dolore occaecat mollit aliquip incididunt consequat sint aliqua. Est minim consectetur quis ullamco fugiat nisi nulla veniam.
                      </p>
                       </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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