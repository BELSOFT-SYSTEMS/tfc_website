import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button/Button';
import { Container, Row, Col } from 'react-bootstrap';
import './sunday.css'; // Move styling here for better management

const Sunday = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = 'background-img1.jpg';

  const redirectToSundaysPage = () => {
    console.log('Redirecting to sundays page');
    navigate('/sundays');
  };

  return (
    <section className="sunday-section">
      <Container fluid className="sunday-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <Row className="sunday-row">
          <Col xs={12} md={6} className="text-content">
            <h2 className="sunday-title">
              Sundays @ TFC
            </h2>
            <p className="sunday-description">
              Welcome to The Fathers Church. The Father's Church Is An Assembly Of Believers Committed To Revealing The Fatherhood Of Almighty God To This Generation Through Sound Biblical Teachings And Corresponding Moral Conduct.
            </p>
            <Button
              className="visit-button"
              variant="success"
              onClick={redirectToSundaysPage}
            >
              Plan your visit
            </Button>
          </Col>
          <Col xs={12} md={6} className="image-content">
            <img
              src="sundays1.png"
              alt="Opposite"
              className="img-fluid rounded sunday-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sunday;