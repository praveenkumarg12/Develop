import React, { useState } from "react";

const mockProducts = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Milk", price: 50 },
  { id: 4, name: "Bread", price: 40 },
];

function ProductScroller({ onAdd }) {
  return (
    <div>
      <h3>Products</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {mockProducts.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            {p.name} - ₹{p.price}
            <button onClick={() => onAdd(p)} style={{ marginLeft: "10px" }}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductScroller;
