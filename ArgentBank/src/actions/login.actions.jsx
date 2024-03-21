//  actions async (redux thunk)

import { loginActions } from "../slice/login.slice";

export const postFetchLoginSuccess = (credential) => {
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
                throw new Error ("pb pour send donnée vers le serveur")
            }
            return dataResponse;
        };
        try{
            const data = await fetchPostData()
            // console.log(data.body);
            dispatch(loginActions.postLogin(data.body))
        }
        catch(error) {
        console.log('-----> dans le catch error fetchPost Data');
        console.log(error);
}
    }
}