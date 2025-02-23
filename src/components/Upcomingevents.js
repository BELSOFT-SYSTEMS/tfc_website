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
          title="Kingdom Keys"
          date="Every Wednesdays"
          description="Kingdom Keys is a midweek gathering at The Father’s Church every Wednesday, where we share lessons learned and dive deeper into God’s Word. It’s a time of reflection, revelation, and practical insights to strengthen our faith and walk with God."
          longText="Kingdom Keys is a midweek gathering at The Father’s Church every Wednesday, where we share lessons learned and dive deeper into God’s Word. It’s a time of reflection, revelation, and practical insights to strengthen our faith and walk with God."
          imageUrl="/kingdom-keys.png"
          buttonText="Find Out More"
        />
        <EventComponent
          id={2}
          title="Thanksgiving Service"
          date="25 February 2025"
          description="Let's pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! 
          Every blessing is a testament to God's unfailing love and faithfulness. Join us This Sunday;"
          longText="Let's pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! Every blessing is a testament to God's unfailing love and faithfulness. Join us This Sunday;"
          imageUrl="/thanksgiving.png"
          buttonText="Find Out More"
        />
        <EventComponent
          id={3}
          title="Get Connected"
          date="Tuesdays, Wednesdays and Fridays"
          description="Get Connected is a refreshing lunch-hour fellowship at The Father’s Church, held every Tuesday, Wednesday, and Friday from 1:00 PM to 1:30 PM. It’s a time to pause, recharge, and connect with God through prayer, worship, and the Word in a short yet powerful session."
          longText="Get Connected is a refreshing lunch-hour fellowship at The Father’s Church, held every Tuesday, Wednesday, and Friday from 1:00 PM to 1:30 PM. It’s a time to pause, recharge, and connect with God through prayer, worship, and the Word in a short yet powerful session."
          imageUrl="/Get-Connected.png"
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
