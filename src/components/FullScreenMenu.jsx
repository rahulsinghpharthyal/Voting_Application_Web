// FullScreenMenu.js
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const FullScreenMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useSelector(selectCurrentUser);
  const links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Political Parties & Candidates", url: "/candidates-list" },
    { id: 3, name: "Voter Education", url: "/voter-education" },
    { id: 4, name: "Register", url: "/register" },
    { id: 5, name: "Media & Publications", url: "/media&publication" },
    { id: 6, name: "Election Management", url: "/election-management" },
    { id: 7, name: "Vote", url: "/vote" },
    { id: 8, name: "Result", url: "/candidate-result" },
  ];
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 top-10 bg-blue-900 bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            X
          </button>
          <div className="text-white text-center">
            <ul className="space-y-4">
              {user?.role === "admin" && (
                <li onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                  <Link to="/dashboard" className="text-2xl">
                    Dashboard
                  </Link>
                </li>
              )}
              {links &&
                links.map((link, index) => (
                  <li onClick={()=>setIsMenuOpen(!isMenuOpen)}key={index}>
                    <Link to={link.url} className="text-2xl">
                      {link.name}
                    </Link>
                  </li>
                ))}
              {/* <li>
                <Link to="#candidates" className="text-2xl">
                  Candidates
                </Link>
              </li>
              <li>
                <Link to="#election" className="text-2xl">
                  Election Management
                </Link>
              </li>
              <li>
                <Link to="#media" className="text-2xl">
                  Media & Publication
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenMenu;
