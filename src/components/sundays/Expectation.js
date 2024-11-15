import React from "react";
import { Container } from "react-bootstrap";

const Expectation = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container
          fluid
          style={{
            paddingLeft: "60px",
            paddingRight: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Montserrat,Sans-serif",
              fontSize: "50px",
              textAlign: "center",
              fontWeight: "bolder",
              // marginBottom: "30px",
            }}
          >
            What To Expect At All Locations
          </h1>
          <h3
            style={{
              fontFamily: "Montserrat,Sans-serif",
              fontSize: "23px",
              textAlign: "center",
            }}
          >
            Join us on Sundays at any of our locations for teaching,
            worship, and community
          </h3>
          {/* <div
            style={{
              margin:'0 2rem 0 2rem'
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginRight: "20px",
                  marginTop: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="icons/smile.webp"
                  alt="Icon"
                  style={{ width: "15rem", height: "15rem", marginRight: "1rem" }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>GUEST SERVICES</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    First-time visitor? Have a question? Located at the 
                    front door of all our locations, our guest services
                    team would love to connect with you.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginRight: "20px",
                  marginTop: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="icons/dress-code.webp"
                  alt="Icon"
                  style={{  width: "15rem", height: "15rem", marginRight: "1rem" }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>DRESS CODE</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    We take a "come as you are" approach. We have
                     people in formal attire and others that are
                     completely casual.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",

              }}
            >
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginLeft: '-8rem',
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="icons/clock.webp"
                  alt="Icon"
                  style={{  width: "15rem", height: "15rem", marginRight: "1rem"  }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>SERVICE LENGTH</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    Services typically last 75 minutes.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginLeft: '8rem',
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="icons/music.webp"
                  alt="Icon"
                  style={{  width: "15rem", height: "15rem", marginRight: "1rem"  }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>MUSIC</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    We have rotating worship teams who help our
                  congregation focus on Jesus through dynamic,
                   modern worship music.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop:'3rem'
               
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginLeft: '-2rem',
                  alignItems: "center",
                  justifyContent: "center",
             
                }}
              >
                <img
                  src="icons/teaching.webp"
                  alt="Icon"
                  style={{  width: "15rem", height: "15rem", marginRight: "1rem" }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>TEACHING</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    We are a vibrant, living, Bible Believing Church
                    in response to God’s proceeding Word to His Servant Pastor Ikenna Okeke 
                    to “Go to Abuja and raise Me men I can use”. 
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: '55%',
                  marginLeft: '2rem',
                  alignItems: "center",
                  justifyContent: "center",
         
                }}
              >
                <img
                  src="icons/prayer.webp"
                  alt="Icon"
                  style={{  width: "15rem", height: "15rem", marginRight: "1rem" }}
                />
                <div>
                  <h2 style={{ fontSize: "24px" }}>PRAYER</h2>
                  <p
                    style={{
                      fontFamily: "Sans-serif",
                      fontSize: "18px",
                      fontWeight: "40",
                      lineHeight: "20px",
                    }}
                  >
                    We have trusted teams to help you process what
                  the Holy Spirit stirs in your heart after the
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default Expectation;
