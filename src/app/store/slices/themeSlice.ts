import { createSlice } from "@reduxjs/toolkit"
import { ReduxThemeState } from "../../enities/interfaces/redux-state"

const initialState: ReduxThemeState = {
  theme: 'Dark',
}

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      return void(state.theme = action.payload)
    }
  }
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions