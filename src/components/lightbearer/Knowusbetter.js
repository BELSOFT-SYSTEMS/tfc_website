import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { Button } from "../Button/Button";

const Knowusbetter = () => {
  const redirectToRegister = () =>
    window.open("https://nkyoergtwq2.typeform.com/to/E5o0Qlhw", "_blank");

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
              fontWeight: "40",
              textAlign: "center",
              // paddingTop: "20px",
              paddingBottom: "40px",
            }}
          >
            The Light Bearers Academy is the children's church comprising of all
            children from the ages of 2 to 12 in church.
          </p>

          <div>
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0" style={{ marginBottom: "20px" }}>
                <Accordion.Header>
                  <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                    who we are
                  </h1>
                </Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  The light bearers Academy is the children’s arm of the
                  father’s church its aim is to educate and equip our children
                  with the word of God in line with the vision of the main
                  church which is to reveal the fatherhood of almighty God
                  through sound biblical teaching and correspondent moral
                  conduct. In line with this our children are filled with the
                  knowledge of God’s will in all wisdom and spiritual
                  understanding.
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
                    At the light bearers Academy children ranges between 2 to 12
                    years of age at 13 years they are sent to the teenage church
                    which is called the ambassadors. Our classes are sectioned
                    into ages 2-3, 4 -5, 6, 7, 8- 9, 10, and 11- 12 years of age
                    so we can teach same topic at the same time but at different
                    levels with loads of visuals and physical activities to
                    depict or portray each lesson. After each topic example
                    obedience we have quiz, drama, movies ETC. The games, songs,
                    crafts and other activities that we use helps to reinforce
                    an atmosphere that makes the children look forward to church
                    because it’s fun packed. we also have classes for special
                    needs children and caregivers who can flow in the main
                    church due to language barrier(we use the Nigerian language)
                    We are also particular about the safety of our children
                    therefore tags are given to parents or guardians when they
                    drop off and it's only such tags that admits them into the
                    children's church. We have Rest rooms that are exclusively
                    for children.
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
                  <Button
                    onClick={redirectToRegister}
                    variant="warning"
                    style={{ backgroundColor: "#d49c04", color: "#fff" }}
                  >
                    Register Now
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
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
              onClick={redirectToRegister}
              variant="warning"
              style={{ backgroundColor: "#d49c04", color: "#fff" }}
            >
              Register Now
            </Button>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Knowusbetter;
