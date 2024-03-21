import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDataResponse:{
        createdAt:null,
        email:null,
        firstName:null,
        id:null,
        lastName:null,
        updateAt:null,
        userName:null,
    }, 
    modification: false,
}

const userDataSlice = createSlice({
    name:'userData',
    initialState,
    reducers:{
        postUserData(state, action){
            state.userDataResponse = action.payload
        }
      
        // afficher les données 
    }
})

//  export des actions
export const userDataActions = userDataSlice.actions
// export du slice

export default userDataSlice