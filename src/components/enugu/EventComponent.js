import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '../Button/Button';

const EventComponent = ({ title, date, description, imageUrl, buttonText }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '30px' }}>
      <Card.Header>{date}</Card.Header>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" style={{ backgroundColor: '#d49c04', color: '#000', marginTop: '20px' }}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default EventComponent;