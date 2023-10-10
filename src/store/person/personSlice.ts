import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../types/types'

// Define a type for the slice state
interface PersonState {
  user: IUser | null,
  isAuth: boolean
}

// Define the initial state using that type
const initialState: PersonState = {
    user: null,
    isAuth: false
}

export const peronSlice = createSlice({
  name: 'person',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload
        state.isAuth = true
    },
    logout: (state) => {
        state.user = null
        state.isAuth = false
    }
  },
})

export const { login, logout } = peronSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.user

export default peronSlice.reducer