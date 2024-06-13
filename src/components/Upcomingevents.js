import React from "react";
import { Button } from "./Button/Button";
import { Container, Row, Col } from "react-bootstrap";
import EventComponent from "./EventComponent";
import { useNavigate } from "react-router-dom";

const Upcomingevents = () => {
  const navigate = useNavigate();

  const redirectToEventsPage = () => {
    console.log("Redirecting to events page");
    navigate("/event-calendar");
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
              What's On At The Father's Church
            </h2>
            <h2 style={{ fontSize: "55px" }}>Upcoming Events</h2>
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
        <EventComponent
          title="Virtue Confrence 2024"
          date="08 MAY 2024"
          description="Celebrating women's empowerment, leadership, and integrity through inspirational talks, workshops, and community-building activities."
          imageUrl="queens_event.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="Lightbearers Celebrate Children's Day"
          date="27 MAY 2024"
          description="TFC Lightbearers, grades 6 &#8211; 12 are invited to join us on this event"
          imageUrl="event2.jpg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="Thanksgiving Service"
          date="26 MAY 2024"
          description="Let's pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! 
          Every blessing is a testament to God's unfailing love and faithfulness. Join us This Sunday;"
          imageUrl="event3.jpeg"
          buttonText="Find Out More"
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
