import React from 'react';
import { Container } from 'react-bootstrap';



const Expectation = () => {

  

  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid >
        <h1 style={{fontFamily:'Montserrat,Sans-serif', fontSize:'80px', textAlign:'center', fontWeight:'bolder'}}>Our Values</h1>
        <div style={{marginLeft:'60px', paddingLeft:'60px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', marginRight: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
        <img src="icons/bible.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          CREATIVE BIBLICAL TEACHING OF GOD'S WORD.</h3>
          </div>
          </div>
          <div style={{ display: 'flex', alignItems:'center', marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
          <img src="icons/people.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
            <div>
            <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
            RELATIONSHIPS, FRIENDSHIPS, AND MENTORING.</h3>
            </div>
            </div>
            <div style={{ display: 'flex', alignItems:'center', marginRight: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <img src="icons/celebration.jpeg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          CELEBRATING JESUS AND HAVING FUN TOGETHER</h3>
          </div>
          </div>
            </div>
            <div style={{ display: 'flex', alignItems:'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', marginRight: '20px', alignItems:'center', justifyContent: 'center', marginTop:'50px', marginBottom:'50px' }}>
            <img src="icons/welcome.jpeg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          WELCOMING EVERYONE, SAFETY, AND BELONGING.</h3>
          </div>
          </div>
          <div style={{ display: 'flex', marginRight: '20px',alignItems:'center', justifyContent: 'center', marginTop:'50px', marginBottom:'50px' }}>
          <img src="icons/tech.jpeg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          LEVERAGING TECHNOLOGY FOR EFFECTIVE MINISTRY.</h3>
          </div>
          </div>

            </div>
            </div>
            
</Container>
      </section>
    </>
  );
};

export default Expectation;