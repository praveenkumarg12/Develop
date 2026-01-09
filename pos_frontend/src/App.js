import React from "react";
import DateTimeDisplay from "./components/DateTimeDisplay";
import Keypad from "./components/Keypad";

function App() {
  const handleBarcodeSubmit = (barcode) => {
    console.log("Barcode entered:", barcode);
  };

  return (
    <div
      className="App"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Top-right corner: Date and Time */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          textAlign: "right",
        }}
      >
        <DateTimeDisplay />
      </div>

      {/* Right-aligned keypad + entry box */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginTop: "100px",   // 👈 pushes it below date/time
          marginRight: "20px",
        }}
      >
        <Keypad onSubmit={handleBarcodeSubmit} />
      </div>
    </div>
  );
}

export default App;
