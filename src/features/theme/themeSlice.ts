import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Theme } from "../../types/types";

const initialState: Theme = {
  value: "light"
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme["value"]>) => {
      state.value = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
