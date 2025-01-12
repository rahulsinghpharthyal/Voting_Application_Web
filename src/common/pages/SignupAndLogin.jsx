import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Register from "../components/Register";
import Login from "../components/Login";

const SignupAndLogin = () => {
    const location = useLocation();
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-1/2 bg-blue-600 text-center text-white flex flex-col h-screen justify-center">
        <img
          src={logo}
          alt="Election Commission of India"
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">भारतीय निर्वाचन आयोग</h1>
        <h2 className="text-xl">Election Commission of India</h2>
      </div>
      <div className="w-1/2 bg-white  text-white flex flex-col h-screen justify-center items-center">
      {
        location?.pathname === '/signup' ? 
        <Register /> : <Login/>

      }
      </div>
    </div>
  );
};

export default SignupAndLogin;
