import React from 'react';
import { Container } from 'react-bootstrap';



const Expectation = () => {

  

  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
      <Container  fluid style={{ paddingLeft: '60px', paddingRight: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <h1 style={{ fontFamily: 'Montserrat,Sans-serif', fontSize: '60px', textAlign: 'center', fontWeight: 'bolder', marginBottom: '30px' }}>What To Expect At All Locations</h1>
        <h3 style={{ fontFamily: 'Montserrat,Sans-serif', fontSize: '25px', textAlign: 'center', marginBottom: '50px' }}>Join us on Sundays at any of our five locations for teaching, worship, and community</h3>
        <div style={{marginLeft:'60px', paddingLeft:'40px', paddingRight:'70px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
        <div style={{ display: 'flex', marginRight: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
        <img src="icons/smile.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
          <h2 style={{fontSize:'40px'}}>GUEST SERVICES</h2>
          <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>First-time visitor? Have a question? Located at the <br/> front door of all our locations, our guest services <br/> team would love to connect with you.</p>
          </div>
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
          <img src="icons/dress-code.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
            <div>
            <h2 style={{fontSize:'40px'}}>DRESS CODE</h2>
            <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>We take a "come as you are" approach. We have<br/> people in formal attire and others that are<br/> completely casual.</p>
            </div>
            </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
        <div style={{ display: 'flex', marginRight: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
        <img src="icons/clock.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
        <div>
          <h2 style={{fontSize:'40px'}}>SERVICE LENGTH</h2>
          <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>Services typically last 75 minutes</p>
          </div>
          </div>
          <div style={{ display: 'flex', marginLeft: '100px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
          <img src="icons/music.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
            <h2 style={{fontSize:'40px'}}>MUSIC</h2>
            <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>We have rotating worship teams who help our<br/> congregation focus on Jesus through dynamic,<br/> modern worship music.</p>
            </div>
            </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
        <div style={{ display: 'flex', marginRight: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
        <img src="icons/teaching.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
        <div>
          <h2 style={{fontSize:'40px'}}>TEACHING</h2>
          <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>Pastor Jon Thompson is our main speaker and<br/> holds a Masters of Theological Studies and a<br/> Doctorate of Missiology. He speaks to seekers, <br/>skeptics, and believers with wit and boldness.</p>
          </div>
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', marginTop:'50px', marginBottom:'50px',alignItems:'center', justifyContent: 'center' }}>
          <img src="icons/prayer.webp" alt="Icon" style={{ width: '98px', height: '98px', marginRight: '20px' }} />
          <div>
            <h2 style={{fontSize:'40px'}}>PRAYER</h2>
            <p style={{fontFamily:'Sans-serif', fontSize:'20px', fontWeight:'40', lineHeight:'20px'}}>We have trusted teams to help you process what<br/> the Holy Spirit stirs in your heart after the service.</p>
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