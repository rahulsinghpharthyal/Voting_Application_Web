import { apiSlice } from "../../app/api/apiSlice";

const candidateApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCandidate: builder.query({
            query: () => ({
                url: '/api/v1/candidate/get-candidate',
                method: 'GET',
            }),
            providesTags: ['Candidate'],
        }),
        createCandidate: builder.mutation({ 
            query: (newCandidate) => ({ 
                url: '/api/v1/candidate/create-candidate', 
                method: 'POST', 
                body: newCandidate, 
            }),
            invalidatesTags: ['Candidate'],
        }),
        editCandidate: builder.mutation({
            query: ({candidateId, ...updateCandidate}) => ({
                url: `/api/v1/candidate/update-candidate/${candidateId}`,
                method: 'PATCH',
                body: updateCandidate,
            }),
            invalidatesTags: ['Candidate'],
        }),
    })
});

export const {
    useGetCandidateQuery, useCreateCandidateMutation, useEditCandidateMutation
} = candidateApiSlice