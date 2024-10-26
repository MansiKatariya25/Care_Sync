import React from "react";

function Top() {
  return (
    <div>
      <div className="p-10 flex justify-between w-[85vw] mx-24">
        <div className="">
         <img src="./asset/plus.png" className="w-[25px] h-[25px] border-2 rounded-full "/>
          <img
            src="./asset/doctor.jpg"
            className="w-[98px] h-[97px] rounded-full border-2 p-2"
          />
          <div className="text-right">
            <p className="">Choose your</p>
            <p>doctor</p>
          </div>
        </div>
        <div className="text-7xl w-[37vw]">
          <p>Take control</p>
          <p className="ml-[15%]">of your health.</p>
        </div>
        <div className="w-[10vw] pt-16 flex flex-col justify-between">
          <p>Your gateway to health & care.</p>
          <p className="text-lg text-gray-500 underline">Welcome</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Top;
