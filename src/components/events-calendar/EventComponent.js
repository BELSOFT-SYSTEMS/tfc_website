import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

const EventComponent = ({
  id,
  title,
  date,
  description,
  imageUrl,
  buttonText,
  longText,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event-calendar/${id}`, {
      state: { id, title, date, description, imageUrl, longText },
    });
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        border: "none",
        boxShadow: "-2px 6px 17px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#d49c04",
          padding: "10px",
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        {date}
      </div>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        style={{ height: "160px", objectFit: "cover" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "17px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            {description}
          </p>
        </div>
        <Button
          onClick={handleClick}
          variant="warning"
          style={{
            alignSelf: "start",
            backgroundColor: "#d49c04",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventComponent;
