import React from 'react';
import VoterViewCandidates from '../components/VoterViewCandidate';
import { useGetCandidateQuery } from '../features/candidates/candidateApiSlice';

const Candidates = () => {

    const {data : candidates, isError, isLoading} = useGetCandidateQuery();
    
  return (
    <div className="p-2 bg-gray-200">
      <VoterViewCandidates candidates={candidates?.Data || []} />
    </div>
  );
};

export default Candidates;