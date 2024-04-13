import React from 'react';
import { Container } from 'react-bootstrap';

const Mission = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 50%', maxWidth: '500px', padding: '50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '70px' }}>Mission.</h2>
            <p style={{ fontFamily: 'Montserrat,Sans-serif', fontSize: '20px', fontWeight: '400', lineHeight: '20px' }}>To glorify God by reaching and enabling<br /> people of all ages and nations to become<br /> fully devoted followers of Jesus Christ.</p>
          </div>
          <div style={{ flex: '1 1 50%', maxWidth: '500px', padding: '50px', textAlign: 'center', marginTop: '0px' }}>
            <h2 style={{ fontSize: '70px' }}>Vision.</h2>
            <p style={{ fontFamily: 'Montserrat,Sans-serif', fontSize: '20px', fontWeight: '400', lineHeight: '20px' }}>To become a missionary church of 10,000<br /> meeting the physical, emotional, and <br />spiritual needs of people in Jesus’ name.</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mission;
