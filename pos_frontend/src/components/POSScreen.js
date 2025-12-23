import React, { useState } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import ManualBarcodeInput from "./ManualBarcodeInput";
import TotalValueDisplay from "./TotalValueDisplay";
import ProductScroller from "./ProductScroller";

function POSScreen() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left side: product list */}
      <div style={{ flex: 2, overflowY: "scroll", padding: "10px" }}>
        <ProductScroller onAdd={handleAddProduct} />
      </div>

      {/* Right side: controls */}
      <div style={{ flex: 1, padding: "10px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <DateTimeDisplay />
        <ManualBarcodeInput />
        <TotalValueDisplay total={total} />
      </div>
    </div>
  );
}

export default POSScreen;
