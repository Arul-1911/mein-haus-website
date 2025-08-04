import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const professionalApi = createApi({
  reducerPath: "professionalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mein-haus-api.onrender.com",
    prepareHeaders: (headers) => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("professional_token="))
        ?.split("=")[1];

      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Profile", "BusinessAvailability", "Coupons", "Store", "Orders"],
  endpoints: () => ({}),
});
