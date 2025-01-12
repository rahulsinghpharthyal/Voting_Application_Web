import React, { useState } from "react";
import { useGetCandidateQuery } from "../../features/candidates/candidateApiSlice";

const CandidatesTable = () => {
  const { data: candidates, isError, isLoading } = useGetCandidateQuery();
  // const candidates = [
  //   {
  //     candidateElectionId: "C001",
  //     electionSign: "https://example.com/election-sign1.png",
  //     name: "Alice Johnson",
  //     registrationDate: "2023-01-15",
  //     totalVotes: 1234,
  //   },
  //   {
  //     candidateElectionId: "C002",
  //     electionSign: "https://example.com/election-sign2.png",
  //     name: "Bob Smith",
  //     registrationDate: "2023-01-20",
  //     totalVotes: 5678,
  //   },
  // ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCandidates = candidates?.Data?.filter(
    (candidate) =>
      candidate.candidateElectionId
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      candidate.candidatename
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      candidate.createdAt
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      candidate.votesReceived
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="text-center">
            <tr className="bg-gray-800 text-white">
              <th className="w-1/6 py-3 px-4 text-center">
                Candidate Election ID
              </th>
              <th className="w-1/6 py-3 px-4 ">Election Sign</th>
              <th className="w-1/4 py-3 px-4 ">Candidate Name</th>
              <th className="w-1/6 py-3 px-4 ">Registration Date</th>
              <th className="w-1/6 py-3 px-4 ">Total Votes</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredCandidates?.map((candidate, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">
                  {candidate.candidateElectionId.slice(-3)}
                </td>
                <td className="py-3 px-4">
                  <img
                    src={candidate.electionSymbol}
                    alt="Election Sign"
                    className="w-8 h-8 ml-16"
                  />
                </td>
                <td className="py-3 px-4">{candidate.candidatename}</td>
                <td className="py-3 px-4">{candidate.createdAt}</td>
                <td className="py-3 px-4">{candidate.votesReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesTable;
