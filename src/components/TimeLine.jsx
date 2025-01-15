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
    link: "election-management",
  },
  { id: 6, name: "Vote", color: "bg-teal-500", link: "vote" },
  { id: 7, name: "Result", color: "bg-pink-500", link: "candidate-result" },
];

const TimeLine = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      {/* Flex container for horizontal scrolling */}
      <div className="flex justify-start overflow-x-auto max-w-full lg:overflow-hidden">
        <div className="flex gap-10 lg:gap-24">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full ${category.color}`}
              >
                <span className="text-white font-semibold text-sm sm:text-base">
                  {category.id}
                </span>
              </div>
              <span className="mt-2 text-center text-xs sm:text-sm">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
