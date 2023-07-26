import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css"
import GenerateGraph from "./components/GenerateGraph";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
<div className="main-container">
  <Navbar />
<Routes>
      
      <Route path="/" element={<Home/>}/>

      
      <Route
        path="/map"
        element={ 
          <div className="">
            
            {responseMessage ? (
              <div className="flex flex-col justify-center items-center pt-10 gap-10">
                
                <div >
                  <GenerateGraph keyVar={`maingraph`} pcap={responseMessage} graphHeight={600} graphWidth={1000} clasNameVar={"flex justify-center items-center bg-gray-100 rounded-2xl p-10 mb-1"} />
                </div>

                
                <div className="flex flex-row gap-10 justify-center items-center">
                  {secresponseMessage.map((result, index) => (
                    <div key={index} className="">
                      <GenerateGraph keyVar={`component${index}`} pcap={result} graphHeight={300} graphWidth={500} classNameVar={"flex justify-center items-center bg-gray-100 rounded-2xl p-10 mb-1"} />  
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
</div>
  );
};

export default App;