import React, { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateString = dateTime.toLocaleDateString("en-IN"); // 🇮🇳 format: DD/MM/YYYY
  const timeString = dateTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "right" }}>
      <div>{dateString}</div>
      <div>{timeString}</div>
    </div>
  );
};

export default DateTimeDisplay;
