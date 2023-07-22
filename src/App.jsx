import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import GenerateGraph from "./components/GenerateGraph";

const App = () => {
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) return; // No file selected

    const formData = new FormData();
    formData.append("pcapng_file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Assuming the server responds with the addresses data in the "pcap" format
        setResponseMessage(response.data.addresses);
      } else {
        console.error("Failed to upload the file.");
        // Handle error response from the backend if needed
      }
    } catch (error) {
      console.error("Error occurred during file upload:", error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-screen w-screen flex justify-center items-center flex-col gap-10">
            <div className="font-bold text-3xl">Mesh Hawk</div>
            {responseMessage ? (
              <GenerateGraph pcap={responseMessage} />
            ) : (
              <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload</button>
              </div>
            )}
          </div>
        }
      />
    </Routes>
  );
};

export default App;
