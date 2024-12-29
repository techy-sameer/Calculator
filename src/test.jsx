import React, { useState } from "react";

export default function ModernCalculator() {
  const [input, setInput] = useState(""); // State to track user input
  const [history, setHistory] = useState([]); // State to track history
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input).toString(); // Evaluate the input string
        setInput(result); // Set the result to the display
        setHistory([...history, `${input} = ${result}`]); // Save the calculation in history
      } catch {
        setInput("Error"); // Handle invalid expressions
      }
    } else if (value === "C") {
      setInput(input.slice(0, -1)); // Remove the last character
    } else if (value === "AC") {
      setInput(""); // Clear everything
    } else if (value === "History") {
      setInput(history.join("\n") || "No History"); // Display history or fallback message
    } else if (value === "Clear History") {
      setHistory([]); // Clear history array
      setInput("History Cleared"); // Show confirmation message
    } else {
      setInput(input + value); // Append value to input
    }
  };

  // Button labels including "00", "AC", "History", and "Clear History"
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "00", ".", "+",
    "=", "C", "AC", "History",
    "Clear History",
  ];

  return (
    <div
      style={{
        ...styles.wrapper,
        background: isDarkMode
          ? "linear-gradient(135deg, #1e1e1e, #2a2a2a)"
          : "linear-gradient(135deg, #2b5876, #4e4376)",
      }}
    >
      <div style={styles.calculator}>
        {/* Dark/Light Mode Toggle Button */}
        <button style={styles.themeButton} onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div
          style={{
            ...styles.display,
            background: isDarkMode ? "#333" : "#fff",
            color: isDarkMode ? "#0ef" : "#000",
          }}
        >
          <textarea
            style={{
              ...styles.textArea,
              color: isDarkMode ? "#0ef" : "#000",
              background: isDarkMode ? "#333" : "#fff",
            }}
            value={input || "0"}
            readOnly
          />
        </div>
        <div style={styles.buttons}>
          {buttons.map((button, index) => (
            <button
              key={index}
              style={{
                ...styles.button,
                background: isDarkMode
                  ? "linear-gradient(145deg, #444, #555)"
                  : "linear-gradient(145deg, #f7797d, #fbd786)",
                color: isDarkMode ? "#fff" : "#000",
              }}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Modern inline styles
const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  calculator: {
    width: "350px",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    boxShadow: "10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff",
    fontFamily: "'Poppins', sans-serif",
  },
  themeButton: {
    marginBottom: "20px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(145deg, #6a5acd, #836fff)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  display: {
    height: "80px",
    borderRadius: "10px",
    marginBottom: "20px",
    padding: "10px 15px",
    fontSize: "20px",
    textAlign: "right",
    boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #2a2a2a",
    fontWeight: "bold",
    overflow: "hidden",
  },
  textArea: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    resize: "none",
    outline: "none",
    fontFamily: "'Poppins', sans-serif",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  },
  button: {
    height: "60px",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.1)",
  },
};
