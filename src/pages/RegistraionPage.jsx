import React from "react";
import leftImage from "../assets/building-banner-01.jpg"; // Your left-side image
import RegistrationCard from "../components/RegistrationCard";
import HowToRegisterInfo from "../components/HowToRegisterInfo";

const RegistrationPage = () => {
  return (
    <div className="grid lg:grid-cols-2 bg-[#3b83f63e] w-full">
      {/* Left Information Section */}
      <div className="flex items-center justify-center bg-white p-6 lg:p-12">
        <HowToRegisterInfo />
      </div>

      {/* Registration Card Section */}
      <div className="flex items-center justify-center px-4 py-6">
        <div className="max-w-md w-full">
          <RegistrationCard />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
