import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Political Parties/Candidates",
    color: "bg-green-500",
    link: "/candidates-list",
  },
  {
    id: 2,
    name: "Voter Education",
    color: "bg-purple-500",
    link: "voter-education",
  },
  { id: 3, name: "Register", color: "bg-blue-500", link: "register" },
  {
    id: 4,
    name: "Media & Publications",
    color: "bg-yellow-500",
    link: "media&publication",
  },
  {
    id: 5,
    name: "Election Management",
    color: "bg-red-500",
    link: "election-managment",
  },
  { id: 6, name: "Vote", color: "bg-teal-500", link: "vote" },
  { id: 7, name: "Result", color: "bg-pink-500", link: "candidate-result" },
];

const Timeline = () => {
  return (
    <div className="flex justify-center items-center py-10 px-10">
      <div className="flex items-center space-x-8 relative">
        {categories.map((category, index) => (
          <React.Fragment key={category.id}>
            {index > 0 && (
              <div className="h-1 w-10 bg-gray-300 flex items-center">
                <div className="w-3 h-3 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
              </div>
            )}
            <Link to={category.link} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${category.color}`}
              >
                {/* Placeholder for icons */}
                <span className="text-white font-semibold">{category.id}</span>
              </div>
              <span className="mt-2 text-center">{category.name}</span>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
