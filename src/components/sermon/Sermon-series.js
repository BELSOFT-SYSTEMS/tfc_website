import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Sermonseries = () => {

  const navigate = useNavigate();

  const redirectToSundaysPage = () => {
    console.log('Redirecting to sundays page');
    navigate('/sundays');
  };

 


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{}}>
          <div style={{justifyContent:'center'}}>
          <h2 style={{fontSize:'100px', fontWeight:'bold',fontFamily:'montserrat', color:'#000'}}>Our Current Series</h2>
          <Row >
            <Col >
              <div style={{ marginLeft: '30px' }}>
                <div>
                  <div  style={{justifyContent:'center',textAlign: 'left',}} >
                    <h2  style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '50px', color: '#000' }}>
                    FIRM FAITH: DISCIPLESHIP IN EVERY AGE AND STAGE
                    </h2>
                  </div>
                </div>
                <div>
                  <div >
                    <p style={{ color: '#000' }}>
                    The Christian walk is an everchanging journey taken with God and steeped in community. But what does that actually look like? Well — there’s no one answer; it can look different depending on the age and stage of a Christian’s life.

                    <br/> Learning from other’s spiritual walks can play an essential role in adjusting expectations and extending grace to ourselves, and those around us, when our walk looks different.
                    </p>
                  </div>
                </div>
                <div >
                  <div >
                    <div >
                      <Button
                        variant="warning"
                        style={{ backgroundColor: '#d49c04', color: '#000' }}
                        onClick={redirectToSundaysPage}
                      >
                        <span >
                          <span >view the Sermons</span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
            <Col>
              {/* Your image goes here */}
              <img
                src="Firmsermon.png"
                alt="Opposite"
                className="img-fluid"
                style={{ borderRadius: '10px', margin: '20px 0', paddingRight:'30px' }}
              />
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sermonseries;