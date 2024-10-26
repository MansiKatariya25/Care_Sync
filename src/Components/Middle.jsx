import React from "react";
import Progress from "./Progress";

function Middle() {
  return (
    <div className="p-8">
      <div className="flex w-full gap-6 ml-6 ">
        <div className="flex h-[58vh] gap-2">
          <Progress />
          <img
            src="./asset/arrowb.png"
            className=" text-white w-[40px] h-[40px] rounded-full bg-slate-200 p-2"
          />
          <img
            src="./asset/arrowf.png"
            className=" text-white w-[40px] h-[40px] rounded-full bg-slate-300 p-2"
          />
        </div>
        <div className="divBg h-[58vh] p-2 w-[23vw] rounded-3xl flex flex-col justify-end ml-6">
          <div className="h-[20vh] w-[20vw] p-3 flex flex-col justify-between">
            <p className="text-white text-lg bg-transparent border-white border-2 rounded-3xl ml-4 w-[15vw] text-center p-2">
              virtual consultations
            </p>
            <div className="flex justify-evenly">
              <p className="text-white bg-transparent border-white border-2 rounded-full w-[60px] h-[60px] flex items-center p-2">
                24/7
              </p>
              <img
                src="./asset/plusw.png"
                className="bg-transparent h-[60px] w-[60px] border-white border-2 rounded-full p-2"
              />
              <p className="text-white bg-transparent w-[8vw] border-white border-2 rounded-full text-center flex items-center p-2">
                user friendly
              </p>
            </div>
          </div>
        </div>
        <div className="div2Bg h-[58vh] w-[15vw] rounded-3xl flex flex-col justify-end">
          <div className="flex p-2 justify-center items-center">
            <p className="text-white w-[120px] text-sm bg-transparent border-white border-2 rounded-3xl text-center p-2">
              telemedicine
            </p>
            <p className="text-white text-sm bg-transparent w-[40px] border-white border-2 rounded-3xl text-center p-2">
              i
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between h-[58vh] w-[15vw] p-4 bg-zinc-100 rounded-3xl">
            <div className="h-[18vh] flex flex-col justify-between">
              <p className="text-3xl">Telehealth solutions.</p>
              <p className="bg-orange-400 text-sm text-center align-middle text-white w-[8vw] h-[6vh] rounded-3xl p-2">
                Explore
                <span class="material-symbols-outlined rotate-[-90deg]">
                  keyboard_arrow_down
                </span>
              </p>
            </div>
            <div className=" flex flex-col justify-evenly h-[25vh]">
              <p className=" w-[70px] text-center bg-transparent p-1 border-2 border-slate-600 rounded-3xl">
                about
              </p>
              <p className="text-[17px] w-full">
                Our platform connects you with trusted healthcare...
              </p>
              <p className="text-gray-400 underline">Read More.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between ml-[10vw]">
          <div>
            <img
              src="./asset/refresh.png"
              className="h-[50px] w-[50px] border-gray-400 border-2 rounded-full p-3"
            />
            </div>
            <div className="flex flex-col justify-evenly h-[25vh]">
              <p className=" text-xl text-center font-bold h-[50px] w-[50px] border-gray-400 border-2 rounded-full p-2">in</p>
              <img src="./asset/fb.svg" className="h-[50px] w-[50px] border-gray-400 border-2 rounded-full p-3"/>
              <img src="./asset/twi.svg" className="h-[50px] w-[50px] border-gray-400 border-2 rounded-full p-3"/>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Middle;
