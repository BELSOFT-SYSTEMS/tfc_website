import React from 'react';
import { Tab,  Nav, Container, Row, Col, } from 'react-bootstrap';





const Together = () => {



  return (
    <div style={{paddingTop:'20px', paddingBottom:'40px'}}>
      <Container style={{justifyContent:'left', textAlign:'left', marginTop:'30px', marginBottom:'20px'}}>
        <h2 style={{fontSize:'75px', textAlign:'left', }}> Together We:</h2>
        </Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column" style={{paddingLeft:'20px'}}>
            <Nav.Item style={{ marginTop:'10px', rowGap:'10px',backgroundColor: '#000', color: '#d49c04'}}>
              <Nav.Link eventKey="first">
              <img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '20px' }}/>
              CELEBRATE BIG
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginTop:'10px', rowGap:'10px',backgroundColor: '#000', color: '#d49c04'}}>
              <Nav.Link eventKey="second">
              <img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '20px' }}/>
              CONNECT SMALL
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginTop:'10px', rowGap:'10px',backgroundColor: '#000', color: '#d49c04'}}>
              <Nav.Link eventKey="third">
              <img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '20px' }}/>
              WALK WITH JESUS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginTop:'10px', rowGap:'10px',backgroundColor: '#000', color: '#d49c04'}}>
              <Nav.Link eventKey="fourth">
              <img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '20px' }}/>
              SHARE THE WORK
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginTop:'10px', rowGap:'10px',backgroundColor: '#000', color: '#d49c04'}}>
              <Nav.Link eventKey="fifth">
              <img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '20px' }}/>
              ENGAGE IN MISSION
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">We believe in celebrating the glory of God together in big gatherings.<br/> From the earliest days in the Christian movement, believers met regularly in the temple courts with numbers of 3000 to 5000. Like the early church, we emphasize the necessity of corporate preaching, teaching, worship, prayer, and communion to encounter God. These things help spur us on as we live as God has called us to live.<br/>
            Whether we are going through a discouraging season or great season in life, we see biblically that we are called to celebrate the goodness of our God in a big way, regardless of our circumstances.Whether <br/>we are clinging to his promises in a tough time, or thanking him for answered prayers, we want to Celebrate Big together at Sanctus.</Tab.Pane>
            <Tab.Pane eventKey="second">In the second part of Acts 2:46 we see that while they were gathering in big groups of thousands in the temple courts, they were also meeting in smaller settings regularly! <br/>They were doing life together; eating, sharing, helping, and having close spiritual friendships with one another. The same is true for us at Sanctus. We believe that to Connect Small is just as important Celebrating Big. The primary place where we connect small is a Connect Group - a place where someone notices your spiritual growth and cares when a tough thing happens to you.
            <br/>When we Connect Small, it's all about authentic relationship: unpacking your walk with Jesus, how the sermons or worship are affecting you, and trusting others will share the same with you.</Tab.Pane>
            <Tab.Pane eventKey="third">We can see the early church devoting themselves to the apostles’ teaching. While Sanctus can provide Connect Groups, teaching, worship and other experiences, we cannot coerce you to personally spend time with Jesus.<br/> We all have to take personal responsibility for our own walk with Christ. We believe that spiritual disciplines like reading scripture, prayer, meditation, solitude, and many others are guaranteed places of encounter with Jesus.<br/>
            When you regularly walk with Jesus, it may not always be an emotional or felt experience, but through prioritizing time in your day or week to intentionally walk with Jesus we know that Jesus through the Holy Spirit will show up and change your life in small ways and large ways. We seek to experience God for ourselves, so we can give to others out of an overflow of our own growing relationship with Jesus.</Tab.Pane>
            <Tab.Pane eventKey="fourth">It says in Acts 2 that “everyone was filled with awe at the many wonders and signs performed by the apostles”. We believe that God has uniquely given every Christian spiritual gifts that help advance the Kingdom of God. Spiritual gifts are a guaranteed place of power to serve from.
            <br/>Since these areas are Holy Spirit-given, you will likely get big amounts of joy from using them. When we’re working within our spiritual gifts, people will be in awe of how well we work together in unity. This also avoids any temptation of comparison: I don’t have to be you, you don’t have to be me, we get to joyfully serve in what God has assigned us to do.
            <br/>Sharing the work is not independence, nor dependence, but interdependence - understanding how the Spirit has uniquely given us gifts to share the work together.</Tab.Pane>
            <Tab.Pane eventKey="fifth">There is immense generosity noted in Acts 2:42-47. All of us have been placed sovereignly by God in the circumstances, workplaces, and social circles we find ourselves in. The Good News of Jesus changes our motivations and gives us a new perspective on what truly matters in this life.
            <br/>We are called to take the Good News to the world, letting it influence our families, workplaces, and neighborhoods. We are invited to give our time and our money, that we would invest in things that last. This includes building into Kingdom initiatives at our own local church and beyond. At Sanctus, we have established local and global partnerships focusing on long term life change in the communities that are affected by these partnerships.
            <br/>In Acts 2:47, the early church enjoyed the favour of all the people, not just Christians. Engaging in mission, through Jesus, will give you a love of people as you see them the way God sees them.</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      
    </div>
  )
}

export default Together
