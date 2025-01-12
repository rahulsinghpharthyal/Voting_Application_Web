import { apiSlice } from "../../app/api/apiSlice";

const getCandidateByUserState = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCandidateByUserState: builder.query({
      query: (id) => ({
        url: `api/v1/candidate/getCandiateByUserState/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCandidateByUserStateQuery } = getCandidateByUserState;
