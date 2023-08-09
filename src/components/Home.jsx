import React, { useState } from "react";
import logo from "../assets/hero.png";
import homeimg from "../assets/Mask1.png";
import { useNavigate, Link } from "react-router-dom";
import { useAtom } from "jotai";
import { mapAtom } from "../store";
import { scanNetwork } from "../api";
import { useMutation } from "@tanstack/react-query";
import Loading from "./Loading";
import { toast } from "react-toastify";

function Home({ user }) {
  const [mapData, setMapData] = useAtom(mapAtom);
  const [showTest, setShowTest] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const navigate = useNavigate();
  const scanMutation = useMutation(scanNetwork, {
    onSuccess: async () => {
  
      await new Promise(r => setTimeout(r,(selectedValue + 15)*1000 ));
      navigate("/map");
    },
  });

  const scan = () => {
    setShowTest((prevShowTest) => !prevShowTest);
  };

  const handleScan = () => {
    if (!selectedValue) {
      toast.error("please select duration");
      return;
    }
    scanMutation.mutate(selectedValue);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full gap-5 ">
        <div className=" text-7xl inline mt-[10%] flex-col ml-[10%] uppercase">
          unveiling THE <br /> hidden{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-white">
            NETWORKS
          </span>
        </div>
        {/* <button onClick={() => scanNetwork(8)}>scan</button> */}

        <div className="ml-[10%]  bg-black w-fit">
          Mesh Hawk is one tap solution which detects concealed mesh networks{" "}
          <br /> - reshaping cyber security htmlFor the better!!
          {user && (
            <div className="flex flex-col absolute bg-black rounded-lg ">
              <div className="flex gap-5 ml-5 mt-7 w-fit pl-2 pr-2 py-2 bg-[#2D2D2D] rounded">
                <button
                  className="border py-1 px-6 bg-white text-black rounded"
                  onClick={scan}
                >
                  Get Started
                </button>
                <button className="py-1 px-6  rounded">Learn More</button>
              </div>
              {user && (
                <div
                  className={`bg-black px-6 py-4 rounded-lg transition-all test  ${
                    showTest ? "" : "hidden"
                  }`}
                >
                  <div className="mt-4">
                    Select your desired time of scan --
                  </div>
                  <ul className="items-center  w-full text-sm font-medium rounded sm:flex text-white mt-1 gap-2">
                    <li
                      className={`w-full    transition-all duration-75 ease-in-out rounded-lg  px-3 py-2 font-bold border-blue-500 border-[1px] ${
                        selectedValue === 15
                          ? "text-white bg-blue-700 "
                          : "  bg-blue-500/20 text-blue-700   hover:bg-blue-700 hover:text-white"
                      }`}
                      onClick={() => setSelectedValue(15)}
                    >
                      <div className="flex items-center cursor-pointer">
                        <input
                          id="radio-15s"
                          type="radio"
                          value={15}
                          name="list-radio"
                          className="w-4 h-4 hidden "
                          // onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="radio-15s"
                          className=" px-10 cursor-pointer"
                        >
                          Quick
                        </label>
                      </div>
                    </li>

                    <li
                      className={`w-full    transition-all duration-75 ease-in-out rounded-lg  px-3 py-2 font-bold border-purple-500 border-[1px] ${
                        selectedValue === 30
                          ? "text-white bg-purple-700 "
                          : "  bg-purple-500/20 text-purple-700   hover:bg-purple-700 hover:text-white"
                      }`}
                      onClick={() => setSelectedValue(30)}
                    >
                      <div className="flex items-center cursor-pointer">
                        <input
                          id="radio-30s"
                          type="radio"
                          value={30}
                          name="list-radio"
                          className="w-4 h-4 hidden"
                          // onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="radio-30s"
                          className=" px-10  cursor-pointer  "
                        >
                          Intermediate
                        </label>
                      </div>
                    </li>

                    <li
                      className={`w-full    transition-all duration-75 ease-in-out rounded-lg  px-3 py-2 font-bold border-teal-500 border-[1px] ${
                        selectedValue === 45
                          ? "text-white bg-teal-700 "
                          : "  bg-teal-500/20 text-blue-700-600   hover:bg-teal-800 hover:text-white"
                      }`}
                      onChange={() => setSelectedValue(45)}
                    >
                      <div className="flex items-center cursor-pointer">
                        <input
                          id="radio-60s"
                          type="radio"
                          value={45}
                          name="list-radio"
                          className="w-4 h-4 hidden"
                        />
                        <label
                          htmlFor="radio-60s"
                          className=" px-10 cursor-pointer"
                        >
                          Advanced
                        </label>
                      </div>
                    </li>

                    <li
                      className={`w-full border-b sm:border-b-0 py-3  px- ${
                        selectedValue === "scan" ? "selected" : ""
                      }`}
                    >
                      <div className="flex items-center ">
                        {scanMutation.isLoading ? (
                          <Loading />
                        ) : (
                          <button
                            className="py-2 px-6 bg-secondary rounded  font-bold  "
                            onClick={handleScan}
                          >
                            Scan
                          </button>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="h-[60%] ">
          <img
            src={homeimg}
            alt=""
            className=" bg-black  mt-20 w-full rounded-2xl object-cover h-[90%]"
          />
        </div>
        <div className="mt-10">
          asdad Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Corporis unde suscipit, quam quisquam vel illo minus facilis est
          magnam laboriosam voluptatum, voluptatibus, harum nemo veritatis quasi
          placeat et hic culpa asperiores officia neque deserunt. Blanditiis ea
          impedit, sequi maxime dolorem magnam! Aliquid ratione nesciunt at
          deleniti quidem adipisci ullam nihil, qui, expedita non totam nemo
          distinctio neque inventore, officia dolores itaque impedit ad veniam
          id! Adipisci quidem tenetur sint molestiae ipsum error, eligendi esse
          assumenda rem nesciunt modi eveniet reiciendis quam dolorum expedita,
          saepe itaque, molestias ad consectetur omnis magni quo laborum. Quam
          quisquam quis alias nesciunt tenetur veritatis excepturi.
        </div>
        {/* <div className="flex flex-row gap-4">
            {user ? (
              <button
                href="/map"
                className="text-xl font-semibold my-5 ml-1 px-3 rounded-3xl bg-yellow-200 text-black group/demo cursor-pointer "
                onClick={handleClick}
              >
                Automated Scan{" "}
                <span className="pl-2 text-2xl group-hover/demo:pl-5 transition-all duration-300 ease-in-out ">
                  &rarr;{" "}
                </span>
              </button>
            ) : (
              <Link to="/login" className="text-xl font-semibold my-5 ml-1 px-3 rounded-3xl bg-primary group/demo cursor-pointer ">
                Login &rarr;{" "}
              </Link>
            )}
          </div> */}
      </div>
    </>
  );
}

export default Home;
