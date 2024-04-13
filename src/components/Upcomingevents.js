import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EventComponent from './EventComponent';

const Upcomingevents = () => {
  return (
    <Container fluid>
      <Container style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
        <Row>
          <Col>
            <h2 style={{ fontSize: '20px' }}>What's On At The Father's Church</h2>
            <h2 style={{ fontSize: '55px' }}>Upcoming Events</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' ,gap:30}}>
        <EventComponent
          title="Biblical Finance Course"
          description="Learn how to be a good steward of your finances with Biblical principles and teachings from times 7:00 – 9:00pm!"
          imageUrl="event1.jpg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="The Father Church Youth Service"
          description="TFC youth, grades 6 &#8211; 12 are invited to join us on Thursday nights from 7:00 &#8211; 9:00pm!"
          imageUrl="event2.jpg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="The Father Church Youth Night"
          description="All youth in grades 6 - 12 are invited to Port Perry Youth meeting weekly on Thursdays from 7 - 9:00 pm."
          imageUrl="event3.jpeg"
          buttonText="Find Out More"
        />
      </Container>
      <Container style={{ justifyContent: 'center', textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <Button variant="warning" style={{ backgroundColor: '#d49c04', color: '#000' }}>View all Events</Button>
      </Container>
    </Container>
  );
};

export default Upcomingevents;
