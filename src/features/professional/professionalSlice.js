import { createSlice } from "@reduxjs/toolkit";

const initialState = { profile: null };

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setProfessionalProfile: (state, action) => {
      state.profile = action.payload;
    },
    resetProfessionalState: () => initialState,
  },
});

export const { setProfessionalProfile, resetProfessionalState } =
  professionalSlice.actions;
export default professionalSlice.reducer;
