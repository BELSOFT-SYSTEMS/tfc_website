import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarDays, faMapPin } from '@fortawesome/free-solid-svg-icons';

const TFCeden = () => {
  const [fontSize, setFontSize] = useState({ title: 130, span: 25 }); // Initial font size

  const textStyle = {
    // position: 'relative', 
    zIndex: 2, 
    textAlign: 'left',
    marginLeft: '20px',
  };

  useEffect(() => {
    const handleResize = () => {
      // Update font size based on window width
      const newTitleFontSize = window.innerWidth > 768 ? 130 : 100;
      const newSpanFontSize = window.innerWidth > 768 ? 25 : 20;
      setFontSize({ title: newTitleFontSize, span: newSpanFontSize });
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial font size adjustment
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{}}>
          {/* Text */}
          <div style={textStyle}>
            <h2 style={{ fontSize: `${fontSize.title}px`, fontWeight: 'bolder', fontFamily: 'Sans-serif', paddingTop: '20px', paddingLeft: '20px', color: '#000' }}>
              TFC  Eden.
            </h2>
            <div style={{ flex: 1, marginRight: '16px', marginTop:'30px', marginBottom:'50px', paddingLeft:'30px' }}>
              <p style={{ fontFamily:'Montserrat', fontSize: `${fontSize.span}px`, fontWeight:'100', lineHeight:'20px' }}>
                <div style={{ paddingTop:'25px' }}>
                  <FontAwesomeIcon icon={faMapPin}  style={{color:'#d49c04'}}/>
                  <span style={{paddingLeft:'20px'}}>599 Bayly Street East, Ajax, Ontario </span>
                </div>
                <div style={{ paddingTop:'25px' }}>
                  <FontAwesomeIcon icon={faCalendarDays} style={{color:'#d49c04'}} />
                  <span style={{paddingLeft:'20px'}}>Monday - Thursday : 10am - 3pm </span>
                </div>
                <div style={{ paddingTop:'25px' }}>
                  <FontAwesomeIcon icon={faPhone} style={{color:'#d49c04'}}/>
                  <span style={{paddingLeft:'20px'}}>(905) 686-4450</span>
                </div>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TFCeden;
