import Theme from '@layout/types/Theme'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type LayoutState = {
  theme: Theme
}

const initialState: LayoutState = {
  theme: 'auto',
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<LayoutState['theme']>) {
      state.theme = payload
    },
  },
})

export const { setTheme } = layoutSlice.actions

export const layoutReducer = layoutSlice.reducer
