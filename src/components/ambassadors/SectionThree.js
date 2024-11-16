import React from "react";
import { Container, Accordion } from "react-bootstrap";
// import { Button } from "../Button/Button";

const SectionThree = () => {
  const backgroundImageUrl = "/gettoknow.jpeg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center center", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: "hidden",
    boxSizing: "border-box",
  };

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class" style={containerStyle}>
        <Container fluid style={{ width: "90%" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "40px",
            }}
          >
            about us
          </h1>
          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          ></p>

          <div style={{ paddingBottom: "30px" }}>
            <Accordion
              defaultActiveKey="0"
              alwaysOpen
              // style={{ paddingBottom: "20px" }}
            >
              <Accordion.Item eventKey="0" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    who we are
                  </h1>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ fontSize: "14px" }}>
                    The Ambassadors church is the arm of the church designed to
                    mold and equip our teenagers to becomes vessels of honor
                    that God can use to impact their world and generation
                    through the sound, precise and interactive teachings of
                    God's word and the development of their God given gifts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    what we do
                  </h1>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ fontSize: "14px" }}>
                    The Ambassadors church is the arm of the church designed to
                    mold and equip our teenagers to becomes vessels of honor
                    that God can use to impact their world and generation
                    through the sound, precise and interactive teachings of
                    God's word and the development of their God given gifts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    Our Intakes
                  </h1>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ fontSize: "14px" }}>
                    Sunday school starts at 8:00am and ends at 8:45am that takes
                    place in the main church. Registration starts at 8:45am and
                    our service starts at 9:00 AM.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    Wanna Join Us?
                  </h1>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ fontSize: "14px" }}>
                    Pastor Ibironke Oka is the Head of the light bearers Academy
                    she’s assisted by Deaconess Victoria Onuoha Deacon Ben Ekeyi
                    and Ms Tare Atiyota. Ms Aniefon Sulaiman is in charge of the
                    early years. Enquiry about the Academy can be directed to
                    either of them.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* <Button style={{ margin: '0 auto 10px' }}>Register</Button> */}
        </Container>
      </section>
    </>
  );
};

export default SectionThree;
