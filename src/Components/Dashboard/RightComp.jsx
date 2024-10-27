import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RightComp() {
  return (
    <div className="flex ">
      <div className=" left flex flex-col gap-2 p-7">
        <div className="bg-[url('./asset/lblue.jpg')] flex gap-10 border bg-cover rounded-3xl w-[68vw] h-[55vh] p-4">
          <div >
            <p className="text-white text-3xl w-[15vw]">Your Health overview</p>
            <div className="flex flex-col justify-between bg-slate-600/40 backdrop-blur-md backdrop-filter rounded-3xl w-[15vw] h-[40vh] p-4">
              <div className="flex">
                <div className="flex flex-col">
                  <p className="text-white w-[8vw]">
                    Not enough information about sleep
                  </p>
                  <div className="flex mt-2">
                    <p className="text-white border border-white text-center w-[3vw] p-1 text-[10px]">
                      Quality
                    </p>
                    <p className="text-gray-400 bg-white border border-white rounded-2xl text-center w-[3vw] p-1 text-[10px] ml-1">
                      Time
                    </p>
                  </div>
                </div>
                <img
                  src="./asset/sleep.jpg"
                  className="w-[70px] h-[70px] rounded-xl"
                />
              </div>
              <div>
                <p className="text-sm text-white">
                  The secret to a healthy heart
                </p>
                <p className="text-[12px] text-white">
                  {" "}
                  a healthy heart is the basis for a long and active life.Here
                  are some key secrets that helps maintain a healthy
                </p>
                <div className="bg-slate-300 flex justify-evenly items-center rounded-3xl p-2 w-[8vw] ">
                  <p className="text-white text-sm">Add info</p>
                  <img
                    src="./asset/plusw.png"
                    className="w-[30px] h-[30px] bg-slate-100 rounded-full p-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[54vw] h-[55vh] gap-2">
            <div className="bg-slate-500/40 h-[50vh] w-[18vw] backdrop-blur-md backdrop-filter text-[12px] rounded-3xl p-4">
              <p className="text-white text-3xl font-bold p-2">
                Your health sats
              </p>
             <div className="flex flex-col h-[55vh] gap-2">
              <div className="flex w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  Name :
                </p>
                <div className="flex  gap-2 w-full justify-between">
                  <p>Mansi katariya</p>
                </div>
              </div>
              <div className="flex gap-2 w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  Age :
                </p>
                <div className="flex w-full justify-between">
                  <p>19</p>
                </div>
              </div>
              <div className="flex gap-2 w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  Height :
                </p>
                <div className="flex w-full justify-between">
                  <p>5 ft</p>
                </div>
              </div>
              <div className="flex gap-2  w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  Weight :
                </p>
                <div className="flex w-full justify-between">
                  <p>40 kg</p>
                </div>
              </div>
              <div className="flex gap-2 w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  BMI :
                </p>
                <div className="flex w-full justify-between">
                  <p>19</p>
                </div>
              </div>
              <div className="flex gap-2 w-full  bg-white p-2 rounded-xl">
                <p className="w-[50%] text-gray-400 font-bold">
                  Target BMI :
                </p>
                <div className="flex w-full justify-between">
                  <p>23</p>
                </div>
              </div>
              </div>
            </div>
            <div className="w-[30vw] h-[55vh] -translate-y-10">
            <video className="rounded-xl absolute translate-y-20" src="./asset/dna.mp4" muted autoPlay loop playsInline>
            </video>
            <img
                src="./asset/human.png"
                className="absolute w-[280px] h-[420px] translate-x-20"
              />
              
            </div>
          </div>
        </div>
        <div className="lower flex gap-2">
          <div className="lower-left bg-[url('./asset/bg1.jpg')] bg-cover relative  w-[37.5vw] h-[40vh]    rounded-3xl">
            <div className="bg-gray-900/20 backdrop-filter backdrop-blur-lg absolute w-full h-full rounded-3xl"></div>
            <div className="flex flex-col items-center justify-between w-full h-full p-4 overflow-hidden">
              <p className="text-white text-3xl font-bold w-full z-10">
                Choose your <br></br>personal doctor
              </p>
              <div className="flex gap-2 z-10 ">
                <img
                  src="./asset/d1.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <img
                  src="./asset/d2.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <img
                  src="./asset/d3.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <img
                  src="./asset/d4.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <img
                  src="./asset/d5.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <img
                  src="./asset/d1.jpg"
                  className="w-[80px] h-[80px] rounded-xl"
                />
              </div>
              <button className="bg-slate-200 text-slate-400 text-center w-[25vw] p-2 rounded-3xl border border-white opacity-40">
                See everyone
              </button>
            </div>
          </div>
          <div className="lower-right flex flex-col justify-between bg-[url('./asset/flower2.jpg')] bg-cover w-[30vw] h-[40vh] rounded-3xl p-4">
            <div className="flex justify-between p-2">
              <p className="text-white text-3xl w-[14vw]">
                Personal sleep tracking
              </p>
              <div className="flex gap-2">
                <img
                  src="./asset/apple.png"
                  className="w-[40px] h-[40px] rounded-full border-white border p-2 items-center"
                />
                <img
                  src="./asset/play.png"
                  className="w-[40px] h-[40px] rounded-full border-white border p-2 items-center"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./asset/download.png"
                className="w-[40px] h-[40px] rounded-full bg-opacity-25 border-white border p-2 items-center"
              />
              <p className="text-lg items-center text-white">Download app</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex flex-col gap-2 pt-6 ml-[-10px]">
        <div className="flex flex-col justify-between w-[18vw] h-[55vh] bg-[url('./asset/flower.jpg')] bg-cover rounded-3xl p-6">
          <div className="flex w-[10vw] h-[5vh] gap-2">
            <p className="text-white text-4xl">12:45</p>
            <p className="text-white text-4xl">|</p>
            <div>
              <p className="text-white text-sm">Wednesday</p>
              <p className="text-white text-sm">24 July</p>
            </div>
          </div>
          <div className="w-[15vw] h-[6vh] flex justify-around items-center bg-slate-200 rounded-3xl p-2">
            <img
              src="./asset/d2.jpg"
              className="w-[30px] h-[30px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-[13px]">Rustle of petals</p>
              <p className="text-[10px]">Flower meditation</p>
            </div>
            <p className="bg-slate-300 text-[12px] rounded-xl w-[2vw] p-1 text-center">
              3:26
            </p>
            <div className="border border-black rounded-full p-2">
              <img src="./asset/squareb.png" className="w-[10px] h-[10px]" />
            </div>
          </div>
        </div>
        <div className="w-[18vw] h-[40vh] bg-slate-300 rounded-3xl p-4">
          <div className="flex justify-between">
            <p className="w-[5vw] text-2xl">Recovery goal</p>
            <p className="bg-white w-[6vw] h-[5vh] rounded-full  text-center opacity-50">
              Month
              <span className="material-symbols-outlined text-center text-xl">
                keyboard_arrow_down
              </span>
            </p>
          </div>
          <div className="relative size-[200px] flex align-middle w-full">
            <svg
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[260deg] size-full"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-violet-400"
                strokeWidth="2"
                strokeDasharray="75 100"
                strokeLinecap="round"
              ></circle>

              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-violet-400"
                strokeWidth="2"
                strokeDasharray="85 100"
                strokeLinecap="round"
              ></circle>
            </svg>

            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-lg  text-black">Get better by +126%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightComp;
