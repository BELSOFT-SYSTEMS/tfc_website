import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Button } from '../Button/Button';


const Knowusbetter = () => {



  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class" style={{ padding: '0 10rem' }}>
        <Container fluid style={{ backgroundImage: 'url(gettoknow.jpeg)', paddingBottom: '40px' }} >
          <h1 style={{ fontSize: '60px', justifyContent: 'center', fontWeight: 'bold', textAlign: 'center', paddingTop: '40px' }}>Who we are?</h1>
          <p style={{ fontSize: '20px', justifyContent: 'center', fontWeight: '40', textAlign: 'center', paddingTop: '20px', paddingBottom: '40px' }}>Kids programs take place simultaneously with our Sunday morning services. Depending on the size of the site, some programming may be separated out further by age.</p>

          <div style={{ paddingBottom: '30px' }}>
            <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
              <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header>NURSERY (3-18 MONTHS)</Accordion.Header>
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
              <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header>TODDLERS & PRESCHOOL (19 MONTHS-4 YEARS)</Accordion.Header>
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
              <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header>JK & SK (5-6 YEARS)</Accordion.Header>
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
              <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header>GRADE 1-5 (7-11 YEARS)</Accordion.Header>
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
          <Button style={{ margin: '0 auto 10px' }}>Register</Button>
        </Container>
      </section>
    </>
  );
};

export default Knowusbetter;