import React, { useState } from "react";
import {
  IoIosCall,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMdHome,
} from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { logOut, selectCurrentUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import FullScreenMenu from "./FullScreenMenu";
import { useLogOutMutation } from "../features/auth/authApiSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [logOutUser] = useLogOutMutation();

  const handleLogout = async () => {
    const logOutData = await logOutUser();
    toast.success(logOutData?.data?.message);
    dispatch(logOut());
  };

  return (
    <header className="fixed top-0 w-full bg-blue-900 text-white flex items-center justify-between px-4 py-2 z-10 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu */}
        <button className="text-white flex items-center space-x-2">
          <GiHamburgerMenu
            className="text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </button>
        {/* Home Button */}
      </div>
      <div className="flex items-center space-x-4">
        {/* Contact and Social Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-white">
              <IoMdHome className="text-xl" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosCall className="text-xl" />
            <span className="text-sm">Toll Free - 1950</span>
          </div>
          <div className="flex space-x-2">
            <Link to="#" className="text-white">
              <IoLogoFacebook className="text-xl" />
            </Link>
            <Link to="#" className="text-white">
              <IoLogoInstagram className="text-xl" />
            </Link>
            <Link to="#" className="text-white">
              <FaXTwitter className="text-xl" />
            </Link>
            <Link to="#" className="text-white">
              <IoLogoYoutube className="text-xl" />
            </Link>
          </div>
        </div>
        {/* User Actions */}
        {user ? (
          <div className="flex items-center space-x-3">
            <Link to="#" title="Profile">
              <FiUser className="text-2xl" />
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-900 px-2 py-1 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link
              to="/login"
              className="bg-white text-blue-900 px-2 py-1 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-blue-900 px-2 py-1 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
      {/* Full Screen Menu for Small Devices */}
      {isMenuOpen && (
        <FullScreenMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </header>
  );
};

export default Header;
