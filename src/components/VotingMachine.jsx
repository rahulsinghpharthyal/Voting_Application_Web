import React, { useState } from "react";
import { useGetCandidateByUserStateQuery } from "../features/candidates/candidateByStateApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useGiveVoteMutation } from "../features/voters/giveVoteApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import leftImage from "../assets/voting.jpg";
import rightImage from "../assets/VotingRightImage.jpg";

const VotingMachine = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const user = useSelector(selectCurrentUser);
  const {
    data: candidate,
    error,
    isLoading,
  } = useGetCandidateByUserStateQuery(user._id);
  const [
    giveVote,
    { isLoading: giveVoteIsLoading, error: giveVoteError, data },
  ] = useGiveVoteMutation();

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    setShowDialog(true);
  };

  const confirmVote = async (candidate) => {
    const voteData = await giveVote({
      userId: user._id,
      candidateId: candidate._id,
    });
    if (voteData) {
      toast.success(voteData?.data?.message);
    }
    if (voteData.error) {
      toast.info(voteData?.error?.data?.message);
    }
    setShowDialog(false);
  };

  return (
    <div className="flex flex-col py-6 px-4 bg-gray-100 min-h-screen gap-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Voting Machine</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/3 h-60 md:h-screen rounded-xl overflow-hidden">
          <img
            src={leftImage}
            alt="Left Side"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-4 md:p-6 shadow-lg rounded-lg">
          {candidate?.data ? (
            <table className="w-full table-fixed border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="w-1/4 p-2">Symbol</th>
                  <th className="w-1/4 p-2">Name</th>
                  <th className="w-1/4 p-2">Party</th>
                  <th className="w-1/4 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidate?.data?.map((candidate) => (
                  <tr
                    key={candidate._id}
                    className={`text-center border-b ${
                      selectedCandidate === candidate._id
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <td className="p-2">
                      <img
                        src={candidate.electionSymbol}
                        alt="Symbol"
                        className="w-10 h-10 mx-auto"
                      />
                    </td>
                    <td className="p-2">{candidate.candidatename}</td>
                    <td className="p-2">{candidate.party}</td>
                    <td className="p-2">
                      <button
                        className={`px-4 py-2 rounded-lg text-white ${
                          selectedCandidate === candidate._id
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                        onClick={() => handleVote(candidate)}
                      >
                        Vote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>{error?.data?.message}</p>
          )}
          {error?.data?.message === "Please Register for vote!" && (
            <Link to="/register-form" className="text-blue-500 underline">
              Register
            </Link>
          )}
        </div>

        <div className="relative w-full md:w-1/3 h-60 md:h-screen rounded-xl overflow-hidden">
          <img
            src={rightImage}
            alt="Right Side"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl mb-4">Confirm Your Vote</h3>
            <p className="text-sm md:text-base">
              Are you sure you want to vote for: {selectedCandidate.candidatename}?
            </p>
            <div className="flex justify-end mt-4 gap-2">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={() => confirmVote(selectedCandidate)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingMachine;
