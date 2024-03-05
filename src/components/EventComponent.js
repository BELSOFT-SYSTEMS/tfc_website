// EventComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventComponent = ({ title, description, imageUrl, buttonText }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Header>{title}</Card.Header>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" style={{ alignSelf: 'center', backgroundColor: '#d49c04', color: '#000', marginTop: 'auto', marginBottom: '20px' }}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};


export default EventComponent;