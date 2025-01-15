import React from 'react';

const VoterViewCandidates = ({ candidates }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow-xl border-2 border-black text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr className="text-black font-semibold">
            <th className="py-3 px-2 sm:px-4 border-b border-black">Serial Number</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">Id</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">Election Symbol</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">Candidate Name</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">Candidate Party</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">State</th>
            <th className="py-3 px-2 sm:px-4 border-b border-black">Vote</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {candidates?.map((candidate, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-2 sm:px-4 border-b border-black">{index + 1}</td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">{candidate?.candidateElectionId.slice(-3)}</td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">
                <img
                  src={candidate.electionSymbol}
                  alt="Election Symbol"
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                />
              </td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">{candidate.candidatename}</td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">{candidate.party}</td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">{candidate.state}</td>
              <td className="py-3 px-2 sm:px-4 border-b border-black">{candidate.votesReceived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoterViewCandidates;
