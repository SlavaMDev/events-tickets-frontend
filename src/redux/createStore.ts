import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/reducers/authSlice";
import ticketsReducer from "../features/reducers/ticketsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketsReducer,
  },
})