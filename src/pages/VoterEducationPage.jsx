import React from 'react';
import flowDiagram from "../assets/flowDiagram.jpeg";
import flowDiagram2 from "../assets/flowDiagram2.jpeg";

const VoterEducationPage = () => {
  return (
    <div className="flex justify-between bg-[#a955f721] p-10 space-x-3">
      <div>
        <img src={flowDiagram} className="rounded-lg shadow-xl" />
      </div>
      <div>
        <img src={flowDiagram2} className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
};

export default VoterEducationPage;
