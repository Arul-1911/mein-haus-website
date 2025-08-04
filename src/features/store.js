import { configureStore } from "@reduxjs/toolkit";
import { customerApi } from "../services/apiCustomer";
import { professionalApi } from "../services/apiProfessional";

// ===== CUSTOMER STORE =====
export const createCustomerStore = () => {
  return configureStore({
    reducer: {
      [customerApi.reducerPath]: customerApi.reducer,
      //  customer slices here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(customerApi.middleware),
  });
};

// ===== PROFESSIONAL STORE =====
export const createProfessionalStore = () => {
  return configureStore({
    reducer: {
      [professionalApi.reducerPath]: professionalApi.reducer,
      //  professional slices here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(professionalApi.middleware),
  });
};
