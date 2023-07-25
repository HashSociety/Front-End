import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import GenerateGraph from "./components/GenerateGraph";
import Gen from "./components/GenGraph2";
const App = () => {
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [secresponseMessage, setsecResponseMessage] = useState(null);

  // console.log(secresponseMessage)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) return; // No file selected

    const formData = new FormData();
    formData.append("pcapng_file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setResponseMessage(response.data.addresses);

        // console.log(response.data.compenents)
        const compenentsData = response.data.compenents;
        const keys = Object.keys(compenentsData); // Get the keys (e.g., ["1", "2", "3", ...])
        const parsedCompenentsArray = keys.map((key) => compenentsData[key]);
        // console.log(parsedCompenentsArray)
        // const flattenedArray = parsedCompenentsArray.flat();
        setsecResponseMessage(parsedCompenentsArray);  
        // console.log(flattenedArray)
      } else {
        console.error("Failed to upload the file.");
        // Handle error response from the backend if needed
      }
    } catch (error) {
      console.error("Error occurred during file upload:", error);
    }
  };
  const createcomponent = ({data}
  ) => {
    return <GenerateGraph pcap={data} />
  }
  return (
    <Routes>
      <Route
        path="/"
        element={ 
          <div className="h-screen w-screen flex flex-col bg-[#0F121B] overflow-auto">
            <div className="font-bold text-3xl text-[white] text-center">Mesh Hawk</div>
            {responseMessage ? (
              <div className="flex gap-10 px-20 pt-10">
                
                <div >
                  <GenerateGraph pcap={responseMessage} graphHeight={600} graphWidth={900} />
                </div>

                
                <div className="">
                  {secresponseMessage.map((result, index) => (
                    <div key={index} className="">
                      <GenerateGraph keyVar={index} pcap={result} graphHeight={300} graphWidth={400} />  
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-center  items-center text-[white] h-screen">
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