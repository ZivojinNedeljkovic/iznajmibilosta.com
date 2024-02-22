import User from '@auth/types/user'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: User = {
  uid: '',
  emailVerified: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<User>) {
      return payload
    },
  },
})

export const { setUser } = userSlice.actions
