import React, { useContext, useState } from "react";
import Navbar from "../Common/Navbar";
import Details from "./Details";
import Add from "./Add";
import { DataProvider } from "../../App";

function Family() {
  

  const {changeState,isOpen} = useContext(DataProvider)
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
