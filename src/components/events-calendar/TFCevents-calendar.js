import React from "react";
// import { Button } from "../Button/Button";
import {
  Container,
  // Row,
  // Col
} from "react-bootstrap";
import EventComponent from "./EventComponent";

const TFCeventscalendar = () => {
  return (
    <Container>
      {/* <Container
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Row>
          <Col>
            <h2 style={{ fontSize: "30px" }}>
              Upcoming Events <br /> At The Father's Church
            </h2>
          </Col>
        </Row>
      </Container> */}
      <Container className="events-grid">
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
        <EventComponent
          id={4}
          title="Pickering Kids Easter Presentation"
          date="MAR 31 2024"
          description="Our kids will be putting on a special Easter presentation for the congregation!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events1.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={5}
          title="Pickering Kids Easter Presentation"
          date="MAR 31 2024"
          description="Our kids will be putting on a special Easter presentation for the congregation!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events1.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={6}
          title="Pickering Kids Easter Presentation"
          date="MAR 31 2024"
          description="Our kids will be putting on a special Easter presentation for the congregation!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events1.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={7}
          title="Sanctus Summer Camps: Multi Sports Camp (Ages 6-12)"
          date="JUL 08 - 12 2024"
          description="This Sanctus Summer Camp is for kids ages 6-12 and is filled with fun multi-sports and engaging, deep-diving teaching!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events2.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={8}
          title="Sanctus Summer Camps: Multi Sports Camp (Ages 6-12)"
          date="JUL 08 - 12 2024"
          description="This Sanctus Summer Camp is for kids ages 6-12 and is filled with fun multi-sports and engaging, deep-diving teaching!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events2.jpeg"
          buttonText="Find Out More"
        />
        <EventComponent
          id={9}
          title="Sanctus Summer Camps: Multi Sports Camp (Ages 6-12)"
          date="JUL 09 - 12 2024"
          description="This Sanctus Summer Camp is for kids ages 6-12 and is filled with fun multi-sports and engaging, deep-diving teaching!"
          longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque venenatis, porttitor mauris id, facilisis velit. Cras a elit et mauris vulputate dictum. Nunc ut feugiat risus. Sed sed odio eget felis tincidunt feugiat id ultricies dui. Sed blandit neque eu diam tincidunt, a cursus nunc tempor. Etiam commodo ligula sit amet nisl placerat, nec rhoncus sapien tincidunt. Vestibulum vitae sollicitudin sapien. Vivamus sapien arcu, sodales id mauris eget, pharetra porttitor nulla."
          imageUrl="/ams-events3.jpeg"
          buttonText="Find Out More"
        />
      </Container>
      {/* <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0",
        }}
      >
        <Button
          variant="warning"
          style={{ backgroundColor: "#d49c04", color: "#000" }}
        >
          View all Events
        </Button>
      </Container> */}
    </Container>
  );
};

export default TFCeventscalendar;
