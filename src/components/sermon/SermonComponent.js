// EventComponent.js
import React from 'react';
import { Card, CardLink } from 'react-bootstrap';

const EventComponent = ({ title, date, description, imageUrl, buttonText }) => {
  return (
    <Card style={{ width: '18rem', marginBottom:'30px' }}>
    <CardLink style={{ textDecorationLine: 'none', color: 'black' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Header  style={{ textDecorationLine: 'none', color: 'black', backgroundColor:'transparent',border:'none' }}>{title}</Card.Header>
        </Card.Body>
        </CardLink>
    </Card>
  );
};


export default EventComponent;