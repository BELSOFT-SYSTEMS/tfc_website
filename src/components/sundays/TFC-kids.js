import React from "react";
// import { Button } from "../Button/Button";
import { Container, Row, Col } from "react-bootstrap";
// import Cards from "../Cards";
// import { useNavigate } from "react-router-dom";
import EventComponent from "../events-calendar/EventComponent";

const TFCkids = () => {
  // const navigate = useNavigate();

  // const redirectToQueensPage = () => {
  //   console.log("Redirecting to queens page");
  //   navigate("/the-queens");
  // };
  // const redirectToLightbearersPage = () => {
  //   console.log("Redirecting to lightbearers page");
  //   navigate("/lightbearers");
  // };
  // const redirectToAmbassadorsPage = () => {
  //   console.log("Redirecting to ambassadors page");
  //   navigate("/ambassadors");
  // };
  return (
    <Container fluid>
      <Container
        style={{
          justifyContent: "center",
          textAlign: "center",
          // marginBottom: "30px",
          // marginTop: "20px",
        }}
      >
        <Row>
          <Col>
            <h2 style={{ fontSize: "20px" }}>There is room for you</h2>
            <h2 style={{ fontSize: "55px" }}>Join us This Sunday</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className="events-grid">
        <EventComponent
          id={1}
          title="The light bearers Academy"
          // date="27 MAY 2024"
          description="The Light Bearers Academy is the children's church comprising of all children from the ages of 2 to 12 in church..."
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/lightbearers.jpeg"
          buttonText="Find Out More"
          // onClick={redirectToLightbearersPage}
        />
        <EventComponent
          id={2}
          title="The Father's Church Queens Fellowship"
          // date="08 MAY 2024"
          description="The Queens of The Father's Church are married women and mothers in The Father's Church. The Queens Fellowship is a fellowship of mothers and married women in the Father's Church to build each...  "
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/queens-1.jpg"
          buttonText="Find Out More"
          // onClick={redirectToQueensPage}
        />
        <EventComponent
          id={3}
          title="The Ambassadors of the father's church"
          // date="26 MAY 2024"
          description="The Ambassadors church is the arm of the church designed to mold and equip our teenagers to become vessels of honor that God can use to impact their world and..."
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ambassadors.jpeg"
          buttonText="Find Out More"
          // onClick={redirectToAmbassadorsPage}
        />
      </Container>
      {/* <Container
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
        <Button
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
        </Button>
      </Container> */}
    </Container>
  );
};

export default TFCkids;
