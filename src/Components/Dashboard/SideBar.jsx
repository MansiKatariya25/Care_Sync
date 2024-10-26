import React from "react";

function SideBar() {
  return (
    <div className="">
      <div className=" w-[8vw] h-[100vh] p-6 gap-20 flex flex-col justify-evenly items-center">
        <img
          src="./asset/logo.jpeg"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="flex flex-col gap-6">
          <img src="./asset/home.png" className="w-[40px] h-[40px]"/>
          <img src="./asset/up.png" className="w-[40px] h-[40px]"/>
          <img src="./asset/stethoscope.png" className="w-[40px] h-[40px]"/>
          <img src="./asset/secure.png" className="w-[40px] h-[40px]"/>
          <img src="./asset/notification.png" className="w-[40px] h-[40px]" />
        </div>
        <div className="flex flex-col gap-4 items-center">
            <img src="./asset/settings.png"  className="w-[40px] h-[40px]"/>
            <img src="./asset/girl.jpg" className="w-[60px] h-[60px] rounded-full"/>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
