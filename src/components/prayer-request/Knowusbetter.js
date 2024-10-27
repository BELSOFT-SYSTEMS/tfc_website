import React from 'react';
import { Container, Accordion} from 'react-bootstrap';
import { Button } from '../Button/Button';

const Knowusbetter = () => {



  return (
    <>

    {/* Section 1 */}
    <section className="your-section-class" style={{ padding: '0 10rem' }}>
      <Container fluid style={{ backgroundImage: 'url(gettoknow.jpeg)', paddingBottom: '40px' }} >
        <h1 style={{ fontSize: '60px', justifyContent: 'center', fontWeight: 'bold', textAlign: 'center', paddingTop: '40px' }}>The Restoration Prayer Process</h1>

        <div style={{ paddingBottom: '30px' }}>
          <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
            <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
              <Accordion.Header ><h1 style={{ fontSize: '24px', fontWeight: '700' }}>STEP 1: COMPLETE QUESTIONNAIRE</h1></Accordion.Header>
              <Accordion.Body>
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
              <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>STEP 2: LISTENING PRAYER</h1></Accordion.Header>
              <Accordion.Body>
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
              <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>STEP 3: RENOUNCING PRAYER</h1></Accordion.Header>
              <Accordion.Body>
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
              <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>STEP 5: FOLLOW-UP</h1></Accordion.Header>
              <Accordion.Body>
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              Ut incididunt aliqua do nostrud sunt dolor magna cillum aute Lorem ullamco sit Lorem commodo. Irure veniam proident veniam cillum culpa ad velit in ipsum sit ad officia. Cillum tempor exercitation reprehenderit adipisicing nostrud enim.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <Button style={{ margin: '0 auto 10px' }}>Connect With The Team</Button>
      </Container>
    </section>
  </>
  );
};

export default Knowusbetter;