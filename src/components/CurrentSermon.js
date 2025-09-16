import React from "react";
import { Button } from "./Button/Button";
import { Container, Row, Col } from "react-bootstrap";
import SpecialDayButton from "./Button/LiveButton";
import MixlrButton from "./Button/MixlrButton";
import SoundcloudButton from "./Button/SoundcloudButton";
import { useNavigate } from 'react-router-dom';
import "./currentSermon.css";

const CurrentSermon = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = "pastor-1-1.png";


  const redirectToSermonsPage = () => {
    console.log("Redirecting to sermons page");
    navigate('/sermon');
  };

  return (
    <Container fluid className="sermon-container">
      <Row className="align-items-center justify-content-center sermon-content">
        <Col xs={12} md={6} className="image-col">
          <img
            src={backgroundImageUrl}
            alt="Senior Pastor"
            className="sermon-image"
          />
        </Col>
        <Col xs={12} md={6} className="text-col">
          <h2 className="sermon-title">Our Sermon Series</h2>
          <p className="sermon-description">
            Come hear the teaching of God’s Word live in Eden or join us online
            across our locations. Each sermon, full of grace and truth, is
            culturally relevant to today’s ever-changing social, political, and
            religious climate.
          </p>
          <p className="sermon-description">
            Missed a past sermon or want to go back and listen to a series?
            Click below to view our sermon archive.
          </p>
          <div className="button-wrapper">
            <Button
              style={{ backgroundColor: "#d49c04", color: "#fff" }}
              className="elementor-button elementor-size-sm elementor-animation-grow watch-series-button"
              onClick={redirectToSermonsPage}
            >
              Watch Series
            </Button>
            <SpecialDayButton />
            <MixlrButton />
            <SoundcloudButton />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentSermon;
