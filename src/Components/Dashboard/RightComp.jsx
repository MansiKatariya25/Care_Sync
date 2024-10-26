import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RightComp() {
  return (
    <div>
      <div className="flex flex-col gap-2 left p-6">
        <div className="border bg-slate-300 rounded-3xl w-[55vw] h-[55vh] p-4">
          <p className="text-white text-3xl w-[15vw]">Your Health overview</p>

          <div className="flex flex-col justify-between bg-slate-500 rounded-3xl w-[15vw] h-[40vh] p-4">
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
            <p className="text-sm text-white">The secret to a healthy heart</p>
            <p className="text-[12px] text-white"> a healthy heart is the basis for a long and active life.Here are some key secrets that helps maintain a healthy</p>
            <div className="bg-slate-300 flex justify-evenly items-center rounded-3xl p-2 w-[8vw] ">
              <p className="text-white text-sm">Add info</p>
              <img src="./asset/plusw.png" className="w-[30px] h-[30px] bg-slate-100 rounded-full p-2"/>
            </div>
          </div>
          </div>
        </div>
        <div className="lower flex gap-2">
          <div className="flex flex-col justify-between lower-left bg-slate-300 w-[27vw] h-[40vh] rounded-3xl p-4 ">
            <p className="text-white text-2xl w-[14vw]">Chose your personal doctor</p>
            <div className="flex gap-2">
              <img src="./asset/d1.jpg" className="w-[80px] h-[80px] rounded-xl"/>
              <img src="./asset/d2.jpg" className="w-[80px] h-[80px] rounded-xl"/>
              <img src="./asset/d3.jpg" className="w-[80px] h-[80px] rounded-xl" />
              <img src="./asset/d4.jpg" className="w-[80px] h-[80px] rounded-xl"/>
              <img src="./asset/d5.jpg" className="w-[80px] h-[80px] rounded-xl"/>
              <img src="./asset/d1.jpg" className="w-[80px] h-[80px] rounded-xl"/>
            </div>
            <button className="bg-slate-200 text-slate-400 text-center w-[25vw] p-2 rounded-3xl opacity-40">See everyone</button>
          </div>
          <div className="lower-right flex flex-col justify-between bg-slate-300 w-[27vw] h-[40vh] rounded-3xl p-4">
            <div className="flex justify-between p-2">
              <p className="text-white text-3xl w-[14vw]">Personal sleep tracking</p>
              <div className="flex gap-2">
                <img src="./asset/apple.png" className="w-[40px] h-[40px] rounded-full border-white border p-2 items-center"/>
                <img src="./asset/play.png" className="w-[40px] h-[40px] rounded-full border-white border p-2 items-center"/>
              </div>
            </div>
          <div className="flex items-center gap-2">
            <img src="./asset/download.png" className="w-[40px] h-[40px] rounded-full bg-opacity-25 border-white border p-2 items-center"/>
            <p className="text-lg items-center text-white">Download app</p>
          </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default RightComp;
