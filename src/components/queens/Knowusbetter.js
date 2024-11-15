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

          The Queens Fellowship comprises of all the married women in the Church.
          </p>

          <div style={{ paddingBottom: '30px' }}>
            <Accordion defaultActiveKey="0" alwaysOpen style={{ paddingBottom: '20px' }}>
              <Accordion.Item eventKey="0" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header ><h1 style={{ fontSize: '24px', fontWeight: '700' }}>who we are</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The Queens Fellowship is a fellowship of mothers and married women in the Father's Church to build each other up 
                as sisters in Christ and also support each other to fulfill our purposes and callings. 
                

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>what we do</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                The fellowship is all about equipping the total woman who loves God, has a successful home, business/career and 
                be an impact in her environment. We do this both physical and virtually. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>mode of operation</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                Once a month meeting, Every 2 ND Sunday of the month by 4pm. Activities includes Prayer, Bible Study, Seminars, trainings, games, outreaches etc. Some of our activities include:<br />
                1. Virtue Conference - This is the yearly conference of the Queens which usually holds in the month of March. Cooking competition- Usually holds once a year.<br />
                2. Virtual Kitchen- This is where foodstuffs are brought by the Queens and they are distributed among all.<br />
                3. Parenting/ Financial and Marriage Seminars- this holds several times a year and is part of the program of the Queens monthly meetings. 

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ paddingBottom: '5px', marginBottom: '20px' }}>
                <Accordion.Header><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Wanna Join Us?</h1></Accordion.Header>
                <Accordion.Body style={{ fontSize: '16px', fontWeight: '300'}}>
                Who to contact in case of questions regarding the department:<br />
                Elder Taiwo Kehinde<br />Dr Sonachi Ezeiru
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