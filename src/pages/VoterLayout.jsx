import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const VoterLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="mt-12">
          <HomePage />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default VoterLayout;
