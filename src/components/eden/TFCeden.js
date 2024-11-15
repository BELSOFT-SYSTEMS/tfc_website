import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCalendarDays,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

const TFCeden = () => {
  const [fontSize, setFontSize] = useState({ title: 100, span: 14 });

  useEffect(() => {
    const handleResize = () => {
      // Update font size based on window width
      const newTitleFontSize = window.innerWidth > 768 ? 100 : 60;
      const newSpanFontSize = window.innerWidth > 768 ? 16 : 14;
      setFontSize({ title: newTitleFontSize, span: newSpanFontSize });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial font size adjustment
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ width: "90%", marginTop: "20px" }}>
          {/* Text */}
          <div>
            <h2
              style={{
                fontSize: `${fontSize.title}px`,
                fontWeight: "bolder",
                fontFamily: "Sans-serif",
                color: "#000",
              }}
            >
              TFC Eden.
            </h2>
            <div>
              <p
                style={{
                  fontSize: `${fontSize.span}px`,
                  fontWeight: "100",
                  lineHeight: "20px",
                }}
              >
                <div style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ paddingLeft: "20px" }}>
                    Eden Centre Along Banex/Gwarinpa Bypass, Near NEXT Cash &
                    Carry,Abuja
                  </span>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ paddingLeft: "20px" }}>
                    Sundays: 9am || Wednesdays: 6pm
                  </span>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#d49c04" }}
                  />
                  <span style={{ paddingLeft: "20px" }}>
                    +234 703 158 8404 || (09) 290 9000
                  </span>
                </div>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TFCeden;
