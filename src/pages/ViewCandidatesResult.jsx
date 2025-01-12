import React from 'react';
import { useGetCandidateQuery } from '../features/candidates/candidateApiSlice';
import VoterCart from '../components/VoterCart';

const ViewCandidateResult = () => {
  const {data : candidates, isError, isLoading} = useGetCandidateQuery();
  const maxVotes = Number.MAX_SAFE_INTEGER;

  // Sort candidates by votesReceived in descending order
  const sortedCandidates = candidates?.Data?.slice().sort((a, b) => b.votesReceived - a.votesReceived);
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-4xl font-bold text-center">Election Results</h1>
      </header>
      <div>
        <ul>
          {sortedCandidates?.map((candidate, index) => (
            <li key={index} className="mb-2">
              <VoterCart
                name={candidate?.candidatename}
                logo={candidate?.electionSymbol}
                votes={candidate?.votesReceived ? candidate?.votesReceived : 0}
                maxVotes={maxVotes}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewCandidateResult;
