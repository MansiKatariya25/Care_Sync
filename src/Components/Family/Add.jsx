import axios from "axios";
import React, { useState } from "react";

function Add({ changeState }) {
  const [name,setName] = useState("")
  const [relation,setRelation] = useState("")
  const [age,setAge] = useState("")
  const [gender,setGender] = useState("")
  const [height,setHeight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmi,setBmi] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/family/add',{name:name,relation:relation,age:age,gender:gender,height:height,weight:weight,bmi:bmi})

      changeState()
      
    } catch(error) {
       console.error(error)
    }
 
  };

  return (
    <div className="absolute overflow-hidden">
      <div className="w-[100vw] h-[100vh] bg-gray-200/80 p-4 items-center flex justify-center">
        <div className="w-[30%] h-[65%] p-6 bg-[rgb(221,235,236)] rounded-2xl">
          <div className="flex justify-between">
            <p className="text-gray-600 font-bold text-2xl">Enter Family details</p>
            <img
              onClick={() => changeState()}
              src="./asset/close.png"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>

          <form onSubmit={handleSubmit} className="p-2">
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
                    value={name}
                    onChange={(e)=>(setName(e.target.value))}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
                <div className="flex flex-col bg-white rounded-xl p-2">
                  <label htmlFor="relation" className="text-gray-400 font-bold ">
                    Relation
                  </label>
                  <input
                    type="text"
                    name="relation"
                    required
                    value={relation}
                    onChange={(e)=>(setRelation(e.target.value))}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col bg-white rounded-xl p-2">
                  <label htmlFor="age" className="text-gray-400 font-bold">
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    required
                    value={age}
                    onChange={(e)=>(setAge(e.target.value))}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
                <div className="flex flex-col bg-white rounded-xl p-2">
                  <label htmlFor="gender" className="text-gray-400 font-bold">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    required
                    value={gender}
                    onChange={(e)=>(setGender(e.target.value))}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col bg-white rounded-xl p-2">
                  <label htmlFor="height" className="text-gray-400 font-bold">
                    Height
                  </label>
                  <input
                    type="text"
                    name="height"
                    required
                    value={height}
                    onChange={(e)=>{setHeight(e.target.value)}}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
                <div className="flex flex-col bg-white rounded-xl p-2">
                  <label htmlFor="weight" className="text-gray-400 font-bold">
                    Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    required
                    value={weight}
                    onChange={(e)=>(setWeight(e.target.value))}
                    className="outline-none  border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
                </div>
                <div className="flex flex-col w-[46%] bg-white rounded-xl p-2">
                  <label htmlFor="bmi" className="text-gray-400 font-bold">
                    BMI
                  </label>
                  <input
                    type="text"
                    name="bmi"
                    required
                    value={bmi}
                    onChange={(e)=>(setBmi(e.target.value))}
                    className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
                  />
                </div>
              

              <button type="submit" className="text-white bg-black p-2 rounded-3xl" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
