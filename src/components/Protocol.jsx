import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
import { GiOverkill } from "react-icons/gi";
import { BiDownload } from "react-icons/bi";
const Prototype = () => {
  return (
    <div className="flex gap-10 w-full justify-center items-center ">
      <img
        src={logo}
        alt=""
        className="absolute top-0 right-0 w-[50%] overflow-hidden"
      />
      <div className="w-[40%] bg-[#F4F5F5] pl-5 pt-3 rounded-lg mt-20 ">
        <div className="text-2xl text-black uppercase"> Analyze!</div>

        <div className=" flex border-1 m-4 ml-0 border-r border-b border-gray-300 rounded-2xl p-3 text-black">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className=" courier-font text-2xl">AODB</span>
            <p>
              Protocols Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Optio, explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b border-gray-300 rounded-2xl p-3 text-black  ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className=" courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b border-gray-300 rounded-2xl p-3 text-black ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className=" courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b  border-gray-300 rounded-2xl p-3 text-black ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className=" courier-font text-2xl ">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b  border-gray-300 rounded-2xl p-3 text-black ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className=" courier-font text-2xl ">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[50%] h-[80vh] ">
        <div className="min-h-[60%] w-full bg-white rounded-2xl"></div>
        <div className="h-full grid grid-cols-2 bg-[#DFE0E0] rounded-2xl p-5 gap-6 mt-5">
          <div className="flex flex-col p-3 border-r-4 border-b-4  border-gray-500 h-fit rounded-2xl  text-black ">
            <div className="flex items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border-l-4 border-b-4  border-gray-500 h-fit rounded-2xl  text-black ">
            <div className="flex items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border-r-4 border-b-4  border-gray-500 h-fit rounded-2xl  text-black ">
            <div className="flex items-center justify-between">
              <span className="text-2xl courier-font ">Density</span>
              <div className="text-2xl">23.3</div>
            </div>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
          </div>
          <div className="flex flex-col p-3 border-l-4 border-b-4  border-gray-500 h-fit rounded-2xl  text-black ">
            <div className="flex items-center justify-between">
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
