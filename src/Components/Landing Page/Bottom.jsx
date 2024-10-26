import React from "react";

function Bottom() {
  return (
    <div className="w-full flex p-8">
      <div className="left w-[40vw] p-4">
        <div className="h-[40vh] flex flex-col justify-evenly">
          <p className="w-[8vw] border-2 rounded-3xl p-2 text-center">
            benefits
          </p>
          <div>
            <p className="text-6xl">Benefits</p>
            <p className="text-6xl">& services.</p>
          </div>
          <p className="text-2xl text-gray-400 underline">Read More.</p>
        </div>
        <div>
          <div className="flex flex-col justify-evenly h-[50vh]">
            <div className="flex justify-between w-[40vw] p-4 bg-white rounded-full">
              <div className="flex">
                <p className="text-2xl">Prescriptioon Support</p>
                <p className="border-2 text-xl h-[30px] w-[40px] rounded-3xl text-center ml-2">
                  ...
                </p>
              </div>
              <p>
                <span className="material-symbols-outlined text-3xl">
                  keyboard_arrow_down
                </span>
              </p>
            </div>
            <div className="flex justify-between w-[40vw] p-4 bg-white rounded-full">
              <p className="text-2xl">Record Management</p>
              <p>
                <span className="material-symbols-outlined text-3xl">
                  keyboard_arrow_down
                </span>
              </p>
            </div>
            <div className="w-30vw flex">
              <div className="bg-white w-[28vw] rounded-3xl flex p-8">
                <img
                  src="./asset/man.jpg"
                  className="h-[100px] w-[100px] rounded-full"
                />
                <div className="text-2xl align-middle flex flex-col justify-center p-2 ml-4">
                  <p>You have an appointment!</p>
                  <p className="text-xl text-gray-400 underline">View Now.</p>
                </div>
              </div>
              <img
                src="./asset/close.png"
                className="w-[40px] h-[40px] bg-white p-2 rounded-full ml-2 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right flex w-[60vw] p-16">
        <img
          src="./asset/close.png"
          className="w-[40px] h-[40px]  bg-white p-2 rounded-full "
        />
        <div className="flex  justify-center gap-4 w-[50vw] h-[70vh] p-8 mt-16 bg-white rounded-3xl ">
          <div className="inner-left w-[26vw]">
            <p className="text-5xl p-4">Virtual consultation.</p>
            <hr />
            <div className="flex p-4">
              <div>
                <p className="text-xl text-gray-500">user friendly</p>
                <p className="text-2xl">
                  connect with user friendly telehealth platform
                </p>
              </div>
              <img
                src="./asset/close.png"
                className="w-[40px] h-[40px] border-2 rounded-full p-2"
              />
            </div>
            <hr />
            <div className="flex justify-between items-center p-4">
              <p className="text-2xl">secure</p>
              <img
                src="./arrow.svg"
                className="w-[40px] h-[40px] rotate-[-45deg] border-2 rounded-full p-2"
              />
            </div>
            <hr />
            <div className="flex justify-between items-center p-4">
              <div className="flex justify-evenly w-[16vw]">
                <p className="text-2xl">24/7</p>
                <p className="w-[8vw] h-[5vh] text-center text-white bg-orange-400 rounded-3xl p-2">
                  accesibility
                </p>
                <p className="w-[40px] h-[40px] text-center text-white bg-orange-400 rounded-3xl p-2">
                  i
                </p>
              </div>
              <img
                src="./arrow.svg"
                className="w-[40px] h-[40px] rotate-[-45deg] border-2 rounded-full p-2"
              />
            </div>
          </div>
          <div className="inner-right">
            <img
              src="./asset/girl.jpg"
              className="w-[20vw] h-[55vh] rounded-3xl"
            />
            <img
              src="./asset/girl2.png"
              className="absolute top-[142vh] left-[88vw] w-[100px] h-[80px] rounded-2xl"
            />
            <div className="flex justify-around w-[15vw] bg-white rounded-full p-2 absolute top-[186vh] ml-8 opacity-80 border border-gray-300">
              <img src="./asset/video.png" className="w-[40px] h-[40px]"/>
              <img src="./asset/mic.png" className="w-[40px] h-[40px]"/>
              <img src="./asset/square.png" className="w-[40px] h-[40px]"/>
              <img src="./asset/call.png" className="w-[40px] h-[40px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
