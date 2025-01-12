import { apiSlice } from "../../app/api/apiSlice";

const totalVotes = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    totalVotes: builder.query({
      query: () => ({
        url: "/api/v1/totalVotes",
        method: "GET",
      }),
    }),
  }),
});

export const { useTotalVotesQuery } = totalVotes;
