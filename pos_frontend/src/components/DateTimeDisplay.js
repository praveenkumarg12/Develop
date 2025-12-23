import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
      {dateTime.toLocaleString()}
    </div>
  );
}

export default DateTimeDisplay;
