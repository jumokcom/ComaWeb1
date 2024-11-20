import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Spring Boot API 호출
    fetch("http://localhost:8080/api/hello")
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
      <div>
        <h1>React + Spring Boot</h1>
        <p>{message}</p>
      </div>
  );
}

export default App;
