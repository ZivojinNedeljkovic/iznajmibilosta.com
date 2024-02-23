import UserData from '@auth/types/user'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UserData = {
  uid: '',
  emailVerified: false,
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserData>) {
      return payload
    },
  },
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer
