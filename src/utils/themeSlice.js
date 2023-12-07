import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    lightTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
      console.log(state.lightTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
