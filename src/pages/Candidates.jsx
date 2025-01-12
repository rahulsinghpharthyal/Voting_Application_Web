import React from 'react';
import VoterViewCandidates from '../components/VoterViewCandidate';
import { useGetCandidateQuery } from '../features/candidates/candidateApiSlice';

const Candidates = () => {

    const {data : candidates, isError, isLoading} = useGetCandidateQuery();
    
  return (
    <div className="p-6 bg-[#22c55e47] h-screen">
      <VoterViewCandidates candidates={candidates?.Data || []} />
    </div>
  );
};

export default Candidates;