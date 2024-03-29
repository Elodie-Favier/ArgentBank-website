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
        throw new Error('pb pour obtenir les données sur le serveur')
    }
    return dataResponse
}
try {
    const userData = await fetchPostUserData()
    
    
    dispatch(userDataActions.postUserData(userData.body))
} catch(error){
    
}
    }

}

export const putNewUserName = (token, newUserName ) => {
    return async (dispatch) => {
        const fetchPutNewUserName = async () => {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify(newUserName)
            });
            const dataRes = await response.json();
            if(!response.ok){
                throw new Error('pb pour envoyer le nouveau pseudo au serveur')
            }
            return dataRes
        }
        try {
            const dataUserName = await fetchPutNewUserName();
            
            dispatch(userDataActions.putNewUserName(dataUserName.body));

        } catch (error) {
            console.log('error new user Name request');
            console.log(error);
        }
    }

}