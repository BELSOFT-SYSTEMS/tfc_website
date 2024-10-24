import React from 'react';
import { Container } from 'react-bootstrap';
import TabButton from '../Button/TabButton';


const Mission = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '100px' }}>
          <div style={{ flex: '1 1 50%', maxWidth: '570px', padding: '40px 10px', textAlign: 'start' }}>
            <h2 style={{ fontSize: '70px' }}>Mission.</h2>
            <p style={{ fontFamily: 'Montserrat, Sans-serif', fontSize: '20px', fontWeight: '400', lineHeight: '20px', marginTop: '25px' }}>To glorify God by reaching and enabling<br /> people of all ages and nations to become<br /> fully devoted followers of Jesus Christ.</p>
          </div>
          <div style={{ flex: '1 1 50%', maxWidth: '570px', padding: '40px 10px', textAlign: 'start' }}>
            <h2 style={{ fontSize: '70px' }}>Vision.</h2>
            <p style={{ fontFamily: 'Montserrat, Sans-serif', fontSize: '20px', fontWeight: '400', lineHeight: '20px', marginTop: '25px' }}>To become a missionary church of 10,000<br /> meeting the physical, emotional, and <br />spiritual needs of people in Jesus’ name.</p>
          </div>
        </Container>
        <Container fluid style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          <div style={{ flex: '1 1 100%', maxWidth: '1140px', padding: '40px 10px', textAlign: 'start' }}>
            <h2 style={{ fontSize: '70px' }}>Values.</h2>
            <div style={{ display: 'flex', marginTop: '35px', gap: '20px', width: '100%', flexWrap: 'wrap', alignContent: 'flex-start'}}>
              <div style={{ width: '49%' }}>
                <TabButton label="GOD'S WORD">
                  <p>2 Tim 3:16 <br /> We believe in an honest engagement with the Biblical text, understanding and applying it in order to find our place in God’s unfolding story, becoming more like Jesus in character and conduct.</p>
                </TabButton>
                <TabButton label="WELCOMING EVERYONE">
                  <p>Eph 4:12 <br /> We believe that in the church we are constantly addressing two audiences: those who have already crossed the line of faith and those who have not; we recognise the need to minister to both.</p>
                </TabButton>
                <TabButton label="SHARED RESPONSIBILITY">
                  <p>Matt 28:19, Acts 4:12 <br /> We believe that all followers of Jesus are called to be responsible witnesses in our speech and actions, together making a difference in the church and community.</p>
                </TabButton>
                <TabButton label="AUTHENTIC RELATIONSHIPS">
                  <p>Eph 4:29-32 <br /> We believe that every Christ-follower is called to love, accept, and forgive one another; seeking to maintain unity and purity in our relationships.</p>
                </TabButton>
                <TabButton label="HOLISTIC MINISTRY">
                  <p>Matt 5:14-16, James 1:27 <br /> We believe in ministry that addresses the needs of the whole person – spiritual, emotional, and physical.</p>
                </TabButton>
              </div>
              <div style={{ width: '49%' }}>
                <TabButton label="CHRISTIAN COMMUNITY">
                  <p>Acts 2:42-47 <br /> We believe that every Christ-follower is called to participate in Christian community through large and small expressions where worship, teaching, and fellowship are promoted.</p>
                </TabButton>
                <TabButton label="SHARED MINISTRY">
                  <p>1 Cor 12:7-14 <br /> We believe that every Christ-follower is called to impact those around them through loving, joyful, gift-based service.</p>
                </TabButton>
                <TabButton label="CHRIST-LIKE LEADERSHIP">
                  <p>John 1:14, Num 11:16-17 <br /> We believe in building servant leadership and maintaining relationships between leadership and the congregation that are characterized by grace and truth. Together, we will listen for God’s direction for Sanctus and provide space where testing and affirmation takes place.</p>
                </TabButton>
                <TabButton label="GOD'S PROMPTING">
                  <p>1 Cor 14:40 <br /> We believe God will show up in our individual lives and when we meet together. We want to leave room for God to speak to us personally and corporately, striving to hear God clearly.</p>
                </TabButton>
                <TabButton label="LEVERAGING TECHNOLOGY">
                  <p>Acts 17:16-34 <br /> We believe in maximizing the use of technology as a means of communicating and connecting.</p>
                </TabButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mission;
