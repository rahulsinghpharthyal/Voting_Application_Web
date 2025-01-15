import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Register from "../components/Register";
import Login from "../components/Login";
import ResetPassword from "../components/ResetPassword";
import SendLink from "../components/SendLink";

const renderComponent = (pathname) => {
  if (pathname === "/signup") {
    return <Register />;
  } else if (pathname === "/login") {
    return <Login />;
  } else if (pathname === "/forgot-password") {
    return <SendLink />;
  } else if (pathname === "/reset-password") {
    return <ResetPassword />;
  } else {
    return <Login />;
  }
};

const SignupAndLogin = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 w-full bg-blue-600 text-center text-white flex flex-col justify-center items-center p-6">
        <img
          src={logo}
          alt="Election Commission of India"
          className="mx-auto mb-4 w-24 md:w-32"
        />
        <h1 className="text-xl md:text-2xl font-bold">भारतीय निर्वाचन आयोग</h1>
        <h2 className="text-lg md:text-xl mt-2">Election Commission of India</h2>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full bg-white flex flex-col justify-center items-center p-6">
        {renderComponent(location?.pathname)}
      </div>
    </div>
  );
};

export default SignupAndLogin;
