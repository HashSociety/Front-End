import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
import { GiOverkill } from "react-icons/gi";
import { BiDownload } from "react-icons/bi";
import { mapAtom, csvAtom, selectedCompAtom } from "../store";
import { useAtom } from "jotai";
import { PiDotsNineDuotone } from "react-icons/pi";
import { MdSocialDistance } from "react-icons/md";
import ComponentGraph from "./ComponentGraph";

const Prototype = () => {
  const [mapData, setMapData] = useAtom(mapAtom);
  const [csvData, setCsvData] = useAtom(csvAtom);
  const [selected, setSelected] = useAtom(selectedCompAtom);

  // console.log("selected", selected[selected.length - 1][0]);
  // console.log("csvData", csvData);

  const selectedBSSID =
    selected.component_edges[
      selected.component_edges.length - 1
    ][0].toUpperCase();

  // console.log("data", selected.component_edges)

  const dataArray = Object.values(csvData.first_section);
  // console.log(dataArray);

  // const selectedObject = dataArray.find((data) => data.BSSID === selectedBSSID);
  // console.log(selectedObject);

  return (
    <div className="flex gap-4 w-full max-h-full  justify-center items-center ">
      <img
        src={logo}
        alt=""
        className="absolute top-0 right-0 w-[50%] overflow-hidden"
      />

      <div className="w-[40%]  bg-secondary/10 h-[80vh]  bg-opacity-30 pl-5 pt-3 text-white rounded-lg mt-10  flex items-center text-xl">
        <div>
          {dataArray.map((data, index) => {
            if (data.BSSID === selectedBSSID) {
              return (
                <div key={index} className="flex flex-col gap-3">
                  {Object.entries(data).map(([key, value]) => {
                    if (!["BSSID", "ESSID"].includes(key)) {
                      return (
                        <p key={key}>
                          {key}: <span className="font-bold">{value}</span> 
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="flex flex-col w-[50%] h-[75vh] gap-3 ">
        <div className="min-h-[60%] w-full bg-secondary/10 rounded-2xl">
          {" "}
          <ComponentGraph pcap={selected} />{" "}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center p-1  gap-4 bg-secondary/25 rounded-xl">
            <div className="bg-secondary rounded-xl px-3 py-1 ">
              {" "}
              <PiDotsNineDuotone /> Density
            </div>
            <div className="px-3 py-1 font-bold text-secondary">
              {parseFloat(selected.density.toFixed(3))}
            </div>
          </div>
          <div className="flex items-center p-1  gap-4 bg-orange-500/25 rounded-xl">
            <div className="bg-orange-500 rounded-xl px-3 py-1 ">
              {" "}
              <MdSocialDistance /> Distance
            </div>
            <div className="px-3 py-1 font-bold text-orange-500">
              {parseFloat(selected.diameter.toFixed(3))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex  text-white fixed bottom-0 justify-center  p-1 rounded-xl text-3xl font-extrabold mb-4 shadow-2xl">
        <button className="  bg-red-700 hover:bg-red-600  rounded-s-xl py-1  px-4 font-normal flex items-center gap-2 justify-center ">
          Attack
          <GiOverkill />
        </button>
        <button className=" bg-gray-700 hover:bg-gray-600  rounded-e-xl py-1  px-4 font-normal flex items-center gap-2">
          Download
          <BiDownload />
        </button>
      </div> */}
    </div>
  );
};

export default Prototype;
