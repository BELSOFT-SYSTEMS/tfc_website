// EventComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventComponent = ({ title, date, description, imageUrl, buttonText }) => {
  return (
    <Card style={{ width: '18rem', marginBottom:'30px' }}>
      <Card.Header>{date}</Card.Header>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Header>{title}</Card.Header>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" style={{justifyContent:'center', backgroundColor: '#d49c04', color: '#000', alignContent:'center', marginLeft:'40px', marginTop:'20px', marginBottom:'20px'}}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};


export default EventComponent;