import React from "react";
import ElectionCommissionCard from "../components/home/ElectionCommissionCard";
import ConstitutionalBody from "../components/home/ConstitutionalBody";
import VotingImageComponent from "../components/home/VotingImageComponent";


const MainHome = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-centre ">
      <ElectionCommissionCard />
      <ConstitutionalBody/>
      <VotingImageComponent/>
    </div>
  );
};

export default MainHome;
