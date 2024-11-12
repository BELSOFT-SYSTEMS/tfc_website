import React, { useState } from "react";

const TabButton = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const tabStyles = {
    container: {
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "#d49c04",
      color: "#fff",
      width: "100%",
      border: "none",
      borderRadius: "5px 5px 0 0",
      boxShadow: "-3px 0px 10px 0px rgba(184.5, 182, 182, 0.5)",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
    },
    buttonHover: {
      backgroundColor: "#051f04",
    },
    content: {
      marginTop: "0px",
      padding: "20px",
      fontSize: "14px",
      backgroundColor: "#fff",
      borderRadius: "0 0 5px 5px",
      boxShadow: "-3px 0px 10px 0px rgba(184.5, 182, 182, 0.5)",
    },
    icon: {
      marginRight: "10px",
      transition: "transform 0.3s",
      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    },
  };

  return (
    <div style={tabStyles.container}>
      <button
        onClick={toggleDropdown}
        style={tabStyles.button}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            tabStyles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            tabStyles.button.backgroundColor)
        }
      >
        <svg
          style={tabStyles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.646 12.354a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
          />
        </svg>
        {label}
      </button>
      {isOpen && (
        <div style={tabStyles.content} className="value-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default TabButton;
