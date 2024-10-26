import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="p-12 w-[100vw] flex justify-between h-[10vh] items-center">
        <div className=" w-[10vw] flex justify-between p-4">
          <img
            src="./asset/logo.jpeg"
            className="h-[50px] w-[50px] rounded-full"
          />
          <p className="pl-2 font-bold">care sync</p>
        </div>
        <div className="flex justify-between w-[11vw]">
          <button className="p-2 border-2 rounded-3xl w-[6vw]">menu</button>
          <button className="p-2 w-[4vw]">FAQs</button>
        </div>
        <div className="flex justify-between w-[40vw]">
          <button className="p-2 ">about</button>
          <button className="p-2 ">services</button>
          <button className="p-2 ">contact</button>
          <Link to="/login">
            <button className="p-2 border-2 rounded-3xl w-[8vw]">Login</button>
          </Link>

          <Link to="/signup">
            <button className="p-2 border-2 rounded-3xl w-[8vw] text-white bg-black">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
