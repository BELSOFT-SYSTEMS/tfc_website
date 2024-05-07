
import React, { useState } from 'react';
import { Tab, Tabs, Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationTab from './LocationTab';

const Locations = () => {
  const [activeKey, setActiveKey] = useState('eden');
  const windowWidth = window.innerWidth; // 
  const flexDirection = windowWidth < 768 ? 'column' : 'row';

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <div style={{ padding: '20px 96px', margin: '0 10rem' }}>
      <Container style={{ justifyContent: 'center', textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '55px' }}> Our Locations</h2>
        <p style={{ fontSize: '20px', justifyContent: 'center', textAlign: 'center' }}>Join us at our sites across Abuja</p>
      </Container>

      <ButtonGroup size="lg" style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: flexDirection,
        textAlign: 'center',
        height: '40px',
        marginBottom: '20px',
        gap: '15px'
      }}>
        <Button variant="outline-success" onClick={() => handleSelect('eden')} active={activeKey === 'eden'}><FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04' }} />Eden</Button>
        <Button variant="outline-success" onClick={() => handleSelect('mpape')} active={activeKey === 'mpape'}><FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04' }} />Mpape</Button>
        <Button variant="outline-success" onClick={() => handleSelect('enugu')} active={activeKey === 'enugu'}><FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04' }} />Enugu</Button>
        <Button variant="outline-success" onClick={() => handleSelect('online')} active={activeKey === 'online'}><FontAwesomeIcon icon={faChurch} style={{ color: '#d49c04' }} />Online</Button>
      </ButtonGroup>

      <Tabs id="locations-tabs" activeKey={activeKey} onSelect={handleSelect} className="eael-tabs-nav">
        <Tab eventKey='eden'>
          <LocationTab />
        </Tab>
        <Tab eventKey='mpape'>
          <LocationTab />
        </Tab>
        {/* Add more tabs here with similar structure */}
      </Tabs>
    </div>
  );
};

export default Locations;
