import React from 'react';
import { Button } from "../Button/Button";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards";
import { useNavigate } from "react-router-dom";

const TFCkids = () => {
  const navigate = useNavigate();

  const redirectToQueensPage = () => {
    console.log("Redirecting to queens page");
    navigate("/Queens");
  };
  const redirectToLightbearersPage = () => {
    console.log("Redirecting to lightbearers page");
    navigate("/Lightbearer");
  };
  const redirectToAmbassadorsPage = () => {
    console.log("Redirecting to ambassadors page");
    navigate("/Ambassadors");
  };
  return (
    <Container fluid style={{ margin: "0 2rem" }}>
      <Container
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        <Row>
          <Col>
            <h2 style={{ fontSize: "20px" }}>
              There is room for you
            </h2>
            <h2 style={{ fontSize: "55px" }}>Join us This Sunday</h2>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <Cards
          title="The light bearers Academy"
          // date="27 MAY 2024"
          description="The light bearers Academy is the children’s arm of the father’s church its aim is to educate and equip our children with the word of God in line with the vision of the main church which is to reveal..."
          imageUrl="event2.jpg"
          buttonText="Find Out More"
          onClick={redirectToLightbearersPage}
        />
        <Cards
          title="The Father's Church Queens Fellowship"
          // date="08 MAY 2024"
          description="The Queens of The Father's Church are married women and mothers in The Father's Church. The Queens Fellowship is a fellowship of mothers and married women in the Father's Church to build each...  "
          imageUrl="queens_event.jpeg"
          buttonText="Find Out More"
          onClick={redirectToQueensPage}
        />
        <Cards
          title="The Ambassadors of the father's church"
          // date="26 MAY 2024"
          description="Let's pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! 
          Every blessing is a testament to God's unfailing love and faithfulness. Join us This Sunday;"
          imageUrl="event3.jpeg"
          buttonText="Find Out More"
          onClick={redirectToAmbassadorsPage}
        />
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* <Button
          variant="warning"
          href="/Eventcalendar"
          onClick={redirectToEventsPage}
          style={{
            backgroundColor: "#d49c04",
            color: "#fff",
            maxWidth: "200px",
          }}
          
        >
          View all Events
        </Button> */}
      </Container>
    </Container>
  );
};

export default TFCkids;