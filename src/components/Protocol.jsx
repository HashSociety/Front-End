import mesh from "../assets/kavach.png";
import logo from "../assets/logo-bg.png";
const Prototype = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <img
        src={logo}
        alt=""
        className="absolute top-0 right-0 w-[50%] overflow-hidden"
      />
      <div className=" w-[60%] bg-[#1A2850] pl-10 pt-5  rounded-3xl courier-font ">
        <div>
          <img src={mesh} alt="" />
        </div>
        <div className="text-2xl courier-font font-semibold text-[#C6D8FF]">
          Protocols <br />
          scanned!
        </div>

        <div className=" flex border-1 m-4 ml-0 border-r border-b rounded-2xl p-3 ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className="font-bold courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b rounded-2xl p-3 ">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className="font-bold courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b rounded-2xl p-3">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className="font-bold courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
        <div className=" flex border-1 m-4 ml-0 border-r border-b rounded-2xl p-3">
          <div className="text-2xl courier-font">1.</div>
          <div>
            <span className="font-bold courier-font text-2xl">AODB</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              explicabo!
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-10">
        <div className="h-full grid grid-cols-2  gap-5 ">
        <div className="flex flex-col p-3 border h-fit rounded-2xl bg-white text-black border-t-4 border-l-4 border-sky-500">
          <span className="text-2xl courier-font font-bold">Density</span>
          <p className="tex-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste!</p>
          <span className=" font-bold courier-font text-2xl text-primary">23.23</span>
        </div>
        <div className="flex flex-col p-3 border h-fit rounded-2xl bg-white text-black border-t-4 border-l-4 border-sky-500">
          <span className="text-2xl courier-font font-bold">Density</span>
          <p className="tex-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste!</p>
          <span className=" font-bold courier-font text-2xl text-primary">23.23</span>
        </div>
        <div className="flex flex-col p-3 border h-fit rounded-2xl bg-white text-black border-t-4 border-l-4 border-sky-500">
          <span className="text-2xl courier-font font-bold">Density</span>
          <p className="tex-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste!</p>
          <span className=" font-bold courier-font text-2xl text-primary">23.23</span>
        </div>
        <div className="flex flex-col p-3 border h-fit rounded-2xl bg-white text-black border-t-4 border-l-4 border-sky-500">
          <span className="text-2xl courier-font font-bold">Density</span>
          <p className="tex-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste!</p>
          <span className=" font-bold courier-font text-2xl text-primary">23.23</span>
        </div>
        </div>
        <div>
          <button className="border py-2 px-10 rounded-2xl courier-font ">Attack</button>
        </div>
      </div>

    </div>
  );
};

export default Prototype;
