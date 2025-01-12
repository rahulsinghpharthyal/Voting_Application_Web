import React, { useState } from "react";
import { useGetCandidateByUserStateQuery } from "../features/candidates/candidateByStateApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useGiveVoteMutation } from "../features/voters/giveVoteApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import leftImage from "../assets/voting.jpg";
import rightImage from "../assets/VotingRightImage.jpg";

const VoteToCandidate = () => {
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
    <div className="flex flex-col py-10 px-10 bg-gray-100 min-h-screen gap-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Voting Machine</h2>
      <div className="flex ">
        {/* Left Side Image */}
        <div className="relative w-[30%] h-screen rounded-l-xl"> <img src={leftImage} alt="Left Side" className="absolute inset-0 w-full h-full object-fit rounded-l-xl" /> <div className="absolute inset-0 bg-black bg-opacity-40 rounded-l-xl"></div> </div>
        <div className="w-full max-w-2xl bg-white p-6">
          {candidate?.data ? (
            <table className="min-w-full table-fixed border-collapse">
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
                    className={`text-center ${
                      selectedCandidate === candidate._id
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <td className="p-2">
                      <img src={candidate.electionSymbol} />
                    </td>
                    <td className="p-2">{candidate.candidatename}</td>
                    <td className="p-2">{candidate.party}</td>
                    <td className="p-2">
                      <button
                        className={`px-4 py-2 rounded-lg ${
                          selectedCandidate === candidate._id
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 text-white"
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
            <Link to="/register-form">Regiter</Link>
          )}
        </div>
        <div className="relative w-[30%] h-screen rounded-l-xl"> <img src={rightImage} alt="Left Side" className="absolute inset-0 w-full h-full object-fit rounded-r-xl" /> <div className="absolute inset-0 bg-black bg-opacity-40 rounded-l-xl"></div> </div>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4">Confirm Your Vote</h3>
            <p>
              Are you sure you want to vote for:
              {selectedCandidate.candidatename}?
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
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

export default VoteToCandidate;
