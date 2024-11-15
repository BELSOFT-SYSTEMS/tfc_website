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
                          Pastor Ikenna Okeke is the Senior Pastor of The
                          Father’s Church: a vibrant assembly of believers with
                          Headquarters at Eden Centre, Abuja. He is a
                          remarkable, insightful and practical teacher of the
                          Word of God whose message has enabled many people find
                          hope and restoration through Jesus Christ. His answer
                          to God's Call in 1997 to “…go to Abuja and raise Me
                          men that I can use” is born out of his unyielding
                          passion, dedication and love of God. Blessed with a
                          unique teaching gift, Pastor Ikenna's insightful
                          messages on the development of the total man are well
                          received across various platforms such as Radio,
                          Television and online/Social Media.He began his early
                          ministry as pioneer Pastor at the Desire of Nations
                          Parish of The Redeemed Christian Church of God, Abuja.
                          He served in that capacity for a period of six years,
                          before a proceeding Call of God led him to the
                          establishment of The Father's Church, in November
                          2003. A Chartered Accountant by training, he obtained
                          a Bachelor of Science Degree in Accounting from the
                          University of Nigeria and served in various capacities
                          in the Banking Industry prior to this Call.Pastor
                          Ikenna is a man with a proven heart for God, a tender
                          heart for God’s people and a deep passion for
                          righteous living. He is married to Pastor Chineze
                          Okeke and they are blessed with two children, Uche
                          Okeke and Tochukwu Okeke.
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
