import { useState } from 'react';

export default function useToken(){
    const getToken = () => {
        let tokenString = sessionStorage.getItem('token');
        if (!tokenString){
            tokenString = localStorage.getItem('token');
        }
        const userToken = JSON.parse(tokenString);
        return userToken ? userToken:null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        // if (remember){
        //     localStorage.setItem('token', JSON.stringify(userToken));
        // }
        setToken(userToken.token);
    }

    return{
        setToken: saveToken,
        token
    }
}