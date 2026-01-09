import React, { useState } from "react";

const NumericKeypad = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleDigit = (digit) => {
    setValue((prev) => prev + digit);
  };

  const handleBackspace = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (onSubmit) {
      onSubmit(value);
    }
    setValue(""); // clear after submit if desired
  };

  return (
    <div style={{ textAlign: "center" }}>
		  <div
	  style={{
		fontSize: "2rem",
		marginBottom: "1rem",
		border: "1px solid #ccc",
		padding: "0.5rem",
		height: "40px",          // fixed height same as keypad button
		width: "245px",          // fixed width ~ 3 buttons (80px each + gaps)
		display: "flex",
		alignItems: "center",
		justifyContent: "start",
		marginLeft: "auto",
		marginRight: "0px",	// optional spacing from edge
		marginTop: "80px",
	  }}
	>
	  {value || "|"}
	</div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "10px",
          justifyContent: "end",
		  marginTop: "20px", // 👈 adds space
        }}
      >
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button
            key={num}
            onClick={() => handleDigit(num.toString())}
            style={{ fontSize: "1.5rem", padding: "20px" }}
          >
            {num}
          </button>
        ))}
        <button onClick={handleBackspace} style={{ fontSize: "1.2rem" }}>
          ⌫
        </button>
        <button onClick={handleEnter} style={{ fontSize: "1.2rem" }}>
          ✔️
        </button>
      </div>
    </div>
  );
};

export default NumericKeypad;
