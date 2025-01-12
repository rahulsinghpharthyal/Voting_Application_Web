import { apiSlice } from "../../app/api/apiSlice";

const voterApiSlice = apiSlice.injectEndpoints({
    endpoints: builer => ({
        registerForVoter: builer.mutation({
            query: ({id, data}) => ({
                url: `/api/v1/register/${id}`,
                method: 'POST',
                body: data, 
            })
        }),
        totalVoter: builer.query({
            query: () => ({
                url: '/api/v1/allVoter',
                method: 'GET'
            })
        })
    })
})

export const {
    useRegisterForVoterMutation, useTotalVoterQuery
} = voterApiSlice;