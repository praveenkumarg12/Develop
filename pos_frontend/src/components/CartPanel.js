import React from "react";

export default function CartPanel({ cart }) {
  const styles = {
    panel: {
      width: "350px",          // 👈 increased width
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      background: "#fafafa",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "12px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
      borderBottom: "1px solid #ccc", // 👈 line below heading
      paddingBottom: "6px",
    },
    itemList: {
      flex: 1,
      overflowY: "auto",
      marginBottom: "12px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: "14px",
    },
    summary: {
      borderTop: "1px solid #ccc", // 👈 line above subtotal
      paddingTop: "8px",
      fontWeight: "bold",
      textAlign: "right",
    },
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.panel}>
      {/* Heading with line below */}
      <div style={styles.heading}>Cart</div>

      {/* Scrollable item list */}
      <div style={styles.itemList}>
        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} style={styles.item}>
              <span>{item.name}</span>
              <span>₹{item.price.toFixed(2)}</span>
            </div>
          ))
        )}
      </div>

      {/* Fixed summary at bottom */}
      <div style={styles.summary}>
        <div>Total Items: {cart.length}</div>
        <div>Subtotal: ₹{subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
}
