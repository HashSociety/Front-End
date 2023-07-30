import React, { useState } from "react";
import logo from "../assets/hero.png";
import homeimg from "../assets/Mask.png";
import { useNavigate, Link } from "react-router-dom";

function Home({ currentStep, setCurrentStep, user }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/map");
    setCurrentStep(currentStep + 1);
  };

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full gap-5 bg-dotted-spacing-10 bg-dotted-gray-600">
        <div className=" text-7xl inline mt-[10%] flex-col ml-[10%] uppercase">
          unveiling THE <br /> hidden{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-white">
            NETWORKS
          </span>
        </div>

        <div className="ml-[10%]  bg-black w-fit">
          Mesh Hawk is one tap solution which detects concealed mesh networks{" "}
          <br /> - reshaping cyber security for the better!!
          <div className="flex flex-col absolute bg-black rounded-lg">
            <div className="flex gap-5 ml-5 mt-7 w-fit pl-2 pr-2 py-2 bg-[#2D2D2D] rounded">
              <button className="border py-1 px-6 bg-white text-black  rounded">
                Get Started
              </button>
              <button className="py-1 px-6  rounded">Learn More</button>
            </div>

            <div className="bg-black px-6 py-4 rounded-lg" >
              <div className="mt-4">Select your desired time of scan --</div>
              <ul class="items-center  w-full text-sm font-medium rounded sm:flex bg-[#2D2D2D] border-[#2D2D2D] text-white mt-1">
                <li
                  class={`w-full border-b  sm:border-b-0 sm:border-r border-gray-600 px-3  ${
                    selectedValue === "15s" ? "selected" : ""
                  }`}
                >
                  <div class="flex items-center">
                    <input
                      id="radio-15s"
                      type="radio"
                      value="15s"
                      name="list-radio"
                      class="w-4 h-4 hidden"
                      onChange={handleRadioChange}
                    />
                    <label for="radio-15s" class="py-2 px-10 ">
                      15s
                    </label>
                  </div>
                </li>

                <li class={`w-full border-b  sm:border-b-0 sm:border-r border-gray-600 px-3 py-2 ${
                    selectedValue === "15s" ? "selected" : ""
                  }`}>
                  <div class="flex items-center">
                    <input
                      id="radio-30s"
                      type="radio"
                      value="30s"
                      name="list-radio"
                      class="w-4 h-4 hidden"
                      onChange={handleRadioChange}
                    />
                    <label
                      for="radio-30s"
                      class="py-2 px-10   "
                    >
                      30s
                    </label>
                  </div>
                </li>

                <li class={`w-full border-b  sm:border-b-0 sm:border-r border-gray-600 px-3 py-2 ${
                    selectedValue === "45s" ? "selected" : ""
                  }`}>
                  <div class="flex items-center">
                    <input
                      id="radio-60s"
                      type="radio"
                      value="45s"
                      name="list-radio"
                      class="w-4 h-4 hidden"
                      onChange={handleRadioChange}
                    />
                    <label
                      for="radio-60s"
                      class="py-2 px-10"
                    >
                      45s
                    </label>
                  </div>
                </li>

                <li class={`w-full border-b  sm:border-b-0 sm:border-r border-gray-600 px-3 py-2 ${
                    selectedValue === "60s" ? "selected" : ""
                  }`}>
                  <div class="flex items-center">
                    <input
                      id="radio-120s"
                      type="radio"
                      value="60s"
                      name="list-radio"
                      class="w-4 h-4 hidden"
                      onChange={handleRadioChange}
                    />
                    <label
                      for="radio-120s"
                      class="py-2 px-10  "
                    >
                      60s
                    </label>
                  </div>
                </li>

                <li
                  className={`w-full border-b sm:border-b-0 py-3  px-10 ${
                    selectedValue === "scan" ? "selected" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <button className="py-2 px-4 bg-secondary rounded " onClick={handleClick}>{`Scan ${selectedValue || " "}`}</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[60%]">
          <img
            src={homeimg}
            alt=""
            className=" mt-20 w-full rounded-2xl object-cover h-[90%]"
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
