// src/store/providers.js
"use client";
import { Provider } from "react-redux";
import { createCustomerStore, createProfessionalStore } from "@/features/store";

const customerStore = createCustomerStore();
const professionalStore = createProfessionalStore();

export function CustomerProviders({ children }) {
  return <Provider store={customerStore}>{children}</Provider>;
}

export function ProfessionalProviders({ children }) {
  return <Provider store={professionalStore}>{children}</Provider>;
}
