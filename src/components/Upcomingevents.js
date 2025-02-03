import React from "react";
import { Button } from "./Button/Button";
import { Container, Row, Col } from "react-bootstrap";
import EventComponent from "../components/events-calendar/EventComponent";
import { useNavigate } from "react-router-dom";

const Upcomingevents = () => {
  const navigate = useNavigate();

  const redirectToEventsPage = () => {
    console.log("Redirecting to events page");
    navigate("/event-calendar");
  };
  return (
    <Container fluid>
      <Container
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <Row>
          <Col>
            <h2 style={{ fontSize: "14px" }}>
              What's On At The Father's Church
            </h2>
            <h2 style={{ fontSize: "5rem" }}>Upcoming Events</h2>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="upcoming-events-cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
          gap: "20px",
          width: "95%",
        }}
      >
        <EventComponent
          id={1}
          title="Friendship Sunday"
          date="2 February 2025"
          description="Celebrating women's empowerment, leadership, and integrity through inspirational talks, workshops, and community-building activities."
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/friendship.png"
          buttonText="Find Out More"
        />
        <EventComponent
          id={2}
          title="Kingdom Keys"
          date="5 February 2025"
          description="TFC Lightbearers, grades 6 &#8211; 12 are invited to join us on this event"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/event2.jpg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={3}
          title="Thanksgiving Service"
          date="23 February 2025"
          description="Let's pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! 
          Every blessing is a testament to God's unfailing love and faithfulness. Join us This Sunday;"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/thanksgiving.png"
          buttonText="Find Out More"
        />
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="warning"
          href="/event-calendar"
          onClick={redirectToEventsPage}
          style={{
            backgroundColor: "#d49c04",
            color: "#fff",
            maxWidth: "200px",
          }}
        >
          View all Events
        </Button>
      </Container>
    </Container>
  );
};

export default Upcomingevents;
