import React from "react";
import SideBar from "../Dashboard/SideBar";

function Details({ changeState }) {
  const details = [
    {
      name: "Mansi katariya",
      relation: "xyz",
      age: "20",
      gender: "xyz",
      height: "xyz",
      weight: "40",
      bmi: "20",
    },
    {
      name: "Raj Singh",
      relation: "xyz",
      age: "20",
      gender: "xyz",
      height: "xyz",
      weight: "50",
      bmi: "20",
    },
  ];

  const handlePopup = () => {
    changeState();
  };

  return (
    <>
      <div className="flex absolute">
        <SideBar />
        <div className="absolute top-[10vh] left-[8vw]">
          <div className=" flex gap-10 p-10 ">
            <div className="bg-gradient-to-r from-purple-300 via-purple-400 to-violet-500 p-2  w-[30vw] rounded-xl  flex items-center gap-2 border justify-between ">
              <input
                type="text"
                placeholder="Search your family members here......"
                className="p-2 rounded-lg outline-none w-full"
              />
              <button className="bg-black text-white p-2 w-24  rounded-lg">
                Search
              </button>
            </div>
            <div
              onClick={handlePopup}
              className="flex items-center gap-2 p-2 rounded-2xl bg-violet-300 "
            >
              <img src="./asset/addm.png" className="w-[20px] h-[20px]" />
              <p className="font-bold cursor-pointer">Add New Members</p>
            </div>
          </div>
          <div className="tablediv p-4 bg-black text-white w-[85vw] h-[55vh] border rounded-2xl">
            <div className=" w-full flex p-4 gap-24 items-center ">
              <p className="w-[2vw] text-center">Number</p>
              <p className="w-[18vw] text-center">Name of your family member</p>
              <p className="w-[4vw] text-center">Relation</p>
              <p className="w-[4vw] text-center">Age</p>
              <p className="w-[4vw] text-center">Gender</p>
              <p className="w-[4vw] text-center">Height</p>
              <p className="w-[4vw] text-center">Weight</p>
              <p className="w-[4vw] text-center">BMI</p>
            </div>
            <div className="flex flex-col h-[85%] gap-6 overflow-y-scroll">
              {details.map((items, i) => {
                return (
                  <div
                    className="flex p-4 gap-24 align-middle bg-white text-black rounded-xl"
                    key={i}
                  >
                    <p className="w-[2vw] text-center">{i + 1}</p>
                    <p className="w-[18vw] text-center">{items.name}</p>
                    <p className="w-[4vw] text-center">{items.relation}</p>
                    <p className="w-[4vw] text-center">{items.age}</p>
                    <p className="w-[4vw] text-center">{items.gender}</p>
                    <p className="w-[4vw] text-center">{items.height}</p>
                    <p className="w-[4vw] text-center">{items.weight}</p>
                    <p className="w-[4vw] text-center">{items.bmi}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
