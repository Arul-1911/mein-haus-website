import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const websiteApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL, // API URL
  }),
  endpoints: (builder) => ({
    createServiceRequest: builder.mutation({
      query: (data) => ({
        url: "/comp-services-req",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }),
    }),
    createContactUs: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }),
    }),
  }),
});

export const { useCreateServiceRequestMutation, useCreateContactUsMutation } =
  websiteApi;
