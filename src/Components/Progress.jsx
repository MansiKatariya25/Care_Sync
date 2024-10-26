import React from 'react'

function Progress() {
  return (
    <div className="w-[12vw] h-[58vh]  flex flex-col gap-4 items-center">
    <div className="bg-[#DDEBEC] rounded-3xl w-full h-[28vh]  flex flex-col items-center justify-between ">
      <div className="flex p-2 w-full justify-center items-center text-sm">
        <p className="border-gray-400 border rounded-full  p-1 w-[60%] h-[35px] flex justify-center items-center">
          statistics
        </p>
        <p className="border-gray-400 border rounded-full p-1 w-[35px] h-[35px] flex justify-center items-center">
          i
        </p>
      </div>
      <div>
        <div className="relative size-[105px]">
          <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[150deg] size-full"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-300"
              strokeWidth="1"
              strokeDasharray="75 100"
              strokeLinecap="round"
            ></circle>

            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-400"
              strokeWidth="1"
              strokeDasharray="30.25 100"
              strokeLinecap="round"
            ></circle>
          </svg>

          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-2xl  text-black">75%</span>
          </div>
        </div>
        <div className="flex justify-between w-full -translate-y-2 font-bold">
          <p className="text-[14px]">
            SuccsessFull<br></br>diagnosis
          </p>
          <p className="border flex p-1 border-gray-400 rounded-full h-[35px] w-[35px] translate-x-6">
            <img src="/arrow.svg" className="rotate-[-45deg]" alt="" />
          </p>
        </div>
      </div>
    </div>

    <div className="wellBeing rounded-3xl w-full h-[28vh] flex flex-col items-center justify-between">
      <div className="flex p-2 w-full justify-start items-center text-sm">
        <p className="border-white border text-white rounded-full p-1 w-[50%] h-[35px] flex justify-center items-center">
          Well being
        </p>
      </div>
      <div className="flex justify-between items-end w-full text-white font-bold p-2 text-xl">
        <p className="">
          SuccsessFull<br></br>diagnosis
        </p>
        <p className="border flex p-1 border-white rounded-full h-[35px] w-[35px]">
          <img src="/arrow_white.svg" className="rotate-[-45deg]" alt="" />
        </p>
      </div>
    </div>
  </div>
  )
}

export default Progress
