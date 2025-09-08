import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Sermonseries = () => {
  const navigate = useNavigate();

  const redirectToSundaysPage = () => {
    navigate('/sundays');
  };

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ marginTop: '70px' }}>
          <div style={{ justifyContent: 'center' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                marginLeft: '20px',
                fontWeight: 'bold',
                fontFamily: 'montserrat',
                color: '#000',
              }}
            >
              Our Current Series
            </h2>
            <Row className="align-items-center">
              {/* Text Column */}
              <Col xs={12} md={6} style={{ padding: '20px' }}>
                <h2
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontFamily: 'Sans-serif',
                    marginTop: '20px',
                    marginBottom: '20px',
                    color: '#000',
                  }}
                >
                  FIRM FAITH: DISCIPLESHIP IN EVERY AGE AND STAGE
                </h2>

                <p style={{ color: '#000', fontSize: '14px', lineHeight: '1.6' }}>
                  The Christian walk is an everchanging journey taken with God and
                  steeped in community. But what does that actually look like? Well —
                  there’s no one answer; it can look different depending on the age and
                  stage of a Christian’s life.
                  <br />
                  <br />
                  Learning from other’s spiritual walks can play an essential role in
                  adjusting expectations and extending grace to ourselves, and those
                  around us, when our walk looks different.
                </p>

                <Button
                  variant="warning"
                  style={{ backgroundColor: '#d49c04', color: '#000', marginTop: '10px' }}
                  onClick={redirectToSundaysPage}
                >
                  view the Sermons
                </Button>
              </Col>

              {/* Image Column */}
              <Col xs={12} md={6} className="text-center">
                <img
                  src="Firmsermon.png"
                  alt="Firm Faith Series"
                  className="img-fluid"
                  style={{
                    borderRadius: '10px',
                    margin: '20px 0',
                    maxWidth: '100%',
                    height: 'auto',
                  }}
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
