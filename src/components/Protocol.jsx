import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
import { GiOverkill } from "react-icons/gi";
import { BiDownload } from "react-icons/bi";
import { mapAtom, csvAtom, selectedCompAtom } from "../store";
import { useAtom } from "jotai";

const Prototype = () => {
  const [mapData, setMapData] = useAtom(mapAtom);
  const [csvData, setCsvData] = useAtom(csvAtom);
  const [selected , setSelected] = useAtom(selectedCompAtom)



  const protocolData = []
 
  if(csvData){
    csvData.first_section.map((data) => protocolData.push(data))
  }

  return (
    <div className="flex gap-10 w-full max-h-full  justify-center items-center ">
      <img
        src={logo}
        alt=""
        className="absolute top-0 right-0 w-[50%] overflow-hidden"
      />
      <div className="w-[40%] border bg-[#03051E] h-[80vh]  bg-opacity-30 pl-5 pt-3 text-white rounded-lg mt-20 ">
        <div className="text-2xl text-white uppercase"> Analyze!</div>

        {selectedCsvObject && (
          <div className="flex flex-col gap-3 p-3">
            {Object.entries(selectedCsvObject).map(([key, value], index) => (
              <div key={index} className="rounded-lg text-white">
                <p>
                  <span className="font-bold">{key}: </span>
                  {value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col w-[50%] h-[70vh] ">
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
