import React, { useState } from "react";

function ManualBarcodeInput() {
  const [barcode, setBarcode] = useState("");

  const handleClick = (digit) => {
    setBarcode((prev) => prev + digit);
  };

  const handleClear = () => {
    setBarcode("");
  };

  return (
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          fontSize: "18px",
          marginBottom: "10px",
          background: "#f0f0f0",
        }}
      >
        {barcode || "Enter barcode"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleClick(num)} style={{ padding: "10px", fontSize: "16px" }}>
            {num}
          </button>
        ))}
        <button onClick={handleClear} style={{ gridColumn: "span 3", padding: "10px", fontSize: "16px" }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default ManualBarcodeInput;
