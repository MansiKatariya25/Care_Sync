import React from 'react'

function Popup() {
  return (
    <div className="absolute overflow-hidden">
      <div className="w-[100vw] h-[100vh] bg-gray-200/80 p-4 items-center flex justify-center">
        <div className="w-[30%] h-[60%] p-6 bg-[rgb(221,235,236)] rounded-2xl">
            <div className="flex justify-between">
            
            <p className="text-gray-600 font-bold text-2xl">Enter your details</p>
            <img src="./asset/close.png" className="w-[30px] h-[30px] cursor-pointer"/>
            </div>
          
          <form className="p-2">
            <div className="flex flex-col pt-6 gap-4 text-sm w-[100%]">
                <div className="flex gap-4">
                <div className="flex flex-col bg-white rounded-xl p-2">
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
              <div className="flex flex-col bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold ">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
                </div>
              <div className="flex gap-4">
              <div className="flex flex-col bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold">
                  Age 
                </label>
                <input
                  type="text"
                  name="age"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <div className="flex flex-col bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold">
                  Height 
                </label>
                <input
                  type="text"
                  name="height"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              </div>
              <div className="flex gap-4">
              <div className="flex flex-col bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold">
                  Weight 
                </label>
                <input
                  type="text"
                  name="weight"
                  required
                  className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <div className="flex flex-col bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold">
                  BMI 
                </label>
                <input
                  type="text"
                  name="bmi"
                  required
                  className="outline-none  border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              </div>
              <div className="flex flex-col w-[45%] bg-white rounded-xl p-2">
                <label htmlFor="name" className="text-gray-400 font-bold">
                  Target BMI 
                </label>
                <input
                  type="text"
                  name="Tbmi"
                  required
                  className="outline-none  border-b-2 border-gray-200 bg-transparent text-black font-bold"
                />
              </div>
              <button className="text-white bg-black p-2 rounded-3xl">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Popup
