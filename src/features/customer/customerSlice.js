import { createSlice } from "@reduxjs/toolkit";

const initialState = { profile: null };

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerProfile: (state, action) => {
      state.profile = action.payload;
    },
    resetCustomerState: () => initialState,
  },
});

export const { setCustomerProfile, resetCustomerState } = customerSlice.actions;
export default customerSlice.reducer;
