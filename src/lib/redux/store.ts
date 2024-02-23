import { userReducer } from '@auth/store/user-slice'
import { securityReducer } from '@features/security/store/security-slice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      security: securityReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
