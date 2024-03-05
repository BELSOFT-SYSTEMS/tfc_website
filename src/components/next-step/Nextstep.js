import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Nextstep = () => {
  const aspectRatio = 'calc(1438 / 2560 * 100%)'; // Calculate the aspect ratio

  return (
    <>
      {/* Section 1 */}
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <div style={{ marginLeft: '30px' }}>
                  <h1 style={{ fontSize: '120px', fontWeight: 'bolder', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '30px', marginBottom: '20px' }}>
                    Your Next Step.
                  </h1>
                  <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Sans-serif', justifyContent: 'center', textAlign: 'left', marginTop: '30px', marginBottom: '20px' }}>
                    WHAT DOES IT MEAN TO BE A FULLY DEVOTED FOLLOWER OF JESUS CHRIST?
                  </h2>
                  <div>
                    <Container>
                      <Row style={{ paddingTop: '80px', paddingBottom: '0' }}>
                        <Col>
                          <img
                            src="next-step.png"
                            alt="Hero Banner"
                            style={{
                              position: 'relative',
                              top: '0',
                              left: '0',
                              width: '100%',
                              height: 'auto',
                              objectFit: 'cover',
                              borderRadius: '40px',
                            }}
                          />
                        </Col>
                        <Col  style={{ paddingTop:'30px' }}>
                          <p style={{ fontFamily: 'montserrat', fontSize: '20px' }}>
                            We regularly talk about our Mission Statement: <span style={{ fontWeight: 'bold' }}> To glorify God by enabling people of all ages to become fully devoted followers of Jesus Christ.</span>
                            <br /> After a lot of prayer, research, and consultation across all age groups of Sanctus, we have developed a tool designed to give our church community common language around what it means to be a “fully devoted follower” of Jesus Christ.<br />
                            Whether this is your first time at Sanctus or you have been with us for years, we hope the following definitions and exercise are helpful in your Discipleship at Sanctus and becoming fully devoted followers of Jesus.
                          </p>

                          <Button variant="warning" style={{ fontFamily: 'montserrat', marginTop: '30px', backgroundColor: '#d49c04', color: '#000' }}>
                            WHY CHURCH IS SO IMPORTANT
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Nextstep;