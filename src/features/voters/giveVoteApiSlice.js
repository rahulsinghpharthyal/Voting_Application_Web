import { apiSlice } from "../../app/api/apiSlice";

const giveVote = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    giveVote: builder.mutation({
      query: ({ userId, candidateId }) => ({
        url: `api/v1/create-vote/${userId}`,
        method: "POST",
        body: {candidateId},
      }),
    }),
  }),
});

export const { useGiveVoteMutation } = giveVote;
