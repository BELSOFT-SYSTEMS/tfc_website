import React from "react";
import { Button } from "../Button/Button";
import { Container, Row, Col } from "react-bootstrap";
import EventComponent from "../events-calendar/EventComponent";

const TFCkidsevents = () => {
  return (
    <Container>
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
              Whats On At The Father's Church
            </h2>
            <h2 style={{ fontSize: "55px" }}>Upcoming Events</h2>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <EventComponent
          title="Children's Day"
          date="MAY 27 2024"
          description="Our kids will be putting on a special presentation for the congregation!"
          imageUrl="ams-events1.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="Sanctus Summer Camps"
          date="JUL 08 - 12 2024"
          description="This TFC Summer Camp is for kids ages 6-12 and is filled with fun multi-sports and engaging, deep-diving teaching!"
          imageUrl="ams-events2.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          title="Sanctus Summer Camps"
          date="JUL 09 - 12 2024"
          description="This TFC Summer Camp is for kids ages 6-12 and is filled with fun multi-sports and engaging, deep-diving teaching!"
          imageUrl="ams-events3.jpeg"
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
          style={{ backgroundColor: "#d49c04", color: "#fff" }}
        >
          View all Events
        </Button>
      </Container>
    </Container>
  );
};

export default TFCkidsevents;
