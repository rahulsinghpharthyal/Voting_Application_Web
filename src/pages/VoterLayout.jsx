import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const VoterLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow max-w-full mt-12 lg:mt-0">
        <HomePage />
        <Outlet />
      </div>

      {/* Footer (Optional) */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Voter App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default VoterLayout;
