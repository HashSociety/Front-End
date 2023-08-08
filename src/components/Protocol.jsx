import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
import { GiOverkill } from "react-icons/gi";
import { BiDownload } from "react-icons/bi";
import { mapAtom, csvAtom, selectedCompAtom } from "../store";
import { useAtom } from "jotai";

const Prototype = () => {
  const [mapData, setMapData] = useAtom(mapAtom);
  const [csvData, setCsvData] = useAtom(csvAtom);
  const [selected, setSelected] = useAtom(selectedCompAtom);

  // console.log("selected", selected[selected.length - 1][0]);
  // console.log("csvData", csvData);

  const selectedBSSID = selected[selected.length - 1][0].toUpperCase();

  const dataArray = Object.values(csvData.first_section);
  // console.log(dataArray);

  // const selectedObject = dataArray.find((data) => data.BSSID === selectedBSSID);
  // console.log(selectedObject);

  return (
    <div className="flex gap-10 w-full max-h-full  justify-center items-center ">
      <img
        src={logo}
        alt=""
        className="absolute top-0 right-0 w-[50%] overflow-hidden"
      />
      <div className="w-[40%] border bg-[#03051E] h-[80vh]  bg-opacity-30 pl-5 pt-3 text-white rounded-lg mt-10 ">
        <div className="text-2xl text-white uppercase mb-2"> Analyze!</div>
        <div>
          {dataArray.map((data, index) => {
            if (data.BSSID === selectedBSSID) {
              return (
                <div key={index} className="flex flex-col gap-3">
                  {Object.entries(data).map(([key, value]) => (
                    <p key={key}>
                      <b>{key}</b>: {value}
                    </p>
                  ))}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="flex flex-col w-[50%] h-[75vh] ">
        <div className="min-h-[60%] w-full border  rounded-2xl"></div>
        <div className="h-full grid grid-cols-4 rounded-2xl p-5 gap-6 mt-1">
          <div className="flex flex-col p-3 border  border-gray-500 h-full rounded-2xl  text-white ">
            <div className="flex flex-col items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>

            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border  border-gray-500 h-fit rounded-2xl  text-white ">
            <div className="flex flex-col items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border  border-gray-500 h-fit rounded-2xl  text-white ">
            <div className="flex flex-col items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border  border-gray-500 h-fit rounded-2xl  text-white ">
            <div className="flex flex-col items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
        </div>
      </div>

      <div className="flex  text-white fixed bottom-0 justify-center  p-1 rounded-xl text-3xl font-extrabold mb-4 shadow-2xl">
        <button className="  bg-red-700 hover:bg-red-600  rounded-s-xl py-1  px-4 font-normal flex items-center gap-2 justify-center ">
          Attack
          <GiOverkill />
        </button>
        <button className=" bg-gray-700 hover:bg-gray-600  rounded-e-xl py-1  px-4 font-normal flex items-center gap-2">
          Download
          <BiDownload />
        </button>
      </div>
    </div>
  );
};

export default Prototype;
