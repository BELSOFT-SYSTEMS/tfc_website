import React from "react";
import Style from "./eden.module.css";
// import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

const Sitepast = () => {
  // const navigate = useNavigate();

  // const redirectToContactPage = () => {
  //   console.log('Redirecting to contact page');
  //   navigate('/contact');
  // };

  const backgroundImageUrl = "/location-bg.jpg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center center", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    width: "100%", // Set the width to 100% of the viewport width
    // height: '100vh', // Set the desired height
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Set text color
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: "hidden",
    boxSizing: "border-box",
    marginBottom: "40px",
  };

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={containerStyle}>
          <div className={Style.pastors_container}>
            <Row className={Style.Pastor}>
              <Col md={6}>
                <div>
                  <div>
                    <div
                      style={{ justifyContent: "center", textAlign: "left" }}
                    >
                      <h2 className={Style.Pastors_header_text}>
                        Meet Our Senior Pastor
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p style={{ fontSize: "25px", color: "#000" }}>
                        Pastor Ikenna Okeke
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "14px", color: "#000" }}>
                          Nostrud commodo mollit id excepteur tempor ullamco
                          mollit cupidatat cupidatat. Deserunt sit fugiat irure
                          esse ipsum exercitation non laboris et qui. Cupidatat
                          enim quis magna ea. Proident enim elit in non minim ex
                          veniam elit consectetur eiusmod. Aliquip voluptate
                          aute eiusmod laborum ipsum proident adipisicing
                          ullamco. Sint culpa commodo et mollit nisi incididunt
                          dolore cillum. Culpa amet fugiat ex in. Deserunt est
                          officia elit ad sunt ullamco do ut esse excepteur
                          officia. In sit mollit velit cupidatat nostrud.
                          Ullamco officia amet esse qui non. Veniam in eiusmod
                          cupidatat pariatur proident cillum enim. Sit non
                          incididunt eiusmod qui. Nostrud est occaecat velit
                          laboris culpa duis ea reprehenderit veniam.
                          Reprehenderit dolore occaecat mollit aliquip
                          incididunt consequat sint aliqua. Est minim
                          consectetur quis ullamco fugiat nisi nulla veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className={Style.Past_div}>
                {/* Your image goes here */}
                <img
                  src="pastor2.png"
                  alt="Opposite"
                  className="img-fluid"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </Col>
            </Row>
            <Row className={Style.Mum_Chi}>
              <Col md={6} className={Style.Past_div}>
                {/* Your image goes here */}
                <img
                  src="pastor2.png"
                  alt="Opposite"
                  className="img-fluid"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </Col>
              <Col md={6}>
                <div>
                  <div>
                    <div
                      style={{ justifyContent: "center", textAlign: "left" }}
                    >
                      <h2 className={Style.Pastors_header_text}>
                        Meet Our Co Pastor
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p style={{ fontSize: "25px", color: "#000" }}>
                        Pastor Chineze Okeke
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "14px", color: "#000" }}>
                          Nostrud commodo mollit id excepteur tempor ullamco
                          mollit cupidatat cupidatat. Deserunt sit fugiat irure
                          esse ipsum exercitation non laboris et qui. Cupidatat
                          enim quis magna ea. Proident enim elit in non minim ex
                          veniam elit consectetur eiusmod. Aliquip voluptate
                          aute eiusmod laborum ipsum proident adipisicing
                          ullamco. Sint culpa commodo et mollit nisi incididunt
                          dolore cillum. Culpa amet fugiat ex in. Deserunt est
                          officia elit ad sunt ullamco do ut esse excepteur
                          officia. In sit mollit velit cupidatat nostrud.
                          Ullamco officia amet esse qui non. Veniam in eiusmod
                          cupidatat pariatur proident cillum enim. Sit non
                          incididunt eiusmod qui. Nostrud est occaecat velit
                          laboris culpa duis ea reprehenderit veniam.
                          Reprehenderit dolore occaecat mollit aliquip
                          incididunt consequat sint aliqua. Est minim
                          consectetur quis ullamco fugiat nisi nulla veniam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sitepast;
