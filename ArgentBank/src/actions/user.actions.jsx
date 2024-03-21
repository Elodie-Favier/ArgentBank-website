// actions async
// pour aller chercher les données user

import { userDataActions } from "../slice/user.slice"


export const postUserData = (token) => {
    return async (dispatch) => {
const fetchPostUserData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    const dataResponse = await response.json()
    if(!response.ok){
        throw new Error('pb pour recupérer les données sur le serveur')
    }
    return dataResponse
}
try {
    const userData = await fetchPostUserData()
    console.log(userData.body);
    
    dispatch(userDataActions.postUserData(userData.body))
} catch(error){
    console.log("error post");
    console.log(error);
}
    }

}