import React from "react";

function SideBar() {
  return (
    <div className="">
      <div className="w-[8vw] h-[100vh] p-6 gap-20 flex flex-col justify-evenly items-center">
        <img
          src="./asset/logo.jpeg"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="flex flex-col">
          <div className="relative group flex flex-col items-center">
            <img 
              src="./asset/home.png" 
              className="w-[40px] h-[40px]" 
            />
            <p className="p-1 rounded text-sm opacity-0 group-hover:opacity-100  duration-300">
              Home
            </p>
          </div>

          <div className="relative group flex flex-col items-center">
            <img 
              src="./asset/up.png" 
              className="w-[40px] h-[40px]" 
            />
            <p className="p-1 rounded text-sm opacity-0 group-hover:opacity-100  duration-300">
              Progress
            </p>
          </div>
          <div className="relative group flex flex-col items-center">
            <img 
              src="./asset/stethoscope.png" 
              className="w-[40px] h-[40px]" 
            />
            <p className="p-1 rounded text-sm opacity-0 group-hover:opacity-100  duration-300">
              Diagnose
            </p>
          </div>
          <div className="relative group flex flex-col items-center">
            <img 
              src="./asset/family.png" 
              className="w-[40px] h-[40px]" 
            />
            <p className="p-1 rounded text-[13px] opacity-0 group-hover:opacity-100  duration-300">
              Add family 
            </p>
          </div>
          <div className="relative group flex flex-col items-center">
            <img 
              src="./asset/yoga.png" 
              className="w-[40px] h-[40px]" 
            />
            <p className="p-1 rounded text-sm opacity-0 group-hover:opacity-100  duration-300">
              Yoga
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src="./asset/settings.png" className="w-[40px] h-[40px]"  />
          <img
            src="./asset/girl.jpg"
            className="w-[60px] h-[60px] rounded-full"
            
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
