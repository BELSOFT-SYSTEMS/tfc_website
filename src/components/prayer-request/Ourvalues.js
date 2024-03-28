import React from 'react';
import { Container } from 'react-bootstrap';



const Expectation = () => {

  

  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container fluid >
      <div style={{marginLeft:'30px',marginRight:'30px',paddingRight:'60px', paddingLeft:'60px'}}>
        <h1 style={{fontFamily:'Coolvetica', fontSize:'60px', textAlign:'left', fontWeight:'bolder'}}>What Is Restoration Prayer?</h1>
        <p style={{fontFamily:'Montserrat', fontSize:'15px',}}>The Restoration Prayer process leads you through a time of systematic confession and repentance, standing in the authority that you have because of Jesus Christ, breaking lies, and replacing them with truth.</p>
        </div>
        <div style={{marginLeft:'30px', marginRight:'30px',paddingRight:'60px', paddingLeft:'60px', marginTop:'30px'}}>
          <h2 style={{fontFamily:'Coolvetica', fontSize:'60px', textAlign:'left', fontWeight:'bolder'}}>Why Is Restoration Prayer Important?</h2>
          <p style={{fontFamily:'Montserrat', fontSize:'15px',}}>Without spiritual bondage, the Holy Spirit is then able to have greater influence in and through you. The fruit of that Spirit will be able to grow more abundantly, and you will learn to hear the voice of God more clearly.</p>
        </div>
        <h3 style={{fontFamily:'Montserrat', marginTop:'30px',fontSize:'15px', textAlign:'left', fontWeight:'bold',marginLeft:'30px', marginRight:'30px',paddingRight:'60px', paddingLeft:'60px',}}>Restoration Prayer revolves around:</h3>

        <div style={{marginLeft:'60px', paddingLeft:'60px'}}>
        

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', marginRight: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
        <img src="icons/bible-teachings.jpeg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          BIBLICAL TEACHING</h3>
          </div>
          </div>
          <div style={{ display: 'flex', alignItems:'center', marginLeft: '20px', marginTop:'50px', marginBottom:'50px' }}>
          <img src="icons/repentance.jpeg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
            <div>
            <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
            SYSTEMATIC REPENTANCE</h3>
            </div>
            </div>
            <div style={{ display: 'flex', alignItems:'center', marginRight: '20px', marginTop:'50px', marginBottom:'50px' }}>
            <img src="icons/prayer-hands.jpg" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h3 style={{fontFamily:'Sans-serif', fontSize:'25px', fontWeight:'500', lineHeight:'30px'}}>
          AUTHORITATIVE PRAYER</h3>
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