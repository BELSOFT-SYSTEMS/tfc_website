import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Details = () => {

  


  return (
    <>

      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{padding:'0 40px'}}>
          <div style={{justifyContent:'center'}}>
          <Col>
            <Row>
              <Col md={6}>
              <div style={{alignContent:'left',justifyContent:'left',textAlign:'left', alignItems:'left'}}>
              <div style={{margin:'15px 0', }}>
                <h2 style={{fontSize:'22px',color:'#000',fontWeight:500, fontFamily:'jost',textTransform:'uppercase'}}> WHAT IS IT?</h2>
                </div>
                <div style={{fontSize:'18px', fontWeight:400, fontFamily:'montserrat',color:'#000',}}>
                <p>
                The Marriage Course is a series of seven sessions, designed to help couples invest in their relationship  and build a strong marriage. Nicky and Sila Lee,   authors of The Marriage Book, developed The   Marriage Course for couples looking for practical   support to strengthen their relationship. The course   is designed to help couples build strong   foundations, learn to communicate more effectively  and resolve differences well.
                </p>
                </div>
                </div>
              </Col>
              <Col md={6}>
                <div style={{alignContent:'center', alignItems:'center', margin:'15px 0', paddingRight:'40px'}}>
                <iframe title='the marriage course' width='440' height='260' src='https://www.youtube.com/embed/0T6ooc5oHps?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fsanctuschurch.com&widgetid=1'></iframe>

                </div>
              </Col>
            </Row>
            <Row>
            <div style={{alignContent:'left',justifyContent:'left',textAlign:'left', alignItems:'left',  paddingBottom:'40px'}}>
              <div style={{margin:'15px 0', }}>
                <h2 style={{fontSize:'22px',color:'#000',fontWeight:500, fontFamily:'jost',textTransform:'uppercase'}}> WHO SHOULD ATTEND?</h2>
                </div>
                <div style={{fontSize:'18px', fontWeight:400, fontFamily:'montserrat',color:'#000',}}>
                <p>
                The Marriage Course is for couples who are seeking to strengthen their relationship. Some couples do the course to intentionally invest in their relationship, others are looking to address more specific challenges. Either way, the course offers essential tools and  practical ideas to help you build a relationship that lasts a lifetime.
                 </p>
                 <p>
                 The Marriage Course is based on Christian principles, but is designed for all couples with or without a church background.
                 </p>
                </div>
                </div>
            </Row>
            <Row>
            <div style={{alignContent:'left',justifyContent:'left',textAlign:'left', alignItems:'left',  paddingBottom:'40px'}}>
              <div style={{margin:'15px 0', }}>
                <h2 style={{fontSize:'22px',color:'#000',fontWeight:500, fontFamily:'jost',textTransform:'uppercase'}}> WHAT CAN I EXPECT?</h2>
                </div>
                <div style={{fontSize:'18px', fontWeight:400, fontFamily:'montserrat',color:'#000',}}>
                <p> <strong style={{fontWeight:'bolder'}}>Time to Connect</strong><br/>
                Each session begins with couples having a time to connect with refreshments and snacks. This  gives guests a chance to unwind and connect before the session’s episode. It also helps to create  the atmosphere of a date.
                </p>
                <p> <strong style={{fontWeight:'bolder'}}>Watch episode</strong><br/>
                The episodes are around 45 minutes in length, with breaks for conversations. Each episode  explores a different topic through real experiences, expert insights, and relevant teaching.
                </p>
                <p> <strong style={{fontWeight:'bolder'}}>Talk privately</strong><br/>
                Providing space for couples to have private, intimate conversations is a must for every course. It  helps enable couples to engage openly and honestly throughout the session.
                </p>
                </div>
                </div>
            </Row>
          </Col>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Details;