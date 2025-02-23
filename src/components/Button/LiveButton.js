import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";

const SpecialDayButton = () => {
  const [isActive, setIsActive] = useState(false);

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
      window.location.href = "https://www.youtube.com/watch?v=zU8J9smzkOM"; // Redirect to YouTube link
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
      {isActive ? "Watch Live" : "Watch Live"}
      <FaWifi
        style={{
          marginLeft: "1rem",
          fontSize: "16px",
        }}
      />
    </button>
  );
};

export default SpecialDayButton;
