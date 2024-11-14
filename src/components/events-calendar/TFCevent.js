import React from "react";
import { Container } from "react-bootstrap";

const TFCevent = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid style={{ padding: "0" }}>
          {/* Text */}
          <div className="event-header">
            <h2
              style={{
                fontFamily: "Coolvetica",
              }}
            >
              Events At <br /> TFC Church.
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TFCevent;
