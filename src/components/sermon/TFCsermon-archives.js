import React from 'react';
import { Container, Row, Col, Button, Tabs, Tab, ListGroup, } from 'react-bootstrap';
import SermonComponent from './SermonComponent';


const TFCsermonarchives = () => {
  return (
    <Container>
    <Container style={{justifyContent:'center', textAlign:'left', marginBottom:'30px', marginTop:'20px'}}>
      <Row>
          <Col>
            <h2 style={{fontSize:'95px', fontFamily:'montserrat', fontWeight:'bolder'  }}>Sermon Archives</h2>
            
          </Col>
        </Row>
    </Container>
    
    <Tabs
      defaultActiveKey="recent"
      justify
    >
    <Tab eventKey="recent" title="Recent">
    <div style={{justifyContent:'space-between', display:'flex',paddingTop:'30px'}}>
    <SermonComponent
      title="Firm Faith"
      imageUrl="Firmsermon.png"
    />
    <SermonComponent
      title="The book of Acts"
      imageUrl="actsermon.jpg"
    />
    <SermonComponent
      title="Mary: Gods indwelling"
      imageUrl="marysermon.jpg"
    />
    </div>
      </Tab>
      <Tab eventKey="topic" title="Topic">
      <div style={{paddingTop:'30px'}}>
      <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action variant="light" href="#link1" style={{paddingTop:'10px'}} >
       Alpha
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link2" style={{paddingTop:'10px'}} >
        Apologistic
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link3" style={{paddingTop:'10px'}} >
        Baptism
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link4" style={{paddingTop:'10px'}} >
        Community
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link5" style={{paddingTop:'10px'}}  >
        Deconstruction
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link6" style={{paddingTop:'10px'}} >
       Deliverance
      </ListGroup.Item>
    </ListGroup>
    </div>
      </Tab>
      <Tab eventKey="scripture" title="Scripture">
      <div style={{paddingTop:'30px'}}>
      <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action variant="light" href="#link1" style={{paddingTop:'10px'}} >
       Ezra
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link2" style={{paddingTop:'10px'}} >
        Mathew
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link3" style={{paddingTop:'10px'}} >
        Luke
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link4" style={{paddingTop:'10px'}} >
        John
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link5" style={{paddingTop:'10px'}}  >
        Psalm
      </ListGroup.Item>
      <ListGroup.Item action variant="light" href="#link6" style={{paddingTop:'10px'}} >
       Proverbs
      </ListGroup.Item>
    </ListGroup>
    </div>
      </Tab>
    
    </Tabs>
 
  <Container style={{justifyContent:'center', textAlign:'center',marginTop:'20px', marginBottom:'20px', paddingBottom:'20px'}}>
  <Button variant="warning" style={{backgroundColor: '#d49c04', color: '#000',}}>View all Sermons</Button>
  </Container>
  </Container>
  )
}

export default TFCsermonarchives
