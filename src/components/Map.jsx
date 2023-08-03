import React, { useState } from "react";
import GenerateGraph from "./GenerateGraph";
import { AiOutlineFileText } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FileUpload, csvUpload } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { mapAtom, csvAtom } from "../store";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { map } from "highcharts";

const Map = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Upload a pcap file");

  const [responseMessage, setResponseMessage] = useState(null);
  const [secresponseMessage, setsecResponseMessage] = useState(null);
  const [mapData, setMapData] = useAtom(mapAtom);
  const [csvData, setCsvData] = useAtom(csvAtom);

  const [csvFile, setCsvFile] = useState(null);
  const [csvName, setCsvName] = useState("Upload a csv file");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFilename(`${selectedFile.name}`);
      setFile(selectedFile);
    }
  };

  const handleCsvChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setCsvName(`${selectedFile.name}`);
      setCsvFile(selectedFile);
    }
  };

  const csvMutation = useMutation(csvUpload, {
    onSuccess: (data) => {
      setCsvData(data);
    },
  });

  const componentMutation = useMutation(FileUpload, {
    onSuccess: (data) => {
      setMapData(data);
      setResponseMessage(data.addresses);

      const componentsData = data.compenents;
      const keys = Object.keys(componentsData);
      const parsedComponentsArray = keys.map((key) => componentsData[key]);
      setsecResponseMessage(parsedComponentsArray);

      if (csvFile) {
        csvMutation.mutate(csvFile);
      }
    },
  });
  console.log("mapData", mapData, "csvData", csvData);

  return (
    <div className="h-screen ">
      {responseMessage ? (
        <div className="flex flex-row justify-center items-center pt-10 gap-7 z-1 ">
          {/* <div className="absolute w-[900px] h-[600px] bg-black bottom-10 left-5 rounded-2xl "></div> */}
          <div className="mt-10 ml-10">
            <GenerateGraph
              keyVar={`maingraph`}
              pcap={responseMessage}
              graphHeight={600}
              graphWidth={900}
              className={
                "flex justify-center items-center bg-[#0F4C75] bg-opacity-20 border-2 border-[#323232]  rounded-2xl "
              }
            />
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center">
            {secresponseMessage.map((result, index) => (
              <div key={index} className="relative">
                <GenerateGraph
                  keyVar={`component${index}`}
                  pcap={result}
                  graphHeight={250}
                  graphWidth={400}
                  className={
                    "flex justify-center items-center bg-[#0F4C75] bg-opacity-20 border-2 border-[#323232]   rounded-2xl "
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center  items-center text-[white] h-screen ">
          <div className="w-[80%] px-[20%] py-[5%] flex flex-col justify-center items-center bg-[#161616] rounded-2xl">
            <div className="w-[100%]">
              <fieldset className=" flex border py-3 pr-4 pl-4">
                <legend className="text-[0.7rem]">
                  Here is the .pcap file generated from previous step
                </legend>
                <div className=" w-full flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <AiOutlineFileText size={20} />
                    <span>filename.pcap</span>
                  </div>
                  <div>
                    <RxCross1 />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="mt-5 opacity-20">-----OR-----</div>
            <div className="mt-5 w-[100%]">
              <div className="w-full  flex gap-2 flex-col">
                <fieldset className="flex border py-2 pr-2 pl-3 b">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <span>{filename}</span>
                    </div>
                    <div>
                      <label className=" flex flex-col items-center px-6 py-2 rounded bg-[#2E59BF]   cursor-pointer">
                        <span className="text-base leading-normal">Upload</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="flex border py-2 pr-2 pl-3 b">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <span>{csvName}</span>
                      <span className="text-gray-500 text-xs">(optional)</span>
                    </div>
                    <div>
                      <label className=" flex flex-col items-center px-6 py-2 rounded bg-[#2E59BF]   cursor-pointer">
                        <span className="text-base leading-normal">Upload</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleCsvChange}
                          required={true}
                        />
                      </label>
                    </div>
                  </div>
                </fieldset>
                <h4 className=" text-green-400 text-xs ">
                  Note - uploading csv component will give you better results
                </h4>
              </div>
            </div>
            <div>
              <button
                className="mt-5 uppercase px-4 py-2 text-black bg-white"
                onClick={() => {
                  if (!file) toast.error("Please upload a pcap file");
                  componentMutation.mutate(file);
                }}
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
