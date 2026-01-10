import React, { useState } from "react";
import DateTimeDisplay from "./components/DateTimeDisplay";
import Keypad from "./components/Keypad";
import CartPanel from "./components/CartPanel"; // 👈 new cart panel

function App() {
  const [cart, setCart] = useState([]);

  const handleBarcodeSubmit = (barcode) => {
    console.log("Barcode entered:", barcode);

    // Example: add dummy item to cart when barcode is submitted
    const newItem = { id: Date.now(), name: `Item ${barcode}`, price: 10.0 };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Left: Small scrollable cart */}
      <CartPanel cart={cart} />

      {/* Right: Keypad + DateTime */}
      <div style={{ flex: 1, position: "relative" }}>
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

        {/* Keypad below date/time */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginTop: "100px",
            marginRight: "20px",
          }}
        >
          <Keypad onSubmit={handleBarcodeSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
