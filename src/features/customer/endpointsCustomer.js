import { customerApi } from "./apiCustomer";

export const customerEndpoints = customerApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerProfile: builder.query({
      query: () => "/customer/profile",
      providesTags: ["CustomerProfile"],
    }),
    getCustomerOrders: builder.query({
      query: () => "/customer/orders",
      providesTags: ["CustomerOrders"],
    }),
    customerLogin: builder.mutation({
      query: (body) => ({
        url: "/customer/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          document.cookie = `customer_token=${data.token}; path=/`;
        } catch {}
      },
    }),
    customerLogout: builder.mutation({
      queryFn: async () => {
        document.cookie =
          "customer_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        return { data: {} };
      },
    }),
  }),
});

export const {
  useGetCustomerProfileQuery,
  useGetCustomerOrdersQuery,
  useCustomerLoginMutation,
  useCustomerLogoutMutation,
} = customerEndpoints;
