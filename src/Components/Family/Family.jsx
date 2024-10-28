import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import SideBar from "../Dashboard/SideBar";
import Details from "./Details";
import Add from "./Add";

function Family() {
  const [isOpen, setOpen] = useState(false);

  const changeState = ()=>{
    
    setOpen(prevVal=>(!prevVal))
  }

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="absolute">
      <Navbar />
      </div>
      
      <Details changeState={changeState} />
      {isOpen ? <Add changeState={changeState} /> : null}
    
     
    </div>
  );
}

export default Family;
