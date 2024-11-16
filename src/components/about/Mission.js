import React from "react";
import { Container } from "react-bootstrap";
import TabButton from "../Button/TabButton";

const Mission = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container fluid className="mission-vision-row">
          <div
            style={{
              flex: "1 1 50%",
              // maxWidth: "570px",
              // padding: "40px 10px",
              textAlign: "start",
            }}
          >
            <h2 style={{ fontSize: "4rem" }}>Mission.</h2>
            <p
              style={{
                fontFamily: "Montserrat, Sans-serif",
                fontSize: "16px",
                // fontWeight: "400",
                // lineHeight: "20px",
                // marginTop: "25px",
              }}
            >
              The Father's Church Is An Assembly Of Believers Committed To Revealing The Fatherhood Of Almighty God To This Generation Through Sound Biblical Teachings And Corresponding Moral Conduct.
            </p>
          </div>
          {/* <div */}
            {/* // style={{ */}
              {/* // flex: "1 1 50%", */}
              {/* // maxWidth: "570px", */}
              {/* // padding: "40px 10px", */}
              {/* // textAlign: "start", */}
            {/* // }} */}
          {/* // > */}
            {/* <h2 style={{ fontSize: "4rem" }}>Vision.</h2> */}
            {/* <p */}
              {/* // style={{ */}
                {/* // fontFamily: "Montserrat, Sans-serif", */}
                {/* // fontSize: "16px", */}
                {/* // fontWeight: "400", */}
                {/* // lineHeight: "20px", */}
                {/* // marginTop: "25px", */}
              {/* // }} */}
            {/* // > */}
              {/* To be a multi-ethnic and multi-national church where everyone can encounter God, grow in the knowledge and 
              understanding of Him as a loving Father, and manifest their gifts and callings in joyful, fruitful, and purposeful lives in Jesus Christ. */}
              {/* <br /> meeting the physical, emotional, and <br />
              spiritual needs of people in Jesus’ name. */}
            {/* </p> */}
          {/* </div> */}
        </Container>
        <Container fluid className="value-row">
          <div
            style={{
              flex: "1 1 100%",
              // maxWidth: "1140px",
              // padding: "40px 10px",
              textAlign: "start",
            }}
          >
            <h2 style={{ fontSize: "4rem" }}>Values.</h2>
            <div className="value-col">
              <div className="value-tabs">
                <TabButton label="GOD'S WORD" className>
                  <p>
                    2 Tim 3:16 <br /> We believe in an honest engagement with
                    the Biblical text, understanding and applying it in order to
                    find our place in God’s unfolding story, becoming more like
                    Jesus in character and conduct.
                  </p>
                </TabButton>
                <TabButton label="REVEALING GOD’S FATHERHOOD">
                  <p>
                    Romans 8:15 <br /> We are committed to revealing the fatherhood of Almighty God to this generation, 
                    helping believers experience His love, guidance, and care as a Father who desires only good for His children.
                  </p>
                </TabButton>
                <TabButton label="DISCIPLESHIP">
                  <p>
                  Matthew 28:19-20 <br /> We are dedicated to raising quality, 
                  reliable, and consistent men and women God can use to accomplish 
                  His purposes through sound teaching and mentoring in faith and practice.
                  </p>
                </TabButton>
                <TabButton label="UNITY IN DIVERSITY">
                  <p>
                  Galatians 3:28 <br /> As a multi-ethnic and multi-national church, 
                  we celebrate our diversity while fostering unity as members of one body in Christ.
                  </p>
                </TabButton>
                <TabButton label="SPIRITUAL GROWTH">
                  <p>
                  Ephesians 4:15 <br /> We prioritize the spiritual growth of every believer, 
                  nurturing them to maturity in Christ through the ministry of the Holy Spirit and sound biblical teachings.
                  </p>
                </TabButton>
              </div>
              <div className="value-tabs">
                <TabButton label="CHRISTLIKE CHARACTER">
                  <p>
                  Galatians 5:22-23 <br /> We emphasize living out our faith through corresponding moral conduct, 
                  reflecting the character of Jesus in our daily lives.
                  </p>
                </TabButton>
                <TabButton label="PURPOSEFUL LIVING">
                  <p>
                  Jeremiah 29:11 <br /> We encourage believers to discover and walk in their God-given purpose, 
                  using their gifts and callings to fulfill His will on Earth.
                  </p>
                </TabButton>
                <TabButton label="HOLY SPIRIT MINISTRY">
                  <p>
                  Verse: Acts 1:8 <br /> We believe in the active ministry of the Holy Spirit, 
                  empowering believers to manifest their gifts and callings for God’s glory.
                  </p>
                </TabButton>
                <TabButton label="COMMUNITY AND FELLOWSHIP">
                  <p>
                  Acts 2:42 <br /> We value genuine community and fellowship, 
                  building relationships that encourage mutual love, support, and spiritual growth.
                  </p>
                </TabButton>
                <TabButton label="JOYFUL AND FRUITFUL LIVING">
                  <p>
                  John 15:11 <br /> We are committed to helping believers encounter God and 
                  live joyful, fruitful, and purposeful lives through faith in Jesus Christ.
                  </p>
                </TabButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mission;
