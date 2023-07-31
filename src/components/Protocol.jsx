import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
const Prototype = () => {
  return (
    <div className="flex gap-10 w-full justify-center items-center bg-dotted-spacing-10 bg-dotted-gray-200">
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
            <p>Protocols
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
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

      <div className="flex flex-col w-[50%] h-[80vh]">
        <div className="min-h-[60%] w-full bg-white rounded-2xl"></div>
        <div className="h-full grid grid-cols-2  gap-2 mt-10">
          <div className="flex flex-col p-3  h-fit rounded-2xl bg-white text-black ">
            <span className="text-2xl courier-font ">Density</span>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
            <span className=" courier-font text-2xl text-primary">
              23.23
            </span>
          </div>
          <div className="flex flex-col p-3  h-fit rounded-2xl bg-white text-black ">
            <span className="text-2xl courier-font ">Density</span>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
            <span className=" courier-font text-2xl text-primary">
              23.23
            </span>
          </div>
          <div className="flex flex-col p-3  h-fit rounded-2xl bg-white text-black ">
            <span className="text-2xl courier-font ">Density</span>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
            <span className=" courier-font text-2xl text-primary">
              23.23
            </span>
          </div>
          <div className="flex flex-col p-3  h-fit rounded-2xl bg-white text-black ">
            <span className="text-2xl courier-font ">Density</span>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
            <span className=" courier-font text-2xl text-primary">
              23.23
            </span>
          </div>
          <div className="flex flex-col p-3  h-fit rounded-2xl bg-white text-black ">
            <span className="text-2xl courier-font ">Density</span>
            <p className="tex-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, iste!
            </p>
            <span className="  courier-font text-2xl text-primary">
              23.23
            </span>
          </div>
          
         
        </div>
      </div>

      <div className="flex gap-5 fixed bottom-0 justify-center bg-black bg-opacity-50 p-1 w-full">
        <button className=" bg-white text-black py-1 px-10 rounded font-normal">
          Attack
        </button>
        <button className=" bg-white text-black py-2 px-10 rounded font-normal">
          Download
        </button>
      </div>
    </div>
  );
};

export default Prototype;
