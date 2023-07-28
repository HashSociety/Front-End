import React from "react";
import logo from "../assets/hero.png";
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";

function Home({ currentStep, setCurrentStep }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/map");
    setCurrentStep(currentStep + 1);
    
  };
  return (
    <>
    <Navbar />
      <div className="flex flex-row justify-between width-100">
        <div className="font-semibold text-7xl flex min-h-[38rem] flex-col justify-center  items-start pl-8">
          Mesh Detection
          <span className="text-primary "> made easy!!</span>
          <div className="flex flex-row gap-4">
            <button
              href="/map"
              className="text-xl font-semibold my-5 ml-1 px-3 rounded-3xl bg-primary group/demo cursor-pointer "
              onClick={handleClick}
            >
              Automated Scan{" "}
              <span className="pl-2 text-2xl group-hover/demo:pl-5 transition-all duration-300 ease-in-out text-[white]">
                &rarr;{" "}
              </span>
            </button>
            <button
              href="/map"
              className="text-xl font-extralight py-5 pl-1 group/demo cursor-pointer"
              onClick={handleClick}
            >
              Manual Scan{" "}
              <span className="pl-2 text-2xl group-hover/demo:pl-5 transition-all duration-300 ease-in-out text-primary">
                &rarr;{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-end pr-8  items-center">
          <img className=" object-contain" src={logo} width="65%" alt="img" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold p-8  pt-10 ">Our Services</h1>

        <div className="flex  flex-row p-2 gap-3 width-100 pt-6 justify-evenly">
          <div className=" w-[100%] relative bg-content-bg rounded-2xl p-10 overflow-hidden ">
            <div className="absolute bottom-[-20px] right-[-20px] font-extrabold text-9xl text-[white] opacity-10 ">
              01
            </div>
            <div className="font-bold text-lg mb-4">
              Real-time Network Detection{" "}
            </div>
            <div className="flex-grow border-t border-gray-400 opacity-10 w-[90%]"></div>
            <p className="pt-4 ">
              Detects the presence of any mesh network around a region.
            </p>
          </div>

          <div className=" w-[100%] relative bg-content-bg rounded-2xl p-10 overflow-hidden ">
            <div className="absolute bottom-[-20px] right-[-20px] font-extrabold text-9xl text-[white] opacity-10 ">
              02
            </div>
            <div className="font-bold text-lg mb-4">
              Network Security and Monitoring{" "}
            </div>
            <div className="flex-grow border-t border-gray-400 opacity-10 w-[90%]"></div>
            <p className="pt-4 ">
              The service can be leveraged to detect security threats and ensure
              safety.
            </p>
          </div>  

          <div className=" w-[100%] relative bg-content-bg rounded-2xl p-10 overflow-hidden ">
            <div className="absolute bottom-[-20px] right-[-20px] font-extrabold text-9xl text-[white] opacity-10 ">
              03
            </div>
            <div className="font-bold text-lg mb-4">App Detection </div>
            <div className="flex-grow border-t border-gray-400 opacity-10 w-[90%]"></div>
            <p className="pt-4 ">Detects the application being used.</p>
          </div>
        </div>
      </div>
      {/* <div className="absolute z-[-1] h-[150%] translate-x-[-142px] translate-y-[-580px] opacity-40 aspect-square  rounded-3xl rotate-[45deg] bg-[black] top-0 left-0"> </div> */}
    </>
  );
}

export default Home;
