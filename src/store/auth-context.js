import React, { useEffect, useReducer, useState } from "react";
import loginHandler from "../Queries/loginHandler";
import logoutHandler from "../Queries/logoutHandler";

import authReducer from '../Reducers/authReducer';
import getDefaultPosts from '../Queries/getDefaultPosts';
import likeItClickHandler from "../Queries/likeItClickHandler";
import dislikeClickHandler from "../Queries/dislikeClickHandler";
import getRecommendSubs from "../Queries/getRecommendSubs";
import subscribeHandler from "../Queries/subscribeHandler";
// import getProfileData from "../Queries/getProfileData";


const AuthContext = React.createContext({
    isLoggedIn: false,
    userId: -100,
    getPostsData: [],
    getRecommendSubsData: [],
    onLogout: () => { },
    onLogin: ({ username, password }) => { },
    onCheckLogin: () => { },
    onRefreshPosts: () => { },
    onLikeItClick: (post_id) => { },
    onDislikeClick: (post_id) => { },
    onRefreshRecommendSubs: () => { },
    onSubscribe: (post_id) => { },
    

    // getUserInfo: {},

});



export function AuthContextProvider(props) {
    const [loginAuth, dispatchLogin] = useReducer(authReducer, {
        isLoggedIn: false,
        token: '',
        userId: '',
    })

    const [postsData, setPostsData] = useState([])
    const [reccomendSubsData, setReccomendSubsData] = useState([])

    // const postsDataRef = useRef(postsData);

    const refreshPostsHandler = () => {
        // console.log("NOT useEffect: RUNNING");
        getDefaultPosts(localStorage.getItem('token')).then(res => {
            // getDefaultPosts(loginAuth.token).then(res => {
            setPostsData(res.data)
        })
    }

    const refreshRecommendSubsHandler = () => {
        if (loginAuth.isLoggedIn) {
            getRecommendSubs(localStorage.getItem('token')).then(res => {
                setReccomendSubsData(res.data)
            })
        }else{
            setReccomendSubsData([])
        }
    }

    useEffect(() => {
        // console.log("useEffect provider: RUNNING");
        refreshPostsHandler();
        refreshRecommendSubsHandler()

    }, [loginAuth.isLoggedIn])

    return (
        < AuthContext.Provider value={{
            isLoggedIn: loginAuth.isLoggedIn,
            userId: loginAuth.userId,
            getPostsData: postsData,
            getRecommendSubsData: reccomendSubsData,
            // getUserInfo: userInfo,
            onLogout: () => { logoutHandler(loginAuth.token, dispatchLogin) },
            onLogin: (data) => { loginHandler(data, dispatchLogin) },
            onCheckLogin: (data) => { dispatchLogin({ type: 'CHECK_LOGIN', data }) },
            onRefreshPosts: refreshPostsHandler,
            onLikeItClick: (id) => { likeItClickHandler(id, loginAuth.token, refreshPostsHandler) },
            onDislikeClick: (id) => { dislikeClickHandler(id, loginAuth.token, refreshPostsHandler) },
            onRefreshRecommendSubs: refreshRecommendSubsHandler,
            onSubscribe: (id) => { subscribeHandler(id, loginAuth.token, refreshRecommendSubsHandler) },

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;




// useEffect(() => {
    //     if (loginAuth.isLoggedIn) {
    //         getProfileData(loginAuth.token).then(res => {
    //             // console.log(res.data);
    //             setUserInfo(res.data)
    //         })
    //     }
    // }, [loginAuth])

    // const loadProfileDataHandler = (token) => {
    //     getProfileData(token).then(res => {
    //         // console.log(res.data);
    //         setUserInfo(res.data)

    //         // console.log(res.data);
    //         // avatar_url: "https://akademia108.pl/api/social-app/img/avatar1.png"
    //         // created_at: "2019-08-18T01:19:27.000000Z"
    //         // email: "adam@gmail.com"
    //         // id: 1
    //         // updated_at: null
    //         // username: "adam"
    //     })
    // }