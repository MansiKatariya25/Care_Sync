import React, { useState } from "react";
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
 

function Signup() {
  const [visible, setVisible] = React.useState(false);
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const useNav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/auth/signup",{fname,lname,email,password})
      
      if(response.status == 200){
        localStorage.setItem('token',response.data.token)
        useNav("/dashboard")
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data)
    }
  };


  return (
    <>
    <Navbar/>
    <div className="w-full h-[80vh] flex justify-between p-4">
      <div className="left justify-center flex flex-col gap-4 w-[45%]  p-4 rounded-lg bg-[rgb(221,235,236)]">
        <h1 className="text-3xl font-bold text-gray-600">START FOR FREE</h1>
        <h1 className="text-5xl font-bold">
          Create your account<span className="text-3xl text-white">.</span>
        </h1>
        <p className="text-lg font-bold text-gray-600">
          Already a member?{" "}
          <span className="text-orange-400 hover:underline cursor-pointer transition-all duration-300">
            Login
          </span>
        </p>
        <form onSubmit={handleSubmit} className="text-sm gap-2 flex flex-col">
          <div className="flex justify-start gap-2">
            <div className="flex flex-col  bg-white p-4 rounded-xl">
              <label htmlFor="fname" className="text-gray-400 font-bold">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                required
                id=""
                value={fname}
                onChange={(e)=>(setFname(e.target.value))}
                className="outline-none border-b-2 bg-transparent text-black font-bold"
              />
            </div>
            <div className="flex flex-col bg-white p-4 rounded-xl">
              <label htmlFor="lname" className="text-gray-400 font-bold">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                required
                value={lname}
                onChange={(e)=>(setLname(e.target.value))}
                id=""
                className="outline-none bg-transparent border-b-2 text-black font-bold"
              />
            </div>
          </div>
          <div className="flex flex-col w-[50%] bg-white p-4 rounded-xl">
            <label htmlFor="email" className="text-gray-400 font-bold">
              Email
            </label>
            <div className="flex w-full justify-between">
              <input
                type="text"
                name="email"
                id=""
                required
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}
                className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
              />
              <img src="./mail.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col w-[50%] bg-white  p-4 rounded-xl">
            <label htmlFor="pass" className="text-gray-400 font-bold">
              Password
            </label>
            <div className="flex w-full justify-between">
              <input
                type={visible ? "text" : "password"}
                name="password"
                id=""
                required
                value={password}
                onChange={(e)=>(setPassword(e.target.value))}
                className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
              />
              <img
                src={visible ? "./visible.svg" : "./no-visible.svg"}
                onClick={() => setVisible(!visible)}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex justify-center p-2">
            <button type="submit" className="bg-black text-white p-2 w-[150px] rounded-full hover:bg-white hover:text-black  duration-200 transition-all">
              Signup
            </button>
          </div>
        </form>
      </div>
      <div className="w-[50%]">
      {
        <Swiper modules={[Pagination]} autoplay={{
            delay:2000
          
        }} loop={true} slidesPerView={1} spaceBetween={50} pagination={{clickable:true} }>
            <SwiperSlide className="h-[75vh]">
            <div className="right w-full h-[75vh] bg-[url('./authh.jpg')] bg-cover bg-center rounded-xl bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide className="h-[75vh]">
            <div className="right w-full h-[75vh] bg-[url('./auth2.jpg')] bg-cover bg-center rounded-xl bg-no-repeat"></div>
            </SwiperSlide>
            

        </Swiper>
      }
      </div>
     
     
    </div>
    </>
  );
}

export default Signup;
