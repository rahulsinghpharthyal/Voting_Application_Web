import { apiSlice } from "../../app/api/apiSlice";

const forgotPasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendLink: builder.mutation({
      query: (email) => ({
        url: "/api/v1/send-link",
        method: "POST",
        body: email ,
      }),
    }),
    
    resetPassword: builder.mutation({
        query: (formData) => ({
            url: "/api/v1/reset-password",
            method: "POST",
            body: {...formData}
        })
    })
  }),
});

export const { useSendLinkMutation, useResetPasswordMutation } = forgotPasswordApiSlice;
