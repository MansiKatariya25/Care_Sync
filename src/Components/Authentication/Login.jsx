import React, { useState } from "react";
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
 const [visible, setVisible] = React.useState(false)
 const [email,setEmail] = useState("")
 const[password,setPassword] = useState("")
 const useNav = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("/auth/login",{email,password})
          if(response.status == 200){
            useNav("/dashboard")
          }
          
        } catch (error) {
         alert(error.response.data) 
        }
      };
  return (
    <>
    <Navbar/>
    <div className="w-full h-[80vh] flex justify-between p-4">
      <div className="left justify-center flex flex-col gap-4 w-[45%]  p-4 rounded-lg bg-[rgb(221,235,236)]">
        <h1 className="text-3xl font-bold text-gray-600">Welcome Back!</h1>
        <h1 className="text-5xl font-bold">
          Login with your email<span className="text-3xl">.</span>
        </h1>
        <p className="text-lg font-bold text-gray-600">
          New to our platform? <span className="text-orange-400 hover:underline cursor-pointer transition-all duration-300">Signup</span>
        </p>
        <form onSubmit={handleSubmit} className="text-sm gap-2 flex flex-col">
        
          <div className="flex flex-col w-[50%] bg-white p-4 rounded-xl">
            <label htmlFor="email" className="text-gray-400 font-bold">
              Email
            </label>
            <div className="flex w-full justify-between">
              <input
                type="text"
                name="email"
                id="email"
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
                id="pass"
                required
                value={password}
                onChange={(e)=>(setPassword(e.target.value))}
                className="outline-none border-b-2 border-gray-200 bg-transparent text-black font-bold"
              />
              <img src={visible? "./visible.svg" : "./no-visible.svg"} onClick={() => setVisible(!visible)} />
            </div>
          </div>
          <div className="w-full flex justify-center p-2">
          <button className="bg-black text-white p-2 w-[150px] rounded-full hover:bg-white hover:text-black  duration-200 transition-all" type="submit">Login</button>
          </div>
          
        </form>
      </div>

      <div>

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

export default Login;
