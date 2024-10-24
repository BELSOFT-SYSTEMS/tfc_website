import React, { useState,useEffect } from 'react';
import { Tab, Tabs, Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap';
import Timeline from './Timeline';

const Believe = () => {
  const [activeKey, setActiveKey] = useState('statement');
  const [fontSize, setFontSize] = useState(85);

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const buttonData = [
    { name: "STATEMENT OF FAITH", value: 'statement' },
    { name: "TAB 2", value: 'apostle' },
    { name: "TAB 3", value: 'nicene' },
    { name: "OUR HISTORY", value: 'history' },
  ];

  const backgroundImageUrl = 'starry1.jpg';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat', 
    position: 'relative',
    zIndex: '1',
    width: '100%', 
    maxHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px',
    boxSizing:'border-box',
    marginBottom: '-30px',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'start',
    fontSize: '18px',
    backgroundColor: '#eaf86e48',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '20px',
    margin: '30px 10px',
    padding: '50px',
    lineHeight: '30px',
    flexWrap: 'wrap',
    height: '500px',
    width: '49%'
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    backgroundColor: '#eaf86e48',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '20px',
    margin: '30px 120px',
    padding: '50px 80px',
    lineHeight: '30px',
  };

  const items = Array.from({ length: 12 }, (_, i) => ({
    image: 'https://via.placeholder.com/200x150',
    title: `Event ${i + 1}`,
    description: `Description for event ${i + 1}`,
  }));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
       
        setFontSize(40);
      } 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial adjustments


    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      <div style={{ color: '#000', backgroundColor: '#fff', paddingTop: '40px' }}>
        <Container fluid style={containerStyle}>
          <h2 style={{ fontSize: fontSize, color: '#fff', fontWeight: 'bolder' }}> What We Believe</h2>
        </Container>
      </div>

      <ButtonGroup size="lg" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '0 60px', gap: '15px', paddingBottom: '60px', height: '110px', position: 'relative', zIndex: '3' }}>
      {buttonData.map((button) => (
          <Button
            key={button.value} 
            onClick={() => handleSelect(button.value)}
            active={activeKey === button.value}
            style={{ fontSize: '16px', fontWeight: '600', backgroundColor: activeKey === button.value ? '#d49c04' : '#051f04', borderColor: activeKey === button.value ? '#d49c04' : '#051f04' }}
          >
            {button.name}
          </Button>
        ))}
      </ButtonGroup>

      <Tabs id="believe-tabs" activeKey={activeKey} onSelect={handleSelect} className="">
        <Tab eventKey="statement">
          <Container fluid>
            <Row>
              <Col>
                <ListGroup variant="flush" style={{ display: 'flex', flexDirection: 'row', lineHeight: '0' }}>
                  <ListGroup.Item style={listItemStyle}>
                    <p>
                      1. We believe the Bible to be the Inspired Word of God and that it is our standard for faith and conduct.
                    </p>
                    <p>
                      2. We believe that there is one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                    </p>
                    <p>
                      3. We believe that human nature is sinful and deserving of the punishment of God.
                    </p>
                    <p>
                      4. We believe that Jesus Christ was conceived by the Holy Spirit and born of the virgin Mary, and is true God and true man.
                    </p>
                    <p>
                      5. We believe that the death of Jesus Christ was for our sins and that all who trust in Him and His death for us are forgiven their sins and granted eternal life.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={listItemStyle}>
                    <p>
                      6. We believe in the resurrection of Jesus Christ, His ascension into Heaven, and His ministry there as our High Priest.
                    </p>
                    <p>
                      7. We believe in the work of the Holy Spirit in convicting people of sin, the regeneration of those turning to Christ from sin, and His work of sanctification in the believer.
                    </p>
                    <p>
                      8. We believe in the personal return of Jesus Christ.
                    </p>
                    <p>
                      9. We believe in the bodily resurrection of the just and the unjust, the everlasting joy of the saved and the everlasting punishment of the unsaved.
                    </p>
                    <p>
                      10. We believe in the baptism, by immersion, of believers.
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 50px' }}>
                {/* <Button
                  variant="warning"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d49c04', color: '#fff', height: '40px', textTransform: 'uppercase', fontSize: '16px', fontWeight: '600', border: 'none', width: 'fit-content' }}
                  href="#"
                >
                  READ OUR FULL STATEMENT OF FAITH
                </Button> */}
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="apostle">
          <Container fluid>
            <Row>
              <Col>
                <Row style={{ marginBottom: '50px' }}>
                  <Col style={itemStyle}>
                    <p>I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, God’s only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, 
                      suffered under Pontius Pilate, was crucified, died, and was buried; he descended to the dead.
                      On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead.
                      I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting.
                      <br />Amen.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="nicene">
          <Container fluid>
            <Row>
              <Col>
                <Row style={{ marginBottom: '50px' }}>
                  <Col style={itemStyle}>
                    <p>We believe in one God, the Father Almighty, the maker of heaven and earth, of things visible and invisible.
                      And in one Lord Jesus Christ, the Son of God, the begotten of God the Father, the Only-begotten, that is of the essence of the Father.
                      God of God, Light of Light, true God of true God, begotten and not made; of the very same nature of the Father, by Whom all things came into being, in heaven and on earth, visible and invisible.
                      Who for us humanity and for our salvation came down from heaven, was incarnate, was made human, was born perfectly of the holy virgin Mary by the Holy Spirit.
                      By whom He took body, soul, and mind, and everything that is in man, truly and not in semblance.
                      He suffered, was crucified, was buried, rose again on the third day, ascended into heaven with the same body, [and] sat at the right hand of the Father.
                      He is to come with the same body and with the glory of the Father, to judge the living and the dead; of His kingdom there is no end.
                      We believe in the Holy Spirit, in the uncreated and the perfect; Who spoke through the Law, prophets, and Gospels; Who came down upon the Jordan, preached through the apostles, and lived in the saints.
                      We believe also in only One, Universal, Apostolic, and Catholic Church; in one baptism in repentance, for the remission, and forgiveness of sins; 
                      and in the resurrection of the dead, in the everlasting judgement of souls and bodies, and the Kingdom of Heaven and in the everlasting life.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="history">
          <Container fluid>
            <Row>
              <Col>
                <Row style={{ marginBottom: '50px' }}>
                  <Col>
                    <Timeline items={items} />;
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Believe;
