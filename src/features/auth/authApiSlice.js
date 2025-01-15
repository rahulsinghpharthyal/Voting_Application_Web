import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/create-user",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/login-user",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/api/v1/logout-user",
        method: "POST",
      }),
    }),
    getVoter: builder.query({
      query: () => ({
        url: "/api/v1/all-voter",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetVoterQuery,
  useLoginMutation,
  useLogOutMutation,
  useRegisterUserMutation,
} = authApiSlice;
