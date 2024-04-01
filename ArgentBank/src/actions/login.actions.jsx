//  actions async (redux thunk)

import { loginActions } from "../slice/login.slice";

export const postFetchLogin = (credential, checkbox) => {
    return async (dispatch) => {
        const fetchPostData = async () =>{
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential)
            });
            const dataResponse = await response.json()

            if(!response.ok){
                dispatch(loginActions.errorFetch(dataResponse))
                
                throw new Error ("Impossible d'envoyer les données vers le serveur")
            }
            return dataResponse;
        };
        try{
            const data = await fetchPostData()
            // console.log(data.body);
            const token = data.body.token
            if(checkbox){
                localStorage.setItem("token", token)
            } else {
                sessionStorage.setItem("token", token)
            } 
            dispatch(loginActions.postLogin(data.body))
            
        }
        catch(error) {
}
    }
}