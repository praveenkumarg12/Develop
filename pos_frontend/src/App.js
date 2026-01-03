import React, { useState } from "react";

const products = [
  { name: "Apple", price: 2 },
  { name: "Banana", price: 1 },
  { name: "Orange", price: 3 },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [barcode, setBarcode] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddProduct = () => {
    setCart([...cart, selectedProduct]);
  };

  const handleKeypadClick = (num) => {
    setBarcode(barcode + num);
  };

  const handleClear = () => setBarcode("");

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Left side: product dropdown */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Products</h2>
        <select
          value={selectedProduct.name}
          onChange={(e) =>
            setSelectedProduct(products.find((p) => p.name === e.target.value))
          }
        >
          {products.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name} - ${p.price}
            </option>
          ))}
        </select>
        <button onClick={handleAddProduct} style={{ marginLeft: "10px" }}>
          Add
        </button>

        <h3>Cart</h3>
        <ul>
          {cart.map((p, i) => (
            <li key={i}>
              {p.name} - ${p.price}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: keypad */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Barcode Entry</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 80px)",
            gap: "10px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleKeypadClick(num)}
              style={{ fontSize: "20px", padding: "20px" }}
            >
              {num}
            </button>
          ))}
          <button onClick={handleClear}>Clear</button>
        </div>
        <p>Barcode: {barcode}</p>
      </div>

      {/* Bottom total */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "#eee",
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Total: ${total}
      </div>
    </div>
  );
}
