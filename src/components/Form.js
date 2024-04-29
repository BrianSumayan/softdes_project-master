import React, { useState } from "react";

export default function Form({ onUpdateStatus }) {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:8000/PHP/server.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        setResult(data);
        onUpdateStatus(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" onChange={handleFileChange} />
        <button type="submit">SUBMIT</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}
