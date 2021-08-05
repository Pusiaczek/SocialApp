import React, { useReducer } from "react";
import axios from "axios";
import authReducer from '../Reducers/authReducer';


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (username, password) => { }
});



let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}




export function AuthContextProvider(props) {

    const [loginAuth, dispatchLogin] = useReducer(authReducer, {
        isLoggedIn: false,
    })

    const loginHandler = async (loginData) => {
        const user = {
            ...loginData,
            ttl: 3600
        }

        try {
            const response = await axios.post(
                'https://akademia108.pl/api/social-app/user/login',
                JSON.stringify(user),
                axiosConfig,
            )

            if (response.data.jwt_token) {
                dispatchLogin({ type: 'login', token: response.data.jwt_token })
            } else {
                throw new Error('brakuja tokena');
            }

        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        < AuthContext.Provider value={{
            isLoggedIn: loginAuth.isLoggedIn,
            onLogout: () => { dispatchLogin({ type: 'logout' }) },
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider >
    )
}






export default AuthContext;


