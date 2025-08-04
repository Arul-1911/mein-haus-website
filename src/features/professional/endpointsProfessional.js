import { professionalApi } from "./apiProfessional";

export const professionalEndpoints = professionalApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/supplier/profile",
      providesTags: ["Profile"],
    }),
    getOrders: builder.query({
      query: () => "/supplier/orders",
      providesTags: ["Orders"],
    }),
    professionalLogin: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          document.cookie = `professional_token=${data.token}; path=/`;
        } catch {}
      },
    }),
    professionalLogout: builder.mutation({
      queryFn: async () => {
        document.cookie =
          "professional_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        return { data: {} };
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetOrdersQuery,
  useProfessionalLoginMutation,
  useProfessionalLogoutMutation,
} = professionalEndpoints;
