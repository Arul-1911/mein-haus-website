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
    createJobRegister: builder.mutation({
      query: (data) => ({
        url: "https://test.meinhaus.ca/api/v2/admin/job",
        method: "POST",
        body: data,
      }),
    }),
    chatWithAI: builder.mutation({
      query: ({ userId, chatId, query, images }) => {
        const formData = new FormData();
        if (userId) formData.append("user_id", userId);
        formData.append("user_type", "guest");
        if (chatId) formData.append("chat_id", chatId);
        formData.append("query", query || "");
        if (images?.length) {
          images.forEach((file) => formData.append("imgs", file));
        }

        return {
          url: `${process.env.NEXT_PUBLIC_MEINHAUS_AI_HOST}/chat-with-assistant`,
          method: "POST",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_AI_API_KEY,
            Authorization: process.env.NEXT_PUBLIC_AI_API_KEY,
          },
          body: formData,
        };
      },
    }),
    getChatHistory: builder.query({
      query: (chatId) => ({
        url: `${process.env.NEXT_PUBLIC_AI_API_KEY}/get-chat-history?chat_id=${chatId}`,
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_AI_API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useCreateServiceRequestMutation,
  useCreateContactUsMutation,
  useCreateJobRegisterMutation,
  useChatWithAIMutation,
  useGetChatHistoryQuery,
} = websiteApi;
