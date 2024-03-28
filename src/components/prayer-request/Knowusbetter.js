import React from 'react';
import { Container, Accordion, Button } from 'react-bootstrap';

const Knowusbetter = () => {



  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid style={{backgroundImage: 'url(gettoknow.jpeg)'}} >
        <h1 style={{ fontSize:'60px', justifyContent:'center',fontWeight:'bold', textAlign:'center', paddingTop:'40px'}}>The Restoration Prayer Process</h1>
      <div style={{paddingBottom:'70px', marginTop:'50px'}}>
        <Accordion defaultActiveKey="0" alwaysOpen style={{paddingBottom:'20px'}}>
      <Accordion.Item eventKey="0" style={{paddingBottom:'5px',marginBottom:'20px',}}>
        <Accordion.Header style={{ backgroundColor:'#000'}}>STEP 1: COMPLETE QUESTIONNAIRE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{paddingBottom:'5px', marginBottom:'20px'}}>
        <Accordion.Header>STEP 2: LISTENING PRAYER</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{paddingBottom:'5px', marginBottom:'20px'}}>
        <Accordion.Header>STEP 3: RENOUNCING PRAYER</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{paddingBottom:'5px', marginBottom:'20px'}}>
        <Accordion.Header>STEP 4: RELEASING PRAYER</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" style={{paddingBottom:'5px', marginBottom:'20px'}}>
        <Accordion.Header>STEP 5: FOLLOW-UP</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
</Container>
<Container style={{ textAlign: 'center', marginTop:'50px', marginBottom:'30px' }}>
  <h1 style={{ fontSize: '60px', fontFamily: 'Coolvetica', fontWeight: 'bold', paddingTop: '40px' }}>Begin Restoration Prayer</h1>
  <p style={{ fontSize: '20px', fontFamily: 'montserret', marginTop:'20px', fontWeight: 400 }}>For more information or to begin registration, send us a message. We’d love to talk.</p>
  <Button variant='warning' style={{ backgroundColor: '#d49c04', color: '#000', marginTop:'30px', marginBottom: '50px' }}>CONNECT WITH THE TEAM</Button>
</Container>
      </section>
    </>
  );
};

export default Knowusbetter;