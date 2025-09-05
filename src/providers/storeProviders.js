"use client";
import { Provider } from "react-redux";
import {
  createCustomerStore,
  createProfessionalStore,
  createWebsiteStore,
} from "@/features/store";

const websiteStore = createWebsiteStore();
const customerStore = createCustomerStore();
const professionalStore = createProfessionalStore();

export function WebsiteProviders({ children }) {
  return <Provider store={websiteStore}>{children}</Provider>;
}

export function CustomerProviders({ children }) {
  return <Provider store={customerStore}>{children}</Provider>;
}

export function ProfessionalProviders({ children }) {
  return <Provider store={professionalStore}>{children}</Provider>;
}
