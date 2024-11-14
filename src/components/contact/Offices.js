import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCalendarDays,
  faEnvelopeOpenText,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
// import {  faBell,  faFaceLaugh,faHourglassHalf, } from '@fortawesome/free-regular-svg-icons';

const Offices = () => {
  const backgroundImageUrl = "gettoknow.jpeg"; // Replace with your image URL

  const containerbgStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "contain",
    backgroundPosition: "center center", 
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fff",
    opacity: "0.3",
    // width: '1100px',
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: "hidden",
    boxSizing: "border-box",
    position: "absolute",
    zIndex: "0",
  };

  const containerStyle = {
    // width: '1100px',
    width: "90%",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    boxSizing: "border-box",
    // marginBottom: '40px',
    position: "relative",
    zIndex: "1",
  };

  const textStyle = {
    paddingLeft: "10px",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "unset",
  };

  return (
    <>
      {/* Section 1 */}
      <section
        className="your-section-class"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Container fluid style={containerbgStyle}></Container>
        <Container fluid style={containerStyle}>
          <h1
            style={{
              fontSize: "4rem",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            Our Offices
          </h1>
          <Container
            fluid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <h2 style={{ fontSize: "16px" }}>EDEN BRANCH</h2>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "40",
                  lineHeight: "30px",
                }}
              >
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>
                    {" "}
                    Eden Centre Along Banex/Gwarinpa Bypass, Near NEXT Cash &
                    Carry, Abuja.{" "}
                  </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>
                    {" "}
                    Sunday Services - 9:00am | Wednesdays - 6:00pm{" "}
                  </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>(905) 686-4450</span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>hello@TheFathersChurch.com</span>
                </div>
              </p>
            </div>
            <div
              style={{
                padding: "20px",
              }}
            >
              <h2 style={{ fontSize: "16px" }}>MPAPE BRANCH</h2>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "40",
                  lineHeight: "30px",
                }}
              >
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>
                    599 Bayly Street East, Ajax, Ontario{" "}
                  </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>Monday - Thursday : 10am - 3pm </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>(905) 686-4450</span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    hello@TheFathersChurch.com
                  </span>
                </div>
              </p>
            </div>
            <div
              style={{
                padding: "20px",
              }}
            >
              <h2 style={{ fontSize: "16px" }}>ENUGU BRANCH</h2>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "40",
                  lineHeight: "30px",
                }}
              >
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>
                    599 Bayly Street East, Ajax, Ontario{" "}
                  </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "#d49c04", fontSize: "14px" }}
                  />
                  <span style={textStyle}>Monday - Thursday : 10am - 3pm </span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>(905) 686-4450</span>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    style={{ color: "#d49c04", fontSize: "18px" }}
                  />
                  <span style={textStyle}>hello@TheFathersChurch.com</span>
                </div>
              </p>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Offices;
