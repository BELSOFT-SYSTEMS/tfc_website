import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Container, Row, Col,  Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Connect = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    neededCare: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Redirect to contact page
    console.log('Redirecting to contact page');
    navigate('/contact');
  };

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ flex: 1, marginTop: '50px', marginBottom: '50px' }}>
            <Row>
              <h2 style={{ fontSize: '70px', fontWeight: 'bolder', paddingTop: '20px' }}>Need To Connect About Care?</h2>
              <p style={{ fontFamily: 'Montserrat,Sans-serif', paddingTop: '20px', fontSize: '20px', fontWeight: '40', lineHeight: '20px' }}>
                FINANCIAL DIFFICULTY • FAMILY SITUATIONS • EMOTIONAL WELL-BEING • PRAYER • SPIRITUAL DYNAMICS • HOSPITAL VISITS
              </p>
              <Col xs={12} md={6}>
                <p>
                  <FontAwesomeIcon icon={faMobileScreen} size="6x" />
                  <span style={{ fontSize: '20px' }}> (905) 686-4450 </span>
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div style={{ paddingTop: '20px', paddingRight:'140px' }}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formNeededCare">
                      <Form.Label>Needed Care</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter details about your needed care" name="neededCare" value={formData.neededCare} onChange={handleChange} size="sm" />
                    </Form.Group>
                    <Button type="submit" variant="warning" style={{ maxWidth:'200px',backgroundColor: '#d49c04', color: '#000', marginTop: '20px', maxWidth:'200px' }}>
                      I NEED CARE FORM
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Connect;