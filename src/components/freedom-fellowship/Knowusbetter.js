import React from "react";
import { Container, Accordion } from "react-bootstrap";
// import { Button } from "../Button/Button";

const Knowusbetter = () => {
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

          <div>
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    who we are
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  The Freedom Fellowship is the fellowship of the singles and
                  the unmarried members of The Father's Church. The fellowship
                  exists to ensure that each member develops their capacity in
                  all three core areas of human existence-Spirit, Soul, and the
                  Body during this transitory phase of their life.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                style={{ paddingBottom: "5px", marginBottom: "20px" }}
              >
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    what we do
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  The Freedom Fellowship is the fellowship of the singles and
                  the unmarried members of The Father's Church. The fellowship
                  exists to ensure that each member develops their capacity in
                  all three core areas of human existence-Spirit, Soul, and the
                  Body during this transitory phase of their life.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    Our Service Times
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  Sunday school starts at 8:00am and ends at 8:45am that takes
                  place in the main church. Service starts at 9:00 AM.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    Wanna Join Us?
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  The Freedom Fellowship is the fellowship of the singles and
                  the unmarried members of The Father's Church. The fellowship
                  exists to ensure that each member develops their capacity in
                  all three core areas of human existence-Spirit, Soul, and the
                  Body during this transitory phase of their life.
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

export default Knowusbetter;
