// slice initialstate, reducer...

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
dataResponse:{
    token:localStorage.getItem("token")
},
isLoggedIn:false,
errorFetch: false,
checkbox:false,
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers: {
        postLogin(state,action){
            state.dataResponse = action.payload
            // localStorage.setItem('token', state.dataResponse.token)

            if(state.dataResponse.token) {
                state.isLoggedIn = true
            }
        },
        errorFetch(state,action){
            state.dataResponse = action.payload; 
            if(state.dataResponse.status === 400 )
            {state.errorFetch = true}
        },
        logout(state) {
            state.dataResponse = {
                token:null
            };
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            state.isLoggedIn = false;
        }
    }
})

// export des actions /reducers
export const loginActions = loginSlice.actions

// export du slice
export default loginSlice