import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import SideBar from "../Dashboard/SideBar";

function Questions() {
  const [selectOption, setSelectOption] = useState(null);

  const handleOption = (event) => {
    setSelectOption(event.target.value);
  };
  console.log(selectOption);

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden absolute">
      <Navbar />
      <div className="flex absolute top-[40px]">
        <SideBar />

        <div className="w-[90vw] h-[100vh] flex justify-center items-center  ">
          <div className="bg-[rgb(221,235,236)] w-[40%] absolute left-[32vw] h-[80%] p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex gap-4">
              <img src="./asset/back.png" className="w-[30px] h-[30px]" />
              <p className="text-2xl">Diagnose</p>
            </div>
            <div className="flex flex-col gap-4 overflow-y-scroll h-[100%] p-4">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="self"
                  value="self"
                  onChange={handleOption}
                />
                <span className="text-gray-400  font-bold">Self</span>
                <input
                  type="radio"
                  value="other"
                  name="self"
                  onChange={handleOption}
                />
                <span className="text-gray-400  font-bold">
                  Other family members
                </span>
              </div>
              <div>
                {selectOption === "other" ? (
                  <div>
                    <p>Select family member</p>
                    <select>
                      <option>Raj Singh</option>
                      <option>Mansi katariya</option>
                    </select>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col w-[50%] bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400  font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <div className="flex flex-col  bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400  font-bold">
                  Issue you are facing ?
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <div className="flex flex-col  bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400  font-bold">
                  How long have you been facing this issue ?
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <div className="flex flex-col  bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400  font-bold">
                  Is there any other symptoms you noticed ?<br></br>
                  Ex. Fever,headache,nausea etc mention if any
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <button className="text-white bg-black p-2 rounded-3xl">
                Diagnose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
