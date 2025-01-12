import { apiSlice } from "../../app/api/apiSlice";

const stateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStates: builder.query({
      query: () => ({
        url: "/api/v1/states",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatesQuery } = stateApiSlice;
