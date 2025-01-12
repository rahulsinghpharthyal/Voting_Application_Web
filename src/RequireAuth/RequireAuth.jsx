import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
  setCredentials,
} from "../features/auth/authSlice";
import { useAuthenticateQuery } from "../features/authenticate/authenticateApiSlice";

const RequireAuth = ({ allowedRole }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const token = useSelector(selectCurrentToken);

  const user = useSelector(selectCurrentUser);

  console.log("this is user", user);
  console.log("this is token", token);

  // Use query hook to authenticate
  const { data, isSuccess, isError, error } = useAuthenticateQuery();
  console.log("data from requireAuth ", data);
  console.log("this is error", error);
  console.log("this is isError", isError);
  console.log("this is isSuccess", isSuccess);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isError) {
        navigate("/login", { state: { from: location }, replace: true });
      }
      if (isSuccess) {
        setLoading(false);
        dispatch(setCredentials({ accessToken: token, userData: user }));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [
    isError,
    isSuccess,
    user,
    loading,
    error,
    navigate,
    location,
    dispatch,
    token,
    data,
  ]);

  if (loading) {
    return <p>Loading , please wait...</p>;
  }

  // if (user?.role) {
  //   if (allowedRole.includes(user?.role)) {
  //     return <Outlet />; // Allow access to the protected route
  //   } else if (user?.role === "admin") {
  //     return <Navigate to="/admin" state={{ from: location }} replace />;
  //   } else if (user?.role === "voter") {
  //     return <Navigate to="/voter" state={{ from: location }} replace />;
  //   }
  // }

  // // If not logged in, redirect to login
  // if (!user?._id) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  // // If the user's role doesn't match the allowed role, redirect to unauthorized page
  // return <Navigate to="/unauth-page" />;

  return allowedRole?.includes(user?.role) ? (
    <Outlet />
  ) : user?._id ? (
    <h1>Unauthorised</h1>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
