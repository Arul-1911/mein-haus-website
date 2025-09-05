import { configureStore } from "@reduxjs/toolkit";
import { customerApi } from "./customer/apiCustomer";
import { professionalApi } from "./professional/apiProfessional";
import { websiteApi } from "./website/apiWebsite";

// ===== WEBSITE STORE =====
export const createWebsiteStore = () => {
  return configureStore({
    reducer: {
      [websiteApi.reducerPath]: websiteApi.reducer,
      //  website slices here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(websiteApi.middleware),
  });
};

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
