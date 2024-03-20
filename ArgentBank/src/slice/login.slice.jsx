// slice initialstate, reducer...

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
dataResponse:{
    token:localStorage.getItem("token")
},
isLoggedIn:false,
errorFetch: null,
// isLoading:false;pour le spinner si besoin
}
// dans les reducers on y met : log , pour stocker dans localStorage, se delogger, gestion erreur, reset erreur; spinner ?

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers: {
        postLogin(state,action){
            state.dataResponse = action.payload
            // state.IsLoading = false spinner
            localStorage.setItem('token', state.dataResponse.token)

            if(state.dataResponse.token) {
                state.isLoggedIn = true
            }
        },
        errorFetch(state,action){
           state.errorFetch = action.payload; 
        },
        logout(state) {
            state.dataResponse = {
                token:null
            };
            localStorage.clear();
            state.isLoggedIn = false;
        }
    }
})

// export des actions /reducers
export const loginActions = loginSlice.actions

// export du slice
export default loginSlice