import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Button } from '../Button/Button';


const Knowusbetter = () => {



  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class" style={{ padding: '0 10rem' }}>
        <Container fluid style={{ backgroundImage: 'url(gettoknow.jpeg)', paddingBottom: '40px' }} >
          <h1 style={{ fontSize: '60px', justifyContent: 'center', fontWeight: 'bold', textAlign: 'center', paddingTop: '40px' }}>about us</h1>
          <p style={{ fontSize: '20px', justifyContent: 'center', fontWeight: '40', textAlign: 'center', paddingTop: '20px', paddingBottom: '40px' }}>

          </p>

          <div style={{ paddingBottom: '30px' }}>
            <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
              <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header ><h1 style={{ fontSize: '24px', fontWeight: '700' }}>who we are</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The Freedom Fellowship is the fellowship of the singles and the unmarried members of The Father's Church. 
                The fellowship exists to ensure that each member develops their capacity in all three core areas of human existence-Spirit, Soul, and the Body during this 
                transitory phase of their life.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>what we do</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The Freedom Fellowship is the fellowship of the singles and the unmarried members of The Father's Church. 
                The fellowship exists to ensure that each member develops their capacity in all three core areas of human existence-Spirit, Soul, and the Body during this 
                transitory phase of their life.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Our Service Times</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                Sunday school starts at 8:00am and ends at 8:45am that takes place in the main church. Service starts at 9:00 AM.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Wanna Join Us?</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The Freedom Fellowship is the fellowship of the singles and the unmarried members of The Father's Church. 
                The fellowship exists to ensure that each member develops their capacity in all three core areas of human existence-Spirit, Soul, and the Body during this 
                transitory phase of their life.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* <Button style={{ margin: '0 auto 10px' }}>Register</Button> */}
        </Container>
      </section>
    </>
  );
};

export default Knowusbetter;