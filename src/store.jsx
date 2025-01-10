import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Redux/pasteSlice.jsx'


export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})