import React, { useState, useEffect } from "react";
import {
  Tab,
  Tabs,
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  ListGroup,
} from "react-bootstrap";
// import Timeline from "./Timeline";

const Believe = () => {
  const [activeKey, setActiveKey] = useState("statement");
  const [fontSize, setFontSize] = useState(70);

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const buttonData = [
    { name: "STATEMENT OF FAITH", value: "statement" },
    { name: "WHO WE ARE", value: "apostle" },
    { name: "THERE IS ROOM FOR EVERYONE", value: "nicene" },
    // { name: "OUR HISTORY", value: "history" },
  ];

  const backgroundImageUrl = "starry1.jpg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: "1",
    width: "100%",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 0",
    boxSizing: "border-box",
    marginBottom: "-30px",
  };

  const listItemStyle = {
    display: "flex",
    justifyContent: "start",
    fontSize: "16px",
    backgroundColor: "#eaf86e48",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "20px",
    margin: "30px 0",
    padding: "30px",
    lineHeight: "30px",
    flexWrap: "wrap",
    // height: "400px",
    width: "50%",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: "16px",
    backgroundColor: "#eaf86e48",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "20px",
    margin: "30px 0",
    padding: "30px",
    lineHeight: "30px",
  };

  // const items = Array.from({ length: 12 }, (_, i) => ({
  //   image: "https://via.placeholder.com/200x150",
  //   title: `Event ${i + 1}`,
  //   description: `Description for event ${i + 1}`,
  // }));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setFontSize(40);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          color: "#000",
          backgroundColor: "#fff",
          paddingTop: "40px",
          width: "100%",
        }}
      >
        <Container fluid style={containerStyle}>
          <h2
            style={{ fontSize: fontSize, color: "#fff", fontWeight: "bolder" }}
          >
            {" "}
            What We Believe
          </h2>
        </Container>
      </div>

      <ButtonGroup size="lg" className="believe-btn-group">
        {buttonData.map((button) => (
          <Button
            key={button.value}
            onClick={() => handleSelect(button.value)}
            active={activeKey === button.value}
            style={{
              fontSize: "14px",
              fontWeight: "600",
              backgroundColor:
                activeKey === button.value ? "#d49c04" : "#051f04",
              borderColor: activeKey === button.value ? "#d49c04" : "#051f04",
            }}
          >
            {button.name}
          </Button>
        ))}
      </ButtonGroup>

      <Tabs
        id="believe-tabs"
        activeKey={activeKey}
        onSelect={handleSelect}
        className=""
      >
        <Tab eventKey="statement">
          <Container fluid>
            <Row style={{ justifyContent: "center" }}>
              <Col style={{ maxWidth: "90%" }}>
                <ListGroup variant="flush" className="statement-col">
                  <ListGroup.Item
                    style={listItemStyle}
                    className="believe-list"
                  >
                    <p>
                      1. Man is created in the image of God but separated from God by sin. Without Jesus, 
                      we cannot have a relationship with God. (Genesis 1:26, 1 Timothy 2:3)
                    </p>
                    <p>
                      2. God is love and He loves all people. It is His to reach out to those who are poor, oppressed, 
                      widowed, or orphaned and to heal the broken hearted (Psalms 8:5-6, 1 John 4:16).
                    </p>
                    <p>
                      3. There is one God existing eternally in three persons. God the Father, 
                      God the Son and God the Holy Spirit. (John 10:30, John 14:26, Phil;ippians 2:5-7).
                    </p>
                    <p>
                      4. We can have personal relationship with God through salvation. God's free gift to man. 
                      It is not a result of what we do, but it is only available through God's unearned favor. 
                      By admitting that we have sinned and believing in the death, burial and rewssurection of 
                      Christ and accepting Him as Lord, we can spend eternity with God. (Ephesians 2:8-9, Romans 3:24).
                    </p>
                    <p>
                      5. God gives all believers spiritual gifts. They are for the strengthening of God's people (the Church) 
                      and proof of God's existence and power to unbelievers. The gifts of the Spirit are active and relevant today.
                      (1 Corinthians 12:4-11, 1 Peter 4:10).
                    </p>
                    <p>
                      6. We believe in water baptism by immersion, as taught and demonstrated by Jesus as the way for believers 
                      to identify with the death, burial and resurrection of Jesus. (Mathew 28:19, Romans 6:4, Mathew 3:13-17).
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={listItemStyle}
                    className="believe-list"
                  >
                    <p>
                      7. The baptism of the Holy Spirit with the evidence of speaking in tongues. The Holy Spirit is a gift from God, 
                      He helps empower the believer to develop the character of Christ and live everyday in God's will. (Mathew 3:11, Acts 2:4, 1 Corinthians 14:2). 
                      Sanctification is an on-going process of allowing God's character to be developed in us. (Romans 6:19, Galatians 5:22-25).

                    </p>
                    <p>
                      8. The authority of a believer is in the name of Jesus. (Mark 16:17-18). 
                    </p>
                    <p>9. Faith is actually on the word of God (Hebrews 2:4, 2 Corinthians 5:7).</p>
                    <p>
                      10. We further believe that Jesus is our healer and that by His stripes we are already healed. (Isaiah 53:5).
                    </p>
                    <p>
                      11. Devine healing is active in the lives of people today through Jesus who is the healer. Healing includes 
                      physical, mental, emotional and spiritual restoration. (Luke 9:11, Mathew 9:35, Acts 10:38, Mathew 10:1).

                    </p>
                    <p>
                      12. Heaven is real. The bible describes heaven as the place of the throne of God, where those who accept Christ will spend eternity 
                      with God after death (Psalms 11:4, Isaiah 66:1).
                
                    </p>
                    <p>
                      13. Hell is real. The  bible describes hell as a real place. It is a place of permanent separation from God for those who die without accepting Christ. 
                      God's desire is that no be separated from Him for eternity, which is why He sent his son Jesus Christ to earth. (Hebrews 9:27, Revelation 20:12-15, John 3:16-18).
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0 50px",
                }}
              >
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
            <Row style={{ justifyContent: "center" }}>
              <Col style={{ maxWidth: "90%" }}>
                <Row style={{ marginBottom: "50px" }}>
                  <Col style={itemStyle} className="believe-list">
                    <p>
                    We are a vibrant, living, Bible Believing Church established in November 2003 in response to God’s 
                    proceeding Word to His Servant Pastor Ikenna Okeke to “Go to Abuja and raise Me men I can use”. 
                    An assembly of believers committed to revealing the fatherhood of Almighty God to this generation 
                    through sound biblical teachings and corresponding moral conduct.TFC is a Peculiar, Multi-ethnic and 
                    multi-national Church mandated To Raise Quality, Reliable And Consistent Men And Women God Can Use to 
                    Accomplish His Purpose On Earth. We believe that the deepest desire of God is that we all come to the 
                    knowledge and understanding essential for us to see Him not just as the Creator of all things, but as 
                    father; who desires only good for us.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="nicene">
          <Container fluid>
            <Row style={{ justifyContent: "center" }}>
              <Col style={{ maxWidth: "90%" }}>
                <Row style={{ marginBottom: "50px" }}>
                  <Col style={itemStyle} className="believe-list">
                    <p>
                    In The Father’s Church, there is room enough for every one to manifest the gifts and callings of God, 
                    through the Ministry of the Holy Spirit. We pray that you encounter God through the materials you find 
                    on this website, and that this encounter guides you into a joyful, fruitful and purposeful life in our 
                    Lord and Saviour, Jesus Christ.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        {/* <Tab eventKey="history">
          <Container fluid>
            <Row>
              <Col>
                <Row style={{ marginBottom: "50px" }}>
                  <Col>
                    <Timeline items={items} />;
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default Believe;
