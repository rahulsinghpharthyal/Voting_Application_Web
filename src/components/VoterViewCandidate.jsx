import React from 'react';

const VoterViewCandidates = ({ candidates }) => {

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white rounded-lg shadow-xl border-2 border-black">
        <thead className='bg-gray-100 rounded-t-lg'>
          <tr className="text-black font-semibold rounded-xl">
            <th className="py-3 px-4 border-b border-black">Serial Number</th>
            <th className="py-3 px-4 border-b border-black">Id</th>
            <th className="py-3 px-4 border-b border-black">Election Symbol</th>
            <th className="py-3 px-4 border-b border-black">Candidate Name</th>
            <th className="py-3 px-4 border-b border-black">Candidate Party</th>
            <th className="py-3 px-4 border-b border-black">State</th>
            <th className="py-3 px-4 border-b border-black">Vote</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {candidates?.map((candidate, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-black">{index + 1}</td>
              <td className="py-3 px-4 border-b border-black">{candidate?.candidateElectionId.slice(-3)}</td>
              <td className="py-3 px-4 border-b border-black">
                <img src={candidate.electionSymbol} alt="Election Symbol" className="w-8 h-8 ml-16" />
              </td>
              <td className="py-3 px-4 border-b border-black">{candidate.candidatename}</td>
              <td className="py-3 px-4 border-b border-black">{candidate.party}</td>
              <td className="py-3 px-4 border-b border-black">{candidate.state}</td>
              <td className="py-3 px-4 border-b border-black">{candidate.votesReceived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoterViewCandidates;
