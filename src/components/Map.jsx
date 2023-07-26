import React, { useState } from "react";
import GenerateGraph from "./GenerateGraph";

import { FileUpload } from "../api";

const Map = () => {
    const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [secresponseMessage, setsecResponseMessage] = useState(null);

const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    try {
      const responseData = await FileUpload(file);
      setResponseMessage(responseData.addresses);

      const componentsData = responseData.compenents;
      const keys = Object.keys(componentsData);
      const parsedComponentsArray = keys.map((key) => componentsData[key]);
      setsecResponseMessage(parsedComponentsArray);
    } catch (error) {
      console.error("Error occurred during file upload:", error.message);
    }
  };

  return (
    <div className="">
            
            {responseMessage ? (
              <div className="flex flex-col justify-center items-center pt-10 gap-10">
                
                <div >
                  <GenerateGraph keyVar={`maingraph`} pcap={responseMessage} graphHeight={600} graphWidth={1050} className={"flex justify-center items-center bg-gray-100 rounded-2xl "} />
                </div>

                
                <div className="flex flex-row gap-10 justify-center items-center">
                  {secresponseMessage.map((result, index) => (
                    <div key={index} className="">  
                      <GenerateGraph keyVar={`component${index}`} pcap={result} graphHeight={300} graphWidth={500} className={"flex justify-center items-center bg-gray-100 rounded-2xl mb-6"} />  
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
  )
}

export default Map