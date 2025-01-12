import React from "react";
import InfoCard from "../components/InfoCard";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import { GiTotem } from "react-icons/gi";
import { SiVirustotal } from "react-icons/si";
import VoterTurnoutChart from "../components/VoterTurnoutChart";
import CandidateVotesChart from "../components/CandidateVotesChart";
import { useTotalVoterQuery } from "../../features/voters/voterApiSlice";
import { useGetCandidateQuery } from "../../features/candidates/candidateApiSlice";
import { useTotalVotesQuery } from "../../features/votes/totalVotesApiSlice";

const AdminDashboard = () => {
  const { data: totalVoters } = useTotalVoterQuery();
  const { data: candidates } = useGetCandidateQuery();
  const { data: totalVotes } = useTotalVotesQuery();

  const cardData = [
    {
      IconComponent: MdOutlineDoNotDisturbOnTotalSilence,
      iconColor: "text-blue-600",
      title: "Total Voters",
      count: totalVoters?.length,
      path: "Voter List",
      link: "/voters-list",
    },
    {
      IconComponent: GiTotem,
      iconColor: "text-green-600",
      title: "Total Candidates",
      count: candidates?.Data?.length,
      path: "Candidate List",
      link: "/candidate-list",
    },
    {
      IconComponent: SiVirustotal,
      iconColor: "text-red-600",
      title: "Total Votes",
      count: totalVotes,
    },
  ];

  const filterVotersByAge = (minAge, maxAge) => {
    return totalVoters?.filter((voter) => {
      const age = voter.age;
      return age >= minAge && age <= maxAge;
    }).length;
  };

  const voterTurnoutData = {
    labels: ["18-25", "26-35", "36-45", "46-60", "60+"],
    values: [
      filterVotersByAge(18, 25),
      filterVotersByAge(26, 35),
      filterVotersByAge(36, 45),
      filterVotersByAge(46, 60),
      filterVotersByAge(61, 100),
    ],
  };

  const candidateNames =
    candidates?.Data?.map((candidate) => candidate.candidatename) || [];
    console.log(candidateNames)
  const candidateVotes = candidates?.Data?.map(
    (candidate) => candidate.votesReceived
  );

  const candidateVotesData = {
    labels: candidateNames,
    values: candidateVotes,
  };

  return (
    <div className="p-6 mt-10">
      {/* Top Section: Statistics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {cardData?.map((data, index) => (
          <InfoCard
            key={index}
            IconComponent={data.IconComponent}
            iconColor={data.iconColor}
            title={data.title}
            count={data.count}
            link={data.link}
            path={data.path}
          />
        ))}
      </section>

      {/* Middle Section: Charts */}
      <section className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Voter Turnout</h3>
          <VoterTurnoutChart data={voterTurnoutData} />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Candidate Votes</h3>
          <CandidateVotesChart data={candidateVotesData} />
        </div>
      </section>

      {/* Bottom Section: Recent Activities */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-4">Recent Activities</h3>
        <ul className="space-y-3">
          <li className="text-gray-700">John Doe cast a vote.</li>
          <li className="text-gray-700">
            Jane Smith registered as a candidate.
          </li>
          <li className="text-gray-700">New voter registration approved.</li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
