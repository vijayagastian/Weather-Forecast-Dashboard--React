import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, text }) => {
  return (
    <div className='col-12 col-sm-6 col-md-12 col-lg-10 mb-4'>
    <Card className='h-10'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card></div>
  );
};

export default CardComponent;