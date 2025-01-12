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
  const [isMenuOpen, setIsMenuOpen] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [logOutUser, {isError, isLoading, isSuccess, error, data}] = useLogOutMutation();


  const handleLogout = async () => {
    const logOutData = await logOutUser();
    console.log('this is logOutData', logOutData)
    toast.success(logOutData?.data?.message)
    dispatch(logOut());
  };

  return (
    <header className="fixed top-0 w-full bg-blue-900 text-white flex items-center justify-between p-2 z-10">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white ml-12 flex flex-row items-center space-x-2"
        >
          <i className="fas fa-bars hover:bg-[#222222] rounded-full p-2 text-lg">
            <GiHamburgerMenu />
          </i>
          <span>Menu</span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white">
          <i className="fas fa-home">
            <IoMdHome />
          </i>
        </Link>
        <span>|</span>
        <i className="fas fa-home">
          <IoIosCall />
        </i>
        <span>Toll Free - 1950</span>
        <span>|</span>
        <div className="flex space-x-2">
          <Link to="#" className="text-white">
            <IoLogoFacebook />
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="text-white">
            <IoLogoInstagram />
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="text-white">
            <FaXTwitter />
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="text-white">
            <IoLogoYoutube />
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
        <span>|</span>
        <Link to="#" className="text-white">
          Screen Reader Access
        </Link>
        <span>|</span>
        <Link to="#" className="text-white">
          Skip to Main Content
        </Link>
        <span>|</span>{" "}
        {user ? (
          <>
            <div className="flex items-center space-x-3">
              <Link to="#">
                <i className="fas fa-user" title="profile">
                  <FiUser />
                </i>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-900 px-2 py-1"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-white text-blue-900 px-2 py-1">
              Login
            </Link>
            <Link to="/signup" className="bg-white text-blue-900 px-2 py-1">
              Sign Up
            </Link>
          </>
        )}
      </div>
      {isMenuOpen && (
        <FullScreenMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      )}
    </header>
  );
};

export default Header;
