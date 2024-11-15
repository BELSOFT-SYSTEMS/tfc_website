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

          The Governors Fellowship comprises of all married men in the church.
          </p>

          <div style={{ paddingBottom: '30px' }}>
            <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
              <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header ><h1 style={{ fontSize: '24px', fontWeight: '700' }}>who we are</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The Men’s Fellowship (a.k.a Governors Fellowship) is an assemblage of married men and fathers in the church. 
                We acknowledge the critical role of men as the Priests, Protectors, Prophets and Providers in their families 
                and the society in general so, we inspire them to take up these distinct leadership responsibilities assigned by God. 
                We believe that the primary goal of our existence is to serve God by helping each other to connect relationally, grow 
                spiritually and economically. Consequently, through sound biblical doctrines and high moral standards, we help to mould 
                mighty men that will build lasting godly legacies in their communities. Most importantly, the fellowship strives for a total, 
                committed and spirit-filled Christian men, especially in this end-times, by passionately taking the gospel to the world in line 
                with the church’s mission to raise souls for Christ.  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>WE ARE RESOLVED TO</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                
                WE ARE RESOLVED TO: <br />
                1. Constantly seek God's counsel and direction in our daily activities.<br />
                2. Provide the material needs of our respective families.<br />
                3. Love our wives and children unconditionally.<br />
                4. Protect our families and teach them about God.<br />
                5. Be a role model for hard work, integrity and respect.<br />
                6. Be a guide in making the children to become responsible citizens with the focus on eternity.<br />
                7. Love and mentor other children with no father in their lives, but with the desire for help and direction.<br />
                8. Pray and ask God to break the chain of destructive pattern, corruption and moral decadence in Nigeria.<br />
                We are Men Under Authority!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Mode of Operation</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                Monthly Meetings:<br />
                Every 3rd Sunday of the Month (except in January, June and December).<br />
                Time: 4pm. Venue: Not fixed.<br /><br />
                Activities:<br />
                1. Governors Summit - Every Fathers' Day.<br />
                2. Man-2-Man Seminars<br />
                3. Couples Nite<br />
                4. Governors Empowerment Programme<br /> 
                5. Eden Cooperative Society;<br /> 
                6. Governors Outreach<br /> 
                7. Governors Fitness Hangout(GFH)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>How to join</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                You are welcome to join any of our monthly meetings.<br />  
                Contact:<br /> 
                Gov. Dayo Kehinde<br /> 
                Gov. Ben Ekeyi
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