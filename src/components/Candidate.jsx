import React from "react";

const CandidateCard = () => {
  const candidate = {
    candidatename: "Sharad Pawar",
    party: "Nationalist Congress Party (NCP)",
    electionSymbol:
      "https://res.cloudinary.com/dg56sdt6k/image/upload/v1736248565/National…",
    candidateElectionId: "31e97162-1716-4af9-a86a-23bae33e0248",
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-48 object-cover"
        src={candidate.electionSymbol}
        alt={`${candidate.party} symbol`}
      />
      <div className="pt-4">
        <h2 className="text-xl font-bold">{candidate.candidatename}</h2>
        <p className="text-gray-700">{candidate.party}</p>
      </div>
      <div className="pt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
