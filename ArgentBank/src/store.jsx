import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login.slice";
import userDataSlice from "./slice/user.slice";


export const store = configureStore({
    reducer: {
      login:loginSlice.reducer,
      userData:userDataSlice.reducer
    },
    devTools:true,
  })