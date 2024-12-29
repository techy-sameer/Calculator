import React, { useState } from "react";

export default function ModernCalculator() {
  const [input, setInput] = useState(""); // State to track user input

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the input string
      } catch {
        setInput("Error"); // Handle invalid expressions
      }
    } else if (value === "C") {
      setInput(""); // Clear the input
    } else {
      setInput(input + value); // Append value to input
    }
  };

  // Button labels
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>{input || "0"}</div>
      <div style={styles.buttons}>
        {buttons.map((button, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

// Inline styles for modern design
const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  },
  display: {
    height: "60px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "24px",
    textAlign: "right",
    boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    height: "50px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

// Add hover effect for buttons
styles.button[':hover'] = {
  backgroundColor: "#45a049",
};
