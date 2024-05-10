// EventComponent.js
import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "./Button/Button";


const Cards = ({ title, description, imageUrl, buttonText, date, onClick }) => {
  
  return (
    <Card
      style={{
        width: "35rem",
        marginBottom: "30px",
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
        style={{ height: "50vh", objectFit: "cover" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Card.Header>{title}</Card.Header> */}
        <h1
          style={{
            fontSize: "30px",
            height: "120px",
            marginTop: "1rem",
            justifyContent: "left",
          }}
        >
          {title}
        </h1>
        <Card.Text
          style={{
            fontSize: "16px",
            fontWeight: "400",
            height: "50px",
            margin: "-4rem 1rem 6rem 1rem",
          }}
        >
          {description}
        </Card.Text>
        <Button
          variant="warning"
          style={{
            alignSelf: "center",
            backgroundColor: "#d49c04",
            color: "#fff",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
