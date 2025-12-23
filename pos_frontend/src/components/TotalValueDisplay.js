import React from "react";

function TotalValueDisplay({ total }) {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
      Total: ₹{total.toFixed(2)}
    </div>
  );
}

export default TotalValueDisplay;
