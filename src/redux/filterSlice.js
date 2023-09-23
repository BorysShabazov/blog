import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filteredValue: (_, { payload }) => {
      return {
        filter: payload,
      };
    },
  },
});

export const { filteredValue } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors

export const getFilter = (state) => state.filter.filter;
