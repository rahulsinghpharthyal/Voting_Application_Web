import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

// const BASE_URL = "https://voting-application-server.onrender.com";
const BASE_URL = "http://localhost:7000"

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    console.log('this is getState', getState())
    const token = getState()?.auth?.token;
    console.log('tis is token', token)
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      console.log("Authorization header set:", `Bearer ${token}`);
  } else {
      console.log("No token found in state");
  }
    return headers;
  },
});

// this is the intercepters

const baseQueryWithReauth = async (args, api, extraOptions) => {
    console.log(args, api, extraOptions)
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    // send the refresh token to get new access token;
    const refreshResult = await baseQuery(
      {url: "/api/v1/refresh-token"},
      api,
      extraOptions
    );
    console.log('this is refresh result after refresh the page', refreshResult);
    if (refreshResult?.data) {
      // const newToken = refreshResult.data;
      const { accessToken, userData } = refreshResult?.data;
      // const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({accessToken: accessToken, userData: userData}));
      //retry the original query with new access Token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
})