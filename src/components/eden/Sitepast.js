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
                  src="pastor-home-3.png"
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
                  src="co-pastor-2.png"
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
                        Pastor Juliette Okeke is the Co-Pastor of The Father’s Church, a dedicated minister, mentor, and transformational leader with a deep passion for helping people grow in their faith and purpose. With her extensive experience in leadership, coaching, and personal development, she is committed to guiding individuals toward spiritual maturity and excellence in every area of life.

                        A dynamic speaker and mentor, Pastor Juliette brings wisdom, grace, and insight to her ministry, equipping believers with biblical principles that inspire growth, character development, and a Christ-centered life. Her heart for people and her ability to connect across cultures make her a beacon of encouragement and transformation within the church community.

                        Beyond ministry, she has a background in banking, image consulting, and personal development, which enriches her pastoral approach, blending faith with practical wisdom. Her passion for seeing individuals and organizations transformed aligns with her mission to raise a people of purpose, integrity, and spiritual depth.
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
