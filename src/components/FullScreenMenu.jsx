// FullScreenMenu.js
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const FullScreenMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useSelector(selectCurrentUser);
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
              {user?.role === 'admin' && (
                <li>
                  <Link to="/dashboard" className="text-2xl">
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link to="#voters" className="text-2xl">
                  Voters
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenMenu;
