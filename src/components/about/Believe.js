import React, { useState,useEffect } from 'react';
import { Tab, Tabs, Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap';

const Believe = () => {
  const [activeKey, setActiveKey] = useState('statement');
  const [fontSize, setFontSize] = useState(105);

  const handleSelect = (key) => {
    setActiveKey(key);
  };

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
      <div style={{ color: '#000', backgroundColor: '#fff', paddingTop: '40px', paddingBottom: '40px' }}>
        <Container fluid style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: fontSize, color: '#000', fontWeight: 'bolder' }}> WHAT WE BELIEVE</h2>
        </Container>
      </div>

      <ButtonGroup size="lg" style={{ justifyContent: 'center', display: 'flex', textAlign: 'center', marginBottom: '20px', gap: '15px', padding: '10px',flexWrap:'wrap' }}>
        <Button variant="outline-success" onClick={() => handleSelect('statement')} active={activeKey === 'statement'}>STATEMENT OF FAITH</Button>
        <Button variant="outline-success" onClick={() => handleSelect('apostle')} active={activeKey === 'apostle'}>APOSTLE'S CREED</Button>
        <Button variant="outline-success" onClick={() => handleSelect('nicene')} active={activeKey === 'nicene'}>NICENE'S CREED</Button>
      </ButtonGroup>

      <Tabs id="believe-tabs" activeKey={activeKey} onSelect={handleSelect} className="eael-tabs-nav">
        <Tab eventKey="statement">
          <Container fluid>
            <Row>
              <Col>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      1. We believe the Bible to be the Inspired Word of God and that is our standard for faith and conduct
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      2. We believe that there is one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      3. We believe that human nature is sinful and deserving of the punishment of God.​
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      4. We believe that Jesus Christ was conceived by the Holy Spirit and born of the virgin Mary, and is true God and true man.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      5. We believe that the death of Jesus Christ was for our sins and that all who trust in Him and His death for us are forgiven their sins and granted eternal life.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      6. We believe in the resurrection of Jesus Christ,  His ascension into Heaven, and His ministry there as our High Priest.​
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      7. We believe in the work of the Holy Spirit in convicting people of sin, the regeneration of those turning to Christ from sin, and His work of sanctification in the believer.​
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      8. We believe in the personal return of Jesus Christ.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      9. We believe in the bodily resurrection of the just and the unjust, the everlasting joy of the saved and the everlasting punishment of the unsaved.​
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ fontSize: '20px', textAlign: 'left' }}>
                    <p>
                      10. We believe in the baptism, by immersion, of believers.​
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" style={{ textAlign: 'left' }}>
                <Button
                  variant="warning"
                  style={{ backgroundColor: '#d49c04', color: '#000', marginBottom: '20px' }}
                  href="#"
                >
                  READ OUR FULL STATEMENT OF FAITH
                </Button>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="apostle">
          <Container fluid>
            <Row>
              <Col>
                <Row>
                  <Col style={{ fontSize: '20px', lineHeight: '2', textAlign: 'center' }}>
                    <p>I believe in God, the Father almighty, creator of heaven and earth.<br /> I believe in Jesus Christ, God’s only Son, our Lord, who was conceived by the Holy Spirit, <br /> born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended to the dead.<br />
                      On the third day he rose again; he ascended into heaven,<br /> he is seated at the right hand of the Father, and he will come to judge the living and the dead.<br />
                      I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body,<br /> and the life everlasting.
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
                <Row>
                  <Col style={{ fontSize: '20px', lineHeight: '2', textAlign: 'center' }}>
                    <p>We believe in one God, the Father Almighty, the maker of heaven and earth, of things visible and invisible.<br />
                      And in one Lord Jesus Christ, the Son of God, the begotten of God the Father, the Only-begotten, that is of the essence of the Father.<br />
                      God of God, Light of Light, true God of true God, begotten and not made; of the very same nature of the Father, by Whom all things came into being, in heaven and on earth, visible and invisible.<br />
                      Who for us humanity and for our salvation came down from heaven, was incarnate, was made human, was born perfectly of the holy virgin Mary by the Holy Spirit.<br />
                      By whom He took body, soul, and mind, and everything that is in man, truly and not in semblance.<br />
                      He suffered, was crucified, was buried, rose again on the third day, ascended into heaven with the same body, [and] sat at the right hand of the Father.<br />
                      He is to come with the same body and with the glory of the Father, to judge the living and the dead; of His kingdom there is no end.<br />
                      We believe in the Holy Spirit, in the uncreated and the perfect; Who spoke through the Law, prophets, and Gospels; Who came down upon the Jordan, preached through the apostles, and lived in the saints.<br />
                      We believe also in only One, Universal, Apostolic, and Catholic Church; in one baptism in repentance, for the remission, and forgiveness of sins; and in the resurrection of the dead, in the everlasting judgement of souls and bodies, and the Kingdom of Heaven and in the everlasting life.
                    </p>
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
