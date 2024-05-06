import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";

const SpecialDayButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
      const isFirstFriday =
        currentDate.getDate() <= 7 && currentDate.getDay() === 5; // Check if it's the first Friday of the month

      // Check if it's Wednesday (dayOfWeek === 3), Sunday (dayOfWeek === 0), or the first Friday of the month
      if (dayOfWeek === 3 || dayOfWeek === 0 || isFirstFriday) {
        const currentTime = currentDate.getHours();
        // Check if it's between 12 PM (12) and 2 PM (14) on the active days
        if (
          (dayOfWeek === 0) &&
          currentTime >= 9 &&
          currentTime < 11
        ) {
          setIsActive(true);
        } else if (
            (dayOfWeek ===3 || dayOfWeek === 0) &&
            currentTime >= 18 &&
            currentTime < 20) {
          // Check if it's between 5 PM (17) and 7 PM (19) on wednesdays
          setIsActive(true);
        } else if (isFirstFriday && currentTime >= 18 && currentTime < 20) {
          // Check if it's between 5 PM (17) and 7 PM (19) on the first Friday
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
      window.location.href = "https://www.youtube.com/watch?v=EKGZ-FbS1_Q"; // Redirect to YouTube link
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isActive ? "#FF0000" : "#FF0000",
        opacity: isActive ? "1" : "0.4",
        cursor: isActive ? "pointer" : "not-allowed",
        maxWidth: "200px",
        height: "50px",
        alignSelf: "flex-end",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "20px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        border: "none",
        borderRadius: "5px",
        transition: "all 0.3s ease"
      }}
      disabled={!isActive}
    >
      {isActive ? "Watch Live" : "Watch Live"}
      <FaWifi 
        style={{
            marginLeft: '1rem', 
            fontSize:'20px',
        }}
      />
    </button>
  );
};

export default SpecialDayButton;
