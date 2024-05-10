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

          At the light bearers Academy children ranges between 2 to 12 years of age at 13 years they are sent to the teenage church which is called the ambassadors.
          </p>

          <div style={{ paddingBottom: '30px' }}>
            <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
              <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header ><h1 style={{ fontSize: '24px', fontWeight: '700' }}>who we are</h1></Accordion.Header>
                <Accordion.Body>
                The light bearers Academy is the children’s arm of the father’s church its aim is to educate and equip our children 
                with the word of God in line with the vision of the main church which is to reveal the fatherhood of almighty God 
                through sound biblical teaching and correspondent moral conduct.  In line with this our children are filled with the 
                knowledge of God’s will in all wisdom and spiritual understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>what we do</h1></Accordion.Header>
                <Accordion.Body>
                At the light bearers Academy children ranges between 2 to 12 years of age at 13 years they are sent to the teenage church which is called the ambassadors.
                Our classes are sectioned into ages 2-3, 4 -5, 6, 7, 8- 9, 10, and 11- 12 years of age so we can teach same topic at the same time but at different levels with loads of visuals and physical activities to depict or portray each lesson. After each topic example obedience we have quiz, drama, movies ETC.
                The games, songs, crafts and other activities that we use helps to reinforce an atmosphere that makes the children look forward to church because it’s fun packed.
                we also have classes for special needs children and caregivers who can flow in the main church due to language barrier(we use the Nigerian language)
                We are also particular about the safety of our children therefore tags are given to parents or guardians when they drop off and it's only such tags that admits them into the children's church.
                We have Rest rooms that are exclusively for children.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Our Service Times</h1></Accordion.Header>
                <Accordion.Body>
                Sunday school starts at 8:00am and ends at 8:45am that takes place in the main church. Registration starts at 8:45am and our service starts at 9:00 AM.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Wanna Join Us?</h1></Accordion.Header>
                <Accordion.Body>
                Pastor Ibironke Oka is the Head of the light bearers Academy she’s assisted by Deaconess Victoria Onuoha Deacon Ben Ekeyi and Ms Tare Atiyota. 
                Ms Aniefon Sulaiman is in charge of the early years. Enquiry about the Academy can be directed to either of them.
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