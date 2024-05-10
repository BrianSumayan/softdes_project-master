// components/EngineSoundForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EngineSoundForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('sound', file);

    try {
      const response = await axios.post('http://192.168.1.15:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default EngineSoundForm;
