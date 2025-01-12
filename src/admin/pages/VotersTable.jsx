import React from "react";
import { useTotalVoterQuery } from "../../features/voters/voterApiSlice";

const VotersTable = () => {
  const { data: totalVoters } = useTotalVoterQuery();
  console.log(totalVoters);
  return (
    <div className="overflow-x-auto mt-20 rounded-lg">
      <table className="min-w-full bg-white shadow-md">
        <thead className="text-center">
          <tr className="bg-gray-800 text-white">
            <th className="w-1/4 py-3 px-4 ">Voter Name</th>
            <th className="w-1/4 py-3 px-4 ">Aadhaar Number</th>
            <th className="w-1/4 py-3 px-4 ">Registration Date</th>
            <th className="w-1/4 py-3 px-4 ">Voting Date</th>
            <th className="w-1/4 py-3 px-4 ">Has Voted</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {totalVoters?.map((voter, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{voter.name}</td>
              <td className="py-3 px-4">{voter.aadharNo}</td>
              <td className="py-3 px-4">{voter.createdAt}</td>
              <td className="py-3 px-4">{voter.votingDate}</td>
              <td
                className={`py-3 px-4 ${
                  voter.isVoted ? "text-green-500" : "text-red-500"
                }`}
              >
                {voter.isVoted ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VotersTable;
