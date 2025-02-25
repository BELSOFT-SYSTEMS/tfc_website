import React, { useState, useEffect } from "react";



const MixlrButton = () => {
  const [isActive, setIsActive] = useState(false);
  const mixlr = "mixlr-1.png"

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
      const isFirstFriday = currentDate.getDate() <= 7 && currentDate.getDay() === 5; // Check if it's the first Friday of the month

      // Check if it's Wednesday (dayOfWeek === 3), Sunday (dayOfWeek === 0), or the first Friday of the month
      if (dayOfWeek === 3 || dayOfWeek === 0 || isFirstFriday) {
        const currentTime = currentDate.getHours();
        // Check if it's between service times 9 AM (9) and 11 PM (11) on sundays
      if (dayOfWeek === 0 && currentTime >= 9 && currentTime < 11) {
          setIsActive(true);
        } else if (
          (dayOfWeek === 3) &&
          currentTime >= 16 &&
          currentTime < 20
        ) {
          // Check if it's between 6 PM (18) and 8 PM (20) on wednesdays
          setIsActive(true);
        } else if (isFirstFriday && currentTime >= 18 && currentTime < 21) {
          // Check if it's between 6 PM (18) and 9 PM (21) on the first Friday
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      } else {
        setIsActive(false);
      }
    }, 1000); // Check every second for time updates

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClick = () => {
    if (isActive) {
      window.open("https://thefatherschurch.mixlr.com/", "_blank"); // Redirect to Mixlr link
    }
  };

  return (
    <button
      className="live-button"
      onClick={handleClick}
      style={{
        backgroundColor: isActive ? "#FF0000" : "#FF0000",
        opacity: isActive ? "1" : "0.4",
        cursor: isActive ? "pointer" : "not-allowed",
        // maxWidth: "200px",
        height: "30px",
        alignSelf: "flex-end",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "10px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "600",
        border: "none",
        borderRadius: "5px",
        transition: "all 0.3s ease",
      }}
      disabled={!isActive}
    >
      {isActive ? "Mixlr" : "Mixlr"}
      <img
            src={mixlr}
            alt="Mixlr"
            style={{
              height:"20px",
              width: "20px",
              marginLeft: "2px",
            }}
          />
 
    </button>
  );
};

export default MixlrButton;
