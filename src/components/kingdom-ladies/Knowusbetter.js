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
          >
            The Kingdom Ladies comprises of all the married women in the
            Church.
          </p>

          <div>
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
                    The Kingdom Ladies is a fellowship of mothers and married
                    women in the Father's Church to build each other up as
                    sisters in Christ and also support each other to fulfill our
                    purposes and callings.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    what we do
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  The fellowship is all about equipping the total woman who
                  loves God, has a successful home, business/career and be an
                  impact in her environment. We do this both physical and
                  virtually.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    mode of operation
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  Once a month meeting, Every 2 ND Sunday of the month by 4pm.
                  Activities includes Prayer, Bible Study, Seminars, trainings,
                  games, outreaches etc. Some of our activities include:
                  <br />
                  1. Virtue Conference - This is the yearly conference of the
                  Queens which usually holds in the month of March. Cooking
                  competition- Usually holds once a year.
                  <br />
                  2. Virtual Kitchen- This is where foodstuffs are brought by
                  the Queens and they are distributed among all.
                  <br />
                  3. Parenting/ Financial and Marriage Seminars- this holds
                  several times a year and is part of the program of the Queens
                  monthly meetings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    Wanna Join Us?
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  Who to contact in case of questions regarding the department:
                  <br />
                  Elder Taiwo Kehinde
                  <br />
                  Dr Sonachi Ezeiru
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
